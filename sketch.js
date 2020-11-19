var car,wall;
var speed,weight;

function setup() {
  createCanvas(1000,400);
speed=random(40,80);
weight=random(1200,1300);

 car = createSprite(50, 200, 50, 50);
 car.shapeColor="white";
 car.velocityX= speed;

 wall = createSprite(900,200,60,height/2);
 wall.shapeColor="white";
}

function draw() {
  background(0);
  console.log(wall.x-car.x);

  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX=0;
    var deformation = (0.5*weight*speed*speed)/22500;
    if(deformation > 180){
      car.shapeColor = "red";
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }
    if(deformation < 100){
      car.shapeColor = "green";
    }
  }

  drawSprites();
}
