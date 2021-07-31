const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

//g=ground
var g;

//r=rope
var r;

//f=fruit
var f;

//l=link
var l;

var backgroundImg;
var omNom;
var fruitImg;
var omNomSprite;
var crossButton;

var blink, eat, sad;

function preload(){
  backgroundImg=loadImage("./Assets/background.png");
  omNom=loadImage("./Assets/omNom-backgroundless.png");
  fruitImg=loadImage("./Assets/melon.png");
  blink=loadAnimation("./Assets/blink_1.png","./Assets/blink_2.png", "./Assets/blink_3.png");
  eat=loadAnimation("./Assets/eat_1.png","./Assets/eat_2.png","./Assets/eat_3.png","./Assets/eat_4.png");
  sad=loadAnimation("./Assets/sad_1.png","./Assets/sad_2.png","./Assets/sad_3.png");
  blink.playing=true;
  eat.playing=true;
  sad.playing=true;
}

function setup() {
  createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

  crossButton=createImg("./Assets/cut_btn.png");
  crossButton.position(220,30);
  crossButton.size(50,50);

  crossButton.mouseClicked(dropFruit);

  //composite is agroup where many physics bodies are added (rope fruit)
  g = new Ground(300, 690, 600, 10);
  fruit = Bodies.circle(300,300,40);
  r=new Rope(5,{x:245,y:30});
  Matter.Composite.add(r.body,fruit)
  l=new Link(r.body,fruit);
  omNomSprite=createSprite(250,605,80,80);
  omNomSprite.addAnimation("Blink",blink);
  omNomSprite.addAnimation("Eat",eat);
  omNomSprite.addAnimation("Sad",sad);
  omNomSprite.scale=0.25;

  omNomSprite.changeAnimation("Blink");
  blink.frameDelay=20;
  eat.frameDelay=20;
  sad.frameDelay=20;

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
 
  if(fruit!==null){
    imageMode(CENTER);
    image(fruitImg,fruit.position.x,fruit.position.y,80,80);
  }


  g.Display();
  r.show();

 c=collide(fruit, omNomSprite);
 if(c===true){
   console.log("HI")
  omNomSprite.changeAnimation("Eat");
 }
  drawSprites();
}

function dropFruit(){
  r.break();
  l.detach();
  fruit=null;
}

function collide(fruit, omNomSprite){
if(fruit!==null){
  var d=dist(fruit.position.x, fruit.position.y, omNomSprite.x, omNomSprite.y)
  //console.log(d);
    if(d<148){
      console.log("BYE")
      return true;
      
    }

    else{
      return false;
    }
  }
}
