
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

	//Create the Bodies Here.
	ground = new Ground(400,680,800,30);
	platformA = new Platform(400,500,300,20)
	platformB = new Platform(650,200,300,20)
	
    box1 = new Box (263,474)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  drawSprites();
  ground.display();
  platformA.display();
  platformB.display();
  box1.display();
 
}



