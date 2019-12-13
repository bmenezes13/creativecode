//font for wording
let myFont;
function setup() {
  createCanvas(1020, 520,WEBGL);
  frameRate(60);
}
//image objects
let img;
let hack;
let musk;
function preload(){
  img = loadImage('imgur.jpg');
  hack = loadImage('hack.jpg');
  musk = loadImage('musk.jpg');
  //load foreign font
  myFont = loadFont('cali.ttf');}
//operation definer
let op = 0;
function draw() {
  //screensaver
  if(op==0){
    background(0);
    //lighting effect for sine spheres
    ambientLight(50);
    directionalLight(0, 255, 60, 0.25, 0.25, 0);
    pointLight(0, 0, 255, width/2, height/2, 250);
    //green stroked sphere
  push();
  noFill();
  stroke(0, 255, 60);
  strokeWeight(4);
  //rotation on x-axis
  rotateX(frameCount * 0.01);
  sphere(500,6,3);
  pop();
  //blue stroked sphere
  push();
  noFill();
  stroke(0, 0, 255);
  strokeWeight(4);
  //rotation on y-axis
  rotateY(frameCount * 0.01);
  sphere(700, 6,3);
  pop();
    rotateY(frameCount * 0.01);
  //loop for different sin values
    for (let j = 0; j < 5; j++) {
      push();
      //loop for forward/backward translation
      for (let i = 0; i < 60; i++) {
        //translation of sine spinning spheres
        //sourced from https://p5js.org/examples/3d-sine-cosine-in-3d.html
        translate(
          sin(frameCount * 0.001 + j) * 100,
          sin(frameCount * 0.001 + j) * 100,
          i * 0.1);
        //rotation along z-axis
        rotateZ(frameCount * 0.001);
        //lighting colored sine spheres
        push();
        //white stroke
        stroke(255, 255, 255);
        strokeWeight(1);
        //uses lighting values
        specularMaterial(100);
        sphere(18, 6, 4);
        pop();}
      pop();}  
  }
  //clock
  else if(op==1){
    if(second()==30){op=0;}
    background(0); //blk bg
    //font variables
    fill(0, 0, 255);//blue
    textSize(100);//size
    textFont(myFont);//loads outside font
    text("Date",0-250, 0-200);
    text("Time", 0+150, 0-200);
    //separator variables
    stroke(0, 0, 255);//blue
    strokeWeight(5);//for date
    ellipse(-200,-80,100,5);
    ellipse(-200,80,100,5);
    strokeWeight(9);//for time
    ellipse(180,-80,14,8);
    ellipse(220,-80,14,8);
    ellipse(180,80,14,8);
    ellipse(220,80,14,8);
    strokeWeight(3);
    //screen split
    line(0+20,0-260,0-20,0-220);
    line(0+20,0-180,0-20,0-140);
    line(0+20,0-100,0-20,0-60);
    line(0+20,0-20,0-20,20);
    line(0+20,60,0-20,100);
    line(0+20,140,0-20,180);
    line(0+20,220,0-20,260);
    stroke(0, 255, 60);
    line(0+20,0-180,0-20,0-220);
    line(0+20,0-100,0-20,0-140);
    line(0+20,0-20,0-20,0-60);
    line(0+20,60,0-20,20);
    line(0+20,140,0-20,100);
    line(0+20,220,0-20,180);
    //month domino
    fill(255);
    stroke(0, 0, 255);
    strokeWeight(3);
    //domino
    rect(-240,-150,80,40,20);
    line(-200,-145,0-200,-115);
    let m = month();
    //dots
    stroke(0, 255, 60);
    strokeWeight(1);
    if(m == 1){
      fill(0);
      circle(-220,-130,7);}
    else if(m == 2){
      fill(0);
      circle(-220,-130,7);
      circle(-180,-130,7);}
    else if(m == 3){
      fill(0);
      circle(-210,-140,7);
      circle(-230,-120,7);
      circle(-180,-130,7);}
    else if(m == 4){
      fill(0);
      circle(-210,-140,7);
      circle(-230,-120,7);
      circle(-170,-140,7);
      circle(-190,-120,7);}
    else if(m == 5){
      fill(0);
      circle(-220,-130,7);
      circle(-210,-140,7);
      circle(-230,-120,7);
      circle(-170,-140,7);
      circle(-190,-120,7);}
    else if(m == 6){
      fill(0);
      circle(-220,-130,7);
      circle(-210,-140,7);
      circle(-230,-120,7);
      circle(-180,-130,7);
      circle(-170,-140,7);
      circle(-190,-120,7);}
    else if(m == 7){
      fill(255);
      circle(-210,-140,7);
      circle(-210,-120,7);
      circle(-230,-120,7);
      circle(-230,-140,7);
      circle(-180,-130,7);
      circle(-170,-140,7);
      circle(-190,-120,7);}
    else if(m == 8){
      fill(0);
      circle(-210,-140,7);
      circle(-210,-120,7);
      circle(-230,-120,7);
      circle(-230,-140,7);
      circle(-170,-140,7);
      circle(-170,-120,7);
      circle(-190,-120,7);
      circle(-190,-140,7);}
    else if(m == 9){
      fill(0);
      circle(-220,-130,7);
      circle(-210,-140,7);
      circle(-210,-120,7);
      circle(-230,-120,7);
      circle(-230,-140,7);
      circle(-170,-140,7);
      circle(-170,-120,7);
      circle(-190,-120,7);
      circle(-190,-140,7);}
    else if(m == 10){
      fill(0);
      circle(-220,-130,7);
      circle(-210,-140,7);
      circle(-210,-120,7);
      circle(-230,-120,7);
      circle(-230,-140,7);
      circle(-180,-130,7);
      circle(-170,-140,7);
      circle(-170,-120,7);
      circle(-190,-120,7);
      circle(-190,-140,7);}
    else if(m == 11){
      fill(0);
      circle(-220,-140,7);
      circle(-220,-120,7);
      circle(-210,-140,7);
      circle(-210,-120,7);
      circle(-230,-120,7);
      circle(-230,-140,7);
      circle(-180,-130,7);
      circle(-170,-140,7);
      circle(-170,-120,7);
      circle(-190,-120,7);
      circle(-190,-140,7);}
    else if(m == 12){
      fill(0);
      circle(-220,-140,7);
      circle(-220,-120,7);
      circle(-210,-140,7);
      circle(-210,-120,7);
      circle(-230,-120,7);
      circle(-230,-140,7);
      circle(-180,-140,7);
      circle(-180,-120,7);
      circle(-170,-140,7);
      circle(-170,-120,7);
      circle(-190,-120,7);
      circle(-190,-140,7);}
    //day domino
    fill(255);
    stroke(0, 0, 255);
    strokeWeight(3);
    //first domino
    rect(-250,-40,40,80,5);
    line(-245,0,-215,0);
    //second domino
    rect(-190,-40,40,80,5);
    line(-185,0,-155,0);
    let d = day();
    let dt = d; //first domino dots
    let du = d; //second domino dots
    stroke(0, 255, 60);
    strokeWeight(1);
    if(d<10){dt = 0;}
    else if(d>=10&&d<20){
      dt = 1;
      du = d - 10;
      fill(0);
      circle(-230,20,7);}
    else if(d>=20&&d<30){
      dt = 2;
      du = d - 20;
      fill(0);
      circle(-230,20,7);
      circle(-230,-20,7);}
    else if(d>=30&&d<40){
      dt = 3;
      du = d - 30;
      fill(0);
      circle(-220,10,7);
      circle(-240,30,7);
      circle(-230,-20,7);}
    if(du == 1){
      fill(0);
      circle(-170,20,7);}
    else if(du == 2){
      fill(0);
      circle(-170,-20,7);
      circle(-170,20,7);}
    else if(du == 3){
      fill(0);
      circle(-160,10,7);
      circle(-180,30,7);
      circle(-170,-20,7);}
    else if(du == 4){
      fill(0);
      circle(-160,-30,7);
      circle(-180,-10,7);
      circle(-160,10,7);
      circle(-180,30,7);}
    else if(du == 5){
      fill(0);
      circle(-170,20,7);
      circle(-160,10,7);
      circle(-180,30,7);
      circle(-160,-30,7);
      circle(-180,-10,7);}
    else if(du == 6){
      fill(0);
      circle(-170,20,7);
      circle(-160,10,7);
      circle(-180,30,7);
      circle(-170,-20,7);
      circle(-160,-30,7);
      circle(-180,-10,7);}
    else if(du == 7){
      fill(0);
      circle(-160,10,7);
      circle(-180,30,7);
      circle(-160,30,7);
      circle(-180,10,7);
      circle(-170,-20,7);
      circle(-160,-30,7);
      circle(-180,-10,7);}
    else if(du == 8){
      fill(0);
      circle(-160,10,7);
      circle(-180,30,7);
      circle(-160,-10,7);
      circle(-180,-30,7);
      circle(-160,30,7);
      circle(-180,10,7);
      circle(-160,-30,7);
      circle(-180,-10,7);}
    else if(du == 9){
      fill(0);
      circle(-170,20,7);
      circle(-160,10,7);
      circle(-180,30,7);
      circle(-160,-10,7);
      circle(-180,-30,7);
      circle(-160,30,7);
      circle(-180,10,7);
      circle(-160,-30,7);
      circle(-180,-10,7);}
    //year dominos
    fill(255);
    stroke(0, 0, 255);
    strokeWeight(3);
    //first domino
    rect(-250,120,40,80,5);
    line(-245,160,-215,160);
    //second domino
    rect(-190,120,40,80,5);
    line(-185,160,-155,160);
    let y = year();
    let yt = y;
    let yu = y;
    stroke(0, 255, 60);
    strokeWeight(1);
    if(y<2010){yt = 0;}
    else if(y>=2010&&y<2020){
      yt = 1;
      yu = y - 2010;
      fill(0);
      circle(-230,180,7);}
    else if(y>=2020&&y<2030){
      yt = 2;
      yu = y - 2020;
      fill(0);
      circle(-230,180,7);
      circle(-230,140,7);}
    if(yu == 1){
      fill(0);
      circle(-170,180,7);}
    else if(yu == 2){
      fill(0);
      circle(-170,180,7);
      circle(-170,140,7);}
    else if(yu == 3){
      fill(0);
      circle(-160,170,7);
      circle(-180,190,7);
      circle(-170,140,7);}
    else if(yu == 4){
      fill(0);
      circle(-160,130,7);
      circle(-180,150,7);
      circle(-160,170,7);
      circle(-180,190,7);}
    else if(yu == 5){
      fill(0);
      circle(-170,180,7);
      circle(-160,170,7);
      circle(-180,190,7);
      circle(-160,130,7);
      circle(-180,150,7);}
    else if(yu == 6){
      fill(0);
      circle(-170,180,7);
      circle(-160,170,7);
      circle(-180,190,7);
      circle(-170,140,7);
      circle(-160,130,7);
      circle(-180,150,7);}
    else if(yu == 7){
      fill(0);
      circle(-160,170,7);
      circle(-180,170,7);
      circle(-160,190,7);
      circle(-180,190,7);
      circle(-170,140,7);
      circle(-160,130,7);
      circle(-180,150,7);}
    else if(yu == 8){
      fill(0);
      circle(-160,150,7);
      circle(-180,150,7);
      circle(-160,130,7);
      circle(-180,130,7);
      circle(-160,190,7);
      circle(-180,190,7);
      circle(-160,170,7);
      circle(-180,170,7);}
    else if(yu == 9){
      fill(0);
      circle(-170,180,7);
      circle(-160,170,7);
      circle(-180,170,7);
      circle(-160,190,7);
      circle(-180,190,7);
      circle(-160,130,7);
      circle(-180,130,7);
      circle(-160,150,7);
      circle(-180,150,7);}
    //second dominos
    fill(255);
    stroke(0, 0, 255);
    strokeWeight(3);
    rect(150,120,40,80,5);
    line(245,160,215,160);
    rect(210,120,40,80,5);
    line(185,160,155,160);
    let s = second();
    let st = s;
    let su = s;
    stroke(0, 255, 60);
    strokeWeight(1);
    if(s<10){st = 0;}
    else if(s>=10&&s<20){
      st = 1;
      su = s - 10;
      fill(0);
      circle(170,180,7);}
    else if(s>=20&&s<30){
      st = 2;
      su = s - 20;
      fill(0);
      circle(170,180,7);
      circle(170,140,7);}
    else if(s>=30&&s<40){
      st = 3;
      su = s - 30;
      fill(0);
      circle(160,190,7);
      circle(170,140,7);
      circle(180,170,7);}
    else if(s>=40&&s<50){
      st = 4;
      su = s - 40;
      fill(0);
      circle(160,190,7);
      circle(180,170,7);
      circle(160,150,7);
      circle(180,130,7);}
    else if(s>=50&&s<60){
      st = 5;
      su = s - 50;
      fill(0);
      circle(180,170,7);
      circle(160,190,7);
      circle(170,180,7);
      circle(180,130,7);
      circle(160,150,7);}
    if(su == 1){
      fill(0);
      circle(230,180,7);}
    else if(su == 2){
      fill(0);
      circle(230,180,7);
      circle(230,140,7);}
    else if(su == 3){
      fill(0);
      circle(240,170,7);
      circle(220,190,7);
      circle(230,140,7);}
    else if(su == 4){
      fill(0);
      circle(240,170,7);
      circle(220,190,7);
      circle(240,130,7);
      circle(220,150,7);}
    else if(su == 5){
      fill(0);
      circle(230,180,7);
      circle(240,170,7);
      circle(220,190,7);
      circle(240,130,7);
      circle(220,150,7);}
    else if(su == 6){
      fill(0);
      circle(230,140,7);
      circle(240,130,7);
      circle(220,150,7);
      circle(230,180,7);
      circle(240,170,7);
      circle(220,190,7);}
    else if(su == 7){
      fill(0);
      circle(240,190,7);
      circle(220,190,7);
      circle(240,170,7);
      circle(220,170,7);
      circle(230,140,7);
      circle(240,130,7);
      circle(220,150,7);}
    else if(su == 8){
      fill(0);
      circle(240,190,7);
      circle(220,190,7);
      circle(240,170,7);
      circle(220,170,7);
      circle(240,130,7);
      circle(220,130,7);
      circle(240,150,7);
      circle(220,150,7);}
    else if(su == 9){
      fill(0);
      circle(230,180,7);
      circle(240,170,7);
      circle(220,170,7);
      circle(240,150,7);
      circle(220,150,7);
      circle(240,130,7);
      circle(220,130,7);
      circle(240,190,7);
      circle(220,190,7);}
    //minute domino
    fill(255);
    stroke(0, 0, 255);
    strokeWeight(3);
    rect(150,-40,40,80,5);
    line(245,0,215,0);
    rect(210,-40,40,80,5);
    line(185,0,155,0);
    let min = minute();
    let mt = min;
    let mu = min;
    stroke(0, 255, 60);
    strokeWeight(1);
    if(min<10){mt = 0;}
    else if(min>=10&&min<20){
      mt = 1;
      mu = min - 10;
      fill(0);
      circle(170,20,7);}
    else if(min>=20&&min<30){
      mt = 2;
      mu = min - 20;
      fill(0);
      circle(170,20,7);
      circle(170,-20,7);}
    else if(min>=30&&min<40){
      mt = 3;
      mu = min - 30;
      fill(0);
      circle(180,10,7);
      circle(160,30,7);
      circle(170,-20,7);}
    else if(min>=40&&min<50){
      mt = 4;
      mu = min - 40;
      fill(0);
      circle(160,30,7);
      circle(180,10,7);
      circle(160,-10,7);
      circle(180,-30,7);}
    else if(min>=50&&min<60){
      mt = 5;
      mu = min - 50;
      fill(0);
      circle(160,-10,7);
      circle(180,-30,7);
      circle(170,20,7);
      circle(160,30,7);
      circle(180,10,7);}
    if(mu == 1){
      fill(0);
      circle(230,20,7);}
    else if(mu == 2){
      fill(0);
      circle(230,20,7);
      circle(230,-20,7);}
    else if(mu == 3){
      fill(0);
      circle(240,10,7);
      circle(220,30,7);
      circle(230,-20,7);}
    else if(mu == 4){
      fill(0);
      circle(240,10,7);
      circle(220,30,7);
      circle(240,-30,7);
      circle(220,-10,7);}
    else if(mu == 5){
      fill(0);
      circle(230,20,7);
      circle(240,10,7);
      circle(220,30,7);
      circle(240,-30,7);
      circle(220,-10,7);}
    else if(mu == 6){
      fill(0);
      circle(230,20,7);
      circle(240,10,7);
      circle(220,30,7);
      circle(230,-20,7);
      circle(240,-30,7);
      circle(220,-10,7);}
    else if(mu == 7){
      fill(0);
      circle(240,30,7);
      circle(220,30,7);
      circle(240,10,7);
      circle(220,10,7);
      circle(230,-20,7);
      circle(240,-30,7);
      circle(220,-10,7);}
    else if(mu == 8){
      fill(0);
      circle(240,30,7);
      circle(220,30,7);
      circle(240,-30,7);
      circle(220,-30,7);
      circle(240,10,7);
      circle(220,10,7);
      circle(240,-10,7);
      circle(220,-10,7);}
    else if(mu == 9){
      fill(0);
      circle(230,20,7);
      circle(240,10,7);
      circle(220,30,7);
      circle(240,30,7);
      circle(220,10,7);
      circle(240,-10,7);
      circle(220,-10,7);
      circle(240,-30,7);
      circle(220,-30,7);}
    //hour domino
    fill(255);
    stroke(0, 0, 255);
    strokeWeight(3);
    rect(160,-150,80,40,20);
    line(200,-145,200,-115);
    let h = hour();
    h=12;
    stroke(0, 255, 60);
    strokeWeight(1);
    if(h>12){h=h-12;}
    if(h == 1){
      fill(0);
      circle(220,-130,7);}
    else if(h == 2){
      fill(0);
      circle(220,-130,7);
      circle(180,-130,7);}
    else if(h == 3){
      fill(0);
      circle(210,-140,7);
      circle(230,-120,7);
      circle(180,-130,7);}
    else if(h == 4){
      fill(0);
      circle(210,-140,7);
      circle(230,-120,7);
      circle(170,-140,7);
      circle(190,-120,7);}
    else if(h == 5){
      fill(0);
      circle(220,-130,7);
      circle(210,-140,7);
      circle(230,-120,7);
      circle(170,-140,7);
      circle(190,-120,7);}
    else if(h == 6){
      fill(0);
      circle(220,-130,7);
      circle(210,-140,7);
      circle(230,-120,7);
      circle(180,-130,7);
      circle(170,-140,7);
      circle(190,-120,7);}
    else if(h == 7){
      fill(0);
      circle(210,-140,7);
      circle(210,-120,7);
      circle(230,-120,7);
      circle(230,-140,7);
      circle(180,-130,7);
      circle(170,-140,7);
      circle(190,-120,7);}
    else if(h == 8){
      fill(0);
      circle(210,-140,7);
      circle(210,-120,7);
      circle(230,-120,7);
      circle(230,-140,7);
      circle(170,-140,7);
      circle(170,-120,7);
      circle(190,-120,7);
      circle(190,-140,7);}
    else if(h == 9){
      fill(0);
      circle(220,-130,7);
      circle(210,-140,7);
      circle(210,-120,7);
      circle(230,-120,7);
      circle(230,-140,7);
      circle(170,-140,7);
      circle(170,-120,7);
      circle(190,-120,7);
      circle(190,-140,7);}
    else if(h == 10){
      fill(0);
      circle(220,-130,7);
      circle(210,-140,7);
      circle(210,-120,7);
      circle(230,-120,7);
      circle(230,-140,7);
      circle(180,-130,7);
      circle(170,-140,7);
      circle(170,-120,7);
      circle(190,-120,7);
      circle(190,-140,7);}
    else if(h == 11){
      fill(0);
      circle(220,-140,7);
      circle(220,-120,7);
      circle(210,-140,7);
      circle(210,-120,7);
      circle(230,-120,7);
      circle(230,-140,7);
      circle(180,-130,7);
      circle(170,-140,7);
      circle(170,-120,7);
      circle(190,-120,7);
      circle(190,-140,7);}
    else if(h == 12){
      fill(0);
      circle(220,-140,7);
      circle(220,-120,7);
      circle(210,-140,7);
      circle(210,-120,7);
      circle(230,-120,7);
      circle(230,-140,7);
      circle(180,-140,7);
      circle(180,-120,7);
      circle(170,-140,7);
      circle(170,-120,7);
      circle(190,-120,7);
      circle(190,-140,7);}
  }
  //portfolio page, saved for MousePressed function
  else if(op==2){}
}
//Tracery objects
var grammarSource = {
  "origin": ["On #days#days and #days#days, I take a class called #classes#"],
	"days" : ["Mon","Tues","Wednes","Thurs","Fri","Satur","Sun"],
	"classes" : ["Computer Systems, which could be renamed #computer.capitalize# #systems.capitalize#","Artificial Intelligence, which could be renamed #artificial.capitalize# #intelligence.capitalize#","Creative Coding, which could be renamed #creative.capitalize# #coding.capitalize#","Software Security, which could be renamed #software.capitalize# #security.capitalize#"],
	"artificial" : ["Artificial","Unreal", "Bogus","Counterfeit","Ersatz","Fabricated","Factitious","Faked","False","Falsie","Hyped up","manufactured","mock","phony","plastic","sham","simulated","specious","spurious","substitute","synthetic","unnatural"],
	"intelligence":["intelligence","acumen","agility","brilliance","intellect","judgment","perception","quickness","savvy","sense","skill","subtlety","understanding","wit","IQ","acuity","alertness","aptitude","brainpower","brains","brightness","capacity","cleverness","comprehension","coruscation","discernment","luminosity","mentality","mind","penetration","perspicacity","precocity","quotient","reason","sagacity","smarts","trenchancy","gray matter"],
	"computer" : ["computer","CPU","PC","abacus","analog","brain","calculator","clone","laptop","mac","mainframe","microcomputer","mini","minicomputer","adding machine","artificial intelligence","data processor","digital","electronic brain","micro","number cruncher","personal computer","thinking machine"],
	"systems" : ["systems","arrangements","organizations","rules","schemes","structures","classifications","combinations","complexes","conformities","coordinations","entities","ideologies","integrals","orderlinesses","philosophies","regularities","setups","sums","theories","totalities","fixed orders","frame of references","integrates","logical orders","red tapes"],
	"creative" : ["creative","gifted","ingenious","innovative","inventive","original","productive","prolific","visionary","originative","clever","cool","demiurgic","deviceful","fertile","formative","hip","innovational","innovatory","inspired","leading-edge","stimulating","way out"],
	"coding" :  ["coding", "encrypting", "cyphering", "programming", "cashing", "enciphering", "crashing"],
	"software" : ["software","operating system","program","spreadsheet","freeware","groupware","shareware","application","bundle","courseware","file management system","presentation","product","system","vaporware"],
	"security" : ["bond","care","freedom","guarantee","insurance","preservation","surveillance","aegis","agreement","armament","armor","asylum","bail","collateral","compact","contract","covenant","cover","custody","defense","earnest","guard","immunity","pact","pawn","pledge","precaution","promise","redemption","refuge","retreat","safeguard","safekeeping","safeness","salvation","sanctuary","shelter","shield","surety","token","ward","warrant","safety measure"]
};
//activates clock
function mouseMoved(){
  if(op==2){op=2;}
  else{op = 1;}
}
//activates portfolio
function mousePressed(){
  if(op==1){
    op=2;
    background(0,0,255);
    fill(0, 255, 60);
    //description
    text("Welcome to my portfolio",0-250,0-210);
    fill(0);
    textSize(40);
    text("As a computer scientist, I recently dived into Creative Coding to expand my horizons.",0-370,0-160);
    text("I learned a lot that I can do with javascript from Screensavers to Clocks and even Bots",0-370,0-130);
    //bot
    var grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
    var output = grammar.flatten("#origin#");
    fill(255);
    textSize(40);
    //bot output
    text(output, 0-250,0-90,500);
    fill(0);
    //datamosh demo
    text("I also started datamoshing videos into gifs for my ever-growing glitch gallery",0-340,50);
    text("You can see snapshots of my gifs on this page as well as the QR code to my library on Imgur",0-400,80);
    //image placements
    image(img,-90,90);
    image(hack,-400,90);
    image(musk, 100,90);}
  else if(op==2){op=1;}}