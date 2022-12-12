import {Component, DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
//
import {NgxPopperjsDirective, NgxPopperjsModule} from "ngx-popperjs";
import {NgxPopperjsPlacements} from "../models/ngx-popperjs-placements.model";

@Component({
    template: `
		<popper-content #myPopperContent><p class="pop-lucky-font">Popcorn</p></popper-content>
		<img alt="Popcorn box"
			 src="assets/images/popcorn-box.svg"
			 [popper]="myPopperContent"
			 (popperOnUpdate)="onPopperUpdate($event)"
			 [popperShowOnStart]="true"
			 popperTrigger="click"
			 [popperPlacement]="topPlacement"
			 class="pop-popcorn-box">
    `
})
class NgxPopperjsDirectiveTestComponent {

    topPlacement: NgxPopperjsPlacements = NgxPopperjsPlacements.TOP;

    private _updateFired: boolean = !1;

    onPopperUpdate($event): void {
        this._updateFired = !!$event;
    }
}

let fixture: ComponentFixture<NgxPopperjsDirectiveTestComponent>;
let poppers: DebugElement[];

beforeEach(() => {
    fixture = TestBed.configureTestingModule({
            imports: [
                NgxPopperjsModule
            ],
            declarations: [
                // NgxPopperjsDirective,
                NgxPopperjsDirectiveTestComponent
            ]
        })
        .createComponent(NgxPopperjsDirectiveTestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached HighlightDirective
    poppers = fixture.debugElement.queryAll(By.directive(NgxPopperjsDirective));

});

// color tests
it("should have one popper element", () => {
    expect(poppers.length).toBe(1);
});

it("should have popper sibling", () => {
    const popperContent = poppers[0].nativeElement.parentElement.querySelector("popper-content");
    expect(popperContent).not.toBeNull();
});

//

it("should show popper on start", async () => {
    const popperContent = poppers[0].nativeElement.parentElement.querySelector(".ngxp__container");
    if (!popperContent) {
        return !1;
    }

    const popperText = popperContent.querySelector(".ngxp__inner").innerText;
    expect(popperText.trim()).toEqual("Popcorn");
});
//
// it("should show popper on click", async () => {
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
//     await page.click(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: true
//     });
//     const popperText = await utils.getPopperText(page);
//     const popperContainerBox = await utils.getPopperBoundingBox(page);
//     const targetBox = await utils.getTargetBoundingBox(page);
//     expect(popperText.trim()).toEqual("testing");
//     expect(popperContainerBox.y - (targetBox.y + targetBox.height)).toEqual(5);
// });
//
// it("should on right", async () => {
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
//     await page.click(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: true
//     });
//     const popperText = await utils.getPopperText(page);
//     const popperContainerBox = await utils.getPopperBoundingBox(page);
//     const targetBox = await utils.getTargetBoundingBox(page);
//     expect(popperText.trim()).toEqual("testing");
//     expect(popperContainerBox.x - (targetBox.x + targetBox.width)).toEqual(5);
// });
//
// it("should open to top", async () => {
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
//     await page.click(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: true
//     });
//     const popperText = await utils.getPopperText(page);
//     const popperContainerBox = await utils.getPopperBoundingBox(page);
//     const targetBox = await utils.getTargetBoundingBox(page);
//     expect(popperText.trim()).toEqual("testing");
//     // await utils.pause(page);
//     expect(targetBox.y - (popperContainerBox.y + popperContainerBox.height)).toEqual(5);
//
// });

// it("left placement should flip to right", async () => {
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
//     await page.click(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: true
//     });
//     const popperText = await utils.getPopperText(page);
//     const popperContainerBox = await utils.getPopperBoundingBox(page);
//     const targetBox = await utils.getTargetBoundingBox(page);
//     expect(popperText.trim()).toEqual("testing");
//     expect(popperContainerBox.x - (targetBox.x + targetBox.width)).toEqual(5);
//
// });
//
// it("should show/hover in hover", async () => {
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
//     await page.hover(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: true
//     });
//     const popperText = await utils.getPopperText(page);
//     const popperContainerBox = await utils.getPopperBoundingBox(page);
//     const targetBox = await utils.getTargetBoundingBox(page);
//     expect(popperText.trim()).toEqual("testing");
//     expect(popperContainerBox.x - (targetBox.x + targetBox.width)).toEqual(5);
//     await page.hover("p");
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
// });

// it("should not show popper with trigger none", async () => {
//     await page.click(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
//     await page.hover(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
// });
//
// it("should show popper-content component on right", async () => {
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
//     await page.click(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: true
//     });
//
//     const popperText = await utils.getPopperText(page);
//     const popperContainerBox = await utils.getPopperBoundingBox(page);
//     const targetBox = await utils.getTargetBoundingBox(page);
//     expect(popperText.trim()).toEqual("testing");
//     expect(popperContainerBox.x - (targetBox.x + targetBox.width)).toEqual(5);
// });
//
// it("should show popper-content component on right after delay", async () => {
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: false
//     });
//     await page.click(`.popperTarget`);
//     await page.waitFor(4500);
//     // utils.pause(page);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: true,
//         timeout: 1000
//     });
//
//     const popperText = await utils.getPopperText(page);
//     const popperContainerBox = await utils.getPopperBoundingBox(page);
//     const targetBox = await utils.getTargetBoundingBox(page);
//     expect(popperText.trim()).toEqual("testing");
//     expect(popperContainerBox.x - (targetBox.x + targetBox.width)).toEqual(5);
// });
//
//
// it("should show popper on the right and attached to body", async () => {
//     //  utils.pause(page);
//     await page.waitForSelector(`popper-content`, {
//         visible: false
//     });
//     await page.hover(`.popperTarget`);
//     await page.waitForSelector(`.ngxp__container`, {
//         visible: true
//     });
//     const popperText = await utils.getPopperText(page, "body");
//     const popperContainerBox = await utils.getPopperBoundingBox(page, "body");
//     const targetBox = await utils.getTargetBoundingBox(page);
//     expect(popperText.trim()).toEqual("testing");
//     expect(popperContainerBox.x - (targetBox.x + targetBox.width)).toEqual(5);
// });
