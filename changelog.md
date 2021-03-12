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

#8.0.7
* Added missing export of NgxPopperjsDirective. Useful for injection through other directives.

#8.0.8
* Oops, this one was skipped, sorry!

#8.0.9
* Fixed object merging for default options passed through the forRoot method

#8.0.10
* Fixed use of "append" breaking IE11 (and probably lower)
