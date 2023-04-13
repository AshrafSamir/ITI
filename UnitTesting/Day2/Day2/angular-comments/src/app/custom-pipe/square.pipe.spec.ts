import { SquarePipe } from "./square.pipe";
import { TestBed, async } from "@angular/core/testing";
describe("SquarePipe", () => {
  let pipe: SquarePipe;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SquarePipe],


    }).compileComponents();
    pipe = new SquarePipe();
  }));

  it("create an instance", () => {
    expect(pipe).toBeTruthy();    //? by default make sure creation of component
  });

  //^  it("pipe should transform number to it's square",function(){
  //^    expect(pipe.transform(5)).toEqual(25)
  //^    expect(pipe.transform("mona")).toEqual('Not a number')
  //^  })
});
