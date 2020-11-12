const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

var particle;
var score=0;
var count=0;
var gameState="start";


function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,790,800,20);

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var p=75; p<=width; p=p+50){
    plinkos.push(new Plinko(p,75));
  }

  for(var p=50; p<=width-10; p=p+50){
    plinkos.push(new Plinko(p,175));
  }

  for(var p=75; p<=width; p=p+50){
    plinkos.push(new Plinko(p,275));
  }

  for(var p=50; p<=width-10; p=p+50){
    plinkos.push(new Plinko(p,375));
  }
}

function draw() {
  background(0);  

  Engine.update(engine);

  textSize(20);
  fill(255);
  text("Score: "+score,50,30);
  text("   500",5,550);
  text("    500",80,550);
  text("    500",160,550);
  text("    500",240,550);
  text("    100",320,550);
  text("    100",400,550);
  text("    100",480,550);
  text("    200",560,550);
  text("    200",640,550);
  text("    200",720,550);

  if(gameState==="end"){
    text("Game Over",200,200);
  }


  for(var i=0; i<divisions.length; i++){
    divisions[i].display();
  }

  for(var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if(particle!= null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>=5){
          gameState="end";
        }
      }
        else if(particle.body.position.x<600 && particle.body.position>301){
          score=score+100;
          particle=null;
          if(count>=5){
            gameState="end";
          }
        }
          else if(particle.body.position.x<900 && particle.body.position>601){
            score=score+200;
            particle=null;
            if(count>=5){
              gameState="end";
            }
          }
        }
      }
    
  

  drawSprites();
    }

    function keyPressed(){
      if(keyCode===32){
      if(gameState!=="end"){
        count++;
        particle= new Particle(mouseX,10);

      }
    }
    }