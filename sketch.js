
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivaltime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400) 
  monkey=createSprite(100,300,20,20)

   monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,339,1000,20)
  ground.velocityX=-4
  bannanaGroup=createGroup()
  rockGroup=createGroup()
}


function draw() {
  background("green")
  
  if(ground.x<0){
    ground.x=ground.width/2    
  }
  if(keyDown('space')&&monkey.y>298){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.5
  monkey.collide(ground)
  console.log(monkey.y)
  spawnFruit()
  spawnRock()
  stroke('black')
  textSize(20)
  fill('white')
  text('Score='+score ,300,50)
  
  stroke('black')
  textSize(20)
  fill('white')
  text('SurvivalTime='+survivaltime ,150,50)
  
drawSprites()
  
}


function spawnFruit (){
  if(frameCount %80===0){
    bannana=createSprite(400,200,20,20)
    bannana.velocityX=-4
    bannana.y=Math.round(random(200,300))
    bannana.addImage(bananaImage)
    bannana.scale=0.1
    bannana.lifetime=200
    bannanaGroup.add(bannana)
  }
  
    
  
}
function spawnRock (){
  if(frameCount %150===0){
    rock=createSprite(400,310,20,20)
    rock.velocityX=-4
    rock.addImage(obstacleImage)
    rock.scale=0.13
    rock.lifetime=200
    rockGroup.add(rock)
  }
  
    
  
}






