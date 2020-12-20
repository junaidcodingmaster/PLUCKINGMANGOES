const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,m1,m2,m3,m4,m5,m6,m7,chain,groundSprite,bg;

function preload()
{
	boy = loadImage("images/boy.png");
	tree = loadImage("images/tree.png");
	bg = loadImage("images/bg.png");

}

function setup() {
	createCanvas(2000, 800);

	groundSprite = createSprite(width/2, 750, width, 10);
	groundSprite.shapeColor="grey";
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rock = new stone(250,550);
	chain = new SlingShot(rock.body,{x:250 , y:550});
	m1 = new mango(1600,150,8);
	m2 = new mango(1600,350,10);
	m3 = new mango(1800,200,7);
	m4 = new mango(1500,300,9);
	m5 = new mango(1400,350,6);
	m6 = new mango(1300,350,10);

	ground = Bodies.rectangle(width/2, 775, width, 10 , {isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background(bg);
    push();
    
	chain.display();
    drawSprites();
    console.log(rock);
    imageMode(CENTER);
    image(boy,350,620,250,300);
	image(tree,1600,420,700,700);
	rock.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	collision(rock,m1);
	collision(rock,m2);
	collision(rock,m3);
	collision(rock,m4);
	collision(rock,m5);
	collision(rock,m6);

	textSize(26);
	fill("black");
	text('Press space bar for second chance to play!😃', 100,25);

}
function collision(a,b){
	var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
	}
}