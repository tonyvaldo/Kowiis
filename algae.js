class Algae {
  constructor() {
    this.r = 50;
    this.y = random(w);
    this.x = 500 + this.r;

  }

  display(){
    image(algaeImg, this.x, this.y, this.r, this.r);
    // ellipse(this.x, this.y, this.r, this.r);
  }

  move(){
    this.x--;
  }
}
