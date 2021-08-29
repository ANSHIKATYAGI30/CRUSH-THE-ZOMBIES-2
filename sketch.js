const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var wall1, wall2;
var bridge;
var jointPoint;
var jointLink;
var stones=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground= new Base (0,height-10,width*2,70 );
  wall1= new Base(1440, 650, 200, 200);
  wall2= new Base(50, 650, 200, 200);
  bridge = new Bridge(20, {x:width/2-50, y:height/2-10});
  jointPoint= new Base(1440, 650,200,200);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink= new Link (bridge, jointPoint);

  for(var i=0; i<=8; i++){
    var x= random(width/2-200, width/2+300);
    var y= random(-10,140);
    var stone= new Stone(x,y,80,80);
  stones.push(stone);
  }
  


  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);
  ground.display();
  wall1.display();
  wall2.display();
  bridge.show();
  jointPoint.display();

 for(var stone of stones){
   stone.display();
 }
}
