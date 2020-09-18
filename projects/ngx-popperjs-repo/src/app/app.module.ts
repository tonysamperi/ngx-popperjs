import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {NgxPopperjsAppComponent} from "./app.component";
//
import {NgxPopperjsModule, NgxPopperjsTriggers} from "ngx-popperjs";

@NgModule({
    declarations: [
        NgxPopperjsAppComponent
    ],
    imports: [
        BrowserModule,
        NgxPopperjsModule.forRoot({trigger: NgxPopperjsTriggers.click, hideOnClickOutside: false})
        // NgxPopperjsModule
    ],
    providers: [],
    bootstrap: [NgxPopperjsAppComponent]
})
export class NgxPopperjsAppModule {
}
