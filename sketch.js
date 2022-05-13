var ground, right, left, up;
var gh, pacMan, maze, mmg;
var score = 0;
var c;

function preload(){
 gh = loadImage("./assets/Pacman1.png");
 mmg = loadImage("./assets/maze.png");
 coin = loadImage("./assets/coins.png");
 coral_img = loadImage("./assets/coral.png");
 chuck_img = loadImage("./assets/chuck.png");
 rose_img = loadImage("./assets/rose.png");
 peach_img = loadImage("./assets/peach.png");
 home_img = loadImage("./assets/home.png")
}


function setup() {
  createCanvas(700,700)
 
  ground = createSprite(350,690,700,10);
  ground.shapeColor = "blue";
  
  right = createSprite(690,290,10,700);
  right.shapeColor = "blue";

  left = createSprite(10,350,10,700);
  left.shapeColor = "blue";

  up = createSprite(350,10,700,10);
  up.shapeColor = "blue";
  
  pacMan = createSprite(35,35,30,30);
  pacMan.addImage("Ghost Hunter", gh);
  pacMan.scale = 0.06;

  home = createSprite(680,660,50,50);
  home.addImage("home",home_img);
  home.scale = 0.15;

  v_wallsGroup = new Group();
  h_wallsGroup = new Group();
  coins_group = new Group();

  verticalWalls();
  horizontalWalls()


  chuck = createSprite(170,550,30,60);
  chuck.addImage("chuck",chuck_img);
  chuck.scale = 0.3;
  chuck.velocityY = 2;
  chuck.velocityX = 3;

  coral = createSprite(620,570,30,60);
  coral.addImage("coral",coral_img);
  coral.scale = 0.15
  coral.velocityY = -2;
  coral.velocityX = -3;

  peach = createSprite(200,100,30,60);
  peach.addImage("peach",peach_img);
  peach.scale = 0.3;
  peach.velocityY = -3;
  peach.velocityX = -2;

  rose = createSprite(600,100,30,60);
  rose.addImage("rose", rose_img);
  rose.scale = 0.2;
  rose.velocityY = 3;
  rose.velocityX = 2;
}

function draw() 
{
  background("black");

  textSize(25);
  fill("white");
  text("Score: "+ score, 300,300)

  textSize(20);
  fill("red");
  text("Come Home =>",530,675);
  
  if(pacMan.collide(v_wallsGroup)){
    pacMan.x = 35;
    pacMan.y = 35;
    score -= 5;
  }

  if(pacMan.collide(h_wallsGroup)){
    pacMan.x = 35;
    pacMan.y = 35;
    score -= 5;
  }

  if(pacMan.collide(up) || pacMan.collide(ground) || 
      pacMan.collide(up) || pacMan.collide(ground) )
    {
     pacMan.x = 35;
     pacMan.y = 35;
     score -= 5;
     }

  if(pacMan.collide(home)  && score >= 100){
    gameOver()
    pacMan.destroy();
    coral.destry();
    chuck.destroy();
    peach.destroy();
    rose.destroy();
    v_wallsGroup.destroy();
    h_wallsGroup.destroy();
  }

  if(score <= -80){
    gameLost()
    pacMan.destroy();
    coral.destry();
    chuck.destroy();
    peach.destroy();
    rose.destrot();
    v_wallsGroup.destroy();
    h_wallsGroup.destroy();
  }

  if(pacMan.isTouching(coral)){
    score -= 10
    coral.x=350;
  }

  if(pacMan.isTouching(chuck)){
    score -= 10
    chuck.x= 350;
  }

  if(pacMan.isTouching(peach)){
    score -= 10
    peach.x= 350
  }

  if(pacMan.isTouching(rose)){
    score -= 10
    rose.x = 350
  }

  if(score >= 25){
    coral.destroy()
  }

  if(score >= 50){
    chuck.destroy()
  }

  if(score >= 75){
    peach.destroy()
  }

  if(score >= 100){
    rose.destroy()
  }

  if(pacMan.isTouching(coins_group)){
    score +=5;
    coins_group.destroyEach();
  }

  chuck.bounceOff(right);
  chuck.bounceOff(left);
  chuck.bounceOff(ground);
  chuck.bounceOff(up);

  coral.bounceOff(right);
  coral.bounceOff(left);
  coral.bounceOff(ground);
  coral.bounceOff(up);

  peach.bounceOff(right);
  peach.bounceOff(left);
  peach.bounceOff(ground);
  peach.bounceOff(up);

  rose.bounceOff(right);
  rose.bounceOff(left);
  rose.bounceOff(ground);
  rose.bounceOff(up);

  playerControls();
  displayCoins()
  drawSprites()
}

function playerControls(){
  if(keyIsDown(LEFT_ARROW)){
    // console.log("I am inside if")
     pacMan.x -= 3;
   }
 
   if(keyIsDown(RIGHT_ARROW)){
     pacMan.x += 3;
   }
 
   if(keyIsDown(UP_ARROW)){
     pacMan.y -= 3;
   }
 
   if(keyIsDown(DOWN_ARROW)){
     pacMan.y += 3;
   }
 
}


