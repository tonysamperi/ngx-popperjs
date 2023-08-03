// tslint:disable:no-input-rename
import {
    ChangeDetectorRef,
    ComponentRef,
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    ViewContainerRef
} from "@angular/core";
import {NgxPopperjsContentComponent} from "../../components/ngx-popperjs-content/ngx-popperjs-content.component";
import {NgxPopperjsOptions} from "../../models/ngx-popperjs-options.model";
import {NgxPopperjsPlacements} from "../../models/ngx-popperjs-placements.model";
import {NgxPopperjsTriggers} from "../../models/ngx-popperjs-triggers.model";
import {NGX_POPPERJS_DEFAULTS} from "../../models/ngx-popperjs-defaults.model";
import {NgxPopperjsUtils} from "../../models/ngx-popperjs-utils.class";
//
import {Modifier} from "@popperjs/core";
//
import {fromEvent, Subject, takeUntil, timer} from "rxjs";

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: "[popper]",
    exportAs: "popper"
})
export class NgxPopperjsDirective implements OnInit, OnDestroy {

    static baseOptions: NgxPopperjsOptions = {
        showDelay: 0,
        placement: NgxPopperjsPlacements.AUTO,
        hideOnClickOutside: true,
        hideOnMouseLeave: false,
        hideOnScroll: false,
        appendTo: undefined,
        ariaRole: "popper",
        ariaDescribe: "",
        styles: {},
        trigger: NgxPopperjsTriggers.click
    };

    @Input("popperApplyClass")
    set applyClass(newValue: string) {
        if (newValue === this._applyClass) {
            return;
        }
        this._applyClass = newValue;
        this._checkExisting("applyClass", newValue);
    }

    get applyClass(): string {
        return this._applyClass;
    }

    @Input("popperAriaDescribeBy")
    ariaDescribe: string | void;

    @Input("popperAriaRole")
    ariaRole: string | void;

    @Input("popperBoundaries")
    boundariesElement: string;

    @Input("popperCloseOnClickOutside")
    closeOnClickOutside: boolean;

    @Input("popper")
    set content(newValue: string | NgxPopperjsContentComponent) {
        if (newValue === this._content) {

            return;
        }
        this._content = newValue;
        if (this._popperContent) {
            if (typeof newValue === "string") {
                this._popperContent.text = newValue;
            }
            else {
                this._popperContent = newValue;
            }
        }
    }

    get content(): string | NgxPopperjsContentComponent {
        return this._content;
    }


    @Input("popperDisableAnimation")
    disableAnimation: boolean;

    @Input("popperDisabled")
    set disabled(newValue: boolean) {
        if (newValue === this._disabled) {
            return;
        }
        this._disabled = !!newValue;
        if (this._shown) {
            this.hide();
        }
    }

    get disabled(): boolean {
        return this._disabled;
    }

    @Input("popperDisableStyle")
    disableStyle: boolean;

    @Input("popperHideOnClickOutside")
    hideOnClickOutside: boolean | void;

    @Input("popperHideOnMouseLeave")
    hideOnMouseLeave: boolean | void;

    @Input("popperHideOnScroll")
    hideOnScroll: boolean | void;

    @Input("popperTimeout")
    hideTimeout: number = 0;

    @Input("popperPlacement")
    set placement(newValue: NgxPopperjsPlacements) {
        this._popperPlacement = newValue;
        this._checkExisting("placement", newValue);
    }

    get placement(): NgxPopperjsPlacements {

        return this._popperPlacement;
    }

    @Input()
    popperAppendTo: string;

    @Input()
    set popperApplyArrowClass(newValue: string) {
        if (newValue === this._popperApplyArrowClass) {
            return;
        }
        this._popperApplyArrowClass = newValue;
        if (this._popperContent) {
            this._popperContent.popperOptions.applyArrowClass = newValue;
            if (!this._shown) {
                return;
            }
            this._popperContent.popperInstance.setOptions(this._popperContent.popperOptions);
        }
    }

    get popperApplyArrowClass(): string {
        return this._popperApplyArrowClass;
    }

    @Input()
    popperModifiers: Partial<Modifier<any, any>>[];

    @Output()
    popperOnHidden: EventEmitter<NgxPopperjsDirective> = new EventEmitter<NgxPopperjsDirective>();

    @Output()
    popperOnShown: EventEmitter<NgxPopperjsDirective> = new EventEmitter<NgxPopperjsDirective>();

    @Output()
    popperOnUpdate: EventEmitter<any> = new EventEmitter<any>();

    @Input("popperPositionFixed")
    positionFixed: boolean;

    @Input("popperPreventOverflow")
    set preventOverflow(newValue: boolean) {
        this._popperPreventOverflow = NgxPopperjsUtils.coerceBooleanProperty(newValue);
        this._checkExisting("preventOverflow", this._popperPreventOverflow);
    }

    get preventOverflow(): boolean {
        return this._popperPreventOverflow;
    }

    @Input("popperDelay")
    showDelay: number | undefined;

    @Input("popperShowOnStart")
    showOnStart: boolean;

