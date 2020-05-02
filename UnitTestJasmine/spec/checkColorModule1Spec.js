let c1 = new Cir(20, 0xff0000);
let c2 = new Cir(20, 0xffffff);
let c3 = new Cir(10, 0xF1C40F);
describe("Check fill color circle", function() {
  it("circle 1 should return true", function() {
    expect(c1.isFill()).toEqual(true);
  });
  it("circle 2 should return false", function() {
    expect(c2.isFill()).toEqual(false);
  });
  it("circle 3 should return true", function() {
    expect(c3.isFill()).toEqual(true);
  });
});

let r1 = new Rect(10, 20, 0x00ff00);
let r2 = new Rect(20, 25, 0xffffff);
let r3 = new Rect(10,10, 0x2ECC71);
describe("Check fill color rectangle", function() {
  it("rectangle 1 should return true", function() {
    expect(r1.isFill()).toEqual(true);
  });
  it("rectangle 2 should return false", function() {
    expect(r2.isFill()).toEqual(false);
  });
  it("rectangle 3 should return true", function() {
    expect(r3.isFill()).toEqual(true);
  });
});

let t1 = new Tri(10, 15, 20, 0x0000ff);
let t2 = new Tri(30, 20, 25, 0xffffff);
let t3 = new Tri (10,10,10,0xE91E63);
describe("Check fill color triangle", function() {
  it("triangle 1 should return true", function() {
    expect(t1.isFill()).toEqual(true);
  });
  it("triangle 2 should return false", function() {
    expect(t2.isFill()).toEqual(false);
  });
  it("triangle 3 should return true", function() {
    expect(t3.isFill()).toEqual(true);
  });
});

describe("Check true color of shapes", function(){
  //circle
  it("circle 1 should return false", function(){
    expect(isTrueColor(c1)).toEqual(false);
  });
  it("circle 2 should return false", function(){
    expect(isTrueColor(c2)).toEqual(false);
  });
  it("circle 3 should return true", function(){
    expect(isTrueColor(c3)).toEqual(true);
  });

  //rectangle
  it("rectangle 1 should return false", function(){
    expect(isTrueColor(r1)).toEqual(false);
  });
  it("rectangle 2 should return false", function(){
    expect(isTrueColor(r2)).toEqual(false);
  });
  it("rectangle 3 should return true", function(){
    expect(isTrueColor(r3)).toEqual(true);
  });

  //triangle
  it("triangle 1 should return false", function(){
    expect(isTrueColor(t1)).toEqual(false);
  });
  it("triangle 2 should return false", function(){
    expect(isTrueColor(t1)).toEqual(false);
  });
  it("triangle 3 should return true", function(){
    expect(isTrueColor(t3)).toEqual(true);
  });
});
