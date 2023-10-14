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
import {NgxPopperjsContentComponent} from "../../components/ngx-popperjs-content/ngx-popperjs-content.component";
import {NgxPopperjsTriggers} from "../../models/ngx-popperjs-triggers.model";

@Directive({
    selector: "[popperLoose]",
    exportAs: "popperLoose",
    standalone: true
})
export class NgxPopperjsLooseDirective extends NgxPopperjsDirective {

    @Input()
    set popperLoose(newValue: string | NgxPopperjsContentComponent) {
        this.content = newValue;
    }

    @Input()
    set popperLoosePlacement(newValue: `${NgxPopperjsPlacements}`) {
        this.placement = newValue as NgxPopperjsPlacements;
    }

    @Input()
    set popperLooseTrigger(newValue: `${NgxPopperjsTriggers}`) {
        this.showTrigger = newValue as NgxPopperjsTriggers;
    }

    constructor(changeDetectorRef: ChangeDetectorRef,
                elementRef: ElementRef,
                vcr: ViewContainerRef,
                @Inject(NGX_POPPERJS_DEFAULTS) popperDefaults: NgxPopperjsOptions = {}) {
        super(changeDetectorRef, elementRef, vcr, popperDefaults);
    }

}
