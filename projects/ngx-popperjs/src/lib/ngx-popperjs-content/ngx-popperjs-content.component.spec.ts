import { async, ComponentFixture, TestBed } from "@angular/core/testing";
//
import { NgxPopperjsContentComponent } from "./ngx-popper-content.component";

describe("NgxPopperJsContentComponent", () => {
  let component: NgxPopperjsContentComponent;
  let fixture: ComponentFixture<NgxPopperjsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPopperjsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPopperjsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
