var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var enemies;
var fireGroup,fireimg,fire
var enemy_img,enemy
var player_img;
var score = 30

function preload(){
  back_img = loadImage("images/background.png");
  player_img = loadImage("images/player2.png");
  enemy_img = loadImage("images/enemy.png");
  fireimg = loadImage("images/fire.png")
  fireGroup = new Group();
}
function setup() {
  createCanvas(windowWidth,580);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  console.log(score)
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}