function verticalWalls(){
  w1 = createSprite(325,20,6,80);
  w1.shapeColor = "blue";
  v_wallsGroup.add(w1);

  w2 = createSprite(535,20,6,300);
  w2.shapeColor = "blue";
  v_wallsGroup.add(w2);

  w3 = createSprite(270,190,6,270);
  w3.shapeColor = "blue";
  v_wallsGroup.add(w3);

  w4 = createSprite(110,110,6,110);
  w4.shapeColor = "blue";
  v_wallsGroup.add(w4);
  
  w5 = createSprite(642,140,6,165);
  w5.shapeColor = "blue";
  v_wallsGroup.add(w5);

  w6 = createSprite(218,85,6,60);
  w6.shapeColor = "blue";
  v_wallsGroup.add(w6);

  w7 = createSprite(430,85,6,55);
  w7.shapeColor = "blue";
  v_wallsGroup.add(w7);

  w8 = createSprite(165,135,6,55);
  w8.shapeColor = "blue";
  v_wallsGroup.add(w8);

  w9 = createSprite(325,165,6,115);
  w9.shapeColor = "blue";
  v_wallsGroup.add(w9);

  w10 = createSprite(59,219,6,110);
  w10.shapeColor = "blue";
  v_wallsGroup.add(w10);

  w11 = createSprite(218,219,6,100);
  w11.shapeColor = "blue";
  v_wallsGroup.add(w11);

  w12 = createSprite(484,270,6,220);
  w12.shapeColor = "blue";
  v_wallsGroup.add(w12);

  w13 = createSprite(429,270,6,220);
  w13.shapeColor = "blue";
  v_wallsGroup.add(w13);

  w14 = createSprite(376,320,6,220);
  w14.shapeColor = "blue";
  v_wallsGroup.add(w14);

  w15 = createSprite(57,430,6,215);
  w15.shapeColor = "blue";
  v_wallsGroup.add(w15);

  w16 = createSprite(165,350,6,165);
  w16.shapeColor = "blue";
  v_wallsGroup.add(w16);

  w17 = createSprite(112,295,6,60);
  w17.shapeColor = "blue";
  v_wallsGroup.add(w17);

  w18 = createSprite(643,510,6,270);
  w18.shapeColor = "blue";
  v_wallsGroup.add(w18);

  w19 = createSprite(270,560,6,160);
  w19.shapeColor = "blue";
  v_wallsGroup.add(w19);

  w20 = createSprite(377,560,6,160);
  w20.shapeColor = "blue";
  v_wallsGroup.add(w20);

  w21 = createSprite(325,430,6,110);
  w21.shapeColor = "blue";
  v_wallsGroup.add(w21);

  w22 = createSprite(536,400,6,50);
  w22.shapeColor = "blue";
  v_wallsGroup.add(w22);
  
  w23 = createSprite(430,460,6,60);
  w23.shapeColor = "blue";
  v_wallsGroup.add(w23);

  w24 = createSprite(217,460,6,55);
  w24.shapeColor = "blue";
  v_wallsGroup.add(w24);

  w25 = createSprite(590,455,6,60);
  w25.shapeColor = "blue";
  v_wallsGroup.add(w25);

  w26 = createSprite(430,680,6,80);
  w26.shapeColor = "blue";
  v_wallsGroup.add(w26);

  w27 = createSprite(483,535,6,110);
  w27.shapeColor = "blue";
  v_wallsGroup.add(w27);

  w28 = createSprite(589,560,6,55);
  w28.shapeColor = "blue";
  v_wallsGroup.add(w28);

  w30 = createSprite(483,670,6,60);
  w30.shapeColor = "blue";
  v_wallsGroup.add(w30);

  w31 = createSprite(110,560,6,50);
  w31.shapeColor = "blue";
  v_wallsGroup.add(w31);

  w32 = createSprite(535,510,6,55);
  w32.shapeColor = "blue";
  v_wallsGroup.add(w32);

  w33 = createSprite(535,615,6,60);
  w33.shapeColor = "blue";
  v_wallsGroup.add(w33);

  w34 = createSprite(535,298,6,60);
  w34.shapeColor = "blue";
  v_wallsGroup.add(w34);
  
  w35 = createSprite(589,350,6,55);
  w35.shapeColor = "blue";
  v_wallsGroup.add(w35);

  w36 = createSprite(590,240,6,55);
  w36.shapeColor = "blue";
  v_wallsGroup.add(w36);

  w37 = createSprite(643,298,6,58);
  w37.shapeColor = "blue";
  v_wallsGroup.add(w37);
  
}


