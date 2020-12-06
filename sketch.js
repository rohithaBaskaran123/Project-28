
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, boyImg;
function preload()
{
boyImg= loadImage("")
}

function setup() {
	createCanvas(800, 700);
boy=createSprite(400,300);
boy=addImage("throw",boyImg);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  drawSprites();
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



