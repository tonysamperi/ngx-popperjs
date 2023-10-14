import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    OnDestroy,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation
} from "@angular/core";
import {NgStyle, NgClass, NgIf} from "@angular/common";
//
import {NgxPopperjsOptions} from "../../models/ngx-popperjs-options.model";
import {NgxPopperjsTriggers} from "../../models/ngx-popperjs-triggers.model";
//
import {
    computePosition,
    autoUpdate,
    flip,
    arrow,
    limitShift,
    shift,
    offset,
    autoPlacement, ComputePositionConfig,
} from "@floating-ui/dom";
import {fromEvent, Subject, takeUntil} from "rxjs";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "popper-content",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./ngx-popperjs-content.component.html",
    styleUrls: ["./ngx-popperjs-content.component.scss"],
    exportAs: "ngxPopperjsContent",
    standalone: true,
    imports: [NgStyle, NgClass, NgIf]
})
export class NgxPopperjsContentComponent implements OnDestroy {

    static nextId: number = 0;

    ariaHidden: string;
    arrowColor: string | null = null;
    displayType: string;
    id: string = `ngx_poppperjs_${++NgxPopperjsContentComponent.nextId}`;
    isMouseOver: boolean = !1;
    onHidden = new EventEmitter();
    onUpdate: () => any;
    opacity: number;
    popperInstance: () => void;
    popperOptions: NgxPopperjsOptions = {
        disableAnimation: false,
        disableDefaultStyling: false,
        boundariesElement: "",
        trigger: NgxPopperjsTriggers.hover,
        positionFixed: false,
        appendToBody: false,
        popperModifiers: []
    } as NgxPopperjsOptions;
    @ViewChild("popperViewRef", {static: !0})
    popperViewRef: ElementRef;
    referenceObject: HTMLElement;
    state: boolean;
    text: string;

    protected _destroy$: Subject<void> = new Subject<void>();
    protected _resizeCtrl$: Subject<void> = new Subject<void>();
    protected _styleId = `${this.id}_style`;

    constructor(public elRef: ElementRef,
                protected _viewRef: ViewContainerRef,
                protected _changeDetectorRef: ChangeDetectorRef) {
        this._toggleVisibility(!1);
    }

    clean() {
        this.toggleVisibility(false);
        if (!this.popperInstance) {
            return;
        }
        this.popperInstance();
    }

    extractAppliedClassListExpr(classList: string | string[] = []): object {
        const klassList = Array.isArray(classList) ? classList : typeof classList === typeof "" ? classList.replace(/ /, "").split(",") : [];

        return klassList.reduce((acc, klass) => {
            acc[klass] = !0;

            return acc;
        }, {});
    }

    hide(): void {
        if (this.popperInstance) {
            this.popperInstance();
        }
        this.toggleVisibility(!1);
        this.onHidden.emit();
    }

    ngOnDestroy() {
        this._destroy$.next();
        this.clean();
        if (this.popperOptions.appendTo && this.elRef && this.elRef.nativeElement && this.elRef.nativeElement.parentNode) {
            this._viewRef.detach();
            this.elRef.nativeElement.parentNode.removeChild(this.elRef.nativeElement);
        }
    }

    onDocumentResize() {
        this.update();
    }

    @HostListener("mouseover")
    onMouseOver() {
        this.isMouseOver = true;
    }

    show(): void {
        if (!this.referenceObject) {
            return;
        }
        this._resizeCtrl$.next();
        this._determineArrowColor();
        this.popperInstance = autoUpdate(
            this.referenceObject,
            this.popperViewRef.nativeElement,
            () => {
                this._computePosition();
            }
        );
        fromEvent(document, "resize")
            .pipe(
                takeUntil(this._resizeCtrl$),
                takeUntil(this._destroy$),
            )
            .subscribe({
                next: () => this.onDocumentResize()
            });
    }

    @HostListener("mouseleave")
    showOnLeave() {
        this.isMouseOver = false;
        if (this.popperOptions.trigger !== NgxPopperjsTriggers.hover && !this.popperOptions.hideOnMouseLeave) {
            return;
        }
        this.hide();
    }

