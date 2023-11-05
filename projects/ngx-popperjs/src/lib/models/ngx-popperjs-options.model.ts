import {NgxPopperjsTriggers} from "./ngx-popperjs-triggers.model";
import {NgxPopperjsPlacements} from "./ngx-popperjs-placements.model";

export interface NgxPopperjsOptions {
    appendTo?: string;
    applyArrowClass?: string;
    applyClass?: string;
    ariaDescribe?: string;
    ariaRole?: string;
    boundariesElement?: string;
    disableAnimation?: boolean;
    disableDefaultStyling?: boolean;
    flip?: boolean;
    hideOnClickOutside?: boolean;
    hideOnMouseLeave?: boolean;
    hideOnScroll?: boolean;
    placement?: NgxPopperjsPlacements;
    positionFixed?: boolean;
    preventOverflow?: boolean;
    showDelay?: number;
    styles?: { [key: string]: string };
    trigger?: NgxPopperjsTriggers;
}
