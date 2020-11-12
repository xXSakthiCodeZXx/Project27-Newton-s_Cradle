
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(350,200,10);
	bob2 = new Bob(370,200,10);
	bob3 = new Bob(390,200,10);
	bob4 = new Bob(410,200,10);
	bob5 = new Bob(430,200,10);
	
	roof = new Roof(390,100,100,20);

	rope1 = new Rope(bob1.body,roof.body,-40,0);
	rope2 = new Rope(bob2.body,roof.body,-20,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,20,0);
	rope5 = new Rope(bob5.body,roof.body,40,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

        //Matter.Body.setStatic(bob1.body,false)
        //Matter.Body.setStatic(bob2.body,false)
        //Matter.Body.setStatic(bob3.body,false)
        //Matter.Body.setStatic(bob4.body,false)
        //Matter.Body.setStatic(bob5.body,false)

        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-15,y:-15});
	}
}