    // Toggle visibility and detect changes - Run only after ngOnInit!
    toggleVisibility(state: boolean): void {
        this._toggleVisibility(state);
        // tslint:disable-next-line:no-string-literal
        if (!this._changeDetectorRef["destroyed"]) {
            this._changeDetectorRef.detectChanges();
        }
    }

    update(): void {
        this._computePosition();
    }

    protected _computePosition(): void {
        const appendToParent = this.popperOptions.appendTo && document.querySelector(this.popperOptions.appendTo);
        if (appendToParent && this.elRef.nativeElement.parentNode !== appendToParent) {
            this.elRef.nativeElement.parentNode && this.elRef.nativeElement.parentNode.removeChild(this.elRef.nativeElement);
            appendToParent.appendChild(this.elRef.nativeElement);
        }

        const arrowElement = this.elRef.nativeElement.querySelector(".ngxp__arrow");
        const arrowLen = arrowElement.offsetWidth;
        // Get half the arrow box's hypotenuse length
        const floatingOffset = Math.sqrt(2 * arrowLen ** 2) / 2;
        const popperOptions: Partial<ComputePositionConfig> = {
            placement: this.popperOptions.placement,
            strategy: this.popperOptions.positionFixed ? "fixed" : "absolute",
            middleware: [
                offset(floatingOffset),
                ...(this.popperOptions.preventOverflow ? [flip(), shift({limiter: limitShift()})] : [shift({limiter: limitShift()})]),
                arrow({
                    element: arrowElement,
                    padding: 0
                })
            ],
        };
        if (!this.popperOptions.preventOverflow && !popperOptions.placement) {
            const boundariesElement = this.popperOptions.boundariesElement && document.querySelector(this.popperOptions.boundariesElement);
            popperOptions.middleware.push(
                autoPlacement({
                    boundary: boundariesElement
                })
            );
        }
        computePosition(this.referenceObject, this.popperViewRef.nativeElement, popperOptions)
            .then(({middlewareData, x, y, placement}) => {
                const side = placement.split("-")[0];
                this.popperViewRef.nativeElement.setAttribute("data-popper-placement", side);
                if (middlewareData.arrow) {
                    const staticSide = {
                        top: "bottom",
                        right: "left",
                        bottom: "top",
                        left: "right"
                    }[side];
                    Object.assign(arrowElement.style, {
                        left: middlewareData.arrow.x != null ? `${middlewareData.arrow.x}px` : "",
                        top: middlewareData.arrow.y != null ? `${middlewareData.arrow.y}px` : "",
                        [staticSide]: `${-arrowLen / 2}px`
                    });
                }
                Object.assign(this.popperViewRef.nativeElement.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                });
                this.toggleVisibility(!0);
                this.onUpdate?.();
            });
    }

    protected _createArrowSelector(): string {
        return `div#${this.id}.ngxp__container > .ngxp__arrow.ngxp__force-arrow`;
    }

    protected _determineArrowColor() {
        if (!this.popperOptions.styles || this.arrowColor) {

            return !1;
        }
        const ruleValue = this.popperOptions.styles["background-color"] || this.popperOptions.styles.backgroundColor;
        if (this.arrowColor === ruleValue) {
            return !1;
        }
        this.arrowColor = ruleValue;
        let $style = document.querySelector(`#${this._styleId}`) as HTMLStyleElement;
        const styleContent = this.arrowColor ?
            `${this._createArrowSelector()}:before { background-color: ${this.arrowColor}; }` : "";
        if (!$style) {
            $style = document.createElement("style") as HTMLStyleElement;
            $style.id = this._styleId;
            $style.setAttribute("type", "text/css");
            document.head.appendChild($style);
        }
        // tslint:disable-next-line:no-string-literal
        if ($style["styleSheet"]) {
            // tslint:disable-next-line:no-string-literal
            $style["styleSheet"].cssText = styleContent;
            // This is required for IE8 and below.
        }
        else {
            $style.innerHTML = styleContent;
        }
    }

    protected _toggleVisibility(state): void {
        this.displayType = ["none", "block"][+state];
        this.opacity = +state;
        this.ariaHidden = `${!state}`;
        this.state = state;
    }
}
