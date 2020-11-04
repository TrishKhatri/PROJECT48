
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,allimg,backgroundimg;

var option1img, option2img,option3img,option4img,manimg;
var  eiffeltower,tajmahal,greatwall,colosseum,man,lion,lionimg,warrior,warriorhit,gladiator1img,gladiator2img,roar,wall;
var weaponimg,weapon;
var health;
var weapon1,weapon2;

var questions;

var frenchman,arcimg,arc;


//tajmahal



//this is only for eiffel tower game
var player
var block1 
var block2 
var block3 
var block4 
var block5 
var block6 
var block7 
var block8 
var block9 
var block10 
var block11 
var block12 
var block13 
var block14 
var block15 
var block16 
var block17 
var block18 
var block19 
var block20 
var block21 
var block22 
var block23
var block24




var option1,option2,option3,option4,player;
var box1,heart,heartimg,paint,paintimg,gustave,gustaveimg,food,foodimg;
var eiffelingame,effeilingameimg;
function preload(){
  //box2 = loadImage('playing.png');
  
  backgroundimg = loadImage('images/startimg.jpeg');
  option1img = loadImage('images/eiffel tower .png');
  option2img = loadImage('images/colosseum.png')
  option3img = loadImage('images/great wall of china.png');
  option4img = loadImage('images/tajmahal.png');
  //manimg = loadImage('images/man.png');
  lionimg= loadImage('images/lioncrop.png');
  gladiator1img = loadImage('images/gladiator1.png');
  gladiator2img = loadImage('images/gladiator2.png');
  //roar = loadSound('images/liongrowl.aiff');
  weaponimg = loadImage('images/weapon.png');
  wall = loadImage('images/wall.png');
  frenchman = loadImage('images/frenchman.png');
  arcimg = loadImage('images/arc.png');
  heartimg = loadImage('images/heart.png');
 
paintimg = loadImage('images/paint.png');
gustaveimg = loadImage('images/gustaves .png')
foodimg = loadImage('images/food.jpg');
//effeilingameimg = loadImage('eiffels.png'); 

}





function setup() {
  createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;

  eiffeltower = createSprite(120,150,20,20);
  eiffeltower.addImage(option1img);
  eiffeltower.scale = 0.3;

  

  tajmahal = createSprite(1200,120,20,20);
  tajmahal.addImage(option4img);
  tajmahal.scale = 1;

  greatwall = createSprite(200,564,20,20);
  greatwall.addImage(option3img);
  greatwall.scale = 0.4;

  colosseum = createSprite(1200,564,20,20);
  colosseum.addImage(option2img);
  colosseum.scale = 0.4;

  
  lion = createSprite(1000,500,20,20);
  lion.addImage(lionimg);
  lion.scale = 0.4;
  lion.visible = false;

  
  warrior = createSprite(600,500,20,20);
  warrior.addImage(gladiator1img);
  warrior.scale = 0.7;
  warrior.visible = false;
  //warrior.setCollider('rectangle',0,0,30,100);
  //warrior.debug = true;

  warriorhit = createSprite(300,564,20,20);
  warriorhit.addImage(gladiator2img);
  warriorhit.scale = 0.7;
  warriorhit.visible = false;

  weapon = createSprite(warrior.x,warrior.y,20,20);
  weapon.addImage(weaponimg);
  weapon.scale = 0.6;
  weapon.visible = false;
  World.add(world,weapon);

  
  
  


  health = 100;


 block1 = createSprite(1,44,120,10 );
 block1.visible =false;
 block2 = createSprite(105, 1,10,170);
 block2.visible = false
 block3 = createSprite(0,155,150,10);
 block3.visible = false;
 block4 = createSprite(50,125,10,70);
 block4.visible = false;
 block5 = createSprite(167,155,10,120);
 block5.visible = false;
 block6 = createSprite(120,200,100,10);
 block6.visible = false;
 block7 = createSprite(0, 285,150,10);
block7.visible = false;
 block8 = createSprite(290, 4,10,200);
 block8.visible = false;
 block9 = createSprite(250, 98,75,10);
 block9.visible = false;
 block10 = createSprite(393,99,200,10 );
 block10.visible = false;
block11 = createSprite(335, 209,120,10);
block11.visible = false;
 block12 = createSprite(395, 165,10,125);
 block12.visible = false;
 block13 = createSprite(200, 293,130,10);
 block13.visible = false;
 block14 = createSprite(219, 255,10,80);
 block14.visible = false;
 block15 = createSprite(270, 180,10,110);
 block15.visible = false;
 block16 = createSprite(70, 261,10,60);
 block16.visible = false;
 block17 = createSprite(0, 232,150,10);
 block17.visible = false;
 block18 = createSprite(190, 53,100,10);
 block18.visible = false;
block19 = createSprite(140, 320,10,60);
block19.visible = false;
 block20 = createSprite(120, 390,100,10);
 block20.visible = false;
 block21 = createSprite(315, 340,10,115);
 block21.visible = false;
 block22 = createSprite(390, 284,70,10);
 block22.visible = false;
 block23 = createSprite(10,440,970,10);
 block23.visible = false;
 block24 = createSprite(500,180,10,530);
 block24.visible = false;

 // box1 = createSprite(85,245,120,15);

 
  arc = createSprite(100,215,20,20);
  arc.addImage(arcimg);
  arc.scale = 0.1;
  arc.visible = false;
  

  
  
}

