import {
  ChangeDetectionStrategy, ChangeDetectorRef,
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
import Popper from "popper.js";
// import {createPopper as Popper} from "@popperjs/core";

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
  popperInstance: Popper;
  popperOptions: NgxPopperjsOptions = {
    disableAnimation: false,
    disableDefaultStyling: false,
    placement: NgxPopperjsPlacements.AUTO,
    boundariesElement: "",
    trigger: NgxPopperjsTriggers.HOVER,
    positionFixed: false,
    appendToBody: false,
    popperModifiers: {}
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
    (this.popperInstance as any).disableEventListeners();
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

  scheduleUpdate(): void {
    this.popperInstance && (this.popperInstance as any).scheduleUpdate();
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

    const popperOptions: Popper.PopperOptions = {
      placement: this.popperOptions.placement,
      positionFixed: this.popperOptions.positionFixed,
      modifiers: {
        arrow: {
          element: this.popperViewRef.nativeElement.querySelector(".ngxp__arrow")
        }
      }
    } as Popper.PopperOptions;
    if (this.onUpdate) {
      popperOptions.onUpdate = this.onUpdate as any;
    }

    const boundariesElement = this.popperOptions.boundariesElement && document.querySelector(this.popperOptions.boundariesElement);

    if (popperOptions.modifiers && boundariesElement) {
      popperOptions.modifiers.preventOverflow = {boundariesElement};
    }
    if (popperOptions.modifiers && this.popperOptions.preventOverflow !== undefined) {
      popperOptions.modifiers.preventOverflow = popperOptions.modifiers.preventOverflow || {};
      popperOptions.modifiers.preventOverflow.enabled = this.popperOptions.preventOverflow;
      if (!popperOptions.modifiers.preventOverflow.enabled) {
        popperOptions.modifiers.hide = {enabled: false};
      }
    }
    this._determineArrowColor();
    popperOptions.modifiers = Object.assign(popperOptions.modifiers, this.popperOptions.popperModifiers);

    this.popperInstance = new Popper(
      this.referenceObject,
      this.popperViewRef.nativeElement,
      popperOptions,
    );

    (this.popperInstance as any).enableEventListeners();
    this.scheduleUpdate();
    this.toggleVisibility(true);
    this._globalResize = this._renderer.listen("document", "resize", this.onDocumentResize.bind(this));
  }

  @HostListener("mouseleave")
  showOnLeave() {
    this.isMouseOver = false;
    if (this.popperOptions.trigger !== NgxPopperjsTriggers.HOVER && !this.popperOptions.hideOnMouseLeave) {
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
