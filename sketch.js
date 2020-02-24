var  database;
var gameState,submitted_no;
var form,game,player;
gameState = 0;
 

function setup(){
  database = firebase.database();
  console.log(database);

  createCanvas(450,800);
  game = new Game();

  game.start();

}
function draw(){
  background("white");
}
