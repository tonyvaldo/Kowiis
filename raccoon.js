class Raccoon {
  constructor() {
    this.r = 70;
    this.y = 200 + random(w);
    this.x = 802 + this.r;




  }

  display() {
    image(raccoonAnimation[int(frameCount / 2) % raccoonAnimation.length], this.x, this.y, this.r, this.r);
  }

  move() {
    this.x--;

  }
}
