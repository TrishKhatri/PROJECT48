

var option1img, option2img,option3img,option4img;
var  eiffeltower,tajmahal,greatwall,colosseum,player;
var obstacle1,obstacle2,obstacle3,obstacle4;
var frenchmanimg,frenchman,obstacle1collider,obstacle2collider,info1,info1img,info2,info2img,info3,info3img,info4,info4img,info5,info5img;
var endpoint,endpointimg;
var foodimg,gustaveimg,obstacle3collider,obstacle4collider,obstacle5collider;
var flag,line;

var applause,frontpic1,frontpic1img,frontpic2,frontpic2img;
var obstacle5,obstacle5collider,arc,arcimg;

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

var shahjahan,shahjahanimg,plan,planimg,tomb,tombimg,unesco,unescoimg,palace,palaceimg;

//tajmahal
var tajmahalobj;
var score;




function preload(){
    backgroundimg = loadImage('images/startimg.jpeg');
option1img = loadImage('images/eiffel tower .png');
option2img = loadImage('images/tajmahal.png');
  //option3img = loadImage('images/great wall of china.png');
  //option4img = loadImage('images/tajmahal.png');
  heartimg = loadImage('images/heart.png');
  paintimg = loadImage('images/paint.png');
  gustaveimg = loadImage('images/gustaves .png')
  foodimg = loadImage('images/food.jpg');
  frenchmanimg = loadImage('images/frenchman.png');
  info1img = loadImage('images/info1.png');
  info2img = loadImage('images/paints.png');
  info3img = loadImage('images/info3.png');
   info4img = loadImage('images/info4.png');
   info5img = loadImage('images/arcii.png');
   endpointimg  = loadImage('images/eiffels.png');
shahjahanimg = loadImage('images/Shahjahan.jpg');
planimg = loadImage('images/ustaaad.JPG');
tombimg = loadImage('images/tomb.png');
unescoimg = loadImage('images/unesco.jpg');
palaceimg = loadImage('images/crown.jpg');
frontpic1img = loadImage('images/tajmahalpic.png');
frontpic2img = loadImage('images/tajmahalpic2.png');
arcimg = loadImage('images/arc.png');

}


function setup(){

    createCanvas(1500,800);






    textSize(30)
    stroke(30);
    fill("black");
    text("hello",600,200);


    eiffeltower = createSprite(120,150,20,20);
    eiffeltower.addImage(option1img);
    eiffeltower.scale = 0.3;
    
    tajmahal = createSprite(1160,140,20,20);
    tajmahal.addImage(option2img);
    tajmahal.scale = 1.2;
  

  obstacle1 = new Obstacle(19,130,heartimg);
 obstacle1.scale = 0.1;
 obstacle1.visible = false;

 obstacle1collider = createSprite(19,130,50,30);
 obstacle1collider.visible = false;

  obstacle2 = new Obstacle(450,40,paintimg);
  obstacle2.scale = 0.06;
  obstacle2.visible = false;

  obstacle2collider = createSprite(450,45,30,50);
 obstacle2collider.visible = false;

 obstacle3 = new Obstacle(230,340,gustaveimg);
 obstacle3.size();
 obstacle3.visible = false;

 obstacle5 = new Obstacle(40,320,arcimg);
 obstacle5.sizearc();
 obstacle5.visible = false;


 obstacle4 = new Obstacle(455,136,foodimg);
 obstacle4.sizefood();
 obstacle4.visible = false;

 endpoint = createSprite(440,360,50,50)
 endpoint.addImage(endpointimg)
 endpoint.scale = 0.26;
 endpoint.visible = false;

 obstacle4collider = createSprite(449,136,80,60);
 obstacle4collider.visible = false;

 obstacle3collider = createSprite(237,340,40,60);
 obstacle3collider.visible = false;

 obstacle4collider = createSprite(449,136,40,60);
 obstacle4collider.visible = false;

 obstacle5collider = createSprite(40,320,70,30);
 obstacle5collider.visible = false;

  player = createSprite(9,20);
  player.addImage(frenchmanimg);
    
     player.scale = 0.11;
     player.visible = false;
     
     
 block2 = createSprite(105, 1,5,170);
 block2.visible = false
 block3 = createSprite(0,155,150,10);
 block3.visible = false;
 
 
 block5 = createSprite(167,155,10,120);
 block5.visible = false;
 block6 = createSprite(215,290,100,10);
 block6.visible = false;
 block7 = createSprite(0, 285,150,10);
block7.visible = false;
 
 
 block10 = createSprite(393,99,200,10 );
 block10.visible = false;
block11 = createSprite(335, 209,120,10);
block11.visible = false;
 block12 = createSprite(395, 165,10,125);
 block12.visible = false;
 block13 = createSprite(200, 375,130,10);
 block13.visible = false;
 block14 = createSprite(260, 330,10,80);
 block14.visible = false;
 
 block16 = createSprite(70, 261,10,60);
 block16.visible = false;
 block17 = createSprite(0, 232,150,10);
 block17.visible = false;
 block18 = createSprite(300, 27,100,10);
 block18.visible = false;
block19 = createSprite(140,410,10,60);
block19.visible = false;
 
 block21 = createSprite(340, 380,10,115);
 block21.visible = false;
 block22 = createSprite(450, 300,100,10);
 block22.visible = false;
 block23 = createSprite(10,440,970,10);
 block23.visible = false;
 block24 = createSprite(500,180,10,530);
 block24.visible = false;

 info1 = createSprite(1000,250,300,300);
info1.addImage(info1img);
info1.scale = 0.7;
info1.visible = false;

info2 = createSprite(1000,250,300,300);
info2.addImage(info2img);
info2.scale = 0.7;
info2.visible = false;

info3 = createSprite(1000,250,300,300);
info3.addImage(info3img);
info3.scale = 1.5;
info3.visible = false;

info4 = createSprite(1000,250,300,300);
info4.addImage(info4img);
info4.scale = 1;
info4.visible = false;

info5 = createSprite(1000,250,300,300);
info5.addImage(info5img);
info5.scale = 1;
info5.visible = false;

tajmahalobj = new TajMahal();

score = 0;
flag = 1;

shahjahan= createSprite(900,150,30,30);
shahjahan.addImage(shahjahanimg);
shahjahan.scale = 0.3;
shahjahan.visible = false;

plan = createSprite(1260,150,30,30);
plan.addImage(planimg);
plan.scale = 0.7;
plan.visible  = false;

tomb = createSprite(960,450,30,30);
tomb.addImage(tombimg);
tomb.scale =  0.3;
tomb.visible = false;

unesco = createSprite(970,685,30,30);
unesco.addImage(unescoimg);
unesco.scale =  0.3;
unesco.visible = false;

palace= createSprite(1270,550,30,30);
palace.addImage(palaceimg);
palace.scale =  0.9;
palace.visible = false;

line = createSprite(755,150,5,5000);
line.visible = false;

frontpic1 = createSprite(1160,450,5,5000);
frontpic1.addImage(frontpic1img);
frontpic1.scale = 0.3;

frontpic2 = createSprite(180,450,5,5000);
frontpic2.addImage(frontpic2img);
frontpic2.scale = 0.3;


}



