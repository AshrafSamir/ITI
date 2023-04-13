import { async, ComponentFixture, TestBed } from "@angular/core/testing";
//? import { MockSpyService } from "./mock-spy.service";
import { SpyDemoComponent } from "./spy-demo.component";

describe("SpyDemoComponent", () => {
  let component: SpyDemoComponent;
  let fixture: ComponentFixture<SpyDemoComponent>;
  //? let _service: MockSpyService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpyDemoComponent],
  //? providers: [MockSpyService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyDemoComponent);
    component = fixture.componentInstance;
   //? _service = TestBed.get(MockSpyService);
  });

  //? it("getValue should be called inside ngoninit", function () {
  //?   spyOn(_service, "getValue");
  //?   component.ngOnInit();
  //?   expect(_service.getValue).toHaveBeenCalled();
  //? });
});
