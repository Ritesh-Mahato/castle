var i,t;
function setup() {
  createCanvas(800,800);
  fill("red");
}

function draw() {
  background("‎");
  rectMode(CENTER);
  rect(400,770,780,10);
  rect(400,685,500,160);
  rect(110,640,80,250);
  rect(690,640,80,250);
  rect(200,530,100,150);
  rect(600,530,100,150);
  rect(400,455,300,300);
  triangle(200, 350, 150, 455, 250, 455);
  triangle(600, 350, 550, 455, 650, 455);
  triangle(400,50,250,305,550,305);
  fill("black");
  t=161;
  for(i=1;i<=10;i++){
    square(t,595,20);
    t=t+53;
  }
  
  t=80;
  for(i=1;i<=3;i++){
    square(t,506,20);
    t=t+29;
  }
  t=660;
  for(i=1;i<=3;i++){
    square(t,506,20);
    t=t+29;
  }
  t=262;
  for(i=1;i<=8;i++){
    square(t,290,26);
    t=t+39;
  }
  rect(400,730,120,70);
  circle(250,700,70);
  circle(550,700,70);



  drawSprites();
}