function draw(){

    
    if (flag!==3) {
        background(backgroundimg);   
    }
    

    if(mousePressedOver(eiffeltower) && flag!==3){
        //background("yellow");
        backgroundimg= option1img;
        hidesprite();
        eiffelgames();
        
        
        flag = 2;
        obstacle1.display();
        obstacle2.display();
        obstacle3.display();
        obstacle4.display();
       
        obstacle5.display();
        
        player.visible = true;
endpoint.visible = true;
        frontpic1.visible = false;
        frontpic2.visible  = false;
       
        tajmahal.visible = false;
      
        
    

}
 

if(mousePressedOver(tajmahal)&& flag!==2){
    background("yellow");
    eiffeltower.visible = false;
    tajmahal.visible=false;
    tajmahalobj.display();
    flag = 3;

    frontpic1.visible = false;
        frontpic2.visible  = false;
   

}
   
if (keyDown("DOWN_ARROW")) {
    
    player.y+=4;
    
  }
    
    if (keyDown("UP_ARROW")) {
      
      player.y-=4;
      
    }
    
    if (keyDown("RIGHT_ARROW")) {
    player.x += 2;
    
    
      
    }
    
    if (keyDown("LEFT_ARROW")) {
    player.x -= 4;
    
    
  
    }

    if(player.isTouching(obstacle1collider)){
        
        info1.visible = true;
        score+=20;

    
    }else{
    textSize(15);
    
    if(player.isTouching(obstacle1collider)){
        
        score += 20;
        obstacle1.invisible();
    }
    info1.visible = false;
    
    }

    if(player.isTouching(obstacle2collider)){
        
        info2.visible = true;
        score+=20;

    
    }else{
    textSize(15);
    
    if(player.isTouching(obstacle2collider)){
        
        score += 20;
        obstacle2.invisible();
    }
    info2.visible = false;
    
    }

    //if(player.isTouching(obstacle2collider)){
        
        //info2.visible = true;
       // obstacle2collider.x = 1000
       // obstacle2collider.y  = 20000;
      //  score += 20;
        
   // }else{ 
    //textSize(15);
    
   // info2.visible = false;
    
   // }

    if(player.isTouching(obstacle3collider)){
        
        info3.visible = true;
        
        score += 20;
        
        
    }else{ 
    textSize(15);
    
    info3.visible = false;
    
    }
    
    if(player.isTouching(obstacle4collider)){
        
        info4.visible = true;
        
        score += 20;
        
        
    }else{ 
    textSize(15);
    
    info4.visible = false;
    
    }
    
    if(player.isTouching(obstacle5collider)){
        
        info5.visible = true;
        
        score += 20;
        
        
    }else{ 
    textSize(15);
    
    info5.visible = false;
    
    }
    

          
    if(player.isTouching(block2)){
        //player.x = 9;
        //player.y = 20;  
    }

    
    if(player.isTouching(block3)){
        player.x = 9;
        player.y = 20;
    }

    
    if(player.isTouching(block5)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block6)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block7)){
        player.x = 9;
        player.y = 20;
    }
    

    if(player.isTouching(block10)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block11)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block12)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block13)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block14)){
        player.x = 9;
        player.y = 20;
    }
    
    if(player.isTouching(block16)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block17)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block18)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block19)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block21)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block22)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block23)){
        player.x = 9;
        player.y = 20;
    }
    if(player.isTouching(block24)){
        player.x = 9;
        player.y = 20;
    }

    


    //text("lets get started to unlock the history of Taj Mahal whichvis one of the seven wonders of the world  ",1200,450)
    
drawSprites();
}

function hidesprite() {
    eiffeltower.visible = false;
    //tajmahal.visible = false;
   // greatwall.visible = false;
   
  
    
    
  }

  function eiffelgames() {
      
  
    
    block2.visible = true;
    block3.visible = true;
    
    block5.visible = true;
   block6.visible = true;
    block7.visible = true;
  
    block10.visible = true;
    block11.visible =true;
    block12.visible = true;
    block13.visible = true;
    block14.visible = true;
   // block15.visible = true;
    block16.visible = true;
    block17.visible = true;
    block18.visible = true;
    block19.visible = true;
    block21.visible = true;
    block22.visible = true;
    block23.visible = true;
    block24.visible = true;
      
  
  }
  
  