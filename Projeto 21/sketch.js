var  ball,ground,leftSide,rightSide
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

ground= new Ground(width/2,670,width,20)
leftSide= new Ground(990,600,20,120)
rightSide= new Ground(875,600,20,120)
	var ball_options={

isStatic:false,
restitution:0.3,
friction:0,
density:1.2

	}
	//Create the Bodies Here.
ball = Bodies.circle(200,40,40)
World.add(world,ball)
  
Engine.run(engine);

}


function draw() {
 rectMode(CENTER);
  background(0);
  
ground.show()
leftSide.show()
rightSide.show()
  drawSprites();
 
  ellipse(ball.position.x, ball.position.y,40)
}



function keyPressed(){

	if(keyCode === UP_ARROW){

		Body.applyForce(ball,{x:0,y:0},{x:0.20,y:-0.35})
	}


}
