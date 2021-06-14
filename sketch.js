
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball1= new BallClass(30,90,50)
ball2= new BallClass(110,90,50)
ball3= new BallClass(190,90,50)
ball4= new BallClass(270,90,50)
ball5= new BallClass(360,90,50)

rope=new Rope(400,50,500,20)

chain1=new Chain({x:180,y:50},ball1.body)
chain2=new Chain({x:240,y:50},ball2.body)
chain3=new Chain({x:300,y:50},ball3.body)
chain4=new Chain({x:360,y:50},ball4.body)
chain5=new Chain({x:420,y:50},ball5.body)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
rope.display();

chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();



  drawSprites();
 
}



