const Engine = Matter.Engine;
const  World = Matter.World;
const Events = Matter.Events;
const  Bodies = Matter.Bodies;

var engine, world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(width/2,height,width,20);
 for (var k=0;k<=width;k=k+80){
  
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
   }
   for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}
for (var j = 100; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,120));
}
for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,160));
}
for (var j = 100; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,200));
}
for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,240));
}
for (var j = 100; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,280));
}
}

function draw() {
  background(0); 
  text("Score : "+score,20,30); 
  Engine.update(engine);
  ground.display();
 // division1.display();
 for(var k=0;k<divisions.length;k++)
 {
   divisions[k].display() ;
 }
 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-100, width/2+100), 10,10));
  score++;
}
 for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
}
for(var i=0;i<plinkos.length;i++){
  plinkos[i].display();
}
}