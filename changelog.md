#8.0.0
* Release compatible with Angular 8, using @popper/core@2.4.4

#8.0.1
* ReadMe improved

#8.0.2
* Fixed @Input popperModifiers as now is array
* Fixed array types convention

#8.0.3
* Using InjectionToken to handle defaults, preventing using forRoot on every module importing NgxPopperJsModule

#8.0.4
* Handled void popperContentRef 
* Improved performance

#8.0.5
* Allowing importing without using the forRoot to use defaults automatically

#8.0.6
* Fix arrow color when using NgxPopperjsOptions.style.backgroundColor to set default popper color
* Made NgxPopperjsContentComponent extensible (protected members)
* Misc and refactor

#9.0.0
* Removed router which was actually pointless (only for demo, but still unused)
* Upgrade for Angular 9

#9.0.1
* Fix peerDependencies

#9.0.4
* Added postinstall validation

#9.0.7
* Updated postinstall validation

#10.0.0
* Upgrade for Angular 10

#10.0.1
* Fixed use of "append" breaking IE11 (and probably lower)
* Added typings for prismjs
* Added polyfill for prismjs (demo app)
* Added support for IE10-11 (demo app)

#10.0.2
* Added postinstall validation

#10.0.4
* Updated postinstall validation

#11.0.0
* Update for Angular 11

#12.0.0
* Update for Angular 12
