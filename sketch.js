
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,height,1200,20);
	paper1 = new paper(200,450,40)
	dustbin1 = new dustbin(600,680,200,20)
	dustbin2 = new dustbin(490,640,20,100)
    dustbin3 = new dustbin(700,640,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display()
  paper1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  drawSprites();
 
}
 function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:40,y:-50})
}

 }


