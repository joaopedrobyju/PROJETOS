var Runner,path;
var RunnerImg,pathImg;
var Boundary

function preload(){
  //imagens pré-carregadas
  RunnerImg1 = loadAnimation("Runner-1.png", "Runner-2.png");

  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = +5;
  path.scale=0.9;

  Runner = createSprite(130,200,30,30);
  Runner.addAnimation("movingRunner",RunnerImg1);
  Runner.scale =0.05;
}

function draw() {
  background(0);

  path.velocityY = +3;

  if(path.y > 400){
    
    path.y = height/2;
  }
  
  

  drawSprites();

}
Boundary.visible = false;