import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { NgxPopperjsAppComponent } from "./app.component";
//
import {NgxPopperjsModule, NgxPopperjsTriggers} from "ngx-popperjs";

@NgModule({
  declarations: [
    NgxPopperjsAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopperjsModule.forRoot({
      trigger: NgxPopperjsTriggers.CLICK,
      hideOnClickOutside: false
    })
  ],
  providers: [],
  bootstrap: [NgxPopperjsAppComponent]
})
export class NgxPopperjsAppModule { }
