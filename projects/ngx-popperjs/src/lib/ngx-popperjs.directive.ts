// tslint:disable:no-input-rename
import {
    ChangeDetectorRef,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    SimpleChange,
    ViewContainerRef
} from "@angular/core";
import {NgxPopperjsContentComponent} from "./ngx-popperjs-content/ngx-popper-content.component";
import {NgxPopperjsOptions} from "./models/ngx-popperjs-options.model";
import {NgxPopperjsPlacements} from "./models/ngx-popperjs-placements.model";
import {NgxPopperjsTriggers} from "./models/ngx-popperjs-triggers.model";

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: "[popper]",
    exportAs: "popper"
})
export class NgxPopperjsDirective implements OnInit, OnDestroy, OnChanges {

    public static baseOptions: NgxPopperjsOptions = {
        showDelay: 0,
        placement: NgxPopperjsPlacements.AUTO,
        hideOnClickOutside: true,
        hideOnMouseLeave: false,
        hideOnScroll: false,
        showTrigger: NgxPopperjsTriggers.HOVER,
        appendTo: void 0,
        ariaRole: "popper",
        ariaDescribe: "",
        styles: {}
    } as NgxPopperjsOptions;

    @Input("popperApplyClass")
    applyClass: string;

    @Input("popperAriaDescribeBy")
    ariaDescribe: string | void;

    @Input("popperAriaRole")
    ariaRole: string | void;

    @Input("popperBoundaries")
    boundariesElement: string;

    @Input("popperCloseOnClickOutside")
    closeOnClickOutside: boolean;

    @Input("popper")
    content: string | NgxPopperjsContentComponent;

    @Input("popperDisableAnimation")
    disableAnimation: boolean;

