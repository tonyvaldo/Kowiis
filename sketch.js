'use strict'


let state = 'title'
let cnv;
let points = 0;
let w = 800;
let h = 400;
let player;
// let algae;
let algae = [];
// let playerImg;
// let algaeImg;
let riverImg;
let titleImg;

//spritesheets and animations
let img;
// let titleSS;
// let titleJSON;
let playerSS;
let algaeSS;
let raccoonSS;

let playerJSON;
let algaeJSON;
let raccoonJSON;

let playerAnimation = [];
let algaeAnimation = [];
let raccoonAnimation = [];
// let titleAnimation = [];

function preload() {
  //still images
  // playerImg = loadImage('assets/clammy.png')
  // algaeImg = loadImage('assets/algae.png')
  riverImg = loadImage('assets/river sample.jpg')
  titleImg = loadImage('assets/title_single.png')

  //  spritesheets
  // titleSS = loadImage('assets/SS/title.png');
  // titleJSON = loadJSON('assets/new_jsons/title.json');
  playerSS = loadImage('assets/SS/clammy_2.png');
  playerJSON = loadJSON('assets/new_jsons/clammy_2.json');
  algaeSS = loadImage('assets/SS/algaesheet.png');
  algaeJSON = loadJSON('assets/new_jsons/algae.json');
  raccoonSS = loadImage('assets/SS/raccoonsheet.png');
  raccoonJSON = loadJSON('assets/new_jsons/raccoon.json');
}

function setup() {
  cnv = createCanvas(w, h);
  textFont('courier');



  let playerFrames = playerJSON.frames;
  for (let i = 0; i < playerFrames.length; i++) {
    let pos = playerFrames[i].frame;
    let img = playerSS.get(pos.x, pos.y, pos.w, pos.h);
    playerAnimation.push(img);
    console.log(playerFrames[i]);

  }

  let algaeFrames = algaeJSON.frames;
  for (let i = 0; i < algaeFrames.length; i++) {
    let pos = algaeFrames[i].frame;
    let img = algaeSS.get(pos.x, pos.y, pos.w, pos.h);
    algaeAnimation.push(img);
    console.log(algaeFrames[i]);

  }

  let raccoonFrames = raccoonJSON.frames;
  for (let i = 0; i < raccoonFrames.length; i++) {
    let pos = raccoonFrames[i].frame;
    let img = raccoonSS.get(pos.x, pos.y, pos.w, pos.h);
    raccoonAnimation.push(img);
    console.log(raccoonFrames[i]);

  }
  //
  // let titleFrames = titleJSON.frames;
  // for (let i = 0; i < titleFrames.length; i++) {
  //   let pos = titleFrames[i].frame;
  //   let img = titleSS.get(pos.x, pos.y, pos.w, pos.h);
  //   titleAnimation.push(img);
  //   console.log(titleFrames[i]);
  //
  // }

  player = new Player();
  // algae[0] = new Algae();
  // algae.push(new Algae());
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
  background(titleImg);
  textSize(80);
  stroke(255);
  textAlign(CENTER);
  // text('KOWIIS', w / 2, h / 5);

  textSize(30);
  text('CLICK TO START NOM-NOM!', w / 2, h / 1.2);


}

function titleMouseClicked() {
  console.log('canvas is clicked on title page!');
  state = 'level 1'
}

function level1() {
  background(riverImg);
  // text('click for points', w/2, h - 30);

  if (random(1) <= 0.05) {
    algae.push(new Algae());
  }

  // if (random(1) <= 0.05) {
  //   raccoon.push(new Raccoon());
  // }

  player.display();
  player.move();

  //iterating through algae array to display and move them

  //using for loop
  for (let i = 0; i < algae.length; i++) {
    algae[i].display();
    algae[i].move();
  }

  //check for collision, and if there is, increase points by 1 AND splce that coin out of array
  // need to iterate backwards through array

  for (let i = algae.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, algae[i].x, algae[i].y) <= (player.r + algae[i].r) / 2) {
      points++;
      algae.splice(i, 1);
    } else if (algae[i].y > h) {
      algae.splice(i, 1);
      console.log('algae is gone!');
    }
  }

  text(`points: ${points}`, w / 8, h - 30);
  fill(249, 192, 249);
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
