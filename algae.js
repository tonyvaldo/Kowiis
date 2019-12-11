class Algae {
  constructor() {
    this.r = 50;
    this.y = random(w);
    this.x = 802 + this.r;

  }

  display(){
    image(algaeAnimation[frameCount % algaeAnimation.length], this.x, this.y, this.r, this.r);
    // ellipse(this.x, this.y, this.r, this.r);
  }

  move(){
    this.x--;
  }
}
