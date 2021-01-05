//gamestates
var gameState=1;
var PLAY=1;
var END=0;

var score;

var knife,knife7,knifesound;
var fruit,fruit1,fruit2,fruit3,fruit4;
var monster,germs;
var gameover,gameoverr;


function preload(){
  // loading images
 knife7 = loadImage("sword.png");
  fruit1=loadImage("fruit1.png");
  fruit2= loadImage("fruit2.png");
  fruit3= loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  
  germs=loadImage("alien1.png");
  gameover=loadImage("gameover.png");
  gameoverr=loadSound("gameover.mp3");
  knifesound=loadSound("knifeSwooshSound.mp3")
  
}

function setup(){
  createCanvas(600,600);
  knife=createSprite(200,200)
  knife.addImage(knife7);
  knife.scale=0.7
 fruitGroup=createGroup();
  enemyGroup=createGroup();
  
  
  score=0;
} 
  




function draw(){
  background(0,128,255);
  textSize(25);
  text("Score: "+ score, 400,50);
  fruits();
  enemy();
  
  
  if(gameState===PLAY){
    knife.y=World.mouseY
  knife.x=World.mouseX
    
    if(knife.isTouching(fruitGroup)){
      fruitGroup.destroyEach();
      knifesound.play();
      score=score+2;
    }
    if(knife.isTouching(enemyGroup)){
    gameState=END;
      gameoverr.play();
  }
  }
  
  else if(gameState===END){
    fruitGroup.destroyEach();
    fruitGroup.setVelocityX=0
    enemyGroup.destroyEach();
    enemyGroup.setVelocityX=0;
    
    
    knife.addImage(gameover);
    knife.x=300;
    knife.y=300;
    knife.scale=2.0;
    
  
  }
  
  console.log(gameState);
  
drawSprites();
}

function fruits(){
  
  if(World.frameCount%80===0){
    fruit=createSprite(600,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if (r===1){
      fruit.addImage(fruit1);
    }else if(r===2){
      fruit.addImage(fruit2);
    }else if(r===3){
      fruit.addImage(fruit3);
    }else if(r===4){
      fruit.addImage(fruit4);
    }
    fruit.y=Math.round(random(50,340))
    fruit.velocityX=-(7+(score/5));
    fruit.setLifetime=100;
    
    
    fruitGroup.add(fruit);
    
  }
  
}

function enemy(){
  if(World.frameCount%100===0){
    monster=createSprite(600,200,20,20);
    monster.addImage("moving",germs);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-(8+(score/10));
    monster.lifetime=100;
    
    
    enemyGroup.add(monster);
  }
}

