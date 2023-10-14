import {Component} from "@angular/core";
import {Modifier} from "@popperjs/core";
import {Options} from "@popperjs/core/lib/modifiers/flip";
//
import {NgxPopperjsContentComponent, NgxPopperjsDirective} from "ngx-popperjs";
//
import {NGX_POPPERJS_DONT_FLIP_MODIFIER} from "../../shared/ngx-popperjs-dont-flip-modifier.const";

@Component({
    selector: "app-test",
    templateUrl: "test.component.html",
    styleUrls: ["test.component.scss"],
    standalone: true,
    imports: [NgxPopperjsContentComponent, NgxPopperjsDirective]
})
export class NgxPopperjsTestComponent {

    dontFlipModifier: Partial<Modifier<"flip", Options>>[] = [NGX_POPPERJS_DONT_FLIP_MODIFIER];

}
