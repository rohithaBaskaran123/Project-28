const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, boyImg;
var tree, treeImg;
var stone, stoneImg;
function preload()
{
boyImg= loadImage("boy.png");
treeImg= loadImage("tree.png");
stoneImg= loadImage("stone.png")
}

function setup() {
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1= new Stone (90,525,10,10);
ground1= new Ground (500,610,1000,10);
	Engine.run(engine);
mango1= new Mango (692,370,50,50);
mango2= new Mango (772,400,50,50); 
mango3= new Mango (792,320,50,50);
mango4= new Mango (882,330,50,50); 
mango5= new Mango (912,350,50,50); 
slingshot = new Slingshot(stone1.body, {x:80, y:525})
}


function draw() {
  rectMode(CENTER);
  background("white");
  
image(boyImg, 130,570, 175,175); 
image(treeImg, 605,220, 400,400);
stone1.display();
ground1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
slingshot.display();
}




function mouseDragged(){
    
        Matter.Body.setPosition(this.stone, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(this.stone);
    }
}



