'use strict'


let state = 'title'
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let algae = [];

function setup() {
  cnv = createCanvas(w, h);
  textFont('courier');

  player = new Player();

  // algae[0] = new Algae();
  algae.push(new Algae());
}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'YOU WIN':
      youWin();
      cnv.mouseClicked(youWinMouseClicked)
      break;
    default:
      break;
  }

}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function title() {
  background(33, 92, 49);
  textSize(80);
  stroke(255);
  textAlign(CENTER);
  text('KOWIIS', w / 2, h / 5);

  textSize(30);
  text('Click to start swimming!', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page!');
  state = 'level 1'
}

function level1() {
  background(156, 214, 189);
  // text('click for points', w/2, h - 30);

if (random(1) <= 0.01){
  algae.push(new Algae());
}

  player.display();
  player.move();

for (let i = 0; i < algae.length; i++){
  algae[i].display();
  algae[i].move();
}

  //check for collision, and if there is, increase points by 1 AND splce that coin out of array
// need to iterate backwards through array

for (let i = algae.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, algae[i].x, algae[i].y) <= (player.r + algae[i].r) / 2) {
    points++;
    console.log(points);
  }
}

  text(`points: ${points}`, w / 4, h - 30);

}

function level1MouseClicked() {
  // points++;
  // console.log('points = ' + points);
  //
  // if (points >= 10) {
  //   state = 'YOU WIN';
  // }
}

function youWin() {
  background(195, 159, 212);
  textSize(80);
  stroke(255);
  text('YOU WIN', w / 2, h / 2);

  textSize(30);
  text('Click anywhere to restart!', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'level 1'
  points = 0;
}