    @Input("popperTrigger")
    showTrigger: NgxPopperjsTriggers | undefined;

    @Input("popperStyles")
    styles: object;

    @Input("popperTarget")
    targetElement: HTMLElement;

    @Input("popperTimeoutAfterShow")
    timeoutAfterShow: number = 0;

    protected _applyClass: string;
    protected _content: string | NgxPopperjsContentComponent;
    protected _destroy$: Subject<void> = new Subject<void>();
    protected _disabled: boolean;
    protected _globalEventListenersCtrl$: Subject<void> = new Subject<void>();
    protected _popperApplyArrowClass: string;
    protected _popperContent: NgxPopperjsContentComponent;
    protected _popperContentClass = NgxPopperjsContentComponent;
    protected _popperContentRef: ComponentRef<NgxPopperjsContentComponent>;
    protected _popperPlacement: NgxPopperjsPlacements;
    protected _popperPreventOverflow: boolean;
    protected _scheduledHideTimeoutCtrl$: Subject<void> = new Subject<void>();
    protected _scheduledShowTimeoutCtrl$: Subject<void> = new Subject<void>();
    protected _shown: boolean = false;

    constructor(protected _changeDetectorRef: ChangeDetectorRef,
                protected _elementRef: ElementRef,
                protected _vcr: ViewContainerRef,
                @Inject(NGX_POPPERJS_DEFAULTS) protected _popperDefaults: NgxPopperjsOptions = {}) {
        NgxPopperjsDirective.baseOptions = {...NgxPopperjsDirective.baseOptions, ...this._popperDefaults};
    }

    static assignDefined(target: any, ...sources: any[]) {
        for (const source of sources) {
            for (const key of Object.keys(source)) {
                const val = source[key];
                if (val !== undefined) {
                    target[key] = val;
                }
            }
        }

        return target;
    }

    applyTriggerListeners() {
        switch (this.showTrigger) {
            case NgxPopperjsTriggers.click:
                this._addListener("click", this.toggle.bind(this));
                break;
            case NgxPopperjsTriggers.mousedown:
                this._addListener("mousedown", this.toggle.bind(this));
                break;
            case NgxPopperjsTriggers.hover:
                this._addListener("mouseenter", this.scheduledShow.bind(this, this.showDelay));
                ["touchend", "touchcancel", "mouseleave"].forEach((eventName) => {
                    this._addListener(eventName, this.scheduledHide.bind(this, null, this.hideTimeout));
                });
                break;
        }
        if (this.showTrigger !== NgxPopperjsTriggers.hover && this.hideOnMouseLeave) {
            ["touchend", "touchcancel", "mouseleave"].forEach((eventName) => {
                this._addListener(eventName, this.scheduledHide.bind(this, null, this.hideTimeout));
            });
        }
    }

    getRefElement() {
        return this.targetElement || this._elementRef.nativeElement;
    }

    hide() {
        if (this.disabled) {
            return;
        }
        if (!this._shown) {
            this._scheduledShowTimeoutCtrl$.next();

            return;
        }

        this._shown = false;
        if (this._popperContentRef) {
            this._popperContentRef.instance.hide();
        }
        else {
            this._popperContent.hide();
        }
        this.popperOnHidden.emit(this);
        this._globalEventListenersCtrl$.next();
    }

    hideOnClickOutsideHandler($event: MouseEvent): void {
        if (this.disabled || !this.hideOnClickOutside || $event.target === this._popperContent.elRef.nativeElement ||
            this._popperContent.elRef.nativeElement.contains($event.target)) {
            return;
        }
        this.scheduledHide($event, this.hideTimeout);
    }

