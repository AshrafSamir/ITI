//~ import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
//~ import { By } from "@angular/platform-browser";
import { EventTestComponent } from "./event-test.component";
describe("EventTestComponent", () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  //~ let de: DebugElement;
  beforeEach(async(() => {  //  module.ts
    TestBed.configureTestingModule({
      declarations: [EventTestComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    //~ de = fixture.debugElement;
  });
  it("should create",()=>{
    expect(component).toBeTruthy();
  })
  // it("addClick button increase the variable by one", function () {
  //    const btn = de.query(By.css("#btnAddClick"));
  //   const h1Element = de.query(By.css("h1"));
  //   component.ngOnInit();
  //   fixture.detectChanges();
  //   btn.triggerEventHandler("click", {});
  //   fixture.detectChanges();
  //   expect(component.countClicks).toEqual(1);
  //   expect(h1Element.nativeElement.textContent).toEqual("1");
  // });
});
