import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormDemoComponent } from "./form-demo.component";

import { ReactiveFormsModule } from "@angular/forms";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
describe("FormDemoComponent", () => {
  let component: FormDemoComponent;
  let fixture: ComponentFixture<FormDemoComponent>;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormDemoComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDemoComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it("check userEmail validation", function () {
    let email = component.loginForm.controls["useremail"];

    email.setValue("abc");
    expect(email.valid).toBeFalsy();

    email.setValue("abc@gmail.com");

    expect(email.valid).toBeTruthy();
  });

  it("check userPasswrd validation", function () {
    let password = component.loginForm.controls["userpassword"];

    password.setValue("123");
    expect(password.errors).not.toBeNull();

    password.setValue("123456");

    expect(password.errors).toBeNull();
  });

  it("check form submission while form is valid", function () {
    const inp = de.query(By.css("input[type=submit]"));

    let email = component.loginForm.controls["useremail"];
    let password = component.loginForm.controls["userpassword"];
    email.setValue("abc@gmail.com");
    password.setValue("123456");

    fixture.detectChanges();

    expect(component.loginForm.errors).toBeNull();

    expect(inp.nativeElement.disabled).toBeFalsy();
  });
});
