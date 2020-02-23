const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground1;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  ground1 = new Ground(200,390,400,53);
  box1 = new Box(40,200,30,310);
  box2 = new Box(370,220,30,310);
  box3 = new Box(90,200,40,250);
  box5 = new Box(140,200,40,220);
  box7 = new Box(190,200,40,310); 
  box4 = new Box(90,20,39,39);
  box6 = new Box(140,20,40,40);
  box8 = new Box(190,10,40,40);
  box9 = new Box(240,180,40,220);
  box10 = new Box(240,20,40,40);

  box11 = new Box(300,200,30,250);
  box12 = new Box(300,20,30,40);
 
 
}

function draw() {
  background(255,255,255);
  Engine.update(engine);

  
  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box5.display();
  box7.display();
  push();
 fill(235,250,155);
  box4.display();
  box6.display();
  box8.display();
  box10.display();
 
  box12.display();
  pop();
   box11.display();
  box9.display();
 

 
 
 
ground1.display();


  drawSprites();
}