    hideOnScrollHandler($event: MouseEvent): void {
        if (this.disabled || !this.hideOnScroll) {
            return;
        }
        this.scheduledHide($event, this.hideTimeout);
    }

    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
        this._popperContent && this._popperContent.clean();
    }

    ngOnInit() {
        // Support legacy prop
        this.hideOnClickOutside = typeof this.hideOnClickOutside === "undefined" ?
            this.closeOnClickOutside : this.hideOnClickOutside;

        if (typeof this.content === "string") {
            this._popperContent = this._constructContent();
            this._popperContent.text = this.content;
        }
        else if (typeof this.content === typeof void 0) {
            this._popperContent = this._constructContent();
            this._popperContent.text = "";
        }
        else {
            this._popperContent = this.content;
        }
        const popperRef = this._popperContent;
        popperRef.referenceObject = this.getRefElement();
        this._setContentProperties(popperRef);
        this._setDefaults();
        this.applyTriggerListeners();
        if (this.showOnStart) {
            this.scheduledShow();
        }
    }

    scheduledHide($event: any = null, delay: number = this.hideTimeout) {
        if (this.disabled) {
            return;
        }
        this._scheduledShowTimeoutCtrl$.next();
        timer(delay)
            .pipe(takeUntil(this._scheduledHideTimeoutCtrl$), takeUntil(this._destroy$))
            .subscribe({
                next: () => {
                    // TODO: check
                    const toElement = $event ? $event.toElement : null;
                    const popperContentView = this._popperContent.popperViewRef ? this._popperContent.popperViewRef.nativeElement : false;
                    if (!popperContentView ||
                        popperContentView === toElement ||
                        popperContentView.contains(toElement) ||
                        (this.content && (this.content as NgxPopperjsContentComponent).isMouseOver)) {

                        return;
                    }
                    this.hide();
                    this._applyChanges();
                }
            });
    }

    scheduledShow(delay: number = this.showDelay) {
        if (this.disabled) {
            return;
        }
        this._scheduledHideTimeoutCtrl$.next();
        timer(delay)
            .pipe(takeUntil(this._scheduledShowTimeoutCtrl$), takeUntil(this._destroy$))
            .subscribe({
                next: () => {
                    this.show();
                    this._applyChanges();
                }
            });
    }

    show() {
        if (this._shown) {
            this._scheduledHideTimeoutCtrl$.next();

            return;
        }

        this._shown = true;
        const popperRef = this._popperContent;
        const element = this.getRefElement();
        if (popperRef.referenceObject !== element) {
            popperRef.referenceObject = element;
        }
        this._setContentProperties(popperRef);
        popperRef.show();
        this.popperOnShown.emit(this);
        if (this.timeoutAfterShow > 0) {
            this.scheduledHide(null, this.timeoutAfterShow);
        }
        fromEvent(document, "click")
            .pipe(takeUntil(this._globalEventListenersCtrl$), takeUntil(this._destroy$))
            .subscribe({
                next: (e: MouseEvent) => this.hideOnClickOutsideHandler(e)
            });
        fromEvent(this._getScrollParent(this.getRefElement()), "scroll")
            .pipe(takeUntil(this._globalEventListenersCtrl$), takeUntil(this._destroy$))
            .subscribe({
                next: (e: MouseEvent) => {
                    this.hideOnScrollHandler(e);
                }
            });
    }

    toggle() {
        if (this.disabled) {
            return;
        }
        this._shown ? this.scheduledHide(null, this.hideTimeout) : this.scheduledShow();
    }

    protected _addListener(eventName: string, cb: () => void): void {
        fromEvent(this._elementRef.nativeElement, eventName)
            .pipe(takeUntil(this._destroy$))
            .subscribe({
                next: cb
            });
    }

    protected _applyChanges() {
        this._changeDetectorRef.markForCheck();
        this._changeDetectorRef.detectChanges();
    }

    protected _checkExisting(key: string, newValue: string | number | boolean | NgxPopperjsPlacements): void {
        if (this._popperContent) {
            this._popperContent.popperOptions[key] = newValue;
            if (!this._shown) {
                return;
            }
            this._popperContent.popperInstance.setOptions(this._popperContent.popperOptions);
        }
    }

    protected _constructContent(): NgxPopperjsContentComponent {
        this._popperContentRef = this._vcr.createComponent(this._popperContentClass);

        return this._popperContentRef.instance as NgxPopperjsContentComponent;
    }

    protected _getScrollParent(node) {
        const isElement = node instanceof HTMLElement;
        const overflowY = isElement && window.getComputedStyle(node).overflowY;
        const isScrollable = overflowY !== "visible" && overflowY !== "hidden";

        if (!node) {
            return null;
        }
        else if (isScrollable && node.scrollHeight > node.clientHeight) {
            return node;
        }

        return this._getScrollParent(node.parentNode) || document;
    }

    protected _onPopperUpdate(event) {
        this.popperOnUpdate.emit(event);
    }

    protected _setContentProperties(popperRef: NgxPopperjsContentComponent) {
        popperRef.popperOptions = NgxPopperjsDirective.assignDefined(popperRef.popperOptions, NgxPopperjsDirective.baseOptions, {
            showDelay: this.showDelay,
            disableAnimation: this.disableAnimation,
            disableDefaultStyling: this.disableStyle,
            placement: this.placement,
            boundariesElement: this.boundariesElement,
            trigger: this.showTrigger,
            positionFixed: this.positionFixed,
            popperModifiers: this.popperModifiers,
            ariaDescribe: this.ariaDescribe,
            ariaRole: this.ariaRole,
            applyClass: this.applyClass,
            applyArrowClass: this.popperApplyArrowClass,
            hideOnMouseLeave: this.hideOnMouseLeave,
            styles: this.styles,
            appendTo: this.popperAppendTo,
            preventOverflow: this.preventOverflow,
        });
        popperRef.onUpdate = this._onPopperUpdate.bind(this);
        popperRef.onHidden
            .pipe(takeUntil(this._destroy$))
            .subscribe(this.hide.bind(this));
    }

    protected _setDefaults() {
        ["showDelay", "hideOnScroll", "hideOnMouseLeave", "hideOnClickOutside", "ariaRole", "ariaDescribe"].forEach((key) => {
            this[key] = this[key] === void 0 ? NgxPopperjsDirective.baseOptions[key] : this[key];
        });
        this.showTrigger = this.showTrigger || NgxPopperjsDirective.baseOptions.trigger;
        this.styles = this.styles === void 0 ? {...NgxPopperjsDirective.baseOptions.styles} : this.styles;
    }

}
