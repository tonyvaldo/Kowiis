class Raccoon {
  constructor() {
    this.r = 50;
    this.y = random(w);
    this.x = 802 + this.r;




  }

  display(){
    image(raccoonAnimation[frameCount % raccoonAnimation.length], this.x, this.y, this.r, this.r);
  }

  move(){
    this.x--;

  }
}
