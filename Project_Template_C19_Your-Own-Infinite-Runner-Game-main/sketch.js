var PLAY = 1;
var END = 0;
var gameState = PLAY;

var mario, mario_running, mario_collided;
var cenário, invisibleCenário, cenárioImg;
var inimigo1, inimigo2, inimigosGroup;


var score;
var gameOverImg,restartImg;
function preload(){
 
  mario_running = loadAnimation("Mario1.png","Mario2.png", "Mario3.png");
  mario_collided = loadAnimation("Mario4.png")
  
  
  cenárioImg = loadImage("Cenário.png");

  inimigo1 = loadImage("inimigo.png")
  inimigo2 = loadImage("inimigo2.png")
 
  
  
  
  
 
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
  
  
}

function setup() {
  createCanvas(600, 200);
  
  mario = createSprite(50,160,20,50);
  mario.addAnimation("running", mario_running);  
  mario.addAnimation("collided", mario_collided);
  mario.scale = 0.2;

  
  cenário = createSprite(200,180,400,20);
  cenário.addImage("cenário",cenárioImg);
  cenário.x = cenário.width /2;
  
  gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
 
  gameOver.scale = 0.1;
  restart.scale = 0.5;
  
  invisibleCenário = createSprite(200,190,400,10);
  invisibleCenário.visible = false;
  
  

  
  mario.setCollider("rectangle",0,0,mario.width,mario.height);
  mario.debug = true
  
  score = 0;

  inimigosGroup = createGroup()
  
}

function draw() {
  
  background(180);

  text("Pontuação: "+ score, 500,50);
  
  
  if(gameState === PLAY){

    gameOver.visible = false;
    restart.visible = false;
    spawnInimigos()
    
    cenário.velocityX = -(4 + 3* score/100)
    
    score = score + Math.round(getFrameRate()/60);
    
    
    
    
    if (cenário.x < 0){
      cenário.x = cenário.width/2;
    }
    
    
    if(keyDown("space")&& mario.y >= 150) {
        mario.velocityY = -14;
        
    }
    
    mario.velocityY = mario.velocityY + 0.8
  


    
    
    
    
  }
   else if (gameState === END) {
      gameOver.visible = true;
      restart.visible = true;
      cenário.velocityX = 0;
      mario.velocityY = 0;
      mario.velocityX = 0; 
      inimigosGroup.setLifetimeEach(-1);
      inimigosGroup.setVelocityXEach(0);
      
      mario.changeAnimation("collided", mario_collided)
     

      
     
   }
  
 
 
  mario.collide(invisibleCenário);
  
  if(mousePressedOver(restart)) {
      reset();
    }
  
   

  if(inimigosGroup.isTouching(mario)){
    gameState = END
  }

 
   

  drawSprites();
}

function reset(){
  gameState = PLAY
  inimigosGroup.destroyEach()
  score = 0
  mario.changeAnimation("running", mario_running)
  

}

function spawnInimigos(){
  if (frameCount % 60 === 0){
  var inimigo = createSprite(600,155,10,40);
    inimigo.velocityX = -(6 + score/100);

     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: inimigo.addImage(inimigo1);
               break;
       case 2: inimigo.addImage(inimigo2);
               break;
       default: break;
     }
             
     inimigo.scale = 0.1;
     inimigo.lifetime = 300;

     inimigosGroup.add(inimigo)
 
  }
 }
 



 
