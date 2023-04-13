import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomDirectiveDemoComponent } from "./custom-directive-demo.component";
import { HelloDirective } from "./hello.directive";
import { DebugElement } from "@angular/core";
import { FormsModule } from "@angular/forms";

describe("CustomDirectiveDemoComponent", () => {
  let component: CustomDirectiveDemoComponent;
  let fixture: ComponentFixture<CustomDirectiveDemoComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomDirectiveDemoComponent, HelloDirective],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  }));


});
