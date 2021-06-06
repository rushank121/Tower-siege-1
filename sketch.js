const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2;
//IGNORE!
/*function preload() {

}*/

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,650,450,20);
  ground2 = new Ground(1200,450,400,20);

  boder1 = createSprite(1495,350,10,1500);
  boder1.shapeColor=color("white");
  boder2 = createSprite(750,695,1500,10);
  boder2.shapeColor=color("white");
  boder3 = createSprite(5,350,10,1500);
  boder3.shapeColor=color("white");
  boder4 = createSprite(750,5,1500,10)
  boder4.shapeColor=color("white");

  block1blue = new Boxblue(600,610,50,60);
  block2blue = new Boxblue(652,610,50,60);  
  block3blue = new Boxblue(548,610,50,60);
  block4blue = new Boxblue(496,610,50,60);
  block5blue = new Boxblue(444,610,50,60);
  block6blue = new Boxblue(704,610,50,60);  
  block7blue = new Boxblue(756,610,50,60);

  block1pink = new Boxpink(600,548,50,60);
  block2pink = new Boxpink(652,548,50,60);  
  block3pink = new Boxpink(548,548,50,60);
  block4pink = new Boxpink(496,548,50,60);
  block5pink = new Boxpink(704,548,50,60);
  block6pink = new Boxpink(1200,286,50,60);

  block1green = new Boxgreen(600,486,50,60);
  block2green = new Boxgreen(652,486,50,60);  
  block3green = new Boxgreen(548,486,50,60);
  block4green = new Boxgreen(1200,348,50,60);
  block5green = new Boxgreen(1253,348,50,60);  
  block6green = new Boxgreen(1147,348,50,60);

  block1grey = new Boxgrey(600,424,50,60);

  block8blue = new Boxblue(1200,410,50,60);
  block9blue = new Boxblue(1252,410,50,60);  
  block10blue = new Boxblue(1304,410,50,60);
  block11blue = new Boxblue(1148,410,50,60);
  block12blue = new Boxblue(1096,410,50,60);

  polygon1 = new polygon(100,500);

  slingshot = new SlingShot(polygon1.body,{x:100, y:500});
}

function draw() {
  background("grey");  

  ground1.display();
  ground2.display();

  block1blue.display();
  block2blue.display();
  block3blue.display();
  block4blue.display();
  block5blue.display();
  block6blue.display();
  block7blue.display();
  block8blue.display();
  block9blue.display();
  block10blue.display();
  block11blue.display();
  block12blue.display();

  block1pink.display();
  block2pink.display();
  block3pink.display();
  block4pink.display();
  block5pink.display();
  block6pink.display();

  block1green.display();
  block2green.display();
  block3green.display();
  block4green.display();
  block5green.display();
  block6green.display();

  block1grey.display();

  polygon1.display();

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}