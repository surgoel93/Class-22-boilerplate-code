const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
isStatic: true

  }

  ground = Bodies.rectangle(200,390,200,20, options);
  World.add(world, ground);
  
}
function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER) 
rect(ground.position.x, ground.position.y, 400,20);
  drawSprites();
}