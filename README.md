# ngx-popperjs  

[![npm][badge-npm-version]][url-npm] [![npm][badge-npm-downloads]][url-npm] [![MIT licensed][badge-licence]][url-licence] [![Build state][badge-ci-state]][url-ci-state] [![Size][badge-bundle]][url-bundle] [![Rate this package][badge-openbase]][url-openbase]

ngx-popperjs is an angular wrapper for the [Popper.js](https://popper.js.org/) library.

*Note* that I also updated everything to use **Popper 2** (v *2.4.4* in v 9.0.0) 

## VERY IMPORTANT READ THIS
I'm moving this to the top because it appears that people don't get to reading it in the **contribute** section.
FOR THIS LIBRARY **PLEASE USE ISSUES ONLY FOR BUG REPORTING**. DON'T OPEN ISSUES SUCH AS "I need upgrade for Angular 1745646456" especially if Angular 1745646456 was released a few days ago.
I **guarantee** that I manage the updates **AS SOON AS POSSIBLE**. But as you understand this is not a paying job, so you can't get Angular 1745646456 the day it gets released.
**ISSUES NOT RESPECTING THIS WILL BE DELETED IMMEDIATELY WITHOUT ANY RESPONSE**.
Thank you.

The goal of this library is to take Mr Frankel's [ngx-popper](https://github.com/MrFrankel/ngx-popper/) and update the compatibility for more recent versions of Angular.
Since the old library is compatible with Angular 7 and earlier, I started with Angular 8.
If you need to work with an older version of Angular (5 to 7), please refer to Mr Frankel's [ngx-popper](https://github.com/MrFrankel/ngx-popper/).

### Premise, new in v 15.2.0: popperLoose

Since many complained about using the `NgxPopperjsPlacements` enum, I added a version of the popper directive which accepts a plain string as placement!
Now you can use it with all the options of the classic popper, but you'll have to use:

`popperLoose` instead of `popper`

and

`popperLoosePlacement` instead of `popperPlacement`

### Installation

node and npm are required to run this package.

1. Use npm/yarn to install the package:

  ```terminal
  $ npm install @floating-ui/dom ngx-popperjs --save
  ```
  
  Or 
  
   ```terminal
    $ yarn add @floating-ui/dom --save
    $ yarn add ngx-popperjs --save 
  ```

2. You simply add into your module `NgxPopperjsModule`:

  ```typescript
  import {NgxPopperjsModule} from 'ngx-popperjs';
  
  @NgModule({
   // ...
   imports: [
     // ...
     NgxPopperjsModule
   ]
  })
  ```

Optionally you can include in your `styles.css` / `styles.css` one of the prebuilt themes:
* `@import node_modules/ngx-popperjs/css/theme-dark.css`
* `@import node_modules/css/theme-white.css`

* `@use ngx-popperjs/scss/theme as popperBaseTheme`
* `@use ngx-popperjs/scss/theme-dark as popperDarkTheme`
* `@use ngx-popperjs/scss/theme-white popperWhiteTheme`

or easily create your own theme using the @mixin:

```
@use "ngx-popperjs/scss/theme" as popperBaseTheme;

body {
    @include popperjs.ngx-popperjs-theme($background-color, $text-color, $max-width, $z-index);
}
```

3. Add to view:

  ```HTML  
   <popper-content #popper1Content>
       <p class="bold">Popper on bottom</p>
   </popper-content>
   <div [popper]="popper1Content"
        [popperShowOnStart]="true"
        [popperTrigger]="'click'"
		popperHideOnClickOutside
        [popperHideOnScroll]="true"
        [popperPlacement]="'bottom'">
       <p class="bold">Hey!</p>
       <p class="thin">Choose where to put your popper!</p>         
   </div>
  ```

4. As text:
 ```HTML
      <div popper="As text"
           [popperTrigger]="'hover'"
           [popperPlacement]="'bottom'"
           (popperOnShown)="onShown($event)">
        <p class="bold">Pop</p>
        <p class="thin">on the bottom</p>
      </div>
 ```

  ```HTML
       <div popper="{{someTextProperty}}"
            [popperTrigger]="'hover'"
            [popperPlacement]="'bottom'"
            [popperStyles]="{'background-color: 'blue''}"
            (popperOnShown)="onShown($event)">
         <p class="bold">Pop</p>
         <p class="thin">on the bottom</p>
       </div>
  ```
 
  5. Position fixed, breaking overflow:
   ```HTML
        <div popper="As text"
             [popperTrigger]="'hover'"
             [popperPlacement]="'bottom'"
             [popperPositionFixed]="true"
             (popperOnShown)="onShown($event)">
        </div>
   ```
 
 6. Specific target:
  ```HTML
 <div class="example">
       <div #popperTargetElement></div>
       <div popper="As text"
            popperTrigger="hover"
            popperPlacement="bottom"
            [popperTarget]="popperTargetElement.nativeElement"
            (popperOnShown)="onShown($event)">
       </div>
  ```
  
7. hide/show programmatically:
  ```HTML
   <div [popper]="tooltipcontent"
        popperTrigger="hover"
        popperPlacement="bottom"
        [popperApplyClass]="'popperSpecialStyle'">
        <p class="bold">Pop</p>
        <p class="thin">on the bottom</p>
      </div>
      <popper-content #tooltipcontent>
        <div>
          <p>This is a tooltip with text</p>
          <span (click)="tooltipcontent.hide()">Close</span>
        </div>
      </popper-content>
  ```
 
8. Attributes map:  
  
    | Option                       | Type              | Default   | Description                                                                                              |
    |:-----------------------      |:----------------  |:--------- | :------------------------------------------------------------------------------------------------------  |
    | popperDisableAnimation       | boolean           | false     | Disable the default animation on show/hide                                                               |
    | popperDisableStyle           | boolean           | false     | Disable the default styling                                                                              |
    | popperDisabled               | boolean           | false     | Disable the popper, ignore all events                                                                    |
    | popperDelay                  | number            | 0         | Delay time until popper it shown                                                                         |
    | popperTimeout                | number            | 0         | Set delay before the popper is hidden                                                                    |
    | popperTimeoutAfterShow       | number            | 0         | Set a time on which the popper will be hidden after it is shown                                          |
    | popperPlacement              | Placement(string) | auto      | The placement to show the popper relative to the reference element                                       |
    | popperTarget                 | HtmlElement       | auto      | Specify a different reference element other the the one hosting the directive                            |
    | popperBoundaries             | string(selector)  | undefined | Specify a selector to serve as the boundaries of the element                                             |
    | popperShowOnStart            | boolean           | false     | Popper default to show                                                                                   |
    | popperTrigger                | Trigger(string)   | click     | Trigger/Event on which to show/hide the popper                                                           |
    | popperPositionFixed          | boolean           | false     | Set the popper element to use position: fixed                                                            |
    | popperAppendTo               | string            | undefined | append The popper-content element to a given selector, if multiple will apply to first                   |
    | popperPreventOverflow        | boolean           | undefined | Prevent the popper from being positioned outside the boundary                                            |
    | popperHideOnClickOutside     | boolean           | true      | Popper will hide on a click outside                                                                      |
    | popperHideOnScroll           | boolean           | false     | Popper will hide on scroll                                                                               |
    | popperHideOnMouseLeave       | boolean           | false     | Popper will hide on mouse leave                                                                          |
    | popperApplyClass             | string            | undefined | list of comma separated class to apply on ngpx__container                                                |
    | popperStyles                 | Object            | undefined | Apply the styles object, aligned with ngStyles                                                           |
    | popperApplyArrowClass        | string            | undefined | list of comma separated class to apply on ngpx__arrow                                                    |
    | popperOnShown                | EventEmitter<>    | $event    | Event handler when popper is shown                                                                       |
    | popperOnHidden               | EventEmitter<>    | $event    | Event handler when popper is hidden                                                                      |
    | popperOnUpdate               | EventEmitter<>    | $event    | Event handler when popper is updated                                                                     |
    | popperAriaDescribeBy         | string            | undefined | Define value for aria-describeby attribute                                                               |
    | popperAriaRole               | string            | popper    | Define value for aria-role attribute                                                                     |


9. Override defaults:

    ngx-popperjs comes with a few default properties you can override in default to effect all instances
    These are overridden by any child attributes.
```JavaScript
NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxPopperjsModule.forRoot({placement: NgxPopperjsPlacements.TOP})],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]

});
```
  
   | Options                  | Type              | Default   |
   |:-------------------      |:----------------  |:--------- |
   | showDelay                | number            | 0         |
   | disableAnimation         | boolean           | false     |
   | disableDefaultStyling    | boolean           | false     |
   | placement                | Placement(string) | auto      |
   | boundariesElement        | string(selector)  | undefined |
   | trigger                  | Trigger(string)   | hover     |
   | positionFixed            | boolean           | false     |
   | hideOnClickOutside       | boolean           | true      |
   | hideOnMouseLeave         | boolean           | false     |
   | hideOnScroll             | boolean           | false     |
   | applyClass               | string            | undefined |
   | styles                   | Object            | undefined |
   | applyArrowClass          | string            | undefined |
   | ariaDescribeBy           | string            | undefined |
   | ariaRole                 | string            | undefined |
   | appendTo                 | string            | undefined |
   | preventOverflow          | boolean           | undefined |

10. popperPlacement:

  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'bottom-start'
  | 'left-start'
  | 'right-start'
  | 'top-end'
  | 'bottom-end'
  | 'left-end'
  | 'right-end'
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | Function
  
11. popperTrigger:

  | 'click'
  | 'mousedown'
  | 'hover'
  | 'none'
  
    
### Demo site with sample codes
<a href="https://tonysamperi.github.io/ngx-popperjs/">Demo of ngx-popperjs</a>

### Contribute
  You can only **report bugs**. Every other issue will be deleted right away.
  
```terminal
  $ npm install
  $ npm run start  //run example
```

## Special thanks

Jetbrains is now supporting this library with an open-source license, which will allow a better code! 🎉

![jetbrains-logo](https://user-images.githubusercontent.com/5957244/150580991-863d6fba-1090-4924-b26c-be19c6310f24.svg)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

### Thanks to

MrFrankel for setting up ngx-popper and maintaining till v 7.0.0.

[badge-bundle]: https://img.shields.io/bundlephobia/minzip/ngx-popperjs
[badge-ci-state]: https://github.com/tonysamperi/ngx-popperjs/actions/workflows/main.yml/badge.svg
[badge-licence]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[badge-npm-downloads]: https://img.shields.io/npm/dm/ngx-popperjs.svg?style=flat-square
[badge-npm-version]: https://img.shields.io/npm/v/ngx-popperjs.svg?style=flat-square
[badge-openbase]: https://badges.openbase.com/js/rating/ngx-popperjs.svg
[url-bundle]: https://img.shields.io/bundlephobia/minzip/ngx-popperjs
[url-ci-state]: https://github.com/tonysamperi/ngx-popperjs/actions
[url-licence]: https://github.com/tonysamperi/ngx-popperjs/blob/master/LICENSE
[url-npm]: https://www.npmjs.com/package/ngx-popperjs
[url-openbase]: https://openbase.com/js/ngx-popperjs
