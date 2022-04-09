const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snow = [];
var maxDrops=100;
var backImg
var snow

function   preload(){
  backImg= loadImage("snow2.jpg")
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
 
  

    for(var i=0; i<15; i++){
      snow.push(new Snow());
    }


}

function draw() {
  background(backImg); 
  for(var i = 0; i<snow.length; i++){
    snow[i].display();
    snow[i].update()
    
}
 
}