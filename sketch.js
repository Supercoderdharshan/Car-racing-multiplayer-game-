var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1, car2, car3, car4, cars;

function preload() {
  car1Img = loadImage("images/car1.png");
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  track = loadImage("images/track.jpg");
  track2 = loadImage("images/track2.jpg");
  bgImg = loadImage("images/bg.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth - 40, displayHeight - 150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 // player.updateCount(0);
  //game.update(0);
}


function draw() {
  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.play();
  }

  if(gameState === 2) {
    game.end()
  }
}
