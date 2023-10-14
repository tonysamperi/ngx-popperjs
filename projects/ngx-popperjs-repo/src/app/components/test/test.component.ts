import {Component} from "@angular/core";
//
import {NgxPopperjsContentComponent, NgxPopperjsDirective} from "ngx-popperjs";

@Component({
    selector: "app-test",
    templateUrl: "test.component.html",
    styleUrls: ["test.component.scss"],
    standalone: true,
    imports: [NgxPopperjsContentComponent, NgxPopperjsDirective]
})
export class NgxPopperjsTestComponent {


}
