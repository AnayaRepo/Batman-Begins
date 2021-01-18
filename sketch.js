const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var maxDrops = 50;
var boy;
var thunderImg, thunder;
var thunder1, thunder2, thunder3, thunder4;

function preload(){
  thunder1 = loadImage("images/1.png");
  thunder2 = loadImage("images/2.png");
  thunder3 = loadImage("images/3.png");
  thunder4 = loadImage("images/4.png");
}

function setup(){
  canvas = createCanvas(500, 570);

  engine = Engine.create();
  world = engine.world;

  boy = new Umbrella(250, 410, 130, 320);

  for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0, 400), random(0, 400), 7));
  }

  thunder = createSprite(250, 100);
  thunder.addImage(thunder1);
  thunder.scale = 0.30;
}

function draw(){
  background("black");
  Engine.update(engine);

  boy.display();

  for(var i=0; i<drops.length; i++){
    drops[i].display();
  }
  for(var i=0; i<drops.length; i++){
    drops[i].update();
  }

  if(frameCount%30===0){
    var num = Math.round(random(1,4));
    switch(num){
      case 1: thunder.addImage(thunder1);thunder.scale = 0.30;
        break;
      case 2: thunder.addImage(thunder2);thunder.scale = 0.30;
        break;
      case 3: thunder.addImage(thunder3);thunder.scale = 0.30;
        break;
      case 4: thunder.addImage(thunder4);thunder.scale = 0.30;
        break;
    }
  }

  drawSprites();
}   

