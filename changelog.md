#14.1.2
* Added rxjs to peerDependencies in build package

#14.1.1
* Updated latest patch for @popperjs/core

#14.1.0
* Moved @popperjs/core to dependencies to get it installed automatically upon installing ngx-popperjs

#14.0.2
* Angular 14 now allows to dynamically append components without using any factory (closes [#29](https://github.com/tonysamperi/ngx-popperjs/issues/29))
* Fixed tsconfig

#14.0.1
* Added missing peer dep

#14.0.0
* Update for Angular 14

#13.2.2
* Added missing peer dep (closes [#26](https://github.com/tonysamperi/ngx-popperjs/issues/26))

#13.2.1
* Updated core dep

#13.2.0
* General refactor of dynamic component handling
* Refactored events using rxjs instead of renderer: should lead to performance improvement
#13.1.0
* Added exportAs in NgxPopperjsContentComponent to allow access value, such as id (fix [#21](https://github.com/tonysamperi/ngx-popperjs/issues/21))

#13.0.1
* Removed listener for touchend, causing popper to close on mobile although it shouldn't (fix [#18](https://github.com/tonysamperi/ngx-popperjs/issues/18))

#13.0.0
* Update for Angular 13
* Removed polyfills from demo app
* Misc

#12.2.1
* Fixed docs (default popperTrigger is "click" since v8)
* Removed old prop "showTrigger" probably inherit from a previous version of popper.js

#12.2.0
* Fixed isssue with popperPlacement passed though forRoot ([#14](https://github.com/tonysamperi/ngx-popperjs/issues/14))
* Added exportAs "popper" on NgxPopperJsDirective ([#15](https://github.com/tonysamperi/ngx-popperjs/issues/15))

#12.1.2
* Changed peer dependencies to support latest minor, thanks to @BrycenDavisSH

#12.1.1
* Refactor of duplicated code
* Updating popper on preventOverflow input change

#12.1.0
* Update for Angular 12.1.x

#12.0.0
* Update for Angular 12.0.x

#11.0.0
* Update for Angular 11

#10.0.4
* Updated postinstall validation

#10.0.2
* Added postinstall validation

#10.0.1
* Fixed use of "append" breaking IE11 (and probably lower)
* Added typings for prismjs
* Added polyfill for prismjs (demo app)
* Added support for IE10-11 (demo app)

#10.0.0
* Upgrade for Angular 10

#9.0.7
* Updated postinstall validation

#9.0.4
* Added postinstall validation

#9.0.1
* Fix peerDependencies

#9.0.0
* Removed router which was actually pointless (only for demo, but still unused)
* Upgrade for Angular 9

#8.0.6
* Fix arrow color when using NgxPopperjsOptions.style.backgroundColor to set default popper color
* Made NgxPopperjsContentComponent extensible (protected members)
* Misc and refactor

#8.0.5
* Allowing importing without using the forRoot to use defaults automatically

#8.0.4
* Handled void popperContentRef
* Improved performance

#8.0.3
* Using InjectionToken to handle defaults, preventing using forRoot on every module importing NgxPopperJsModule

#8.0.2
* Fixed @Input popperModifiers as now is array
* Fixed array types convention

#8.0.1
* ReadMe improved

#8.0.0
* Release compatible with Angular 8, using @popper/core@2.4.4