    @Input("popperDisabled")
    disabled: boolean;

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
        this._popperContent && (this._popperContent.popperOptions.placement = newValue) && this._shown && this._popperContent.show();
    }

    get placement(): NgxPopperjsPlacements {

        return this._popperPlacement;
    }

    @Input()
    popperAppendTo: string;

    @Input()
    popperApplyArrowClass: string;

    @Input("popperModifiers")
    popperModifiers: {};

    @Output()
    popperOnHidden: EventEmitter<NgxPopperjsDirective> = new EventEmitter<NgxPopperjsDirective>();

    @Output()
    popperOnShown: EventEmitter<NgxPopperjsDirective> = new EventEmitter<NgxPopperjsDirective>();

    @Output()
    popperOnUpdate: EventEmitter<any> = new EventEmitter<any>();

    @Input("popperPositionFixed")
    positionFixed: boolean;

    @Input("popperPreventOverflow")
    preventOverflow: boolean;

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
    private _eventListeners: any[] = [];
    private _globalEventListeners: any[] = [];
    private _popperContent: NgxPopperjsContentComponent;
    private _popperContentClass = NgxPopperjsContentComponent;
    private _popperContentRef: ComponentRef<NgxPopperjsContentComponent>;
    private _popperPlacement: NgxPopperjsPlacements = NgxPopperjsPlacements.AUTO;
    private _scheduledHideTimeout: any;
    private _scheduledShowTimeout: any;
    private _shown: boolean = false;
    private _subscriptions: any[] = [];

    constructor(private _viewContainerRef: ViewContainerRef,
                private _changeDetectorRef: ChangeDetectorRef,
                private _resolver: ComponentFactoryResolver,
                private _elementRef: ElementRef,
                private _renderer: Renderer2,
                @Inject("popperDefaults") private _popperDefaults: NgxPopperjsOptions = {}) {
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
            case NgxPopperjsTriggers.CLICK:
                this._pushListener("click", this.toggle.bind(this));
                break;
            case NgxPopperjsTriggers.MOUSEDOWN:
                this._pushListener("mousedown", this.toggle.bind(this));
                break;
            case NgxPopperjsTriggers.HOVER:
                this._pushListener("mouseenter", this.scheduledShow.bind(this, this.showDelay));
                ["touchend", "touchcancel", "mouseleave"].forEach((eventName) => {
                    this._pushListener(eventName, this.scheduledHide.bind(this, null, this.hideTimeout));
                });
                break;
        }
        if (this.showTrigger !== NgxPopperjsTriggers.HOVER && this.hideOnMouseLeave) {
            ["touchend", "touchcancel", "mouseleave"].forEach((eventName) => {
                this._pushListener(eventName, this.scheduledHide.bind(this, null, this.hideTimeout));
            });
        }
    }

    getRefElement() {
        return this.targetElement || this._viewContainerRef.element.nativeElement;
    }

    hide() {
        if (this.disabled) {
            return;
        }
        if (!this._shown) {
            this._overrideShowTimeout();

            return;
        }

        this._shown = false;
        if (this._popperContentRef) {
            this._popperContentRef.instance.hide();
        } else {
            this._popperContent.hide();
        }
        this.popperOnHidden.emit(this);
        this._clearGlobalEventListeners();
    }

    hideOnClickOutsideHandler($event: MouseEvent): void {
        // TODO: check if $event.target is a better alternative here
        if (this.disabled || !this.hideOnClickOutside || $event.srcElement &&
            $event.srcElement === this._popperContent.elRef.nativeElement ||
            this._popperContent.elRef.nativeElement.contains($event.srcElement)) {
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

    ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
        if (changes.popperDisabled && changes.popperDisabled.currentValue) {
            this.hide();
        }
        if (changes.content
            && !changes.content.firstChange
            && typeof changes.content.currentValue === "string") {
            this._popperContent.text = changes.content.currentValue;
        }

        if (changes.applyClass
            && !changes.applyClass.firstChange
            && typeof changes.applyClass.currentValue === "string") {
            this._popperContent.popperOptions.applyClass = changes.applyClass.currentValue;
        }

        if (changes.applyArrowClass
            && !changes.applyArrowClass.firstChange
            && typeof changes.applyArrowClass.currentValue === "string") {
            this._popperContent.popperOptions.applyArrowClass = changes.applyArrowClass.currentValue;
        }
    }

    ngOnDestroy() {
        this._subscriptions.forEach(sub => sub.unsubscribe && sub.unsubscribe());
        this._subscriptions.length = 0;
        this._clearEventListeners();
        this._clearGlobalEventListeners();
        this._scheduledShowTimeout && clearTimeout(this._scheduledShowTimeout);
        this._scheduledHideTimeout && clearTimeout(this._scheduledHideTimeout);
        this._popperContent && this._popperContent.clean();
    }

    ngOnInit() {
        // Support legacy prop
        this.hideOnClickOutside = typeof this.hideOnClickOutside === "undefined" ?
            this.closeOnClickOutside : this.hideOnClickOutside;

        if (typeof this.content === "string") {
            const text = this.content;
            this._popperContent = this._constructContent();
            this._popperContent.text = text;
        } else {
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
        this._overrideShowTimeout();
        this._scheduledHideTimeout = setTimeout(() => {
            // TODO: check
            const toElement = $event ? $event.toElement : null;
            const popperContentView = this._popperContent.popperViewRef ? this._popperContent.popperViewRef.nativeElement : false;
            if (!popperContentView ||
                popperContentView === toElement ||
                popperContentView.contains(toElement) ||
                (this.content as NgxPopperjsContentComponent).isMouseOver) {

                return;
            }
            this.hide();
            this._applyChanges();
        }, delay);
    }

    scheduledShow(delay: number = this.showDelay) {
        if (this.disabled) {
            return;
        }
        this._overrideHideTimeout();
        this._scheduledShowTimeout = setTimeout(() => {
            this.show();
            this._applyChanges();
        }, delay);
    }

    show() {
        if (this._shown) {
            this._overrideHideTimeout();

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
        this._globalEventListeners.push(this._renderer.listen("document", "touchend", this.hideOnClickOutsideHandler.bind(this)));
        this._globalEventListeners.push(this._renderer.listen("document", "click", this.hideOnClickOutsideHandler.bind(this)));
        // tslint:disable-next-line:max-line-length
        this._globalEventListeners.push(this._renderer.listen(this._getScrollParent(this.getRefElement()), "scroll", this.hideOnScrollHandler.bind(this)));
    }

    toggle() {
        if (this.disabled) {
            return;
        }
        this._shown ? this.scheduledHide(null, this.hideTimeout) : this.scheduledShow();
    }

    private _applyChanges() {
        this._changeDetectorRef.markForCheck();
        this._changeDetectorRef.detectChanges();
    }

    private _clearEventListeners() {
        this._eventListeners.forEach(evt => {
            evt && typeof evt === "function" && evt();
        });
        this._eventListeners.length = 0;
    }

    private _clearGlobalEventListeners() {
        this._globalEventListeners.forEach(evt => {
            evt && typeof evt === "function" && evt();
        });
        this._globalEventListeners.length = 0;
    }

    private _constructContent(): NgxPopperjsContentComponent {
        const factory = this._resolver.resolveComponentFactory(this._popperContentClass);
        this._popperContentRef = this._viewContainerRef.createComponent(factory);

        return this._popperContentRef.instance as NgxPopperjsContentComponent;
    }

    private _getScrollParent(node) {
        const isElement = node instanceof HTMLElement;
        const overflowY = isElement && window.getComputedStyle(node).overflowY;
        const isScrollable = overflowY !== "visible" && overflowY !== "hidden";

        if (!node) {
            return null;
        } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
            return node;
        }

        return this._getScrollParent(node.parentNode) || document;
    }

    private _onPopperUpdate(event) {
        this.popperOnUpdate.emit(event);
    }

    private _overrideHideTimeout() {
        if (this._scheduledHideTimeout) {
            clearTimeout(this._scheduledHideTimeout);
            this._scheduledHideTimeout = 0;
        }
    }

    private _overrideShowTimeout() {
        if (this._scheduledShowTimeout) {
            clearTimeout(this._scheduledShowTimeout);
            this._scheduledHideTimeout = 0;
        }
    }

    private _pushListener(name: string, cb: () => void): void {
        this._eventListeners.push(this._renderer.listen(this._elementRef.nativeElement, name, cb));
    }

    private _setContentProperties(popperRef: NgxPopperjsContentComponent) {
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
        this._subscriptions.push(popperRef.onHidden.subscribe(this.hide.bind(this)));
    }

    private _setDefaults() {
        ["showDelay", "hideOnScroll", "hideOnMouseLeave", "hideOnClickOutside", "ariaRole", "ariaDescribe"].forEach((key) => {
            this[key] = this[key] === void 0 ? NgxPopperjsDirective.baseOptions[key] : this[key];
        });
        this.showTrigger = this.showTrigger === void 0 ? NgxPopperjsDirective.baseOptions.trigger : this.showTrigger;
        this.styles = this.styles === void 0 ? {...NgxPopperjsDirective.baseOptions.styles} : this.styles;
    }

}
