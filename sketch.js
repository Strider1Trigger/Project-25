
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3
var ground,paper
var dustBinimg

function preload() {

	dustBinimg=loadImage("dustbingreen.png")

}
	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1=new Dustbin(width/2+130,610,20,100)
	wall2=new Dustbin(width/2+220,650,200,20)
	wall3=new Dustbin(width/2+330,610,20,100)
	ground=new Ground(400,670,800,10)
	paper=new Paper(100,100,20)

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(180);
  
  wall1.display()
  wall2.display()
  wall3.display()
  ground.display()
  paper.display()

  imageMode(CENTER)
  image(dustBinimg,width/2+225,580,250,175)
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

   Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

  }
}



