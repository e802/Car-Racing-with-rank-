var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
//Creating sprites for cars

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;
var ranking;
var button;

//loading the images to reduce delay
function preload() {
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  button=select("#button");
  button.mousePressed(showRank);



}


function draw() {
  // frameRate(1);
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
    // button.hide();
  }
  if (gameState === 2) {
    game.end();
    // remove();
  }



}
//displaying ranks
//make this a table
function showRank()
{
  canvas.remove();
  ranking=createElement("h1")
  ranking.html(player.name + "'s"+" rank is " + " "+player.rank);
  button.hide();
}
