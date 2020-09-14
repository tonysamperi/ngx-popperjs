import {Component, OnInit, ViewChild} from "@angular/core";
import {NgxPopperjsPlacements} from "ngx-popperjs";
import * as Prism from "prismjs";
//
import {forEach, map, filter} from "lodash";

enum NgxPopArticleTypes {
    position = "position",
    overflow = "overflow",
    flipping = "flipping"
}

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class NgxPopperjsAppComponent implements OnInit {

    get codeMap() {
        return {
            flipping: `&lt;popper-content #myPopperContent>I'm popper :)&lt;/popper-content&gt;
&lt;img alt="Popcorn box" src="assets/images/popcorn-box.svg"
     [popper]="myPopperContent"
     [popperShowOnStart]="true"
     popperTrigger="click"
     popperPlacement="top"
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
      popperPlacement="right"
      class="pop-popcorn-box"&gt;`,
            position: `&lt;popper-content #myPopperContent>I'm popper :)&lt;/popper-content&gt;
&lt;img alt="Popcorn box" src="assets/images/popcorn-box.svg"
     [popper]="myPopperContent"
     [popperShowOnStart]="true"
     popperTrigger="click"
     popperPlacement="${this.selectedPosition}"
     class="pop-popcorn-box"&gt;`
        } as { [key in NgxPopArticleTypes]: string };
    }

    // tslint:disable-next-line:no-bitwise
    positionButtons: NgxPopperjsPlacements[] = filter(map(NgxPopperjsPlacements, (v) => v), (v) => !~v.indexOf("auto"));
    selectedPosition: NgxPopperjsPlacements = this.positionButtons[0];

    ngOnInit(): void {
        forEach(NgxPopArticleTypes, (s: NgxPopArticleTypes) => this._updateCode(s));
        forEach(document.querySelectorAll(".pop-popcorn-wrap"), (el: HTMLElement) => el.scrollTop = 300);
    }

    onPopperUpdate($event): void {
        console.info("ON POPPER UPDATE FIRED!", $event);
    }

    updatePosition(positionButton: NgxPopperjsPlacements): void {
        this.selectedPosition = positionButton;
        this._updateCode(NgxPopArticleTypes.position);
    }

    private _updateCode(key: NgxPopArticleTypes): void {
        const $code = document.querySelector(`[pop-${key}-code]`);
        if (!$code) {
            return;
        }
        $code.classList.add(".language-markup");
        $code.innerHTML = this.codeMap[key];
        Prism.highlightElement($code);
    }

}
