import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    OnDestroy,
    Renderer2,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from "@angular/core";
//
import {NgxPopperjsOptions} from "../models/ngx-popperjs-options.model";
import {NgxPopperjsPlacements} from "../models/ngx-popperjs-placements.model";
import {NgxPopperjsTriggers} from "../models/ngx-popperjs-triggers.model";
//
import {createPopper as Popper, Options} from "@popperjs/core";
import {ArrowModifier} from "@popperjs/core/lib/modifiers/arrow";
import {Instance} from "@popperjs/core/lib/types";
import {PreventOverflowModifier} from "@popperjs/core/lib/modifiers/preventOverflow";
import {OffsetModifier} from "@popperjs/core/lib/modifiers/offset";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "popper-content",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./ngx-popperjs-content.component.html",
    styleUrls: ["./ngx-popperjs-content.component.scss"],
})
export class NgxPopperjsContentComponent implements OnDestroy {

    ariaHidden: string = "true";
    arrowColor: string | null = null;
    displayType: string = "none";
    isMouseOver: boolean = false;
    onHidden = new EventEmitter();
    onUpdate: () => any;
    opacity: number = 0;
    popperInstance: Instance;
    popperOptions: NgxPopperjsOptions = {
        disableAnimation: false,
        disableDefaultStyling: false,
        placement: NgxPopperjsPlacements.AUTO,
        boundariesElement: "",
        trigger: NgxPopperjsTriggers.hover,
        positionFixed: false,
        appendToBody: false,
        popperModifiers: []
    } as NgxPopperjsOptions;
    @ViewChild("popperViewRef", {static: !0})
    popperViewRef: ElementRef;
    referenceObject: HTMLElement;
    state: boolean = true;
    text: string;

    private _globalResize: any;

    constructor(public elRef: ElementRef,
                private _renderer: Renderer2,
                private _viewRef: ViewContainerRef,
                private _changeDetectorRef: ChangeDetectorRef) {
    }

    clean() {
        this.toggleVisibility(false);
        if (!this.popperInstance) {
            return;
        }
        this.popperInstance.destroy();

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
            this.popperInstance.destroy();
        }
        this.toggleVisibility(false);
        this.onHidden.emit();
    }

    ngOnDestroy() {
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

        const appendToParent = this.popperOptions.appendTo && document.querySelector(this.popperOptions.appendTo);
        if (appendToParent && this.elRef.nativeElement.parentNode !== appendToParent) {
            this.elRef.nativeElement.parentNode && this.elRef.nativeElement.parentNode.removeChild(this.elRef.nativeElement);
            appendToParent.appendChild(this.elRef.nativeElement);
        }

        const popperOptions: Options = {
            strategy: this.popperOptions.positionFixed ? "fixed" : "absolute",
            placement: this.popperOptions.placement,
            modifiers: [
                {
                    name: "offset",
                    enabled: !0,
                    options: {
                        offset: [0, 8],
                    }
                } as OffsetModifier,
                {
                    name: "arrow",
                    enabled: !0,
                    options: {
                        element: ".ngxp__arrow",
                        padding: 3
                    },
                    requires: ["arrow"]
                } as ArrowModifier,
            ]
        } as Options;
        if (this.onUpdate) {
            popperOptions.onFirstUpdate = this.onUpdate as any;
        }

        const boundariesElement = this.popperOptions.boundariesElement && document.querySelector(this.popperOptions.boundariesElement);

        if (popperOptions.modifiers && boundariesElement) {
            popperOptions.modifiers.push({
                name: "preventOverflow",
                enabled: this.popperOptions.preventOverflow,
                options: {
                    boundary: boundariesElement
                }
            } as PreventOverflowModifier);
        }
        if (popperOptions.modifiers) {
            const preventOverflowModifier = popperOptions.modifiers.find((v) => v.name === "preventOverflow");
            if (preventOverflowModifier && !preventOverflowModifier.enabled) {
                const hideModifier = popperOptions.modifiers.find((v) => v.name === "preventOverflow");
                hideModifier && (hideModifier.enabled = !1);
            }
        }
        this._determineArrowColor();
        popperOptions.modifiers = popperOptions.modifiers.concat(this.popperOptions.popperModifiers);

        this.popperInstance = Popper(
            this.referenceObject,
            this.popperViewRef.nativeElement,
            popperOptions,
        );

        this.toggleVisibility(true);
        this._globalResize = this._renderer.listen("document", "resize", this.onDocumentResize.bind(this));
    }

    @HostListener("mouseleave")
    showOnLeave() {
        this.isMouseOver = false;
        if (this.popperOptions.trigger !== NgxPopperjsTriggers.hover && !this.popperOptions.hideOnMouseLeave) {
            return;
        }
        this.hide();
    }

    toggleVisibility(state: boolean) {
        if (!state) {
            this.opacity = 0;
            this.displayType = "none";
            this.ariaHidden = "true";
            this.state = false;
        } else {
            this.opacity = 1;
            this.displayType = "block";
            this.ariaHidden = "false";
            this.state = true;
        }
        // tslint:disable-next-line:no-string-literal
        if (!this._changeDetectorRef["destroyed"]) {
            this._changeDetectorRef.detectChanges();
        }
    }

    update(): void {
        this.popperInstance && (this.popperInstance as any).update();
    }

    // TODO: check if this function might have had a purpose (unused at this time)
    // private _clearGlobalResize() {
    //   this._globalResize && typeof this._globalResize === "function" && this._globalResize();
    // }

    private _determineArrowColor() {
        ["background-color", "backgroundColor"].some((clr) => {
            if (!this.popperOptions.styles) {

                return !1;
            }
            if (this.popperOptions.styles.hasOwnProperty(clr)) {
                this.arrowColor = this.popperOptions.styles[clr];

                return !0;
            }

            return !1;
        });
    }
}
