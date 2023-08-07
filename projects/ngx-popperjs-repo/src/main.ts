import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {NgxPopperjsAppModule} from "./app/app.module";
import {NGX_POPPERJS_ENVIRONMENT} from "./environments/environment";

if (NGX_POPPERJS_ENVIRONMENT.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NgxPopperjsAppModule)
    .catch(err => console.error(err));
