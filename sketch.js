
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var wall, chain1, chain2, chain3, chain4, chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall=new Stand(400, 20, width, 20);


	bob1= new Bob(200, 100, 20);
	bob2= new Bob(240, 100, 20);
	bob3= new Bob(280, 100, 20);
	bob4= new Bob(320, 100, 20);
	bob5= new Bob(360, 100, 20);

	chain1= new Chain(bob1.body, {x:200, y:20});
	chain2= new Chain(bob2.body, {x:240, y:20});
	chain3= new Chain(bob3.body, {x:280, y:20});
	chain4= new Chain(bob4.body, {x:320, y:20});
	chain5= new Chain(bob5.body, {x:360, y:20});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if (keyDown(UP_ARROW)){
	keypressed();
}
	
  
  drawSprites();
  bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	wall.display();
	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

 
}
function keypressed(){
	if(keyCode== UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-5, y:-6});
	}
}



