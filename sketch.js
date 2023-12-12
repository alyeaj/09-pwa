///images&vids
let typ; 
let sit; 
let disturb; 
let inspect 
let rom;
let dragon

//booleans
var button1; 
var button2; 
var placeholder; 
var recs = "Recommended Games";
//var texts = "You hear a strange noise"; 
var texts = "Strange Happenings: An Ordinary Game"
var screen; 
var next;
var pres; 
var dpres;
var accept; 
var reject;


//Animations
function preload(){
   
  //hab = loadFont('fontinfo.txt');
  strange = loadImage('2Strange.jpeg');
  typ = loadImage('Typing.PNG'); 
  work = loadImage('Work.png');  
  disturb = loadImage('Disturbed.png');
 // placeholder = loadImage('Disturbed.PNG'); 
  placeholder = createVideo('StartScreen.MOV') 
  inspect = createVideo('Inspect.MOV') 
  rom = createVideo('Upside.MOV') 
  start = createVideo('Starting.MOV') 
  press = createVideo('Press.MOV') 
  dragon = createVideo('DrGood.MOV') 
  ded = createVideo('DragonDeath.MOV'); 
  cr = createVideo('Cryptic.MOV'); 
  coward = createVideo('Coward.MOV'); 
  bacc = createVideo('GoBack.MOV');
   door = createVideo('Left.MOV'); 
  date = createVideo('Right.MOV'); 
  party = createVideo('Party.MOV'); 
  partners = createVideo('Partners.MOV'); 
  re = loadImage('RecGames.png');
  
  main = loadSound('MainSound.mp3'); 
  typi = loadSound('Background-music.mp3');
  uded = loadSound('UDead.mp3'); 
  yay = loadSound('Touchstone.mp3'); 
  pic = loadSound('PIC.mp3'); 
  club = loadSound('Clubbing.mp3');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight); 

  placeholder.hide(); 
  inspect.hide(); 
  rom.hide(); 
  press.hide();
  dragon.hide(); 
  cr.hide(); 
  ded.hide(); 
  coward.hide(); 
  door.hide(); 
  date.hide(); 
  party.hide(); 
  partners.hide(); 
  bacc.hide();
  
   screen =createButton("Start") 
  screen.position(250,100);
   screen.mousePressed(begin); 
   start.size(500,550);
   start.position(50,50); 
  //next = createButton("Next") 
  
  // ///strangeNoise
  // button1 = createButton("Inspect Noise") 
  // button1.position(75,100)
  // button2 = createButton("Don't Inspect") 
  //  button2.position(400,100) 
  // button2.mousePressed(still) 
  // button1.mousePressed(walk) 
  
  // inspect.size(400,500)
  // inspect.position(100,50)
  
  
  function begin(){
    placeholder = start.play() 
    screen.hide();
    next = createButton("Next") 
    next.position(250,100)
  //  next = start.stop(); 
    next.mousePressed(typing)
  } 
}

function typing(){
  start.hide();
  main.play();
  placeholder = disturb 
  texts = "You hear a strange noise" 
  next.hide();
  button1 = createButton("Inspect Noise") 
  button1.position(75,100)
  button2 = createButton("Don't Inspect") 
   button2.position(400,100) 
  button2.mousePressed(still) 
  button1.mousePressed(walk) 
}

function still(){ 
placeholder = work 
 typi.play();
  texts = "You continue working" 
  button1.hide(); 
  button2.hide();
  next = createButton("Continue") 
  next.position(250,100);
  next.mousePressed(cry); 
}  

function cry(){
  placeholder = cr.play();
  texts= "Huh???" 
  next.hide(); 
  typi.stop();
}

function walk(){ 
console.log("walk to noise") 
  texts = "You inspect the noise" 
  placeholder = inspect.play(); 
  inspect.hide();
  button1.hide();
  button2.hide(); 
  //the door
  console.log("You see a strange door") 
  texts  = "There's a strange door"
  button1 = createButton("Open Door")
  button1.position(100,100) 
  button1.mousePressed(room)
  button2 = createButton("Don't open") 
 button2.position(400,100) 
  button2.mousePressed(cou)
} 

function cou(){
  placeholder = bacc.play(); 
  texts = "Things are getting pretty strange..." 
  button1.hide(); 
  button2.hide();
}

function room(){
  texts = "You're inside the room"
  placeholder = rom.play(); 
  rom.hide(); 
  button1.hide(); 
  button2.hide();
  pres = createButton("Press Button")
  pres.position(100,100) 
  pres.mousePressed(pressed)
  dpres = createButton("Don't Press") 
 dpres.position(400,100) 
  dpres.mousePressed(dontPress)
} 

function pressed(){
  console.log("The floor crumbles and you start to fall and fall into a secret room") 
  texts= "You fall!"
  placeholder = press.play(); 
  press.hide(); 
  pres.hide(); 
  dpres.hide();
  lef = createButton("Left"); 
  lef.position(100,100); 
  lef.mousePressed(doors);
  right = createButton("Right"); 
  right.position(400,100); 
  right.mousePressed(drag);
}

//Right of the secret room
  function drag(){
  texts = "Oh! It's a Dragon! And it's asking you on a date, how cute!" 
    placeholder = date.play();
      lef.hide(); 
    right.hide();
  accept =createButton("Accept"); 
  accept.position(100,100);
  reject = createButton("Reject");
  reject.position(400,100);
  accept.mousePressed(goodEnd); 
  reject.mousePressed(badEnd);
  }


function dontPress(){
  console.log("You got another Cryptic ending") 
  texts = "Again???" 
  placeholder = coward.play(); 
  pres.hide(); 
  dpres.hide();
}

function goodEnd(){
  console.log("You got the good end!") 
  placeholder = dragon.play(); 
  main.stop(); 
  yay.play();
  texts= "You're Besties!" 
  accept.hide();
  reject.hide();
} 

function badEnd(){
  console.log("You got the bad end!") 
  uded.play();
  accept.hide(); 
  reject.hide(); 
  main.stop();texts = "Oof... Can't take rejection well, eh?"
  placeholder = ded.play();
}

//left of the secret room 
function doors(){
  placeholder= door.play(); 
  texts = "There's two doors! Which do you choose?" 
  lef.hide(); 
  right.hide(); 
  ground = createButton("Stand Your Ground"); 
  ground.position(100,100); 
  ground.mousePressed(par);
  boss = createButton("You're the Boss"); 
  boss.position(400,100);  
  boss.mousePressed(bos)
} 

function par(){
  placeholder = party.play(); 
  texts = "It's Getting Wild! You got the Wild End!!" 
  ground.hide(); 
  boss.hide(); 
  main.stop(); 
  club.play();
}

function bos(){
  placeholder = partners.play(); 
  texts = "How strange? You got the cool ending!" 
  ground.hide(); 
  boss.hide(); 
  main.stop(); 
  pic.play();
}

function draw() {
  background(100,100,100);  
  textSize(25); 
  text(texts, 170, 60);
  textAlign(LEFT); 
  
  
  //
  image(placeholder, 50, 130, 500, 470);
  image(strange, 650, 100, 500, 500);
//  image(re, 700, 460, 250, 220);
  //text(recs, 700, 450);
}