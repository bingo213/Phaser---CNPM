class Cir {
  constructor(radius, color) {
    this.radius = radius;
    this.fillColor = color;
  }
  isFill() {
    if (this.fillColor === 0xffffff)
      return false;
    return true;
  }
}

class Rect {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.fillColor = color;
  }
  isFill() {
    if (this.fillColor === 0xffffff)
      return false;
    return true;
  }
}

class Tri {
  constructor(x1, x2,x3, color) {
    this.x1 = x1;
    this.x2 = x2;
    this.x3 = x3;
    this.fillColor = color;
  }
  isFill() {
    if (this.fillColor === 0xffffff)
      return false;
    return true;
  }
}


function isTrueColor(shape) {
  const greenColor = 0x2ECC71;
  const yellowColor = 0xF1C40F;
  const pinkColor = 0xE91E63;

  if (shape instanceof Rect) {
    if (shape.fillColor === greenColor) return true;
    else return false;
  }
  if (shape instanceof Cir) {
    if (shape.fillColor === yellowColor) return true;
    else return false;
  }
  if (shape instanceof Tri) {
    if (shape.fillColor === pinkColor) return true;
    else return false;
  }
}