function horizontalWalls(){
  w38 = createSprite(80,60,55,6);
  w38.shapeColor = "blue";
  h_wallsGroup.add(w38);

  w39 = createSprite(10,110,100,6);
  w39.shapeColor = "blue";
  h_wallsGroup.add(w39);

  w40 = createSprite(10,270,100,6);
  w40.shapeColor = "blue";
  h_wallsGroup.add(w40);

  w41 = createSprite(10,535,100,6);
  w41.shapeColor = "blue";

  w42 = createSprite(218,641,325,6);
  w42.shapeColor = "blue";
  h_wallsGroup.add(w42);

  w43 = createSprite(590,641,110,6);
  w43.shapeColor = "blue";
  h_wallsGroup.add(w43);

  w44 = createSprite(215,60,110,6);
  w44.shapeColor = "blue";
  h_wallsGroup.add(w44);

  w45 = createSprite(350,60,60,6);
  w45.shapeColor = "blue";
  h_wallsGroup.add(w45);

  w47 = createSprite(460,60,55,6);
  w47.shapeColor = "blue";
  h_wallsGroup.add(w47);

  w48 = createSprite(615,60,55,6);
  w48.shapeColor = "blue";
  h_wallsGroup.add(w48);

  w49 = createSprite(456,112,272,6);
  w49.shapeColor = "blue";
  h_wallsGroup.add(w49);

  w50 = createSprite(130,588,180,6);
  w50.shapeColor = "blue";
  h_wallsGroup.add(w50);

  w51 = createSprite(190,430,265,6);
  w51.shapeColor = "blue";
  h_wallsGroup.add(w51);

  w52 = createSprite(455,430,165,6);
  w52.shapeColor = "blue";
  h_wallsGroup.add(w52);

  w53 = createSprite(217,535,220,6);
  w53.shapeColor = "blue";
  h_wallsGroup.add(w53);

  w54 = createSprite(430,535,100,6);
  w54.shapeColor = "blue";
  h_wallsGroup.add(w54);

  w55 = createSprite(510,588,165,6);
  w55.shapeColor = "blue";
  h_wallsGroup.add(w55);

  w56 = createSprite(215,324,105,6);
  w56.shapeColor = "blue";
  h_wallsGroup.add(w56);

  w57 = createSprite(350,323,60,6);
  w57.shapeColor = "blue";
  h_wallsGroup.add(w57);

  w58 = createSprite(350,270,60,6);
  w58.shapeColor = "blue";
  h_wallsGroup.add(w58);

  w59 = createSprite(165,165,110,6);
  w59.shapeColor = "blue";
  h_wallsGroup.add(w59);

  w60 = createSprite(430,165,110,6);
  w60.shapeColor = "blue";
  h_wallsGroup.add(w60);

  w61 = createSprite(616,165,58,6);
  w61.shapeColor = "blue";
  h_wallsGroup.add(w61);

  w62 = createSprite(112,218,115,6);
  w62.shapeColor = "blue";
  h_wallsGroup.add(w62);

  w63 = createSprite(540,218,105,6);
  w63.shapeColor = "blue";
  h_wallsGroup.add(w63);

  w64 = createSprite(665,218,55,6);
  w64.shapeColor = "blue";
  h_wallsGroup.add(w64);

  w65 = createSprite(139,376,60,6);
  w65.shapeColor = "blue";
  h_wallsGroup.add(w65);

  w66 = createSprite(191,270,55,6);
  w66.shapeColor = "blue";
  h_wallsGroup.add(w66);

  w67 = createSprite(85,323,55,6);
  w67.shapeColor = "blue";
  h_wallsGroup.add(w67);

  w68 = createSprite(270,376,110,6);
  w68.shapeColor = "blue";
  h_wallsGroup.add(w68);

  w69 = createSprite(160,483,107,6);
  w69.shapeColor = "blue";
  h_wallsGroup.add(w69);

  w70 = createSprite(350,483,50,6);
  w70.shapeColor = "blue";
  h_wallsGroup.add(w70);

  w71 = createSprite(538,483,110,6);
  w71.shapeColor = "blue";
  h_wallsGroup.add(w71);

  w72 = createSprite(350,588,60,6);
  w72.shapeColor = "blue";
  h_wallsGroup.add(w72);

  w73 = createSprite(510,376,50,6);
  w73.shapeColor = "blue";
  h_wallsGroup.add(w73);

  w74 = createSprite(615,376,60,6);
  w74.shapeColor = "blue";
  h_wallsGroup.add(w74);

  w75 = createSprite(560,323,60,6);
  w75.shapeColor = "blue";
  h_wallsGroup.add(w75);

  w76 = createSprite(615,270,55,6);
  w76.shapeColor = "blue";
  h_wallsGroup.add(w76);

  w77 = createSprite(665,323,55,6);
  w77.shapeColor = "blue";
  h_wallsGroup.add(w77);

}

function gameOver(){
  swal({
    title:"Congratulations",
    text: "Reached home!",
    imageUrl: 
             "assets/gameOver.png",
    imageSize: "100x100",
    confirmButtonText: "Ok"
  })
}

function gameLost(){
  swal({
    title: "Game Over",
    text: "Better Luck Next Time",
    imageUrl : 
            "assets/gameLost.png",
    imageSize : "100x100",
    confirmButtonText: "Ok"
  })
}

function displayCoins(){
  c = createSprite(50,40,10,10);
  c.x = Math.round(random(30,670))
  c.y = Math.round(random(30,670))
  c.addImage(coin);
  c.scale = 0.05
  c.lifetime = 150;
  
  coins_group.add(c);
}
