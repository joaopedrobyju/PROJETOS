
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var leftSide;
var groundObj;
var rightSide;
var raio = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options={
		isStatic: true
	}

	var ball_options={
	  isStatic: false,
      restitution: 0.3,
      friction: 0,
	  density: 1.2
	}

	groundObj = new Ground(width/2, 670, width, 20, ground_options);
    leftSide = new Ground(1100, 600, 20, 120, ground_options);
	rightSide = new Ground(1350, 600, 20, 120, ground_options);

	ball = Bodies.circle(200, 100, raio/2, ball_options);
    World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, raio, raio);
  groundObj.display();
  leftSide.display();
  rightSide.display();
   
  
  
 
}

function keyPressed() {
	if(keyCode === 38) {
	  Matter.Body.applyForce(ball,ball.position,{x:85, y:-85})
  }
}


