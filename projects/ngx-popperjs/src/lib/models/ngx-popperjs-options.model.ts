import {NgxPopperjsTriggers} from "./ngx-popperjs-triggers.model";
import {NgxPopperjsPlacements} from "./ngx-popperjs-placements.model";
import {Modifier} from "@popperjs/core";

export interface NgxPopperjsOptions {
    appendTo?: string;
    applyArrowClass?: string;
    applyClass?: string;
    ariaDescribe?: string;
    ariaRole?: string;
    boundariesElement?: string;
    disableAnimation?: boolean;
    disableDefaultStyling?: boolean;
    hideOnClickOutside?: boolean;
    hideOnMouseLeave?: boolean;
    hideOnScroll?: boolean;
    placement?: NgxPopperjsPlacements;
    popperModifiers?: Array<Partial<Modifier<any, any>>>;
    positionFixed?: boolean;
    preventOverflow?: boolean;
    showDelay?: number;
    styles?: { [key: string]: string };
    trigger?: NgxPopperjsTriggers;
}
