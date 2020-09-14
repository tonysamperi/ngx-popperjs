import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
//
import {NgxPopperjsDirective} from "./ngx-popperjs/ngx-popperjs.directive";
import {NgxPopperjsContentComponent} from "./ngx-popperjs-content/ngx-popper-content.component";
import {NgxPopperjsOptions} from "./models/ngx-popperjs-options.model";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxPopperjsContentComponent,
    NgxPopperjsDirective
  ],
  entryComponents: [
    NgxPopperjsContentComponent
  ],
  exports: [
    NgxPopperjsContentComponent,
    NgxPopperjsDirective
  ]
})
export class NgxPopperjsModule {

  public static forRoot(popperBaseOptions: NgxPopperjsOptions = {}): ModuleWithProviders<NgxPopperjsModule> {
    return {
      ngModule: NgxPopperjsModule,
      providers: [
        {provide: "popperDefaults", useValue: popperBaseOptions}
      ]
    };
  }
}
