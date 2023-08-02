import {Component, OnInit} from "@angular/core";
import {NgxPopperjsPlacements} from "ngx-popperjs";
import {Modifier} from "@popperjs/core";
import {Options} from "@popperjs/core/lib/modifiers/flip";
//
import {NGX_POPPERJS_DONT_FLIP_MODIFIER} from "../../shared/ngx-popperjs-dont-flip-modifier.const";
import {getNgxPopperJsCodeMap} from "../../shared/ngx-popperjs-code-map.const";
import {NgxPopArticleTypes, NgxPopperjsArticleTypesRef} from "../../shared/ngx-popperjs-article-types.model";
//
import pkg from "../../../../../../package.json";
import {forEach, map, filter} from "lodash";
import {highlightElement} from "prismjs";
import {catchError, of, switchMap, timer} from "rxjs";
import {ajax, AjaxResponse} from "rxjs/ajax";
import TypeWriter from "typewriter-effect/dist/core.js";

const codeTypes: NgxPopperjsArticleTypesRef<"css" | "markup"> = {
    position: "markup",
    overflow: "markup",
    flipping: "markup",
    theming: "css",
    click: "markup",
    scroll: "markup"
};

@Component({
    selector: "app-demo",
    templateUrl: "demo.component.html",
    styleUrls: ["demo.component.scss"]
})
export class NgxPopperjsDemoComponent implements OnInit {

    get buildRef(): string {
        return `${pkg.version}-build-${pkg.build}`;
    }

    get codeMap(): NgxPopperjsArticleTypesRef<string> {
        return getNgxPopperJsCodeMap(this.selectedPosition);
    }

    dontFlipModifier: Partial<Modifier<"flip", Options>>[] = [NGX_POPPERJS_DONT_FLIP_MODIFIER];
    messages: string[] = [];
    // tslint:disable-next-line:no-bitwise
    positionButtons: NgxPopperjsPlacements[] = filter(map(NgxPopperjsPlacements, (v) => v), (v) => !~v.indexOf("auto"));
    selectedPosition: NgxPopperjsPlacements = this.positionButtons[0];
    year: number = new Date().getFullYear();

    ngOnInit(): void {
        forEach(NgxPopArticleTypes, (s: NgxPopArticleTypes) => this._updateCode(s));
        forEach(document.querySelectorAll(".pop-popcorn-wrap"), (el: HTMLElement) => el.scrollTop = 300);
        this._getMessages();
    }

    onPopperUpdate(_$event_): void {
        // console.info("ON POPPER UPDATE FIRED!", $event);
    }

    showAlert(): void {
        alert("Ciao!");
    }

    updatePosition(positionButton: NgxPopperjsPlacements): void {
        this.selectedPosition = positionButton;
        this._updateCode(NgxPopArticleTypes.position);
    }

    private _getMessages(): void {
        ajax.get(`./assets/messages.json`)
            .pipe(
                switchMap((resp: AjaxResponse<any>) => {
                    this.messages = resp.response.messages;

                    return timer(150);
                }),
                catchError(() => of([]))
            )
            .subscribe({
                next: () => {
                    this.messages.forEach((m: string, i: number) => {
                        new TypeWriter(`[pop-messages] li:nth-child(${i + 1})`, {
                            strings: [m],
                            autoStart: true,
                            loop: true
                        });
                    });
                }
            });
    }

    private _updateCode(key: NgxPopArticleTypes): void {
        const $code = document.querySelector(`[pop-${key}-code]`);
        if (!$code) {
            return;
        }
        $code.classList.add(`language-${codeTypes[key] || "markup"}`);
        $code.innerHTML = this.codeMap[key];
        highlightElement($code);
    }

}
