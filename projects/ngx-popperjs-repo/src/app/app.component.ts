import {Component} from "@angular/core";
//
import {NGX_POPPERJS_ENVIRONMENT} from "../environments/environment";


@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class NgxPopperjsAppComponent {

    isDemo: boolean = NGX_POPPERJS_ENVIRONMENT.isDemo;

}