function draw() {
 background(backgroundimg);
  //weapon.x = mouseX;
 //weapon.y = mouseY;
  //console.log(weapon.x + 'yposition' + weapon.y);

  if(mousePressedOver(eiffeltower)){
    //background("yellow");
    backgroundimg=option1img;
    hidesprite();
    eiffelgame();
    player = createSprite(9, 20,5,10);


    player.addImage(frenchman);
    player.scale = 0.11;;

    heart = createSprite(19,130,20,20);
  heart.addImage(heartimg);
  heart.scale = 0.1;

  paint = createSprite(270,80,20,20);
  paint.addImage(paintimg);
  paint.scale = 0.06;
  
  gustave = createSprite(185,260,20,20);
  gustave.addImage(gustaveimg);
  gustave.scale = 0.2;

  food = createSprite(270,370,20,20);
  food.addImage(foodimg);
  food.scale = 0.03;

  arc.visible = true;

 if(player.isTouching(block1)){
   player.x = 200;
   player.y  = 100;
 }
 if(player.isTouching(arc)){
   arc.x = 7;
 }
  
  
  }
 if(mousePressedOver(tajmahal)){
   backgroundimg = tajmahalgame();
   hidesprite();

  
  
 } 
  if(mousePressedOver(greatwall)){
    backgroundimg = wall;
    hidesprite();
    
  }
  
  if(mousePressedOver(colosseum)){
    backgroundimg = option2img;
      hidesprite();
      lion.visible = true;
      warrior.visible = true;
      

      

  weapon1 = createButton("weapon1");
  weapon1.position(200,200);
  

  weapon2 = createButton("weapon2");
  weapon2.position(300,300);
  
       
      
  }

  if (keyDown("DOWN_ARROW")) {
    player.x+=0;
    player.y+=1;
  }
    
    if (keyDown("UP_ARROW")) {
      player.x+=0;
      player.y-=1;
      
    }
    
    if (keyDown("RIGHT_ARROW")) {
    player.x += 4;
    player.velocityY = 0;
    
      
    }
    if (keyDown("LEFT_ARROW")) {
    player.x -=4;
    player.y = 0;
    
  
    }
 
  
  //if(lion.x<900){
    //lion.x=900;
  //}
  
  if(keyDown("RIGHT_ARROW")){
    warrior.x+=2;
    lion.x-=4
  }
  if(keyDown("LEFT_ARROW")){
    warrior.x-=2;
    lion.x-=4;
  }
  if(keyWentDown("K")){
    warrior.addImage(gladiator2img);

    
  }
  if(keyWentUp("K")){
    warrior.addImage(gladiator1img);

    if(mousePressed(weapon2)){
      warrior.hide();
    }
    
  

    
  }
  if(keyDown("SPACE")){
    weapon.velocityX = 10;
    weapon.velocityY = -1;
  }

  if(warrior.isTouching (lion)){
    health = health-10
    if(health<=0){
      stroke(10);
      text('GAME OVER',400,350);
      warrior.destroy();
    }

  }

  

  
  


  
   //warrior.x = lion.x-300;

   
  
  
  drawSprites();

  

    stroke(67);
    textSize(30);
    //text('score: '+ health,100,100);
  
  

  
}

function hidesprite() {
  eiffeltower.visible = false;
  tajmahal.visible = false;
  greatwall.visible = false;
  colosseum.visible = false;

  
  
}


function tajmahalgame(){
background(0,0,0);

stroke(30);
textSize(25);
fill('white');
text("UNLOCK THE TAJ MAHAL  AND LEARN SOME HISTRORY TOO ",100,60);
text("Q1.Who do u think built the taj mahal?",10,120);
text("Q2.Why was the taj mahal buiilt",10,200);
text("Q3.How many years did it take to build the Taj Mahal ",10,280);
text("Q4.What was the cost of building the Taj Mahal",10,360);
text("Q5.What was the Taj mahsl made up of",10,450);
text("Q6.How many domes does the Taj Mahal have",10,540);



textSize(17);
option1 = text("1. Mumtaj Mahal",20,150);
option2 = text("2. Shah Jahan ",180,150);
option3= text("3. Akbar ",340,150);
option4 = text("4. Ghengiz Khan ",470,150);

text("1.17 years",20,240);
text()

 

}

//function questions(){
  //background(0,0,0);
  //questions = new TajMahal()
  //questions.display();

//}

function eiffelgame(){
  //createCanvas(800,600);
 
  //player.visible = true;
  block1.visible = true;
  block2.visible = true;
  block3.visible = true;
  block4.visible = true;
  block5.visible = true;
  block6.visible = true;
  block7.visible = true;
  block8.visible = true;
  block9.visible = true;
  block10.visible = true;
  block11.visible =true;
  block12.visible = true;
  block13.visible = true;
  block14.visible = true;
  block15.visible = true;
  block16.visible = true;
  block17.visible = true;
  block18.visible = true;
  block19.visible = true;
  block20.visible = true;
  block21.visible = true;
  block22.visible = true;
  block23.visible = true;
  block24.visible = true;
    

   

  
  

}

