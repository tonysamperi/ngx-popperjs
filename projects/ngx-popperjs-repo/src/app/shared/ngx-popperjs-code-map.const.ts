import {NgxPopperjsArticleTypesRef} from "./ngx-popperjs-article-types.model";
import {NgxPopperjsPlacements} from "ngx-popperjs";

const positionEntries = Object.entries(NgxPopperjsPlacements);
// tslint:disable-next-line:naming-convention
export const getNgxPopperJsCodeMap = (positionValue: NgxPopperjsPlacements): NgxPopperjsArticleTypesRef => {
    const position = positionValue
        ? positionEntries.find(([, v]) => v === positionValue)[0]
        : "";

    return {
        popLoose: `<img alt="Popcorn box"
                     src="assets/images/popcorn-box.svg"
                     [popperLoose]="'My loose content with string placement'"
                     [popperLoosePlacement]="'TOP'"
                     class="pop-popcorn-box" />
`,
        click: `&lt;popper-content #popperClickContent&gt;
            &lt;/popper-content&gt;
&lt;img alt="Popcorn box" src="assets/images/popcorn-box.svg"
     [popper]="popperClickContent"
     popperTrigger="click"
     [popperPlacement]="NgxPopperJsPlacements.BOTTOM"
     [popperModifiers]="dontFlipModifier"
     class="pop-popcorn-box"&gt;`,
        scroll: `&lt;popper-content #popperClickContent&gt;
            &lt;/popper-content&gt;
&lt;img alt="Popcorn box" src="assets/images/popcorn-box.svg"
     [popper]="popperClickContent"
     [popperHideOnScroll]="!0"
     popperTrigger="click"
     [popperPlacement]="NgxPopperJsPlacements.TOP"
     class="pop-popcorn-box"&gt;`,
        flipping: `&lt;popper-content #myPopperContent&gt;
            I'm popper :)
            &lt;/popper-content&gt;
&lt;img alt="Popcorn box" src="assets/images/popcorn-box.svg"
     [popper]="myPopperContent"
     [popperShowOnStart]="true"
     popperTrigger="click"
     [popperPlacement]="NgxPopperJsPlacements.TOP"
     class="pop-popcorn-box"&gt;`,
        overflow: `&lt;popper-content #popcornPrices&gt;
 &lt;p class="pop-text-bold"&gt;POPCORN&lt;br /&gt;SIZE&lt;br /&gt;&amp; PRICE&lt;/p&gt;
 &lt;ul&gt;
     &lt;li&gt;XXS: $1.99&lt;/li&gt;
     &lt;li&gt;XS: $2.99&lt;/li&gt;
     &lt;li&gt;S: $3.99&lt;/li&gt;
     &lt;li&gt;M: $4.99&lt;/li&gt;
     &lt;li&gt;L: $5.99&lt;/li&gt;
     &lt;li&gt;XL: $6.99&lt;/li&gt;
     &lt;li&gt;XXL: $7.99&lt;/li&gt;
 &lt;/ul&gt;
 &lt;/popper-content&gt;
 &lt;img alt="Popcorn box" src="assets/images/popcorn-box.svg"
      [popper]="popcornPrices"
      [popperShowOnStart]="true"
      popperTrigger="click"
      [popperPlacement]="NgxPopperJsPlacements.RIGHT"
      class="pop-popcorn-box"&gt;`,
        position: `&lt;popper-content #myPopperContent&gt;
            I'm popper :)
            &lt;/popper-content&gt;
&lt;img alt="Popcorn box" src="assets/images/popcorn-box.svg"
     [popper]="myPopperContent"
     [popperShowOnStart]="true"
     popperTrigger="click"
     [popperPlacement]="NgxPopperJsPlacements.${position}"
     class="pop-popcorn-box"&gt;`,
        theming: `@use ngx-popperjs/css/theme-dark.css
/* OR */
@use ngx-popperjs/css/theme-white.css
/* OR */
@use ngx-popperjs/scss/theme-dark
/* OR */
@use ngx-popperjs/scss/theme-white
/* OR */
@include ngx-popperjs-theme(#777, #fff1e0);
`
    } as NgxPopperjsArticleTypesRef;
};
