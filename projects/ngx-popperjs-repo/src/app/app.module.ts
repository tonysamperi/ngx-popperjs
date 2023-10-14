import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
//
import {NgxPopperjsModule, NgxPopperjsPlacements, NgxPopperjsTriggers} from "ngx-popperjs";
//
import {NgxPopperjsAppComponent} from "./app.component";
import {NgxPopperjsDemoComponent} from "./components/demo/demo.component";
import {NgxPopperjsTestComponent} from "./components/test/test.component";

@NgModule({
    declarations: [NgxPopperjsAppComponent],
    imports: [
        BrowserModule,
        NgxPopperjsModule.forRoot({
            trigger: NgxPopperjsTriggers.click,
            hideOnClickOutside: false,
            placement: NgxPopperjsPlacements.BOTTOM
        }),
        NgxPopperjsDemoComponent,
        NgxPopperjsTestComponent
    ],
    providers: [],
    bootstrap: [NgxPopperjsAppComponent]
})
export class NgxPopperjsAppModule {
}
