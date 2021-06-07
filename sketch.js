
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;


var roof,ball1,ball2,ball3,ball4,ball5,rope1,r,rope2,rp

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
	 
	engine=Engine.create();

	world=engine.world;

  roof=new Roof(width/2,height/2,250,20);

	ball1=new Balls(300,500,25);
	ball2=new Balls(350,500,25);
	ball3=new Balls(400,500,25);
	ball4=new Balls(450,500,25);
	ball5=new Balls(500,500,25);

var render=Render.create({
	element:document.body,
engine:engine,
options:{
	width:800,
	height:700,
	wireframes:false
}
});
  rope1= new Rope(ball1.body,roof.body,-100,0);
  rope2= new Rope(ball2.body,roof.body,-50,0)
  rope3= new Rope(ball3.body,roof.body,0,0)
  rope4= new Rope(ball4.body,roof.body,50,0)
  rope5= new Rope(ball5.body,roof.body,100,0)


Engine.run(engine); 

}


function draw() {
  rectMode(CENTER);

  background(230);
  
  
 
roof.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
  


}
  function keyPressed() {
  	if (keyCode === 38) {

    	Matter.Body.applyForce(ball1.body,ball1.body.position,{x: -100,y: -45 });

  	}
}
