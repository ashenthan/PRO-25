
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paper;
var  box1;
var ground

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;
	
paper = new Paper(240,360,15);

//paper.addImage(paper_img)
ground = new Ground(width/2,height-20,width,10)
/*box3 = new Box(750,515,10,100);
box2 = new Box(650,515,10,100);*/
box1 = new Box(700,530,100,100);


	Engine.run(engine);
  
}


function draw() {
  //keyPressed();
  background(255);
  paper.display();
  ground.display();
  /*box3.display();
  box2.display();*/
  box1.display();
}

function keyPressed(){
console.log("Hi")
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:30,y:-30})
		console.log("Hello")
	}
}

1



