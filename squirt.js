class Squirt {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;



     this.move = function() {

     this.x = this.x + 2
    };

    this.show = function() {
      strokeWeight(1)
      image(,this.x, this.y, this.r * 2);

    };
}
}
