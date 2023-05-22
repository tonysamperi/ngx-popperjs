// tslint:disable:no-input-rename
import {
    ChangeDetectorRef,
    Directive,
    ElementRef,
    Inject,
    Input,
    ViewContainerRef
} from "@angular/core";
//
import {NgxPopperjsOptions} from "../../models/ngx-popperjs-options.model";
import {NgxPopperjsPlacements} from "../../models/ngx-popperjs-placements.model";
import {NGX_POPPERJS_DEFAULTS} from "../../models/ngx-popperjs-defaults.model";
import {NgxPopperjsDirective} from "./ngx-popperjs.directive";
import {NgxPopperjsContentComponent} from "../../components/ngx-popperjs-content/ngx-popper-content.component";

@Directive({
    selector: "[popperLoose]",
    exportAs: "popperLoose"
})
export class NgxPopperjsLooseDirective extends NgxPopperjsDirective {

    @Input()
    set popperLoose(newValue: string | NgxPopperjsContentComponent) {
        this.content = newValue;
    }

    @Input()
    set popperLoosePlacement(newValue: string) {
        this.placement = newValue as NgxPopperjsPlacements;
    }

    constructor(changeDetectorRef: ChangeDetectorRef,
                elementRef: ElementRef,
                vcr: ViewContainerRef,
                @Inject(NGX_POPPERJS_DEFAULTS) popperDefaults: NgxPopperjsOptions = {}) {
        super(changeDetectorRef, elementRef, vcr, popperDefaults);
    }

}
