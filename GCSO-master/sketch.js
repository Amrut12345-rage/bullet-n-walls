

var bullet,wall;

var thickness;

var speed, weight; 


function setup() {
  createCanvas(1600, 400);

    thickness=random(22,83);
	speed=random(203,321);
	weight=random(30,52);


	bullet=createSprite(50, 200, 50,20);   

	bullet.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200,thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/thickness*thickness*thickness;


	if(damage<180 && damage>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(damage<100)
	{
		bullet.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


