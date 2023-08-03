import {ModuleWithProviders, NgModule, Provider} from "@angular/core";
import {CommonModule} from "@angular/common";
//
import {NgxPopperjsDirective} from "./directives/ngx-popperjs/ngx-popperjs.directive";
import {NgxPopperjsLooseDirective} from "./directives/ngx-popperjs/ngx-popperjs-loose.directive";
import {NgxPopperjsContentComponent} from "./components/ngx-popperjs-content/ngx-popperjs-content.component";
import {NgxPopperjsOptions} from "./models/ngx-popperjs-options.model";
import {NGX_POPPERJS_DEFAULTS} from "./models/ngx-popperjs-defaults.model";

export function provideNgxPopperjsOptions(config: NgxPopperjsOptions = {}): Provider[] {
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
        NgxPopperjsDirective,
        NgxPopperjsLooseDirective
    ],
    exports: [
        NgxPopperjsContentComponent,
        NgxPopperjsDirective,
        NgxPopperjsLooseDirective
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
