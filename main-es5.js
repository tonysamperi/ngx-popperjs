function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../node_modules/raw-loader/dist/cjs.js!../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popperjs-content.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** C:/git/ngx-popperjs/node_modules/raw-loader/dist/cjs.js!../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popperjs-content.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsNgxPopperjsSrcLibNgxPopperjsContentNgxPopperjsContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #popperViewRef\r\n     [class.ngxp__container]=\"!popperOptions.disableDefaultStyling\"\r\n     [class.ngxp__animation]=\"!popperOptions.disableAnimation\"\r\n     [style.display]=\"displayType\"\r\n     [style.opacity]=\"opacity\"\r\n     [ngStyle]=\"popperOptions.styles\"\r\n     [ngClass]=\"extractAppliedClassListExpr(popperOptions.applyClass)\"\r\n     attr.aria-hidden=\"{{ariaHidden}}\"\r\n     [attr.aria-describedby]=\"popperOptions.ariaDescribe || null\"\r\n     attr.role=\"{{popperOptions.ariaRole}}\">\r\n    <div *ngIf=\"text\"\r\n         class=\"ngxp__inner\"\r\n         [innerHTML]=\"text\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div *ngIf=\"!text\"\r\n         class=\"ngxp__inner\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"ngxp__arrow\"\r\n         data-popper-arrow\r\n         [style.border-color]=\"arrowColor\"\r\n         [class.__force-arrow]=\"arrowColor\"\r\n         [ngClass]=\"extractAppliedClassListExpr(popperOptions.applyArrowClass)\"></div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!********************************************************************************************!*\
    !*** C:/git/ngx-popperjs/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * POPPER DEMO! :) * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * cloned from popper.js.org * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<div class=\"content\" role=\"main\">\r\n    <div class=\"pop-top-section\">\r\n        <img class=\"pop-popper-logo\" src=\"assets/images/ngx-popperjs-logo.svg\" alt=\"NGX-POPPERJS\" />\r\n        <img class=\"pop-angular-logo\"\r\n             alt=\"Angular Logo\"\r\n             src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\r\n        />\r\n        <h2 class=\"pop-lucky-font pop-color-primary\">Tooltip &amp; Popover <br> Positioning Engine</h2>\r\n        <div>\r\n            <a href=\"https://github.com/tonysamperi/ngx-popperjs\" rel=\"nofollow noreferrer\" class=\"pop-button-white\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                     stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\r\n                     class=\"css-1oabto8\">\r\n                    <path d=\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\"></path>\r\n                </svg>\r\n                Star on GitHub\r\n            </a>\r\n        </div>\r\n    </div>\r\n    <div class=\"pop-install-section\">\r\n        <h3 class=\"pop-title-light\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                 stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\r\n                 class=\"css-mc2z91\">\r\n                <polyline points=\"20 12 20 22 4 22 4 12\"></polyline>\r\n                <rect x=\"2\" y=\"7\" width=\"20\" height=\"5\"></rect>\r\n                <line x1=\"12\" y1=\"22\" x2=\"12\" y2=\"7\"></line>\r\n                <path d=\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\"></path>\r\n                <path d=\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\"></path>\r\n            </svg>\r\n            Install NGX Popperjs\r\n        </h3>\r\n        <div>\r\n            <div class=\"terminal\">\r\n                <ul>\r\n                    <li>npm i @popperjs/core</li>\r\n                    <li>npm i ngx-popperjs</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"pop-demo\">\r\n        <article pop-position>\r\n            <div class=\"pop-popcorn-wrap\">\r\n                <button *ngFor=\"let positionButton of positionButtons\"\r\n                        (click)=\"updatePosition(positionButton)\"\r\n                        [attr.data-placement]=\"positionButton\"\r\n                        [attr.aria-label]=\"positionButton\"\r\n                        class=\"pop-demo-placement-button\">\r\n                    <div [class.selected]=\"selectedPosition === positionButton\"></div>\r\n                </button>\r\n                <popper-content #myPopperContent><p class=\"pop-lucky-font\">Popcorn</p></popper-content>\r\n                <img alt=\"Popcorn box\" src=\"assets/images/popcorn-box.svg\"\r\n                     [popper]=\"myPopperContent\"\r\n                     (popperOnUpdate)=\"onPopperUpdate($event)\"\r\n                     [popperShowOnStart]=\"true\"\r\n                     popperTrigger=\"click\"\r\n                     [popperPlacement]=\"selectedPosition\"\r\n                     class=\"pop-popcorn-box\">\r\n            </div>\r\n            <div>\r\n                <h3 class=\"pop-title-light\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                         stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                        <polyline points=\"5 9 2 12 5 15\"></polyline>\r\n                        <polyline points=\"9 5 12 2 15 5\"></polyline>\r\n                        <polyline points=\"15 19 12 22 9 19\"></polyline>\r\n                        <polyline points=\"19 9 22 12 19 15\"></polyline>\r\n                        <line x1=\"2\" y1=\"12\" x2=\"22\" y2=\"12\"></line>\r\n                        <line x1=\"12\" y1=\"2\" x2=\"12\" y2=\"22\"></line>\r\n                    </svg>\r\n                    Placement\r\n                </h3>\r\n                <p><strong>Click on the dots</strong> to place the tooltip. There are 12 different placements to choose\r\n                    from.</p>\r\n                <pre><code pop-position-code></code></pre>\r\n            </div>\r\n        </article>\r\n        <article pop-overflow>\r\n            <div class=\"pop-popcorn-wrap\">\r\n                <popper-content #popcornPrices>\r\n                    <p class=\"pop-text-bold\">POPCORN<br />SIZE<br />& PRICE</p>\r\n                    <ul>\r\n                        <li>XXS: $1.99</li>\r\n                        <li>XS: $2.99</li>\r\n                        <li>S: $3.99</li>\r\n                        <li>M: $4.99</li>\r\n                        <li>L: $5.99</li>\r\n                        <li>XL: $6.99</li>\r\n                        <li>XXL: $7.99</li>\r\n                    </ul>\r\n                </popper-content>\r\n                <img alt=\"Popcorn box\" src=\"assets/images/popcorn-box.svg\"\r\n                     [popper]=\"popcornPrices\"\r\n                     [popperShowOnStart]=\"true\"\r\n                     popperTrigger=\"click\"\r\n                     popperPlacement=\"right\"\r\n                     class=\"pop-popcorn-box\">\r\n            </div>\r\n            <div>\r\n                <h3 class=\"pop-title-light\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                         stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                        <path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path>\r\n                        <path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>\r\n                    </svg>\r\n                    Overflow prevention\r\n                </h3>\r\n                <p><strong>Scroll the container</strong> (or the whole page) to see the tooltip stay within the\r\n                    boundary. Once the opposite edges of the popcorn and tooltip are aligned, the tooltip is allowed to\r\n                    overflow to prevent detachment.</p>\r\n                <pre><code pop-overflow-code></code></pre>\r\n            </div>\r\n        </article>\r\n        <article pop-flipping>\r\n            <div class=\"pop-popcorn-wrap\">\r\n                <img alt=\"Popcorn box\" src=\"assets/images/popcorn-box.svg\"\r\n                     popper=\"I'm another popper :)\"\r\n                     [popperShowOnStart]=\"true\"\r\n                     popperTrigger=\"click\"\r\n                     popperPlacement=\"top\"\r\n                     class=\"pop-popcorn-box\">\r\n            </div>\r\n            <div>\r\n                <h3 class=\"pop-title-light\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                         stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                        <line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line>\r\n                        <polyline points=\"5 12 12 5 19 12\"></polyline>\r\n                    </svg>\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                         stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                        <line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line>\r\n                        <polyline points=\"19 12 12 19 5 12\"></polyline>\r\n                    </svg>\r\n                    Flipping\r\n                </h3>\r\n                <p><strong>Scroll the container</strong> (or the whole page) to see the tooltip stay within the\r\n                    boundary. Once the opposite edges of the popcorn and tooltip are aligned, the tooltip is allowed to\r\n                    overflow to prevent detachment.</p>\r\n                <pre><code pop-flipping-code></code></pre>\r\n            </div>\r\n        </article>\r\n        <article pop-theming>\r\n            <div class=\"pop-popcorn-wrap\">\r\n                <img alt=\"Popcorn box\" src=\"assets/images/popcorn-box.svg\"\r\n                     popper=\"I use a custom theme derived from a prebuilt\"\r\n                     [popperShowOnStart]=\"true\"\r\n                     popperTrigger=\"none\"\r\n                     popperPlacement=\"top\"\r\n                     class=\"pop-popcorn-box\">\r\n            </div>\r\n            <div>\r\n                <h3 class=\"pop-title-light\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                         stroke=\"#f4e0f1\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                        <g id=\"surface1\">\r\n                            <path style=\" stroke:none;fill-rule:nonzero;fill:#f4e0f1;fill-opacity:1;\"\r\n                                  d=\"M 10.914062 3.03125 C 11.285156 2.929688 11.683594 3.015625 12.0625 2.992188 C 12.558594 3.023438 13.140625 2.855469 13.535156 3.246094 C 14.070312 3.699219 13.984375 4.460938 13.996094 5.089844 C 14.085938 5.800781 15.027344 6.109375 15.589844 5.738281 C 15.867188 5.519531 16.082031 5.230469 16.363281 5.011719 C 16.824219 4.667969 17.527344 4.722656 17.933594 5.128906 C 18.289062 5.480469 18.644531 5.839844 19 6.195312 C 19.34375 6.539062 19.441406 7.105469 19.210938 7.539062 C 19.003906 7.953125 18.566406 8.175781 18.324219 8.558594 C 18.027344 9.058594 18.253906 9.769531 18.78125 10.011719 C 19.285156 10.292969 19.894531 10.007812 20.410156 10.21875 C 20.8125 10.414062 21.074219 10.871094 21.035156 11.320312 C 21.019531 11.882812 21.054688 12.445312 21.019531 13.007812 C 20.925781 13.382812 20.65625 13.746094 20.269531 13.855469 C 19.761719 13.960938 19.195312 13.753906 18.730469 14.039062 C 18.179688 14.308594 18.007812 15.097656 18.386719 15.578125 C 18.6875 15.933594 19.125 16.195312 19.269531 16.664062 C 19.445312 17.109375 19.234375 17.625 18.894531 17.933594 C 18.554688 18.269531 18.21875 18.613281 17.871094 18.945312 C 17.523438 19.289062 16.953125 19.320312 16.519531 19.128906 C 16.078125 18.878906 15.824219 18.378906 15.34375 18.179688 C 14.941406 18.070312 14.457031 18.164062 14.183594 18.503906 C 13.734375 19.070312 14.152344 19.875 13.777344 20.480469 C 13.519531 20.921875 12.996094 21.140625 12.496094 21.097656 C 11.855469 21.054688 11.125 21.25 10.585938 20.796875 C 10.058594 20.402344 10.128906 19.6875 10.140625 19.105469 C 10.164062 18.289062 9.023438 17.824219 8.433594 18.363281 C 8.027344 18.722656 7.664062 19.265625 7.050781 19.238281 C 6.398438 19.308594 6.03125 18.710938 5.609375 18.335938 C 5.230469 17.960938 4.730469 17.566406 4.78125 16.976562 C 4.753906 16.421875 5.21875 16.0625 5.570312 15.714844 C 6.054688 15.304688 5.996094 14.421875 5.449219 14.089844 C 5.082031 13.804688 4.59375 13.886719 4.164062 13.882812 C 3.601562 13.933594 3.058594 13.46875 2.988281 12.921875 C 2.984375 12.347656 2.992188 11.777344 2.984375 11.207031 C 2.96875 10.8125 3.238281 10.453125 3.574219 10.265625 C 4.113281 9.960938 4.785156 10.316406 5.324219 10.007812 C 5.714844 9.824219 5.945312 9.394531 5.890625 8.96875 C 5.886719 8.480469 5.441406 8.207031 5.148438 7.882812 C 4.703125 7.476562 4.632812 6.683594 5.066406 6.246094 C 5.433594 5.863281 5.8125 5.496094 6.191406 5.125 C 6.574219 4.734375 7.234375 4.679688 7.695312 4.96875 C 8.042969 5.207031 8.269531 5.589844 8.636719 5.800781 C 9.078125 5.980469 9.660156 5.890625 9.941406 5.480469 C 10.261719 5.152344 10.105469 4.675781 10.136719 4.269531 C 10.125 3.75 10.417969 3.226562 10.914062 3.03125 M 11.378906 8.363281 C 9.808594 8.628906 8.515625 10.019531 8.359375 11.605469 C 8.195312 12.96875 8.875 14.386719 10.035156 15.117188 C 10.839844 15.667969 11.867188 15.816406 12.816406 15.636719 C 14.386719 15.320312 15.664062 13.878906 15.738281 12.273438 C 15.871094 10.839844 15.050781 9.398438 13.785156 8.738281 C 13.058594 8.324219 12.191406 8.25 11.378906 8.363281 Z M 11.378906 8.363281 \" />\r\n                        </g>\r\n                    </svg>\r\n                    Theming\r\n                </h3>\r\n                <p>Use the <strong>prebuilt themes</strong> or create your own with 1 line of code!</p>\r\n                <pre><code pop-theming-code></code></pre>\r\n            </div>\r\n        </article>\r\n    </div>\r\n    <div class=\"pop-generic-section\">\r\n        <div class=\"pop-text-center\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                 stroke=\"#ffe69d\"\r\n                 stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                <path d=\"M6.13 1L6 16a2 2 0 0 0 2 2h15\"></path>\r\n                <path d=\"M1 6.13L16 6a2 2 0 0 1 2 2v15\"></path>\r\n            </svg>\r\n            <h3 class=\"pop-title-light\">In a nutshell, Popper:</h3>\r\n        </div>\r\n        <ul class=\"pop-list\">\r\n            <li>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                     stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                    <polyline points=\"20 6 9 17 4 12\"></polyline>\r\n                </svg>\r\n                <strong>Places your tooltip or popover relative to the reference</strong> taking into account their\r\n                sizes, and positions its arrow centered to the reference.\r\n            </li>\r\n            <li>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                     stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                    <polyline points=\"20 6 9 17 4 12\"></polyline>\r\n                </svg>\r\n                <strong>Takes into account the many different contexts it can live in</strong> relative to the reference\r\n                (different offsetParents, different or nested scrolling containers).\r\n            </li>\r\n            <li>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                     stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                    <polyline points=\"20 6 9 17 4 12\"></polyline>\r\n                </svg>\r\n                <strong>Keeps your tooltip or popover in view as best as possible</strong>. It prevents it from being\r\n                clipped or cut off (overflow prevention) and changes the placement if the original does not fit\r\n                (flipping).\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"pop-generic-section\">\r\n        <div class=\"pop-text-center\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                 stroke=\"#ffe69d\"\r\n                 stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                <path d=\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z\"></path>\r\n            </svg>\r\n            <h3 class=\"pop-title-light\">Free and open-source</h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"pop-generic-section\">\r\n        <div class=\"pop-text-center\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50\" height=\"50\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                 stroke=\"#ffe69d\"\r\n                 stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\r\n                <polyline points=\"9 18 15 12 9 6\"></polyline>\r\n            </svg>\r\n            <h3 class=\"pop-title-light\">Ready to start?</h3>\r\n            <p>Start reading <a class=\"pop-link-yellow\" href=\"http://github.com/tonysamperi/ngx-popperjs\">Popper's\r\n                documentation</a>!</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<footer>\r\n    <p>This Angular wrapper was created with ♥ by <a class=\"pop-link-yellow\" href=\"tonysamperi.github.io\"\r\n                                                     target=\"_blank\">Tony\r\n        Samperi</a>\r\n    </p>\r\n    <p>© 2020 MIT License</p>\r\n</footer>\r\n\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "../../node_modules/tslib/tslib.es6.js":
  /*!***********************************************************!*\
    !*** C:/git/ngx-popperjs/node_modules/tslib/tslib.es6.js ***!
    \***********************************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "../ngx-popperjs/src/lib/models/ngx-popperjs-defaults.model.ts":
  /*!*********************************************************************!*\
    !*** ../ngx-popperjs/src/lib/models/ngx-popperjs-defaults.model.ts ***!
    \*********************************************************************/

  /*! exports provided: NGX_POPPERJS_DEFAULTS */

  /***/
  function ngxPopperjsSrcLibModelsNgxPopperjsDefaultsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NGX_POPPERJS_DEFAULTS", function () {
      return NGX_POPPERJS_DEFAULTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");

    var NGX_POPPERJS_DEFAULTS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]("NGX_POPPERJS_DEFAULTS");
    /***/
  },

  /***/
  "../ngx-popperjs/src/lib/models/ngx-popperjs-placements.model.ts":
  /*!***********************************************************************!*\
    !*** ../ngx-popperjs/src/lib/models/ngx-popperjs-placements.model.ts ***!
    \***********************************************************************/

  /*! exports provided: NgxPopperjsPlacements */

  /***/
  function ngxPopperjsSrcLibModelsNgxPopperjsPlacementsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsPlacements", function () {
      return NgxPopperjsPlacements;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var NgxPopperjsPlacements;

    (function (NgxPopperjsPlacements) {
      NgxPopperjsPlacements["TOP"] = "top";
      NgxPopperjsPlacements["BOTTOM"] = "bottom";
      NgxPopperjsPlacements["LEFT"] = "left";
      NgxPopperjsPlacements["RIGHT"] = "right";
      NgxPopperjsPlacements["TOPSTART"] = "top-start";
      NgxPopperjsPlacements["BOTTOMSTART"] = "bottom-start";
      NgxPopperjsPlacements["LEFTSTART"] = "left-start";
      NgxPopperjsPlacements["RIGHTSTART"] = "right-start";
      NgxPopperjsPlacements["TOPEND"] = "top-end";
      NgxPopperjsPlacements["BOTTOMEND"] = "bottom-end";
      NgxPopperjsPlacements["LEFTEND"] = "left-end";
      NgxPopperjsPlacements["RIGHTEND"] = "right-end";
      NgxPopperjsPlacements["AUTO"] = "auto";
      NgxPopperjsPlacements["AUTOSTART"] = "auto-start";
      NgxPopperjsPlacements["AUTOEND"] = "auto-end";
    })(NgxPopperjsPlacements || (NgxPopperjsPlacements = {}));
    /***/

  },

  /***/
  "../ngx-popperjs/src/lib/models/ngx-popperjs-triggers.model.ts":
  /*!*********************************************************************!*\
    !*** ../ngx-popperjs/src/lib/models/ngx-popperjs-triggers.model.ts ***!
    \*********************************************************************/

  /*! exports provided: NgxPopperjsTriggers */

  /***/
  function ngxPopperjsSrcLibModelsNgxPopperjsTriggersModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsTriggers", function () {
      return NgxPopperjsTriggers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");

    var NgxPopperjsTriggers;

    (function (NgxPopperjsTriggers) {
      NgxPopperjsTriggers["click"] = "click";
      NgxPopperjsTriggers["hover"] = "hover";
      NgxPopperjsTriggers["mousedown"] = "mousedown";
      NgxPopperjsTriggers["none"] = "none";
    })(NgxPopperjsTriggers || (NgxPopperjsTriggers = {}));
    /***/

  },

  /***/
  "../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popper-content.component.ts":
  /*!************************************************************************************!*\
    !*** ../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popper-content.component.ts ***!
    \************************************************************************************/

  /*! exports provided: NgxPopperjsContentComponent */

  /***/
  function ngxPopperjsSrcLibNgxPopperjsContentNgxPopperContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsContentComponent", function () {
      return NgxPopperjsContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_ngx_popperjs_placements_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/ngx-popperjs-placements.model */
    "../ngx-popperjs/src/lib/models/ngx-popperjs-placements.model.ts");
    /* harmony import */


    var _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/ngx-popperjs-triggers.model */
    "../ngx-popperjs/src/lib/models/ngx-popperjs-triggers.model.ts");
    /* harmony import */


    var _popperjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @popperjs/core */
    "../../node_modules/@popperjs/core/lib/popper.js"); //


    var NgxPopperjsContentComponent = /*#__PURE__*/function () {
      function NgxPopperjsContentComponent(elRef, _renderer, _viewRef, _changeDetectorRef) {
        _classCallCheck(this, NgxPopperjsContentComponent);

        this.elRef = elRef;
        this._renderer = _renderer;
        this._viewRef = _viewRef;
        this._changeDetectorRef = _changeDetectorRef;
        this.ariaHidden = "true";
        this.arrowColor = null;
        this.displayType = "none";
        this.isMouseOver = false;
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.opacity = 0;
        this.popperOptions = {
          disableAnimation: false,
          disableDefaultStyling: false,
          placement: _models_ngx_popperjs_placements_model__WEBPACK_IMPORTED_MODULE_2__["NgxPopperjsPlacements"].AUTO,
          boundariesElement: "",
          trigger: _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_3__["NgxPopperjsTriggers"].hover,
          positionFixed: false,
          appendToBody: false,
          popperModifiers: []
        };
        this.state = true;
      }

      _createClass(NgxPopperjsContentComponent, [{
        key: "clean",
        value: function clean() {
          this.toggleVisibility(false);

          if (!this.popperInstance) {
            return;
          }

          this.popperInstance.destroy();
        }
      }, {
        key: "extractAppliedClassListExpr",
        value: function extractAppliedClassListExpr() {
          var classList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var klassList = Array.isArray(classList) ? classList : typeof classList === typeof "" ? classList.replace(/ /, "").split(",") : [];
          return klassList.reduce(function (acc, klass) {
            acc[klass] = !0;
            return acc;
          }, {});
        }
      }, {
        key: "hide",
        value: function hide() {
          if (this.popperInstance) {
            this.popperInstance.destroy();
          }

          this.toggleVisibility(false);
          this.onHidden.emit();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clean();

          if (this.popperOptions.appendTo && this.elRef && this.elRef.nativeElement && this.elRef.nativeElement.parentNode) {
            this._viewRef.detach();

            this.elRef.nativeElement.parentNode.removeChild(this.elRef.nativeElement);
          }
        }
      }, {
        key: "onDocumentResize",
        value: function onDocumentResize() {
          this.update();
        }
      }, {
        key: "onMouseOver",
        value: function onMouseOver() {
          this.isMouseOver = true;
        }
      }, {
        key: "show",
        value: function show() {
          if (!this.referenceObject) {
            return;
          }

          var appendToParent = this.popperOptions.appendTo && document.querySelector(this.popperOptions.appendTo);

          if (appendToParent && this.elRef.nativeElement.parentNode !== appendToParent) {
            this.elRef.nativeElement.parentNode && this.elRef.nativeElement.parentNode.removeChild(this.elRef.nativeElement);
            appendToParent.appendChild(this.elRef.nativeElement);
          }

          var popperOptions = {
            strategy: this.popperOptions.positionFixed ? "fixed" : "absolute",
            placement: this.popperOptions.placement,
            modifiers: [{
              name: "offset",
              enabled: !0,
              options: {
                offset: [0, 8]
              }
            }, {
              name: "arrow",
              enabled: !0,
              options: {
                element: ".ngxp__arrow",
                padding: 3
              },
              requires: ["arrow"]
            }]
          };

          if (this.onUpdate) {
            popperOptions.onFirstUpdate = this.onUpdate;
          }

          var boundariesElement = this.popperOptions.boundariesElement && document.querySelector(this.popperOptions.boundariesElement);

          if (popperOptions.modifiers && boundariesElement) {
            popperOptions.modifiers.push({
              name: "preventOverflow",
              enabled: this.popperOptions.preventOverflow,
              options: {
                boundary: boundariesElement
              }
            });
          }

          if (popperOptions.modifiers) {
            var preventOverflowModifier = popperOptions.modifiers.find(function (v) {
              return v.name === "preventOverflow";
            });

            if (preventOverflowModifier && !preventOverflowModifier.enabled) {
              var hideModifier = popperOptions.modifiers.find(function (v) {
                return v.name === "preventOverflow";
              });
              hideModifier && (hideModifier.enabled = !1);
            }
          }

          this._determineArrowColor();

          popperOptions.modifiers = popperOptions.modifiers.concat(this.popperOptions.popperModifiers);
          this.popperInstance = Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_4__["createPopper"])(this.referenceObject, this.popperViewRef.nativeElement, popperOptions);
          this.toggleVisibility(true);
          this._globalResize = this._renderer.listen("document", "resize", this.onDocumentResize.bind(this));
        }
      }, {
        key: "showOnLeave",
        value: function showOnLeave() {
          this.isMouseOver = false;

          if (this.popperOptions.trigger !== _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_3__["NgxPopperjsTriggers"].hover && !this.popperOptions.hideOnMouseLeave) {
            return;
          }

          this.hide();
        }
      }, {
        key: "toggleVisibility",
        value: function toggleVisibility(state) {
          if (!state) {
            this.opacity = 0;
            this.displayType = "none";
            this.ariaHidden = "true";
            this.state = false;
          } else {
            this.opacity = 1;
            this.displayType = "block";
            this.ariaHidden = "false";
            this.state = true;
          } // tslint:disable-next-line:no-string-literal


          if (!this._changeDetectorRef["destroyed"]) {
            this._changeDetectorRef.detectChanges();
          }
        }
      }, {
        key: "update",
        value: function update() {
          this.popperInstance && this.popperInstance.update();
        } // TODO: check if this function might have had a purpose (unused at this time)
        // private _clearGlobalResize() {
        //   this._globalResize && typeof this._globalResize === "function" && this._globalResize();
        // }

      }, {
        key: "_determineArrowColor",
        value: function _determineArrowColor() {
          var _this = this;

          ["background-color", "backgroundColor"].some(function (clr) {
            if (!_this.popperOptions.styles) {
              return !1;
            }

            if (_this.popperOptions.styles.hasOwnProperty(clr)) {
              _this.arrowColor = _this.popperOptions.styles[clr];
              return !0;
            }

            return !1;
          });
        }
      }]);

      return NgxPopperjsContentComponent;
    }();

    NgxPopperjsContentComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("popperViewRef", {
      "static": !0
    })], NgxPopperjsContentComponent.prototype, "popperViewRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseover")], NgxPopperjsContentComponent.prototype, "onMouseOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave")], NgxPopperjsContentComponent.prototype, "showOnLeave", null);
    NgxPopperjsContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // tslint:disable-next-line:component-selector
      selector: "popper-content",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ngx-popperjs-content.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popperjs-content.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ngx-popperjs-content.component.scss */
      "../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popperjs-content.component.scss"))["default"]]
    })], NgxPopperjsContentComponent);
    /***/
  },

  /***/
  "../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popperjs-content.component.scss":
  /*!****************************************************************************************!*\
    !*** ../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popperjs-content.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function ngxPopperjsSrcLibNgxPopperjsContentNgxPopperjsContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "popper-content {\n  position: relative;\n  display: block; }\n\n.ngxp__container {\n  display: none;\n  position: absolute;\n  border-radius: 3px;\n  border: 1px solid grey;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  padding: 10px; }\n\n.ngxp__container.ngxp__animation {\n    -webkit-animation: ngxp-fadeIn 150ms ease-out;\n    animation: ngxp-fadeIn 150ms ease-out; }\n\n.ngxp__container > .ngxp__arrow,\n  .ngxp__container > .ngxp__arrow:before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    z-index: -1; }\n\n.ngxp__container > .ngxp__arrow:before {\n    transform: rotate(45deg);\n    content: '';\n    background: #FFF;\n    top: 0;\n    left: 0; }\n\n.ngxp__container[data-popper-placement^='top'] > .ngxp__arrow {\n    bottom: -4px; }\n\n.ngxp__container[data-popper-placement^='bottom'] > .ngxp__arrow {\n    top: -4px; }\n\n.ngxp__container[data-popper-placement^='left'] > .ngxp__arrow {\n    right: -4px; }\n\n.ngxp__container[data-popper-placement^='right'] > .ngxp__arrow {\n    left: -4px; }\n\n.ngxp__container[x-placement^=\"right\"] > .ngxp__arrow.__force-arrow {\n    border-top-color: transparent !important;\n    border-bottom-color: transparent !important;\n    border-left-color: transparent !important; }\n\n.ngxp__container[x-placement^=\"left\"] {\n    margin-right: 5px; }\n\n.ngxp__container[x-placement^=\"left\"] > .ngxp__arrow {\n    border-width: 5px 0 5px 5px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    right: -5px;\n    top: calc(50% - 5px);\n    margin-left: 0;\n    margin-right: 0; }\n\n.ngxp__container[x-placement^=\"left\"] > .ngxp__arrow.__force-arrow {\n    border-top-color: transparent !important;\n    border-bottom-color: transparent !important;\n    border-right-color: transparent !important; }\n\n@-webkit-keyframes ngxp-fadeIn {\n  0% {\n    display: none;\n    opacity: 0; }\n  1% {\n    display: block;\n    opacity: 0; }\n  100% {\n    display: block;\n    opacity: 1; } }\n\n@keyframes ngxp-fadeIn {\n  0% {\n    display: none;\n    opacity: 0; }\n  1% {\n    display: block;\n    opacity: 0; }\n  100% {\n    display: block;\n    opacity: 1; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wb3BwZXJqcy9zcmMvbGliL25neC1wb3BwZXJqcy1jb250ZW50L0M6XFxnaXRcXG5neC1wb3BwZXJqcy9wcm9qZWN0c1xcbmd4LXBvcHBlcmpzXFxzcmNcXGxpYlxcbmd4LXBvcHBlcmpzLWNvbnRlbnRcXG5neC1wb3BwZXJqcy1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsc0NBQXNDO0VBQ3RDLGFBQWEsRUFBQTs7QUFOZjtJQVNJLDZDQUE2QztJQUc3QyxxQ0FBcUMsRUFBQTs7QUFaekM7O0lBa0JJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVcsRUFBQTs7QUFyQmY7SUEyQkksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLE9BQU8sRUFBQTs7QUEvQlg7SUFtQ0ksWUFBWSxFQUFBOztBQW5DaEI7SUF1Q0ksU0FBUyxFQUFBOztBQXZDYjtJQTJDSSxXQUFXLEVBQUE7O0FBM0NmO0lBK0NJLFVBQVUsRUFBQTs7QUEvQ2Q7SUFtREksd0NBQXdDO0lBQ3hDLDJDQUEyQztJQUMzQyx5Q0FBeUMsRUFBQTs7QUFyRDdDO0lBeURJLGlCQUFpQixFQUFBOztBQXpEckI7SUE2REksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWUsRUFBQTs7QUFwRW5CO0lBd0VJLHdDQUF3QztJQUN4QywyQ0FBMkM7SUFDM0MsMENBQTBDLEVBQUE7O0FBSTlDO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsVUFBVSxFQUFBO0VBR1o7SUFDRSxjQUFjO0lBQ2QsVUFBVSxFQUFBO0VBR1o7SUFDRSxjQUFjO0lBQ2QsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUNFLGFBQWE7SUFDYixVQUFVLEVBQUE7RUFHWjtJQUNFLGNBQWM7SUFDZCxVQUFVLEVBQUE7RUFHWjtJQUNFLGNBQWM7SUFDZCxVQUFVLEVBQUEsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcG9wcGVyanMvc3JjL2xpYi9uZ3gtcG9wcGVyanMtY29udGVudC9uZ3gtcG9wcGVyanMtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBvcHBlci1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5uZ3hwX19jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICYubmd4cF9fYW5pbWF0aW9uIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBuZ3hwLWZhZGVJbiAxNTBtcyBlYXNlLW91dDtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBuZ3hwLWZhZGVJbiAxNTBtcyBlYXNlLW91dDtcclxuICAgIC1vLWFuaW1hdGlvbjogbmd4cC1mYWRlSW4gMTUwbXMgZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb246IG5neHAtZmFkZUluIDE1MG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcblxyXG4gID4gLm5neHBfX2Fycm93LFxyXG4gID4gLm5neHBfX2Fycm93OmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbiAgPiAubmd4cF9fYXJyb3c6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49J3RvcCddID4gLm5neHBfX2Fycm93IHtcclxuICAgIGJvdHRvbTogLTRweDtcclxuICB9XHJcblxyXG4gICZbZGF0YS1wb3BwZXItcGxhY2VtZW50Xj0nYm90dG9tJ10gPiAubmd4cF9fYXJyb3cge1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gIH1cclxuXHJcbiAgJltkYXRhLXBvcHBlci1wbGFjZW1lbnRePSdsZWZ0J10gPiAubmd4cF9fYXJyb3cge1xyXG4gICAgcmlnaHQ6IC00cHg7XHJcbiAgfVxyXG5cclxuICAmW2RhdGEtcG9wcGVyLXBsYWNlbWVudF49J3JpZ2h0J10gPiAubmd4cF9fYXJyb3cge1xyXG4gICAgbGVmdDogLTRweDtcclxuICB9XHJcblxyXG4gICZbeC1wbGFjZW1lbnRePVwicmlnaHRcIl0gPiAubmd4cF9fYXJyb3cuX19mb3JjZS1hcnJvdyB7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJlt4LXBsYWNlbWVudF49XCJsZWZ0XCJdIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuXHJcbiAgJlt4LXBsYWNlbWVudF49XCJsZWZ0XCJdID4gLm5neHBfX2Fycm93IHtcclxuICAgIGJvcmRlci13aWR0aDogNXB4IDAgNXB4IDVweDtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcmlnaHQ6IC01cHg7XHJcbiAgICB0b3A6IGNhbGMoNTAlIC0gNXB4KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgJlt4LXBsYWNlbWVudF49XCJsZWZ0XCJdID4gLm5neHBfX2Fycm93Ll9fZm9yY2UtYXJyb3cge1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbmd4cC1mYWRlSW4ge1xyXG4gIDAlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMSUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5neHAtZmFkZUluIHtcclxuICAwJSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDElIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "../ngx-popperjs/src/lib/ngx-popperjs.module.ts":
  /*!******************************************************!*\
    !*** ../ngx-popperjs/src/lib/ngx-popperjs.module.ts ***!
    \******************************************************/

  /*! exports provided: NgxPopperjsModule */

  /***/
  function ngxPopperjsSrcLibNgxPopperjsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsModule", function () {
      return NgxPopperjsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_popperjs_ngx_popperjs_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ngx-popperjs/ngx-popperjs.directive */
    "../ngx-popperjs/src/lib/ngx-popperjs/ngx-popperjs.directive.ts");
    /* harmony import */


    var _ngx_popperjs_content_ngx_popper_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./ngx-popperjs-content/ngx-popper-content.component */
    "../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popper-content.component.ts");
    /* harmony import */


    var _models_ngx_popperjs_defaults_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./models/ngx-popperjs-defaults.model */
    "../ngx-popperjs/src/lib/models/ngx-popperjs-defaults.model.ts");

    var NgxPopperjsModule_1; //

    var NgxPopperjsModule = NgxPopperjsModule_1 = /*#__PURE__*/function () {
      function NgxPopperjsModule() {
        _classCallCheck(this, NgxPopperjsModule);
      }

      _createClass(NgxPopperjsModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          var popperBaseOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: NgxPopperjsModule_1,
            providers: [{
              provide: _models_ngx_popperjs_defaults_model__WEBPACK_IMPORTED_MODULE_5__["NGX_POPPERJS_DEFAULTS"],
              useValue: popperBaseOptions
            }]
          };
        }
      }]);

      return NgxPopperjsModule;
    }();

    NgxPopperjsModule = NgxPopperjsModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_ngx_popperjs_content_ngx_popper_content_component__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsContentComponent"], _ngx_popperjs_ngx_popperjs_directive__WEBPACK_IMPORTED_MODULE_3__["NgxPopperjsDirective"]],
      entryComponents: [_ngx_popperjs_content_ngx_popper_content_component__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsContentComponent"]],
      exports: [_ngx_popperjs_content_ngx_popper_content_component__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsContentComponent"], _ngx_popperjs_ngx_popperjs_directive__WEBPACK_IMPORTED_MODULE_3__["NgxPopperjsDirective"]]
    })], NgxPopperjsModule);
    /***/
  },

  /***/
  "../ngx-popperjs/src/lib/ngx-popperjs/ngx-popperjs.directive.ts":
  /*!**********************************************************************!*\
    !*** ../ngx-popperjs/src/lib/ngx-popperjs/ngx-popperjs.directive.ts ***!
    \**********************************************************************/

  /*! exports provided: NgxPopperjsDirective */

  /***/
  function ngxPopperjsSrcLibNgxPopperjsNgxPopperjsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsDirective", function () {
      return NgxPopperjsDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_popperjs_content_ngx_popper_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ngx-popperjs-content/ngx-popper-content.component */
    "../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popper-content.component.ts");
    /* harmony import */


    var _models_ngx_popperjs_placements_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/ngx-popperjs-placements.model */
    "../ngx-popperjs/src/lib/models/ngx-popperjs-placements.model.ts");
    /* harmony import */


    var _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/ngx-popperjs-triggers.model */
    "../ngx-popperjs/src/lib/models/ngx-popperjs-triggers.model.ts");
    /* harmony import */


    var _models_ngx_popperjs_defaults_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/ngx-popperjs-defaults.model */
    "../ngx-popperjs/src/lib/models/ngx-popperjs-defaults.model.ts");

    var NgxPopperjsDirective_1; // tslint:disable:no-input-rename

    var NgxPopperjsDirective = NgxPopperjsDirective_1 = /*#__PURE__*/function () {
      function NgxPopperjsDirective(_viewContainerRef, _changeDetectorRef, _resolver, _elementRef, _renderer) {
        var _popperDefaults = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

        _classCallCheck(this, NgxPopperjsDirective);

        this._viewContainerRef = _viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._resolver = _resolver;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._popperDefaults = _popperDefaults;
        this.hideTimeout = 0;
        this.popperOnHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.popperOnShown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.popperOnUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeoutAfterShow = 0;
        this._eventListeners = [];
        this._globalEventListeners = [];
        this._popperContentClass = _ngx_popperjs_content_ngx_popper_content_component__WEBPACK_IMPORTED_MODULE_2__["NgxPopperjsContentComponent"];
        this._popperPlacement = _models_ngx_popperjs_placements_model__WEBPACK_IMPORTED_MODULE_3__["NgxPopperjsPlacements"].AUTO;
        this._shown = false;
        this._subscriptions = [];
        NgxPopperjsDirective_1.baseOptions = Object.assign({}, NgxPopperjsDirective_1.baseOptions, this._popperDefaults);
      }

      _createClass(NgxPopperjsDirective, [{
        key: "applyTriggerListeners",
        value: function applyTriggerListeners() {
          var _this2 = this;

          switch (this.showTrigger) {
            case _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsTriggers"].click:
              this._pushListener("click", this.toggle.bind(this));

              break;

            case _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsTriggers"].mousedown:
              this._pushListener("mousedown", this.toggle.bind(this));

              break;

            case _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsTriggers"].hover:
              this._pushListener("mouseenter", this.scheduledShow.bind(this, this.showDelay));

              ["touchend", "touchcancel", "mouseleave"].forEach(function (eventName) {
                _this2._pushListener(eventName, _this2.scheduledHide.bind(_this2, null, _this2.hideTimeout));
              });
              break;
          }

          if (this.showTrigger !== _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsTriggers"].hover && this.hideOnMouseLeave) {
            ["touchend", "touchcancel", "mouseleave"].forEach(function (eventName) {
              _this2._pushListener(eventName, _this2.scheduledHide.bind(_this2, null, _this2.hideTimeout));
            });
          }
        }
      }, {
        key: "getRefElement",
        value: function getRefElement() {
          return this.targetElement || this._viewContainerRef.element.nativeElement;
        }
      }, {
        key: "hide",
        value: function hide() {
          if (this.disabled) {
            return;
          }

          if (!this._shown) {
            this._overrideShowTimeout();

            return;
          }

          this._shown = false;

          if (this._popperContentRef) {
            this._popperContentRef.instance.hide();
          } else {
            this._popperContent.hide();
          }

          this.popperOnHidden.emit(this);

          this._clearGlobalEventListeners();
        }
      }, {
        key: "hideOnClickOutsideHandler",
        value: function hideOnClickOutsideHandler($event) {
          // TODO: check if $event.target is a better alternative here
          if (this.disabled || !this.hideOnClickOutside || $event.srcElement && $event.srcElement === this._popperContent.elRef.nativeElement || this._popperContent.elRef.nativeElement.contains($event.srcElement)) {
            return;
          }

          this.scheduledHide($event, this.hideTimeout);
        }
      }, {
        key: "hideOnScrollHandler",
        value: function hideOnScrollHandler($event) {
          if (this.disabled || !this.hideOnScroll) {
            return;
          }

          this.scheduledHide($event, this.hideTimeout);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.popperDisabled && changes.popperDisabled.currentValue) {
            this.hide();
          }

          if (changes.content && !changes.content.firstChange && typeof changes.content.currentValue === "string") {
            this._popperContent.text = changes.content.currentValue;
          }

          if (changes.applyClass && !changes.applyClass.firstChange && typeof changes.applyClass.currentValue === "string") {
            this._popperContent.popperOptions.applyClass = changes.applyClass.currentValue;
          }

          if (changes.applyArrowClass && !changes.applyArrowClass.firstChange && typeof changes.applyArrowClass.currentValue === "string") {
            this._popperContent.popperOptions.applyArrowClass = changes.applyArrowClass.currentValue;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._subscriptions.forEach(function (sub) {
            return sub.unsubscribe && sub.unsubscribe();
          });

          this._subscriptions.length = 0;

          this._clearEventListeners();

          this._clearGlobalEventListeners();

          this._scheduledShowTimeout && clearTimeout(this._scheduledShowTimeout);
          this._scheduledHideTimeout && clearTimeout(this._scheduledHideTimeout);
          this._popperContent && this._popperContent.clean();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // Support legacy prop
          this.hideOnClickOutside = typeof this.hideOnClickOutside === "undefined" ? this.closeOnClickOutside : this.hideOnClickOutside;

          if (typeof this.content === "string") {
            var text = this.content;
            this._popperContent = this._constructContent();
            this._popperContent.text = text;
          } else {
            this._popperContent = this.content;
          }

          var popperRef = this._popperContent;
          popperRef.referenceObject = this.getRefElement();

          this._setContentProperties(popperRef);

          this._setDefaults();

          this.applyTriggerListeners();

          if (this.showOnStart) {
            this.scheduledShow();
          }
        }
      }, {
        key: "scheduledHide",
        value: function scheduledHide() {
          var _this3 = this;

          var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.hideTimeout;

          if (this.disabled) {
            return;
          }

          this._overrideShowTimeout();

          this._scheduledHideTimeout = setTimeout(function () {
            // TODO: check
            var toElement = $event ? $event.toElement : null;
            var popperContentView = _this3._popperContent.popperViewRef ? _this3._popperContent.popperViewRef.nativeElement : false;

            if (!popperContentView || popperContentView === toElement || popperContentView.contains(toElement) || _this3.content.isMouseOver) {
              return;
            }

            _this3.hide();

            _this3._applyChanges();
          }, delay);
        }
      }, {
        key: "scheduledShow",
        value: function scheduledShow() {
          var _this4 = this;

          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

          if (this.disabled) {
            return;
          }

          this._overrideHideTimeout();

          this._scheduledShowTimeout = setTimeout(function () {
            _this4.show();

            _this4._applyChanges();
          }, delay);
        }
      }, {
        key: "show",
        value: function show() {
          if (this._shown) {
            this._overrideHideTimeout();

            return;
          }

          this._shown = true;
          var popperRef = this._popperContent;
          var element = this.getRefElement();

          if (popperRef.referenceObject !== element) {
            popperRef.referenceObject = element;
          }

          this._setContentProperties(popperRef);

          popperRef.show();
          this.popperOnShown.emit(this);

          if (this.timeoutAfterShow > 0) {
            this.scheduledHide(null, this.timeoutAfterShow);
          }

          this._globalEventListeners.push(this._renderer.listen("document", "touchend", this.hideOnClickOutsideHandler.bind(this)));

          this._globalEventListeners.push(this._renderer.listen("document", "click", this.hideOnClickOutsideHandler.bind(this))); // tslint:disable-next-line:max-line-length


          this._globalEventListeners.push(this._renderer.listen(this._getScrollParent(this.getRefElement()), "scroll", this.hideOnScrollHandler.bind(this)));
        }
      }, {
        key: "toggle",
        value: function toggle() {
          if (this.disabled) {
            return;
          }

          this._shown ? this.scheduledHide(null, this.hideTimeout) : this.scheduledShow();
        }
      }, {
        key: "_applyChanges",
        value: function _applyChanges() {
          this._changeDetectorRef.markForCheck();

          this._changeDetectorRef.detectChanges();
        }
      }, {
        key: "_clearEventListeners",
        value: function _clearEventListeners() {
          this._eventListeners.forEach(function (evt) {
            evt && typeof evt === "function" && evt();
          });

          this._eventListeners.length = 0;
        }
      }, {
        key: "_clearGlobalEventListeners",
        value: function _clearGlobalEventListeners() {
          this._globalEventListeners.forEach(function (evt) {
            evt && typeof evt === "function" && evt();
          });

          this._globalEventListeners.length = 0;
        }
      }, {
        key: "_constructContent",
        value: function _constructContent() {
          var factory = this._resolver.resolveComponentFactory(this._popperContentClass);

          this._popperContentRef = this._viewContainerRef.createComponent(factory);
          return this._popperContentRef.instance;
        }
      }, {
        key: "_getScrollParent",
        value: function _getScrollParent(node) {
          var isElement = node instanceof HTMLElement;
          var overflowY = isElement && window.getComputedStyle(node).overflowY;
          var isScrollable = overflowY !== "visible" && overflowY !== "hidden";

          if (!node) {
            return null;
          } else if (isScrollable && node.scrollHeight >= node.clientHeight) {
            return node;
          }

          return this._getScrollParent(node.parentNode) || document;
        }
      }, {
        key: "_onPopperUpdate",
        value: function _onPopperUpdate(event) {
          this.popperOnUpdate.emit(event);
        }
      }, {
        key: "_overrideHideTimeout",
        value: function _overrideHideTimeout() {
          if (this._scheduledHideTimeout) {
            clearTimeout(this._scheduledHideTimeout);
            this._scheduledHideTimeout = 0;
          }
        }
      }, {
        key: "_overrideShowTimeout",
        value: function _overrideShowTimeout() {
          if (this._scheduledShowTimeout) {
            clearTimeout(this._scheduledShowTimeout);
            this._scheduledHideTimeout = 0;
          }
        }
      }, {
        key: "_pushListener",
        value: function _pushListener(name, cb) {
          this._eventListeners.push(this._renderer.listen(this._elementRef.nativeElement, name, cb));
        }
      }, {
        key: "_setContentProperties",
        value: function _setContentProperties(popperRef) {
          popperRef.popperOptions = NgxPopperjsDirective_1.assignDefined(popperRef.popperOptions, NgxPopperjsDirective_1.baseOptions, {
            showDelay: this.showDelay,
            disableAnimation: this.disableAnimation,
            disableDefaultStyling: this.disableStyle,
            placement: this.placement,
            boundariesElement: this.boundariesElement,
            trigger: this.showTrigger,
            positionFixed: this.positionFixed,
            popperModifiers: this.popperModifiers,
            ariaDescribe: this.ariaDescribe,
            ariaRole: this.ariaRole,
            applyClass: this.applyClass,
            applyArrowClass: this.popperApplyArrowClass,
            hideOnMouseLeave: this.hideOnMouseLeave,
            styles: this.styles,
            appendTo: this.popperAppendTo,
            preventOverflow: this.preventOverflow
          });
          popperRef.onUpdate = this._onPopperUpdate.bind(this);

          this._subscriptions.push(popperRef.onHidden.subscribe(this.hide.bind(this)));
        }
      }, {
        key: "_setDefaults",
        value: function _setDefaults() {
          var _this5 = this;

          ["showDelay", "hideOnScroll", "hideOnMouseLeave", "hideOnClickOutside", "ariaRole", "ariaDescribe"].forEach(function (key) {
            _this5[key] = _this5[key] === void 0 ? NgxPopperjsDirective_1.baseOptions[key] : _this5[key];
          });
          this.showTrigger = this.showTrigger === void 0 ? NgxPopperjsDirective_1.baseOptions.trigger : this.showTrigger;
          this.styles = this.styles === void 0 ? Object.assign({}, NgxPopperjsDirective_1.baseOptions.styles) : this.styles;
        }
      }, {
        key: "placement",
        set: function set(newValue) {
          this._popperPlacement = newValue;

          if (this._popperContent) {
            this._popperContent.popperOptions.placement = newValue;

            if (!this._shown) {
              return;
            }

            this._popperContent.popperInstance.setOptions(this._popperContent.popperOptions);
          }
        },
        get: function get() {
          return this._popperPlacement;
        }
      }], [{
        key: "assignDefined",
        value: function assignDefined(target) {
          for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            sources[_key - 1] = arguments[_key];
          }

          for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
            var source = _sources[_i];

            for (var _i2 = 0, _Object$keys = Object.keys(source); _i2 < _Object$keys.length; _i2++) {
              var key = _Object$keys[_i2];
              var val = source[key];

              if (val !== undefined) {
                target[key] = val;
              }
            }
          }

          return target;
        }
      }]);

      return NgxPopperjsDirective;
    }();

    NgxPopperjsDirective.baseOptions = {
      showDelay: 0,
      placement: _models_ngx_popperjs_placements_model__WEBPACK_IMPORTED_MODULE_3__["NgxPopperjsPlacements"].AUTO,
      hideOnClickOutside: true,
      hideOnMouseLeave: false,
      hideOnScroll: false,
      showTrigger: _models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsTriggers"].hover,
      appendTo: undefined,
      ariaRole: "popper",
      ariaDescribe: "",
      styles: {}
    };

    NgxPopperjsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_models_ngx_popperjs_defaults_model__WEBPACK_IMPORTED_MODULE_5__["NGX_POPPERJS_DEFAULTS"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperApplyClass")], NgxPopperjsDirective.prototype, "applyClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperAriaDescribeBy")], NgxPopperjsDirective.prototype, "ariaDescribe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperAriaRole")], NgxPopperjsDirective.prototype, "ariaRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperBoundaries")], NgxPopperjsDirective.prototype, "boundariesElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperCloseOnClickOutside")], NgxPopperjsDirective.prototype, "closeOnClickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popper")], NgxPopperjsDirective.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperDisableAnimation")], NgxPopperjsDirective.prototype, "disableAnimation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperDisabled")], NgxPopperjsDirective.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperDisableStyle")], NgxPopperjsDirective.prototype, "disableStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperHideOnClickOutside")], NgxPopperjsDirective.prototype, "hideOnClickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperHideOnMouseLeave")], NgxPopperjsDirective.prototype, "hideOnMouseLeave", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperHideOnScroll")], NgxPopperjsDirective.prototype, "hideOnScroll", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperTimeout")], NgxPopperjsDirective.prototype, "hideTimeout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperPlacement")], NgxPopperjsDirective.prototype, "placement", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxPopperjsDirective.prototype, "popperAppendTo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxPopperjsDirective.prototype, "popperApplyArrowClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NgxPopperjsDirective.prototype, "popperModifiers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxPopperjsDirective.prototype, "popperOnHidden", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxPopperjsDirective.prototype, "popperOnShown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NgxPopperjsDirective.prototype, "popperOnUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperPositionFixed")], NgxPopperjsDirective.prototype, "positionFixed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperPreventOverflow")], NgxPopperjsDirective.prototype, "preventOverflow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperDelay")], NgxPopperjsDirective.prototype, "showDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperShowOnStart")], NgxPopperjsDirective.prototype, "showOnStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperTrigger")], NgxPopperjsDirective.prototype, "showTrigger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperStyles")], NgxPopperjsDirective.prototype, "styles", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperTarget")], NgxPopperjsDirective.prototype, "targetElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("popperTimeoutAfterShow")], NgxPopperjsDirective.prototype, "timeoutAfterShow", void 0);
    NgxPopperjsDirective = NgxPopperjsDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line:directive-selector
      selector: "[popper]"
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_models_ngx_popperjs_defaults_model__WEBPACK_IMPORTED_MODULE_5__["NGX_POPPERJS_DEFAULTS"]))], NgxPopperjsDirective);
    /***/
  },

  /***/
  "../ngx-popperjs/src/public-api.ts":
  /*!*****************************************!*\
    !*** ../ngx-popperjs/src/public-api.ts ***!
    \*****************************************/

  /*! exports provided: NgxPopperjsPlacements, NgxPopperjsTriggers, NgxPopperjsContentComponent, NgxPopperjsModule */

  /***/
  function ngxPopperjsSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _lib_models_ngx_popperjs_placements_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/models/ngx-popperjs-placements.model */
    "../ngx-popperjs/src/lib/models/ngx-popperjs-placements.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsPlacements", function () {
      return _lib_models_ngx_popperjs_placements_model__WEBPACK_IMPORTED_MODULE_1__["NgxPopperjsPlacements"];
    });
    /* harmony import */


    var _lib_models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/models/ngx-popperjs-triggers.model */
    "../ngx-popperjs/src/lib/models/ngx-popperjs-triggers.model.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsTriggers", function () {
      return _lib_models_ngx_popperjs_triggers_model__WEBPACK_IMPORTED_MODULE_2__["NgxPopperjsTriggers"];
    });
    /* harmony import */


    var _lib_ngx_popperjs_content_ngx_popper_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/ngx-popperjs-content/ngx-popper-content.component */
    "../ngx-popperjs/src/lib/ngx-popperjs-content/ngx-popper-content.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsContentComponent", function () {
      return _lib_ngx_popperjs_content_ngx_popper_content_component__WEBPACK_IMPORTED_MODULE_3__["NgxPopperjsContentComponent"];
    });
    /* harmony import */


    var _lib_ngx_popperjs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/ngx-popperjs.module */
    "../ngx-popperjs/src/lib/ngx-popperjs.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsModule", function () {
      return _lib_ngx_popperjs_module__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsModule"];
    });
    /*
     * Public API Surface of ngx-popperjs
     */

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "strong {\n  color: #ff6b81; }\n\n.pop-generic-section {\n  padding: 50px 40px;\n  max-width: 900px;\n  margin: 0 auto;\n  border-bottom: 1px solid #362c4f; }\n\n.pop-top-section {\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NTMiIHZpZXdCb3g9IjAgMCAxNDQwIDY1MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOmxpZ2h0ZW4iIG9wYWNpdHk9IjAuMSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNMTk5My43MSAwSC01NTMuNzFWMTk5OC42M0gxOTkzLjcxVjBaIiBmaWxsPSIjMkM0Qjk1Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi42NzZDNTUwLjI5MyAyMTkuOTYzIDMxMC4yOTQgMTAyLjk5IDAgLTQ4LjI0MjdIMTgwQzQwNi42NjMgODguNDQzNSA1ODYuNjYzIDIwNS40MTcgNzIwIDMwMi42NzZaIiBmaWxsPSIjRkZGQ0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi42NzZDNjI4LjE1NyAxOTQuNjA3IDUwOC4xNTYgNzcuNjM0NSAzNjAgLTQ4LjI0MjdINTQwQzYxMy4xNzggNzAuOTc3NiA2NzMuMTc4IDE4Ny45NTEgNzIwIDMwMi42NzZaIiBmaWxsPSIjRkZGQ0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi42NzZDNzIwIDE4NS43MDMgNzIwIDY4LjczMDMgNzIwIC00OC4yNDI3SDkwMEM4MjYuODIyIDcwLjk3NzYgNzY2LjgyMiAxODcuOTUxIDcyMCAzMDIuNjc2WiIgZmlsbD0iI0ZGRkNFMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuNjc2QzgxMS44NDMgMTk0LjYwNyA5MzEuODQ0IDc3LjYzNDUgMTA4MCAtNDguMjQyN0gxMjYwQzEwMzMuMzQgODguNDQzNSA4NTMuMzM3IDIwNS40MTcgNzIwIDMwMi42NzZaIiBmaWxsPSIjRkZGQ0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi42NzZDODg5LjcwNyAyMTkuOTYzIDExMjkuNzEgMTAyLjk5IDE0NDAgLTQ4LjI0MjdWMzkuNDg2OUMxMTU5LjU1IDE0OS45NTkgOTE5LjU1MiAyMzcuNjg5IDcyMCAzMDIuNjc2WiIgZmlsbD0iI0ZGRkNFMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2MCA2NTNIMTgwQzQwNi42NjMgNTE2LjQyOSA1ODYuNjYzIDM5OS41NTUgNzIwIDMwMi4zNzlDNjI4LjE1NyA0MTAuMzU1IDUwOC4xNTYgNTI3LjIyOSAzNjAgNjUzWiIgZmlsbD0iI0ZGRkNFMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNjUzVjU2NS4zNDVDMjgwLjQ0NyA0NTQuOTY2IDUyMC40NDggMzY3LjMxIDcyMCAzMDIuMzc5QzU1MC4yOTMgMzg1LjAyMSAzMTAuMjk0IDUwMS44OTUgMCA2NTNaIiBmaWxsPSIjRkZGQ0UxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA0NzcuNjg5VjM5MC4wMzRDMjQ0LjYxMSAzNTQuMzk4IDQ4NC42MTIgMzI1LjE4IDcyMCAzMDIuMzc5QzQ5OC4yNyAzNDcuMTA0IDI1OC4yNyA0MDUuNTQxIDAgNDc3LjY4OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDMwMi4zNzlWMjE0LjcyM0MyNDQuNjExIDI1MC4zNTkgNDg0LjYxMiAyNzkuNTc4IDcyMCAzMDIuMzc5QzQ4MCAzMDIuMzc5IDI0MCAzMDIuMzc5IDAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDEyNy4wNjhWMzkuNDEyNkMyODAuNDQ3IDE0OS43OTIgNTIwLjQ0OCAyMzcuNDQ3IDcyMCAzMDIuMzc5QzQ5OC4yNyAyNTcuNjUzIDI1OC4yNyAxOTkuMjE2IDAgMTI3LjA2OFoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM5NDEuNzMgMjU3LjUyNiAxMTgxLjczIDE5OC45MjIgMTQ0MCAxMjYuNTY4VjIxNC40NzRDMTE5NS4zOSAyNTAuMjExIDk1NS4zODggMjc5LjUxMyA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM5NjAgMzAyLjM3OSAxMjAwIDMwMi4zNzkgMTQ0MCAzMDIuMzc5VjM5MC4yODRDMTE5NS4zOSAzNTQuNTQ2IDk1NS4zODggMzI1LjI0NCA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM5NDEuNzMgMzQ3LjA2MSAxMTgxLjczIDQwNS40NDMgMTQ0MCA0NzcuNTIzVjU2NS4wOTVDMTE1OS41NSA0NTQuODIxIDkxOS41NTIgMzY3LjI0OSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM4ODkuNzA3IDM4NS4wMjEgMTEyOS43MSA1MDEuODk1IDE0NDAgNjUzSDEyNjBDMTAzMy4zNCA1MTYuNDI5IDg1My4zMzcgMzk5LjU1NSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM4MTIuMTA1IDQxMC4zNTUgOTMyLjQ0OCA1MjcuMjI5IDEwODEuMDMgNjUzSDkwMC41MTNDODI3LjEyNiA1MzMuODgxIDc2Ni45NTUgNDE3LjAwNyA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM3MjAgNDE5LjI1MyA3MjAgNTM2LjEyNiA3MjAgNjUzSDUzOS40ODdDNjEyLjg3NCA1MzMuODgxIDY3My4wNDUgNDE3LjAwNyA3MjAgMzAyLjM3OVoiIGZpbGw9IiNGRkZDRTEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM1ODYuNjYzIDIwNS4yMDIgNDA2LjY2MyA4OC4zMjc4IDE4MCAtNDguMjQyN0gzNjBDNTA4LjE1NiA3Ny41MjggNjI4LjE1NyAxOTQuNDAxIDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5QzY3My4xNzggMTg3Ljc1MSA2MTMuMTc4IDcwLjg3NjcgNTQwIC00OC4yNDI3SDcyMEM3MjAgNjguNjMxMyA3MjAgMTg1LjUwNSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM3NjYuODIyIDE4Ny43NTEgODI2LjgyMiA3MC44NzY3IDkwMCAtNDguMjQyN0gxMDgwQzkzMS44NDQgNzcuNTI4IDgxMS44NDMgMTk0LjQwMSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03MjAgMzAyLjM3OUM4NTMuMzM3IDIwNS4yMDIgMTAzMy4zNCA4OC4zMjc4IDEyNjAgLTQ4LjI0MjdIMTQ0MEMxMTI5LjcxIDEwMi44NjIgODg5LjcwNyAyMTkuNzM3IDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5QzkxOS41NTIgMjM3LjUwOSAxMTU5LjU1IDE0OS45MzcgMTQ0MCAzOS42NjI0VjEyNy4yMzRDMTE4MS43MyAxOTkuMzE0IDk0MS43MyAyNTcuNjk2IDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5Qzk1NS4zODggMjc5LjUxMyAxMTk1LjM5IDI1MC4yMTEgMTQ0MCAyMTQuNDc0VjMwMi4zNzlDMTIwMCAzMDIuMzc5IDk2MCAzMDIuMzc5IDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5Qzk1NS4zODggMzI1LjI0NCAxMTk1LjM5IDM1NC41NDYgMTQ0MCAzOTAuMjg0VjQ3OC4xODlDMTE4MS43MyA0MDUuODM1IDk0MS43MyAzNDcuMjMxIDcyMCAzMDIuMzc5WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcyMCAzMDIuMzc5QzkxOS41NTIgMzY3LjMxIDExNTkuNTUgNDU0Ljk2NiAxNDQwIDU2NS4zNDVWNjUzQzExMjkuNzEgNTAxLjg5NSA4ODkuNzA3IDM4NS4wMjEgNzIwIDMwMi4zNzlaIiBmaWxsPSIjRTk5OTk0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzIwIDMwMi4zNzlDODUzLjIxIDM5OS41NTUgMTAzMy4wNCA1MTYuNDI5IDEyNTkuNDkgNjUzSDEwNzkuNjZDOTMxLjY0MyA1MjcuMjI5IDgxMS43NTYgNDEwLjM1NSA3MjAgMzAyLjM3OVoiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05MDAuNTEzIDY1M0g3MjBDNzIwIDUzNi4xMjYgNzIwIDQxOS4yNTMgNzIwIDMwMi4zNzlDNzY2Ljk1NSA0MTcuMDA3IDgyNy4xMjYgNTMzLjg4MSA5MDAuNTEzIDY1M1oiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NDAgNjUzSDM2MEM1MDguMTU2IDUyNy4yMjkgNjI4LjE1NyA0MTAuMzU1IDcyMCAzMDIuMzc5QzY3My4xNzggNDE3LjAwNyA2MTMuMTc4IDUzMy44ODEgNTQwIDY1M1oiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODAgNjUzSDBDMzEwLjI5NCA1MDEuODk1IDU1MC4yOTMgMzg1LjAyMSA3MjAgMzAyLjM3OUM1ODYuNjYzIDM5OS41NTUgNDA2LjY2MyA1MTYuNDI5IDE4MCA2NTNaIiBmaWxsPSIjRTk5OTk0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA1NjUuMzQ1VjQ3Ny42ODlDMjU4LjI3IDQwNS41NDEgNDk4LjI3IDM0Ny4xMDQgNzIwIDMwMi4zNzlDNTIwLjQ0OCAzNjcuMzEgMjgwLjQ0NyA0NTQuOTY2IDAgNTY1LjM0NVoiIGZpbGw9IiNFOTk5OTQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDM5MC4wMzRWMzAyLjM3OUMyNDAgMzAyLjM3OSA0ODAgMzAyLjM3OSA3MjAgMzAyLjM3OUM0ODQuNjEyIDMyNS4xOCAyNDQuNjExIDM1NC4zOTggMCAzOTAuMDM0WiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMjE0LjcyM1YxMjcuMDY4QzI1OC4yNyAxOTkuMjE2IDQ5OC4yNyAyNTcuNjUzIDcyMCAzMDIuMzc5QzQ4NC42MTIgMjc5LjU3OCAyNDQuNjExIDI1MC4zNTkgMCAyMTQuNzIzWiIgZmlsbD0iI0U5OTk5NCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzkuNDEyNlYtNDguMjQyN0MzMTAuMjk0IDEwMi44NjIgNTUwLjI5MyAyMTkuNzM3IDcyMCAzMDIuMzc5QzUyMC40NDggMjM3LjQ0NyAyODAuNDQ3IDE0OS43OTIgMCAzOS40MTI2WiIgZmlsbD0iI0U5OTk5NCIvPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDAiPgo8cmVjdCB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NTMiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==), radial-gradient(500px, #fff, #fff1e1 20%, #ffa0b1);\n  width: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  text-align: center;\n  padding: 60px 25px 50px;\n  position: relative; }\n\n.pop-top-section > img.pop-angular-logo {\n    position: absolute;\n    width: 40px;\n    left: calc(50% - 20px);\n    top: calc(50% - 20px);\n    border-radius: 50%;\n    background-color: #FFF;\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5); }\n\n.pop-top-section > img.pop-popper-logo {\n    height: 200px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin-bottom: 24px;\n    display: inline-block; }\n\n.pop-top-section > h2 {\n    font-size: 36px; }\n\n.pop-install-section {\n  background: #c83b50;\n  padding: 15px 0;\n  font-weight: bold;\n  margin-bottom: 25px;\n  width: 100%;\n  text-align: center;\n  border-bottom: 1px solid #362c4f; }\n\n.pop-install-section > div {\n    padding: 0 40px;\n    max-width: 900px;\n    margin: 0 auto;\n    flex-direction: row;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white; }\n\n@media (max-width: 767px) {\n      .pop-install-section > div {\n        flex-direction: column; } }\n\n.pop-demo {\n  position: relative;\n  padding: 0 40px;\n  background-color: #2f263c;\n  border-bottom: 1px solid #362c4f; }\n\n.pop-demo > article {\n    position: relative;\n    display: grid;\n    grid-template-columns: 2fr 3fr;\n    align-items: start;\n    font-size: 17px;\n    padding: 50px 0;\n    border-bottom: 1px solid #362c4f; }\n\n.pop-demo > article:last-child {\n      border-bottom: 0; }\n\n@media (max-width: 991px) {\n      .pop-demo > article {\n        grid-template-columns: 1fr; } }\n\n.pop-demo > article .pop-popcorn-box {\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      width: 130px;\n      margin-left: -65px;\n      margin-top: -65px; }\n\n.pop-demo > article > div.pop-popcorn-wrap + div {\n      padding: 0 40px;\n      display: grid; }\n\n.pop-demo > article[pop-position] > div.pop-popcorn-wrap {\n      height: 450px;\n      position: relative; }\n\n.pop-demo > article[pop-theming] > div.pop-popcorn-wrap {\n      position: relative;\n      width: 100%;\n      border-radius: 10px;\n      border: 2px dashed #ff6b81;\n      background-color: #281e36;\n      height: 300px; }\n\n.pop-demo > article[pop-theming] > div.pop-popcorn-wrap .pop-popcorn-box {\n        width: 100px;\n        margin-left: -50px;\n        margin-top: -50px; }\n\n.pop-demo > article[pop-overflow] > div.pop-popcorn-wrap, .pop-demo > article[pop-flipping] > div.pop-popcorn-wrap {\n      position: relative;\n      width: 100%;\n      -webkit-scrollbar-color: #ffe69d transparent;\n      -moz-scrollbar-color: #ffe69d transparent;\n      -ms-scrollbar-color: #ffe69d transparent;\n      scrollbar-color: #ffe69d transparent;\n      border-radius: 10px;\n      overflow-y: scroll;\n      overscroll-behavior: contain;\n      height: 450px;\n      margin: 0 auto;\n      border: 2px dashed #ff6b81;\n      background-color: #281e36; }\n\n.pop-demo > article[pop-overflow] > div.pop-popcorn-wrap:before, .pop-demo > article[pop-flipping] > div.pop-popcorn-wrap:before {\n        content: '';\n        display: block;\n        width: 1px;\n        height: 600px; }\n\n.pop-demo > article[pop-overflow] > div.pop-popcorn-wrap:after, .pop-demo > article[pop-flipping] > div.pop-popcorn-wrap:after {\n        content: '';\n        display: block;\n        width: 1px;\n        height: 600px; }\n\n.pop-demo > article[pop-overflow] > div.pop-popcorn-wrap::-webkit-scrollbar, .pop-demo > article[pop-flipping] > div.pop-popcorn-wrap::-webkit-scrollbar {\n        -webkit-appearance: none;\n        width: 7px; }\n\n.pop-demo > article[pop-overflow] > div.pop-popcorn-wrap::-webkit-scrollbar-thumb, .pop-demo > article[pop-flipping] > div.pop-popcorn-wrap::-webkit-scrollbar-thumb {\n        border-radius: 4px;\n        background-color: #ffe69d;\n        -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5); }\n\n.pop-demo > article[pop-overflow] > div.pop-popcorn-wrap .pop-popcorn-box, .pop-demo > article[pop-flipping] > div.pop-popcorn-wrap .pop-popcorn-box {\n        position: relative;\n        left: 0;\n        width: 100px;\n        margin-left: 100px;\n        top: 0; }\n\n.pop-demo > article .pop-demo-placement-button {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      width: 50px;\n      height: 50px;\n      padding: 0;\n      border: none;\n      background: none;\n      transition: transform 0.4s cubic-bezier(0.54, 1.5, 0.38, 1.2);\n      cursor: pointer;\n      outline: 0;\n      will-change: transform;\n      -webkit-tap-highlight-color: transparent; }\n\n.pop-demo > article .pop-demo-placement-button:hover {\n        transform: scale(1.5); }\n\n.pop-demo > article .pop-demo-placement-button[data-placement^='top'] {\n        top: 0;\n        left: 50%;\n        margin-left: -25px; }\n\n.pop-demo > article .pop-demo-placement-button[data-placement^='bottom'] {\n        bottom: 0;\n        left: 50%;\n        margin-left: -25px; }\n\n.pop-demo > article .pop-demo-placement-button[data-placement='top-start'], .pop-demo > article .pop-demo-placement-button[data-placement='bottom-start'] {\n        left: calc(50% - 50px); }\n\n.pop-demo > article .pop-demo-placement-button[data-placement='top-end'], .pop-demo > article .pop-demo-placement-button[data-placement='bottom-end'] {\n        left: calc(50% + 50px); }\n\n.pop-demo > article .pop-demo-placement-button[data-placement^='right'] {\n        right: 0;\n        top: 50%;\n        margin-top: -25px; }\n\n.pop-demo > article .pop-demo-placement-button[data-placement^='left'] {\n        left: 0;\n        top: 50%;\n        margin-top: -25px; }\n\n.pop-demo > article .pop-demo-placement-button[data-placement='left-start'], .pop-demo > article .pop-demo-placement-button[data-placement='right-start'] {\n        top: calc(50% - 50px); }\n\n.pop-demo > article .pop-demo-placement-button[data-placement='left-end'], .pop-demo > article .pop-demo-placement-button[data-placement='right-end'] {\n        top: calc(50% + 50px); }\n\n.pop-demo > article .pop-demo-placement-button:focus > div {\n        box-shadow: 0 0 0 6px rgba(255, 100, 150, 0.4); }\n\n.pop-demo > article .pop-demo-placement-button > div {\n        width: 18px;\n        height: 18px;\n        border: 2px solid #ff6b81;\n        background: transparent;\n        border-radius: 50%; }\n\n.pop-demo > article .pop-demo-placement-button > div.selected {\n          width: 18px;\n          height: 18px;\n          border: 2px solid #ff6b81;\n          background: #ff6b81;\n          border-radius: 50%; }\n\nfooter {\n  text-align: center;\n  background-color: #1c1428;\n  padding: 25px 0;\n  color: #9479b9;\n  width: 100%; }\n\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10; }\n\n.terminal::before {\n  content: \"\\2022 \\2022 \\2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 34px;\n  line-height: 26px;\n  text-indent: 6px;\n  text-align: left;\n  height: 34px; }\n\n.terminal {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n  text-align: left;\n  padding-top: 44px; }\n\n.terminal ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wb3BwZXJqcy1yZXBvL3NyYy9hcHAvQzpcXGdpdFxcbmd4LXBvcHBlcmpzL3Byb2plY3RzXFxuZ3gtcG9wcGVyanMtcmVwb1xcc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1wb3BwZXJqcy1yZXBvL3NyYy9hcHAvQzpcXGdpdFxcbmd4LXBvcHBlcmpzL3Byb2plY3RzXFxuZ3gtcG9wcGVyanMtcmVwb1xcc3JjXFxzY3NzXFx2YXJzLnNjc3MiLCJwcm9qZWN0cy9uZ3gtcG9wcGVyanMtcmVwby9zcmMvYXBwL0M6XFxnaXRcXG5neC1wb3BwZXJqcy9wcm9qZWN0c1xcbmd4LXBvcHBlcmpzLXJlcG9cXHNyY1xcc2Nzc1xccmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsY0NENEIsRUFBQTs7QURJOUI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQ0NWcUIsRUFBQTs7QURhdkI7RUFDRSxxc1BBQXFzUDtFQUNyc1AsV0FBVztFQUNYLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFQcEI7SUFVSSxrQkFBa0I7SUFDbEIsV0NqQndCO0lEa0J4QixzQkFBNkM7SUFDN0MscUJBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsd0NBQXdDLEVBQUE7O0FBaEI1QztJQW9CSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixxQkFBcUIsRUFBQTs7QUExQnpCO0lBOEJJLGVBQWUsRUFBQTs7QUFJbkI7RUFDRSxtQkMvQ3NCO0VEZ0R0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdDQ3REcUIsRUFBQTs7QUQrQ3ZCO0lBVUksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBR2QsbUJBQW1CO0lBSW5CLGFBQWE7SUFJYix1QkFBdUI7SUFJdkIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUU3Qlo7TUZDSjtRQStCTSxzQkFBc0IsRUFBQSxFQUV6Qjs7QUFHSDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJDdkZ5QjtFRHdGekIsZ0NDdkZxQixFQUFBOztBRG1GdkI7SUFPSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDhCQUE4QjtJQUk5QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixnQ0NuR21CLEVBQUE7O0FEbUZ2QjtNQW1CTSxnQkFBZ0IsRUFBQTs7QUV4RGxCO01GcUNKO1FBdUJNLDBCQUEwQixFQUFBLEVBMkw3Qjs7QUFsTkg7TUE0Qk0sa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxRQUFRO01BQ1IsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixpQkFBaUIsRUFBQTs7QUFqQ3ZCO01BcUNNLGVBQWU7TUFDZixhQUFhLEVBQUE7O0FBdENuQjtNQTBDTSxhQUFhO01BQ2Isa0JBQWtCLEVBQUE7O0FBM0N4QjtNQWdEUSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLG1CQUFtQjtNQUNuQiwwQkFBMEI7TUFDMUIseUJBQXlCO01BQ3pCLGFBQWEsRUFBQTs7QUFyRHJCO1FBd0RVLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsaUJBQWlCLEVBQUE7O0FBMUQzQjtNQWlFUSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLDRDQUEyRDtNQUMzRCx5Q0FBd0Q7TUFDeEQsd0NBQXVEO01BQ3ZELG9DQUFtRDtNQUNuRCxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLDRCQUE0QjtNQUM1QixhQUFhO01BQ2IsY0FBYztNQUNkLDBCQUEwQjtNQUMxQix5QkFBeUIsRUFBQTs7QUE3RWpDO1FBZ0ZVLFdBQVc7UUFDWCxjQUFjO1FBQ2QsVUFBVTtRQUNWLGFBQWEsRUFBQTs7QUFuRnZCO1FBd0ZVLFdBQVc7UUFDWCxjQUFjO1FBQ2QsVUFBVTtRQUNWLGFBQWEsRUFBQTs7QUEzRnZCO1FBZ0dVLHdCQUF3QjtRQUN4QixVQUFVLEVBQUE7O0FBakdwQjtRQXFHVSxrQkFBa0I7UUFDbEIseUJBQXdDO1FBQ3hDLG9EQUFvRCxFQUFBOztBQXZHOUQ7UUEyR1Usa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLE1BQU0sRUFBQTs7QUEvR2hCO01BeUhNLGFBQWE7TUFJYix1QkFBdUI7TUFJdkIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsWUFBWTtNQUNaLFVBQVU7TUFDVixZQUFZO01BQ1osZ0JBQWdCO01BR2hCLDZEQUE2RDtNQUM3RCxlQUFlO01BQ2YsVUFBVTtNQUNWLHNCQUFzQjtNQUN0Qix3Q0FBd0MsRUFBQTs7QUE5STlDO1FBbUpRLHFCQUFxQixFQUFBOztBQW5KN0I7UUF1SlEsTUFBTTtRQUNOLFNBQVM7UUFDVCxrQkFBa0IsRUFBQTs7QUF6SjFCO1FBNkpRLFNBQVM7UUFDVCxTQUFTO1FBQ1Qsa0JBQWtCLEVBQUE7O0FBL0oxQjtRQW1LUSxzQkFBc0IsRUFBQTs7QUFuSzlCO1FBdUtRLHNCQUFzQixFQUFBOztBQXZLOUI7UUEyS1EsUUFBUTtRQUNSLFFBQVE7UUFDUixpQkFBaUIsRUFBQTs7QUE3S3pCO1FBaUxRLE9BQU87UUFDUCxRQUFRO1FBQ1IsaUJBQWlCLEVBQUE7O0FBbkx6QjtRQXVMUSxxQkFBcUIsRUFBQTs7QUF2TDdCO1FBMkxRLHFCQUFxQixFQUFBOztBQTNMN0I7UUErTFEsOENBQThDLEVBQUE7O0FBL0x0RDtRQW1NUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLHlCQ3RSc0I7UUR1UnRCLHVCQUF1QjtRQUN2QixrQkFBa0IsRUFBQTs7QUF2TTFCO1VBME1VLFdBQVc7VUFDWCxZQUFZO1VBQ1oseUJBQXlCO1VBQ3pCLG1CQUFtQjtVQUNuQixrQkFBa0IsRUFBQTs7QUFRNUI7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVyxFQUFBOztBQUtiO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUFpQyxFQUFBOztBQUduQztFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUdkO0VBQ0Usd0VBQXdFO0VBQ3hFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVMsRUFBQSIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcG9wcGVyanMtcmVwby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zY3NzL3ZhcnNcIjtcclxuQGltcG9ydCBcIi4uL3Njc3MvcmVzcG9uc2l2ZVwiO1xyXG5cclxuLy8gQWxsIHN0cm9uZyB0YWdzIGhlcmUgYXJlIHJlZFxyXG5zdHJvbmcge1xyXG4gIGNvbG9yOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBwcmltYXJ5LWxpZ2h0KTtcclxufVxyXG5cclxuLnBvcC1nZW5lcmljLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDUwcHggNDBweDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBtYXAtZ2V0KCRwb3AtY29sb3JzLCB2aW9sZXQpO1xyXG59XHJcblxyXG4ucG9wLXRvcC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRRME1DSWdhR1ZwWjJoMFBTSTJOVE1pSUhacFpYZENiM2c5SWpBZ01DQXhORFF3SURZMU15SWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEdjZ2MzUjViR1U5SW0xcGVDMWliR1Z1WkMxdGIyUmxPbXhwWjJoMFpXNGlJRzl3WVdOcGRIazlJakF1TVNJK0NqeG5JR05zYVhBdGNHRjBhRDBpZFhKc0tDTmpiR2x3TUNraVBnbzhjR0YwYUNCa1BTSk5NVGs1TXk0M01TQXdTQzAxTlRNdU56RldNVGs1T0M0Mk0wZ3hPVGt6TGpjeFZqQmFJaUJtYVd4c1BTSWpNa00wUWprMUlpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk56SXdJRE13TWk0Mk56WkROVFV3TGpJNU15QXlNVGt1T1RZeklETXhNQzR5T1RRZ01UQXlMams1SURBZ0xUUTRMakkwTWpkSU1UZ3dRelF3Tmk0Mk5qTWdPRGd1TkRRek5TQTFPRFl1TmpZeklESXdOUzQwTVRjZ056SXdJRE13TWk0Mk56WmFJaUJtYVd4c1BTSWpSa1pHUTBVeElpOCtDanh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk56SXdJRE13TWk0Mk56WkROakk0TGpFMU55QXhPVFF1TmpBM0lEVXdPQzR4TlRZZ056Y3VOak0wTlNBek5qQWdMVFE0TGpJME1qZElOVFF3UXpZeE15NHhOemdnTnpBdU9UYzNOaUEyTnpNdU1UYzRJREU0Tnk0NU5URWdOekl3SURNd01pNDJOelphSWlCbWFXeHNQU0lqUmtaR1EwVXhJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5Oekl3SURNd01pNDJOelpETnpJd0lERTROUzQzTURNZ056SXdJRFk0TGpjek1ETWdOekl3SUMwME9DNHlOREkzU0Rrd01FTTRNall1T0RJeUlEY3dMamszTnpZZ056WTJMamd5TWlBeE9EY3VPVFV4SURjeU1DQXpNREl1TmpjMldpSWdabWxzYkQwaUkwWkdSa05GTVNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRjeU1DQXpNREl1TmpjMlF6Z3hNUzQ0TkRNZ01UazBMall3TnlBNU16RXVPRFEwSURjM0xqWXpORFVnTVRBNE1DQXRORGd1TWpReU4wZ3hNall3UXpFd016TXVNelFnT0RndU5EUXpOU0E0TlRNdU16TTNJREl3TlM0ME1UY2dOekl3SURNd01pNDJOelphSWlCbWFXeHNQU0lqUmtaR1EwVXhJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5Oekl3SURNd01pNDJOelpET0RnNUxqY3dOeUF5TVRrdU9UWXpJREV4TWprdU56RWdNVEF5TGprNUlERTBOREFnTFRRNExqSTBNamRXTXprdU5EZzJPVU14TVRVNUxqVTFJREUwT1M0NU5Ua2dPVEU1TGpVMU1pQXlNemN1TmpnNUlEY3lNQ0F6TURJdU5qYzJXaUlnWm1sc2JEMGlJMFpHUmtORk1TSXZQZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUTTJNQ0EyTlROSU1UZ3dRelF3Tmk0Mk5qTWdOVEUyTGpReU9TQTFPRFl1TmpZeklETTVPUzQxTlRVZ056SXdJRE13TWk0ek56bEROakk0TGpFMU55QTBNVEF1TXpVMUlEVXdPQzR4TlRZZ05USTNMakl5T1NBek5qQWdOalV6V2lJZ1ptbHNiRDBpSTBaR1JrTkZNU0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVEFnTmpVelZqVTJOUzR6TkRWRE1qZ3dMalEwTnlBME5UUXVPVFkySURVeU1DNDBORGdnTXpZM0xqTXhJRGN5TUNBek1ESXVNemM1UXpVMU1DNHlPVE1nTXpnMUxqQXlNU0F6TVRBdU1qazBJRFV3TVM0NE9UVWdNQ0EyTlROYUlpQm1hV3hzUFNJalJrWkdRMFV4SWk4K0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTUNBME56Y3VOamc1VmpNNU1DNHdNelJETWpRMExqWXhNU0F6TlRRdU16azRJRFE0TkM0Mk1USWdNekkxTGpFNElEY3lNQ0F6TURJdU16YzVRelE1T0M0eU55QXpORGN1TVRBMElESTFPQzR5TnlBME1EVXVOVFF4SURBZ05EYzNMalk0T1ZvaUlHWnBiR3c5SWlOR1JrWkRSVEVpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazB3SURNd01pNHpOemxXTWpFMExqY3lNME15TkRRdU5qRXhJREkxTUM0ek5Ua2dORGcwTGpZeE1pQXlOemt1TlRjNElEY3lNQ0F6TURJdU16YzVRelE0TUNBek1ESXVNemM1SURJME1DQXpNREl1TXpjNUlEQWdNekF5TGpNM09Wb2lJR1pwYkd3OUlpTkdSa1pEUlRFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswd0lERXlOeTR3TmpoV016a3VOREV5TmtNeU9EQXVORFEzSURFME9TNDNPVElnTlRJd0xqUTBPQ0F5TXpjdU5EUTNJRGN5TUNBek1ESXVNemM1UXpRNU9DNHlOeUF5TlRjdU5qVXpJREkxT0M0eU55QXhPVGt1TWpFMklEQWdNVEkzTGpBMk9Gb2lJR1pwYkd3OUlpTkdSa1pEUlRFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswM01qQWdNekF5TGpNM09VTTVOREV1TnpNZ01qVTNMalV5TmlBeE1UZ3hMamN6SURFNU9DNDVNaklnTVRRME1DQXhNall1TlRZNFZqSXhOQzQwTnpSRE1URTVOUzR6T1NBeU5UQXVNakV4SURrMU5TNHpPRGdnTWpjNUxqVXhNeUEzTWpBZ016QXlMak0zT1ZvaUlHWnBiR3c5SWlOR1JrWkRSVEVpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAzTWpBZ016QXlMak0zT1VNNU5qQWdNekF5TGpNM09TQXhNakF3SURNd01pNHpOemtnTVRRME1DQXpNREl1TXpjNVZqTTVNQzR5T0RSRE1URTVOUzR6T1NBek5UUXVOVFEySURrMU5TNHpPRGdnTXpJMUxqSTBOQ0EzTWpBZ016QXlMak0zT1ZvaUlHWnBiR3c5SWlOR1JrWkRSVEVpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazAzTWpBZ016QXlMak0zT1VNNU5ERXVOek1nTXpRM0xqQTJNU0F4TVRneExqY3pJRFF3TlM0ME5ETWdNVFEwTUNBME56Y3VOVEl6VmpVMk5TNHdPVFZETVRFMU9TNDFOU0EwTlRRdU9ESXhJRGt4T1M0MU5USWdNelkzTGpJME9TQTNNakFnTXpBeUxqTTNPVm9pSUdacGJHdzlJaU5HUmtaRFJURWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDNNakFnTXpBeUxqTTNPVU00T0RrdU56QTNJRE00TlM0d01qRWdNVEV5T1M0M01TQTFNREV1T0RrMUlERTBOREFnTmpVelNERXlOakJETVRBek15NHpOQ0ExTVRZdU5ESTVJRGcxTXk0ek16Y2dNems1TGpVMU5TQTNNakFnTXpBeUxqTTNPVm9pSUdacGJHdzlJaU5HUmtaRFJURWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDNNakFnTXpBeUxqTTNPVU00TVRJdU1UQTFJRFF4TUM0ek5UVWdPVE15TGpRME9DQTFNamN1TWpJNUlERXdPREV1TURNZ05qVXpTRGt3TUM0MU1UTkRPREkzTGpFeU5pQTFNek11T0RneElEYzJOaTQ1TlRVZ05ERTNMakF3TnlBM01qQWdNekF5TGpNM09Wb2lJR1pwYkd3OUlpTkdSa1pEUlRFaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswM01qQWdNekF5TGpNM09VTTNNakFnTkRFNUxqSTFNeUEzTWpBZ05UTTJMakV5TmlBM01qQWdOalV6U0RVek9TNDBPRGRETmpFeUxqZzNOQ0ExTXpNdU9EZ3hJRFkzTXk0d05EVWdOREUzTGpBd055QTNNakFnTXpBeUxqTTNPVm9pSUdacGJHdzlJaU5HUmtaRFJURWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDNNakFnTXpBeUxqTTNPVU0xT0RZdU5qWXpJREl3TlM0eU1ESWdOREEyTGpZMk15QTRPQzR6TWpjNElERTRNQ0F0TkRndU1qUXlOMGd6TmpCRE5UQTRMakUxTmlBM055NDFNamdnTmpJNExqRTFOeUF4T1RRdU5EQXhJRGN5TUNBek1ESXVNemM1V2lJZ1ptbHNiRDBpSTBVNU9UazVOQ0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVGN5TUNBek1ESXVNemM1UXpZM015NHhOemdnTVRnM0xqYzFNU0EyTVRNdU1UYzRJRGN3TGpnM05qY2dOVFF3SUMwME9DNHlOREkzU0RjeU1FTTNNakFnTmpndU5qTXhNeUEzTWpBZ01UZzFMalV3TlNBM01qQWdNekF5TGpNM09Wb2lJR1pwYkd3OUlpTkZPVGs1T1RRaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswM01qQWdNekF5TGpNM09VTTNOall1T0RJeUlERTROeTQzTlRFZ09ESTJMamd5TWlBM01DNDROelkzSURrd01DQXRORGd1TWpReU4wZ3hNRGd3UXprek1TNDRORFFnTnpjdU5USTRJRGd4TVM0NE5ETWdNVGswTGpRd01TQTNNakFnTXpBeUxqTTNPVm9pSUdacGJHdzlJaU5GT1RrNU9UUWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDNNakFnTXpBeUxqTTNPVU00TlRNdU16TTNJREl3TlM0eU1ESWdNVEF6TXk0ek5DQTRPQzR6TWpjNElERXlOakFnTFRRNExqSTBNamRJTVRRME1FTXhNVEk1TGpjeElERXdNaTQ0TmpJZ09EZzVMamN3TnlBeU1Ua3VOek0zSURjeU1DQXpNREl1TXpjNVdpSWdabWxzYkQwaUkwVTVPVGs1TkNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRjeU1DQXpNREl1TXpjNVF6a3hPUzQxTlRJZ01qTTNMalV3T1NBeE1UVTVMalUxSURFME9TNDVNemNnTVRRME1DQXpPUzQyTmpJMFZqRXlOeTR5TXpSRE1URTRNUzQzTXlBeE9Ua3VNekUwSURrME1TNDNNeUF5TlRjdU5qazJJRGN5TUNBek1ESXVNemM1V2lJZ1ptbHNiRDBpSTBVNU9UazVOQ0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVGN5TUNBek1ESXVNemM1UXprMU5TNHpPRGdnTWpjNUxqVXhNeUF4TVRrMUxqTTVJREkxTUM0eU1URWdNVFEwTUNBeU1UUXVORGMwVmpNd01pNHpOemxETVRJd01DQXpNREl1TXpjNUlEazJNQ0F6TURJdU16YzVJRGN5TUNBek1ESXVNemM1V2lJZ1ptbHNiRDBpSTBVNU9UazVOQ0l2UGdvOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJZ1pEMGlUVGN5TUNBek1ESXVNemM1UXprMU5TNHpPRGdnTXpJMUxqSTBOQ0F4TVRrMUxqTTVJRE0xTkM0MU5EWWdNVFEwTUNBek9UQXVNamcwVmpRM09DNHhPRGxETVRFNE1TNDNNeUEwTURVdU9ETTFJRGswTVM0M015QXpORGN1TWpNeElEY3lNQ0F6TURJdU16YzVXaUlnWm1sc2JEMGlJMFU1T1RrNU5DSXZQZ284Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0lnWkQwaVRUY3lNQ0F6TURJdU16YzVRemt4T1M0MU5USWdNelkzTGpNeElERXhOVGt1TlRVZ05EVTBMamsyTmlBeE5EUXdJRFUyTlM0ek5EVldOalV6UXpFeE1qa3VOekVnTlRBeExqZzVOU0E0T0RrdU56QTNJRE00TlM0d01qRWdOekl3SURNd01pNHpOemxhSWlCbWFXeHNQU0lqUlRrNU9UazBJaTgrQ2p4d1lYUm9JR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnWTJ4cGNDMXlkV3hsUFNKbGRtVnViMlJrSWlCa1BTSk5Oekl3SURNd01pNHpOemxET0RVekxqSXhJRE01T1M0MU5UVWdNVEF6TXk0d05DQTFNVFl1TkRJNUlERXlOVGt1TkRrZ05qVXpTREV3TnprdU5qWkRPVE14TGpZME15QTFNamN1TWpJNUlEZ3hNUzQzTlRZZ05ERXdMak0xTlNBM01qQWdNekF5TGpNM09Wb2lJR1pwYkd3OUlpTkZPVGs1T1RRaUx6NEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswNU1EQXVOVEV6SURZMU0wZzNNakJETnpJd0lEVXpOaTR4TWpZZ056SXdJRFF4T1M0eU5UTWdOekl3SURNd01pNHpOemxETnpZMkxqazFOU0EwTVRjdU1EQTNJRGd5Tnk0eE1qWWdOVE16TGpnNE1TQTVNREF1TlRFeklEWTFNMW9pSUdacGJHdzlJaU5GT1RrNU9UUWlMejRLUEhCaGRHZ2dabWxzYkMxeWRXeGxQU0psZG1WdWIyUmtJaUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdROUlrMDFOREFnTmpVelNETTJNRU0xTURndU1UVTJJRFV5Tnk0eU1qa2dOakk0TGpFMU55QTBNVEF1TXpVMUlEY3lNQ0F6TURJdU16YzVRelkzTXk0eE56Z2dOREUzTGpBd055QTJNVE11TVRjNElEVXpNeTQ0T0RFZ05UUXdJRFkxTTFvaUlHWnBiR3c5SWlORk9UazVPVFFpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazB4T0RBZ05qVXpTREJETXpFd0xqSTVOQ0ExTURFdU9EazFJRFUxTUM0eU9UTWdNemcxTGpBeU1TQTNNakFnTXpBeUxqTTNPVU0xT0RZdU5qWXpJRE01T1M0MU5UVWdOREEyTGpZMk15QTFNVFl1TkRJNUlERTRNQ0EyTlROYUlpQm1hV3hzUFNJalJUazVPVGswSWk4K0NqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTUNBMU5qVXVNelExVmpRM055NDJPRGxETWpVNExqSTNJRFF3TlM0MU5ERWdORGs0TGpJM0lETTBOeTR4TURRZ056SXdJRE13TWk0ek56bEROVEl3TGpRME9DQXpOamN1TXpFZ01qZ3dMalEwTnlBME5UUXVPVFkySURBZ05UWTFMak0wTlZvaUlHWnBiR3c5SWlORk9UazVPVFFpTHo0S1BIQmhkR2dnWm1sc2JDMXlkV3hsUFNKbGRtVnViMlJrSWlCamJHbHdMWEoxYkdVOUltVjJaVzV2WkdRaUlHUTlJazB3SURNNU1DNHdNelJXTXpBeUxqTTNPVU15TkRBZ016QXlMak0zT1NBME9EQWdNekF5TGpNM09TQTNNakFnTXpBeUxqTTNPVU0wT0RRdU5qRXlJRE15TlM0eE9DQXlORFF1TmpFeElETTFOQzR6T1RnZ01DQXpPVEF1TURNMFdpSWdabWxzYkQwaUkwVTVPVGs1TkNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRBZ01qRTBMamN5TTFZeE1qY3VNRFk0UXpJMU9DNHlOeUF4T1RrdU1qRTJJRFE1T0M0eU55QXlOVGN1TmpVeklEY3lNQ0F6TURJdU16YzVRelE0TkM0Mk1USWdNamM1TGpVM09DQXlORFF1TmpFeElESTFNQzR6TlRrZ01DQXlNVFF1TnpJeldpSWdabWxzYkQwaUkwVTVPVGs1TkNJdlBnbzhjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaUlHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSWdaRDBpVFRBZ016a3VOREV5TmxZdE5EZ3VNalF5TjBNek1UQXVNamswSURFd01pNDROaklnTlRVd0xqSTVNeUF5TVRrdU56TTNJRGN5TUNBek1ESXVNemM1UXpVeU1DNDBORGdnTWpNM0xqUTBOeUF5T0RBdU5EUTNJREUwT1M0M09USWdNQ0F6T1M0ME1USTJXaUlnWm1sc2JEMGlJMFU1T1RrNU5DSXZQZ284TDJjK0Nqd3ZaejRLUEdSbFpuTStDanhqYkdsd1VHRjBhQ0JwWkQwaVkyeHBjREFpUGdvOGNtVmpkQ0IzYVdSMGFEMGlNVFEwTUNJZ2FHVnBaMmgwUFNJMk5UTWlJR1pwYkd3OUluZG9hWFJsSWk4K0Nqd3ZZMnhwY0ZCaGRHZytDand2WkdWbWN6NEtQQzl6ZG1jK0NnPT0pLCByYWRpYWwtZ3JhZGllbnQoNTAwcHgsICNmZmYsICNmZmYxZTEgMjAlLCAjZmZhMGIxKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNjBweCAyNXB4IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICA+IGltZy5wb3AtYW5ndWxhci1sb2dvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAkcG9wLWFuZ3VsYXItbG9nby1zaXplO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAjeyRwb3AtYW5ndWxhci1sb2dvLXNpemUvMn0pO1xyXG4gICAgdG9wOiBjYWxjKDUwJSAtICN7JHBvcC1hbmd1bGFyLWxvZ28tc2l6ZS8yfSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gID4gaW1nLnBvcC1wb3BwZXItbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICA+IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3AtaW5zdGFsbC1zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBwcmltYXJ5KTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG1hcC1nZXQoJHBvcC1jb2xvcnMsIHZpb2xldCk7XHJcblxyXG4gID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coeHMpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5wb3AtZGVtbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDAgNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRwb3AtY29sb3JzLCBiYWNrZ3JvdW5kKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbWFwLWdldCgkcG9wLWNvbG9ycywgdmlvbGV0KTtcclxuXHJcbiAgPiBhcnRpY2xlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xyXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIG1hcC1nZXQoJHBvcC1jb2xvcnMsIHZpb2xldCk7XHJcblxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICBAaW5jbHVkZSByZXNwb25kLWJlbG93KHNtKSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAucG9wLXBvcGNvcm4tYm94IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNjVweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYucG9wLXBvcGNvcm4td3JhcCArIGRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICAmW3BvcC1wb3NpdGlvbl0gPiBkaXYucG9wLXBvcGNvcm4td3JhcCB7XHJcbiAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAmW3BvcC10aGVtaW5nXSB7XHJcbiAgICAgID4gZGl2LnBvcC1wb3Bjb3JuLXdyYXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZmY2YjgxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyODFlMzY7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuXHJcbiAgICAgICAgLnBvcC1wb3Bjb3JuLWJveCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmW3BvcC1vdmVyZmxvd10sICZbcG9wLWZsaXBwaW5nXSB7XHJcbiAgICAgID4gZGl2LnBvcC1wb3Bjb3JuLXdyYXAge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXNjcm9sbGJhci1jb2xvcjogcmdiYSgyNTUsIDIzMCwgMTU3LCAxKSB0cmFuc3BhcmVudDtcclxuICAgICAgICAtbW96LXNjcm9sbGJhci1jb2xvcjogcmdiYSgyNTUsIDIzMCwgMTU3LCAxKSB0cmFuc3BhcmVudDtcclxuICAgICAgICAtbXMtc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDI1NSwgMjMwLCAxNTcsIDEpIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHNjcm9sbGJhci1jb2xvcjogcmdiYSgyNTUsIDIzMCwgMTU3LCAxKSB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICNmZjZiODE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MWUzNjtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgLy9ib3JkZXI6IDJweCBzb2xpZCBibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6IDdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzAsIDE1NywgMSk7XHJcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBvcC1wb3Bjb3JuLWJveCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucG9wLWRlbW8tcGxhY2VtZW50LWJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC41NCwgMS41LCAwLjM4LCAxLjIpO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjU0LCAxLjUsIDAuMzgsIDEuMik7XHJcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjU0LCAxLjUsIDAuMzgsIDEuMik7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgb3V0bGluZTogMDtcclxuICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmW2RhdGEtcGxhY2VtZW50Xj0ndG9wJ10ge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmW2RhdGEtcGxhY2VtZW50Xj0nYm90dG9tJ10ge1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmW2RhdGEtcGxhY2VtZW50PSd0b3Atc3RhcnQnXSwgJltkYXRhLXBsYWNlbWVudD0nYm90dG9tLXN0YXJ0J10ge1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZbZGF0YS1wbGFjZW1lbnQ9J3RvcC1lbmQnXSwgJltkYXRhLXBsYWNlbWVudD0nYm90dG9tLWVuZCddIHtcclxuICAgICAgICBsZWZ0OiBjYWxjKDUwJSArIDUwcHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmW2RhdGEtcGxhY2VtZW50Xj0ncmlnaHQnXSB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZbZGF0YS1wbGFjZW1lbnRePSdsZWZ0J10ge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZbZGF0YS1wbGFjZW1lbnQ9J2xlZnQtc3RhcnQnXSwgJltkYXRhLXBsYWNlbWVudD0ncmlnaHQtc3RhcnQnXSB7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmW2RhdGEtcGxhY2VtZW50PSdsZWZ0LWVuZCddLCAmW2RhdGEtcGxhY2VtZW50PSdyaWdodC1lbmQnXSB7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSArIDUwcHgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZvY3VzID4gZGl2IHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA2cHggcmdiYSgyNTUsIDEwMCwgMTUwLCAwLjQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA+IGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIG1hcC1nZXQoJHBvcC1jb2xvcnMsIHByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgJi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjZiODE7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY2YjgxO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzE0Mjg7XHJcbiAgcGFkZGluZzogMjVweCAwO1xyXG4gIGNvbG9yOiAjOTQ3OWI5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBUZXJtaW5hbFxyXG5cclxuLnRlcm1pbmFsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBwYWRkaW5nLXRvcDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbn1cclxuXHJcbi50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcbiAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIHRleHQtaW5kZW50OiA2cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi50ZXJtaW5hbCB7XHJcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLXRvcDogNDRweDtcclxufVxyXG5cclxuLnRlcm1pbmFsIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwiJHBvcC1jb2xvcnM6IChcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmYyNjNjLFxyXG4gICAgICAgIHZpb2xldDogIzM2MmM0ZixcclxuICAgICAgICBwcmltYXJ5OiAjYzgzYjUwLFxyXG4gICAgICAgIHByaW1hcnktbGlnaHQ6ICNmZjZiODEsXHJcbiAgICAgICAgYWNjZW50OiAjZjRlMGYxLFxyXG4gICAgICAgIHRleHQ6ICNkMmNiZTRcclxuKTtcclxuXHJcbiRwb3AtYW5ndWxhci1sb2dvLXNpemU6IDQwcHg7XHJcbiIsIiRicmVha3BvaW50czogKFxyXG4gICAgICAgIHh4czogMzYwcHgsXHJcbiAgICAgICAgeHM6IDc2OHB4LFxyXG4gICAgICAgIHNtOiA5OTJweCxcclxuICAgICAgICBtZDogMTIwMHB4LFxyXG4gICAgICAgIGxnOiAxOTIwcHhcclxuKTtcclxuXHJcbi8vXHJcbi8vICBSRVNQT05EIEFCT1ZFXHJcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXHJcblxyXG4vLyBlLmcuIEBpbmNsdWRlIHJlc3BvbmQtYWJvdmUoc20pIHt9XHJcbkBtaXhpbiByZXNwb25kLWFib3ZlKCRicmVha3BvaW50KSB7XHJcblxyXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxyXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXZhbHVlKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cclxuICB9IEBlbHNlIHtcclxuXHJcbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcclxuICB9XHJcbn1cclxuXHJcbi8vXHJcbi8vICBSRVNQT05EIEJFTE9XXHJcbi8v4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTXHJcblxyXG4vLyBlLmcuIEBpbmNsdWRlIHJlc3BvbmQtYmVsb3coc20pIHt9XHJcbkBtaXhpbiByZXNwb25kLWJlbG93KCRicmVha3BvaW50KSB7XHJcblxyXG4gIC8vIElmIHRoZSBicmVha3BvaW50IGV4aXN0cyBpbiB0aGUgbWFwLlxyXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICRicmVha3BvaW50KSB7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBicmVha3BvaW50IHZhbHVlLlxyXG4gICAgJGJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludCk7XHJcblxyXG4gICAgLy8gV3JpdGUgdGhlIG1lZGlhIHF1ZXJ5LlxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICgkYnJlYWtwb2ludC12YWx1ZSAtIDEpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBicmVha3BvaW50IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG1hcC5cclxuICB9IEBlbHNlIHtcclxuXHJcbiAgICAvLyBMb2cgYSB3YXJuaW5nLlxyXG4gICAgQHdhcm4gJ0ludmFsaWQgYnJlYWtwb2ludDogI3skYnJlYWtwb2ludH0uJztcclxuICB9XHJcbn1cclxuXHJcbi8vXHJcbi8vICBSRVNQT05EIEJFVFdFRU5cclxuLy/igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJNcclxuXHJcbi8vIGUuZy4gQGluY2x1ZGUgcmVzcG9uZC1iZXR3ZWVuKHNtLCBtZCkge31cclxuQG1peGluIHJlc3BvbmQtYmV0d2VlbigkbG93ZXIsICR1cHBlcikge1xyXG5cclxuICAvLyBJZiBib3RoIHRoZSBsb3dlciBhbmQgdXBwZXIgYnJlYWtwb2ludHMgZXhpc3QgaW4gdGhlIG1hcC5cclxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkbG93ZXIpIGFuZCBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikge1xyXG5cclxuICAgIC8vIEdldCB0aGUgbG93ZXIgYW5kIHVwcGVyIGJyZWFrcG9pbnRzLlxyXG4gICAgJGxvd2VyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbG93ZXIpO1xyXG4gICAgJHVwcGVyLWJyZWFrcG9pbnQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdXBwZXIpO1xyXG5cclxuICAgIC8vIFdyaXRlIHRoZSBtZWRpYSBxdWVyeS5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbG93ZXItYnJlYWtwb2ludCkgYW5kIChtYXgtd2lkdGg6ICgkdXBwZXItYnJlYWtwb2ludCAtIDEpKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIG9uZSBvciBib3RoIG9mIHRoZSBicmVha3BvaW50cyBkb24ndCBleGlzdC5cclxuICB9IEBlbHNlIHtcclxuXHJcbiAgICAvLyBJZiBsb3dlciBicmVha3BvaW50IGlzIGludmFsaWQuXHJcbiAgICBAaWYgKG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJGxvd2VyKSA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgLy8gTG9nIGEgd2FybmluZy5cclxuICAgICAgQHdhcm4gJ1lvdXIgbG93ZXIgYnJlYWtwb2ludCB3YXMgaW52YWxpZDogI3skbG93ZXJ9Lic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdXBwZXIgYnJlYWtwb2ludCBpcyBpbnZhbGlkLlxyXG4gICAgQGlmIChtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR1cHBlcikgPT0gZmFsc2UpIHtcclxuXHJcbiAgICAgIC8vIExvZyBhIHdhcm5pbmcuXHJcbiAgICAgIEB3YXJuICdZb3VyIHVwcGVyIGJyZWFrcG9pbnQgd2FzIGludmFsaWQ6ICN7JHVwcGVyfS4nO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: NgxPopperjsAppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsAppComponent", function () {
      return NgxPopperjsAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_popperjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-popperjs */
    "../ngx-popperjs/src/public-api.ts");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! prismjs */
    "../../node_modules/prismjs/prism.js");
    /* harmony import */


    var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "../../node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__); //


    var NgxPopArticleTypes;

    (function (NgxPopArticleTypes) {
      NgxPopArticleTypes["position"] = "position";
      NgxPopArticleTypes["overflow"] = "overflow";
      NgxPopArticleTypes["flipping"] = "flipping";
      NgxPopArticleTypes["theming"] = "theming";
    })(NgxPopArticleTypes || (NgxPopArticleTypes = {}));

    var codeTypes = {
      position: "markup",
      overflow: "markup",
      flipping: "markup",
      theming: "css"
    };

    var NgxPopperjsAppComponent = /*#__PURE__*/function () {
      function NgxPopperjsAppComponent() {
        _classCallCheck(this, NgxPopperjsAppComponent);

        // tslint:disable-next-line:no-bitwise
        this.positionButtons = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["filter"])(Object(lodash__WEBPACK_IMPORTED_MODULE_4__["map"])(ngx_popperjs__WEBPACK_IMPORTED_MODULE_2__["NgxPopperjsPlacements"], function (v) {
          return v;
        }), function (v) {
          return !~v.indexOf("auto");
        });
        this.selectedPosition = this.positionButtons[0];
      }

      _createClass(NgxPopperjsAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          Object(lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"])(NgxPopArticleTypes, function (s) {
            return _this6._updateCode(s);
          });
          Object(lodash__WEBPACK_IMPORTED_MODULE_4__["forEach"])(document.querySelectorAll(".pop-popcorn-wrap"), function (el) {
            return el.scrollTop = 300;
          });
        }
      }, {
        key: "onPopperUpdate",
        value: function onPopperUpdate($event) {
          console.info("ON POPPER UPDATE FIRED!", $event);
        }
      }, {
        key: "updatePosition",
        value: function updatePosition(positionButton) {
          this.selectedPosition = positionButton;

          this._updateCode(NgxPopArticleTypes.position);
        }
      }, {
        key: "_updateCode",
        value: function _updateCode(key) {
          var $code = document.querySelector("[pop-".concat(key, "-code]"));

          if (!$code) {
            return;
          }

          $code.classList.add("language-".concat(codeTypes[key] || "markup"));
          $code.innerHTML = this.codeMap[key];
          prismjs__WEBPACK_IMPORTED_MODULE_3__["highlightElement"]($code);
        }
      }, {
        key: "codeMap",
        get: function get() {
          return {
            flipping: "&lt;popper-content #myPopperContent>I'm popper :)&lt;/popper-content&gt;\n&lt;img alt=\"Popcorn box\" src=\"assets/images/popcorn-box.svg\"\n     [popper]=\"myPopperContent\"\n     [popperShowOnStart]=\"true\"\n     popperTrigger=\"click\"\n     popperPlacement=\"top\"\n     class=\"pop-popcorn-box\"&gt;",
            overflow: "&lt;popper-content #popcornPrices&gt;\n &lt;p class=\"pop-text-bold\"&gt;POPCORN&lt;br /&gt;SIZE&lt;br /&gt;&amp; PRICE&lt;/p&gt;\n &lt;ul&gt;\n     &lt;li&gt;XXS: $1.99&lt;/li&gt;\n     &lt;li&gt;XS: $2.99&lt;/li&gt;\n     &lt;li&gt;S: $3.99&lt;/li&gt;\n     &lt;li&gt;M: $4.99&lt;/li&gt;\n     &lt;li&gt;L: $5.99&lt;/li&gt;\n     &lt;li&gt;XL: $6.99&lt;/li&gt;\n     &lt;li&gt;XXL: $7.99&lt;/li&gt;\n &lt;/ul&gt;\n &lt;/popper-content&gt;\n &lt;img alt=\"Popcorn box\" src=\"assets/images/popcorn-box.svg\"\n      [popper]=\"popcornPrices\"\n      [popperShowOnStart]=\"true\"\n      popperTrigger=\"click\"\n      popperPlacement=\"right\"\n      class=\"pop-popcorn-box\"&gt;",
            position: "&lt;popper-content #myPopperContent>I'm popper :)&lt;/popper-content&gt;\n&lt;img alt=\"Popcorn box\" src=\"assets/images/popcorn-box.svg\"\n     [popper]=\"myPopperContent\"\n     [popperShowOnStart]=\"true\"\n     popperTrigger=\"click\"\n     popperPlacement=\"".concat(this.selectedPosition, "\"\n     class=\"pop-popcorn-box\"&gt;"),
            theming: "@import ~ngx-popperjs/css/theme-dark.css\n/* OR */\n@import ~ngx-popperjs/css/theme-white.css\n/* OR */\n@import ~ngx-popperjs/scss/theme-dark\n/* OR */\n@import ~ngx-popperjs/scss/theme-white\n/* OR */\n@include ngx-popperjs-theme(#777, #fff1e0);\n"
          };
        }
      }]);

      return NgxPopperjsAppComponent;
    }();

    NgxPopperjsAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], NgxPopperjsAppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: NgxPopperjsAppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxPopperjsAppModule", function () {
      return NgxPopperjsAppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ngx_popperjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-popperjs */
    "../ngx-popperjs/src/public-api.ts"); //


    var NgxPopperjsAppModule = function NgxPopperjsAppModule() {
      _classCallCheck(this, NgxPopperjsAppModule);
    };

    NgxPopperjsAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsAppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_popperjs__WEBPACK_IMPORTED_MODULE_5__["NgxPopperjsModule"].forRoot({
        trigger: ngx_popperjs__WEBPACK_IMPORTED_MODULE_5__["NgxPopperjsTriggers"].click,
        hideOnClickOutside: false
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["NgxPopperjsAppComponent"]]
    })], NgxPopperjsAppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["NgxPopperjsAppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\git\ngx-popperjs\projects\ngx-popperjs-repo\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map