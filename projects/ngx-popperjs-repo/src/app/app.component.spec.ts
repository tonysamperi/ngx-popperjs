import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPopperjsAppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        NgxPopperjsAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NgxPopperjsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngx-popperjs-repo'`, () => {
    const fixture = TestBed.createComponent(NgxPopperjsAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngx-popperjs-repo');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NgxPopperjsAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ngx-popperjs-repo app is running!');
  });
});
