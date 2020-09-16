import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
//
import {NgxPopperjsDirective} from "./ngx-popperjs/ngx-popperjs.directive";
import {NgxPopperjsContentComponent} from "./ngx-popperjs-content/ngx-popper-content.component";
import {NgxPopperjsOptions} from "./models/ngx-popperjs-options.model";
import {NGX_POPPERJS_DEFAULTS} from "./models/ngx-popperjs-defaults.model";

export function provideNgxPopperjsOptions(config: NgxPopperjsOptions = {}): any {
    return [
        {provide: NGX_POPPERJS_DEFAULTS, useValue: config},
    ];
}


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
    ],
    providers: [
        provideNgxPopperjsOptions()
    ]
})
export class NgxPopperjsModule {

    public static forRoot(popperBaseOptions?: NgxPopperjsOptions): ModuleWithProviders<NgxPopperjsModule> {
        return {
            ngModule: NgxPopperjsModule,
            providers: [
                provideNgxPopperjsOptions(popperBaseOptions)
            ]
        };
    }
}
