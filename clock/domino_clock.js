//font for wording
let myFont;
function preload(){myFont = loadFont('cali.ttf');}
//dimension setup
function setup() {createCanvas(400, 400);}
//main function
function draw() {
  background(0); //blk bg
  //color split
  noStroke();
  fill(255);
  triangle(width/2+20,25,width/2-20,0,width/2-20,50);
  triangle(width/2+20,75,width/2-20,50,width/2-20,100);
  triangle(width/2+20,125,width/2-20,100,width/2-20,150);
  triangle(width/2+20,175,width/2-20,150,width/2-20,200);
  triangle(width/2+20,225,width/2-20,200,width/2-20,250);
  triangle(width/2+20,275,width/2-20,250,width/2-20,300);
  triangle(width/2+20,325,width/2-20,300,width/2-20,350);
  triangle(width/2+20,375,width/2-20,350,width/2-20,400);
  rect(0,0,180,height);
  //font variables
  fill(0,120,200);//blue
  textSize(55);//size
  textFont('Helvetica');//style for '
  text("'", 35, 315);//indicates year abbreviation
  textFont(myFont);//loads outside font
  text("Date", width/2 - 125, 45);//designation
  text("Time", width/2 + 80, 45);//designation
  //separator variables
  stroke(0,120,200);//blue
  strokeWeight(5);//for date
  line(width/2-150,125,width/2-50,125);
  line(width/2-150,255,width/2-50,255);
  strokeWeight(9);//for time
  line(width/2+80,125,width/2+90,125);
  line(width/2+120,125,width/2+130,125);
  line(width/2+80,255,width/2+90,255);
  line(width/2+120,255,width/2+130,255);
  //month domino
  fill(0);
  stroke(0,120,200);//blue
  strokeWeight(1);
  //domino
  rect(width/2-140,60,80,40,5);
  line(width/2-100,65,width/2-100,95);
  let m = month();
  //dots
  if(m == 1){
    fill(255);
    circle(width/2-120,80,7);}
  else if(m == 2){
    fill(255);
    circle(width/2-120,80,7);
    circle(width/2-80,80,7);}
  else if(m == 3){
    fill(255);
    circle(width/2-110,70,7);
    circle(width/2-130,90,7);
    circle(width/2-80,80,7);}
  else if(m == 4){
    fill(255);
    circle(width/2-110,70,7);
    circle(width/2-130,90,7);
    circle(width/2-70,70,7);
    circle(width/2-90,90,7);}
  else if(m == 5){
    fill(255);
    circle(width/2-120,80,7);
    circle(width/2-110,70,7);
    circle(width/2-130,90,7);
    circle(width/2-70,70,7);
    circle(width/2-90,90,7);}
  else if(m == 6){
    fill(255);
    circle(width/2-120,80,7);
    circle(width/2-110,70,7);
    circle(width/2-130,90,7);
    circle(width/2-80,80,7);
    circle(width/2-70,70,7);
    circle(width/2-90,90,7);}
  else if(m == 7){
    fill(255);
    circle(width/2-110,70,7);
    circle(width/2-110,90,7);
    circle(width/2-130,90,7);
    circle(width/2-130,70,7);
    circle(width/2-80,80,7);
    circle(width/2-70,70,7);
    circle(width/2-90,90,7);}
  else if(m == 8){
    fill(255);
    circle(width/2-110,70,7);
    circle(width/2-110,90,7);
    circle(width/2-130,90,7);
    circle(width/2-130,70,7);
    circle(width/2-70,70,7);
    circle(width/2-70,90,7);
    circle(width/2-90,90,7);
    circle(width/2-90,70,7);}
  else if(m == 9){
    fill(255);
    circle(width/2-120,80,7);
    circle(width/2-110,70,7);
    circle(width/2-110,90,7);
    circle(width/2-130,90,7);
    circle(width/2-130,70,7);
    circle(width/2-70,70,7);
    circle(width/2-70,90,7);
    circle(width/2-90,90,7);
    circle(width/2-90,70,7);}
  else if(m == 10){
    fill(255);
    circle(width/2-120,80,7);
    circle(width/2-110,70,7);
    circle(width/2-110,90,7);
    circle(width/2-130,90,7);
    circle(width/2-130,70,7);
    circle(width/2-80,80,7);
    circle(width/2-70,70,7);
    circle(width/2-70,90,7);
    circle(width/2-90,90,7);
    circle(width/2-90,70,7);}
  else if(m == 11){
    fill(255);
    circle(width/2-120,70,7);
    circle(width/2-120,90,7);
    circle(width/2-110,70,7);
    circle(width/2-110,90,7);
    circle(width/2-130,90,7);
    circle(width/2-130,70,7);
    circle(width/2-80,80,7);
    circle(width/2-70,70,7);
    circle(width/2-70,90,7);
    circle(width/2-90,90,7);
    circle(width/2-90,70,7);}
  else if(m == 12){
    fill(255);
    circle(width/2-120,70,7);
    circle(width/2-120,90,7);
    circle(width/2-110,70,7);
    circle(width/2-110,90,7);
    circle(width/2-130,90,7);
    circle(width/2-130,70,7);
    circle(width/2-80,70,7);
    circle(width/2-80,90,7);
    circle(width/2-70,70,7);
    circle(width/2-70,90,7);
    circle(width/2-90,90,7);
    circle(width/2-90,70,7);}
  //day domino
  fill(0);
  //first domino
  rect(width/2-95,150,40,80,5);
  line(width/2-90,190,width/2-60,190);
  //second domino
  rect(width/2-145,150,40,80,5);
  line(width/2-140,190,width/2-110,190);
  let d = day();
  let dt = d; //first domino dots
  let du = d; //second domino dots
  if(d<10){dt = 0;}
  else if(d>=10&&d<20){
    dt = 1;
    du = d - 10;
    fill(255);
    circle(width/2-125,210,7);}
  else if(d>=20&&d<30){
    dt = 2;
    du = d - 20;
    fill(255);
    circle(width/2-125,210,7);
    circle(width/2-125,170,7);}
  else if(d>=30&&d<40){
    dt = 3;
    du = d - 30;
    fill(255);
    circle(width/2-115,200,7);
    circle(width/2-135,220,7);
    circle(width/2-125,170,7);}
  if(du == 1){
    fill(255);
    circle(width/2-75,210,7);}
  else if(du == 2){
    fill(255);
    circle(width/2-75,210,7);
    circle(width/2-75,170,7);}
  else if(du == 3){
    fill(255);
    circle(width/2-65,200,7);
    circle(width/2-85,220,7);
    circle(width/2-75,170,7);}
  else if(du == 4){
    fill(255);
    circle(width/2-65,200,7);
    circle(width/2-85,220,7);
    circle(width/2-65,160,7);
    circle(width/2-85,180,7);}
  else if(du == 5){
    fill(255);
    circle(width/2-75,210,7);
    circle(width/2-65,200,7);
    circle(width/2-85,220,7);
    circle(width/2-65,160,7);
    circle(width/2-85,180,7);}
  else if(du == 6){
    fill(255);
    circle(width/2-75,210,7);
    circle(width/2-65,200,7);
    circle(width/2-85,220,7);
    circle(width/2-75,170,7);
    circle(width/2-65,160,7);
    circle(width/2-85,180,7);}
  else if(du == 7){
    fill(255);
    circle(width/2-65,200,7);
    circle(width/2-85,220,7);
    circle(width/2-65,220,7);
    circle(width/2-85,200,7);
    circle(width/2-75,170,7);
    circle(width/2-65,160,7);
    circle(width/2-85,180,7);}
  else if(du == 8){
    fill(255);
    circle(width/2-65,200,7);
    circle(width/2-85,220,7);
    circle(width/2-65,220,7);
    circle(width/2-85,200,7);
    circle(width/2-65,180,7);
    circle(width/2-85,160,7);
    circle(width/2-65,160,7);
    circle(width/2-85,180,7);}
  else if(du == 9){
    fill(255);
    circle(width/2-75,210,7);
    circle(width/2-65,200,7);
    circle(width/2-85,220,7);
    circle(width/2-65,220,7);
    circle(width/2-85,200,7);
    circle(width/2-65,180,7);
    circle(width/2-85,160,7);
    circle(width/2-65,160,7);
    circle(width/2-85,180,7);}
  //year dominos
  fill(0);
  rect(width/2-95,280,40,80,5);
  line(width/2-90,320,width/2-60,320);
  rect(width/2-145,280,40,80,5);
  line(width/2-140,320,width/2-110,320);
  let y = year();
  let yt = y;
  let yu = y;
  if(y<2010){yt = 0;}
  else if(y>=2010&&y<2020){
    yt = 1;
    yu = y - 2010;
    fill(255);
    circle(width/2-125,340,7);}
  else if(y>=2020&&y<2030){
    yt = 2;
    yu = y - 2020;
    fill(255);
    circle(width/2-125,340,7);
    circle(width/2-125,300,7);}
  if(yu == 1){
    fill(255);
    circle(width/2-75,340,7);}
  else if(yu == 2){
    fill(255);
    circle(width/2-75,340,7);
    circle(width/2-75,300,7);}
  else if(yu == 3){
    fill(255);
    circle(width/2-65,330,7);
    circle(width/2-85,350,7);
    circle(width/2-75,300,7);}
  else if(yu == 4){
    fill(255);
    circle(width/2-65,330,7);
    circle(width/2-85,350,7);
    circle(width/2-65,290,7);
    circle(width/2-85,310,7);}
  else if(yu == 5){
    fill(255);
    circle(width/2-75,340,7);
    circle(width/2-65,330,7);
    circle(width/2-85,350,7);
    circle(width/2-65,290,7);
    circle(width/2-85,310,7);}
  else if(yu == 6){
    fill(255);
    circle(width/2-75,340,7);
    circle(width/2-65,330,7);
    circle(width/2-85,350,7);
    circle(width/2-75,300,7);
    circle(width/2-65,290,7);
    circle(width/2-85,310,7);}
  else if(yu == 7){
    fill(255);
    circle(width/2-65,330,7);
    circle(width/2-85,350,7);
    circle(width/2-65,350,7);
    circle(width/2-85,330,7);
    circle(width/2-75,300,7);
    circle(width/2-65,290,7);
    circle(width/2-85,310,7);}
  else if(yu == 8){
    fill(255);
    circle(width/2-65,330,7);
    circle(width/2-85,350,7);
    circle(width/2-65,350,7);
    circle(width/2-85,330,7);
    circle(width/2-65,310,7);
    circle(width/2-85,290,7);
    circle(width/2-65,290,7);
    circle(width/2-85,310,7);}
  else if(yu == 9){
    fill(255);
    circle(width/2-75,340,7);
    circle(width/2-65,330,7);
    circle(width/2-85,350,7);
    circle(width/2-65,350,7);
    circle(width/2-85,330,7);
    circle(width/2-65,310,7);
    circle(width/2-85,290,7);
    circle(width/2-65,290,7);
    circle(width/2-85,310,7);}
  //second dominos
  fill(255);
  rect(width/2+60,280,40,80,5);
  line(width/2+65,320,width/2+95,320);
  rect(width/2+110,280,40,80,5);
  line(width/2+115,320,width/2+145,320);
  let s = second();
  let st = s;
  let su = s;
  if(s<10){st = 0;}
  else if(s>=10&&s<20){
    st = 1;
    su = s - 10;
    fill(0);
    circle(width/2+80,340,7);}
  else if(s>=20&&s<30){
    st = 2;
    su = s - 20;
    fill(0);
    circle(width/2+80,340,7);
    circle(width/2+80,300,7);}
  else if(s>=30&&s<40){
    st = 3;
    su = s - 30;
    fill(0);
    circle(width/2+90,330,7);
    circle(width/2+70,350,7);
    circle(width/2+80,300,7);}
  else if(s>=40&&s<50){
    st = 4;
    su = s - 40;
    fill(0);
    circle(width/2+90,290,7);
    circle(width/2+70,310,7);
    circle(width/2+90,330,7);
    circle(width/2+70,350,7);}
  else if(s>=50&&s<60){
    st = 5;
    su = s - 50;
    fill(0);
    circle(width/2+90,290,7);
    circle(width/2+70,310,7);
    circle(width/2+80,340,7);
    circle(width/2+90,330,7);
    circle(width/2+70,350,7);}
  if(su == 1){
    fill(0);
    circle(width/2+130,340,7);}
  else if(su == 2){
    fill(0);
    circle(width/2+130,340,7);
    circle(width/2+130,300,7);}
  else if(su == 3){
    fill(0);
    circle(width/2+140,330,7);
    circle(width/2+120,350,7);
    circle(width/2+130,300,7);}
  else if(su == 4){
    fill(0);
    circle(width/2+140,330,7);
    circle(width/2+120,350,7);
    circle(width/2+140,290,7);
    circle(width/2+120,310,7);}
  else if(su == 5){
    fill(0);
    circle(width/2+130,340,7);
    circle(width/2+140,330,7);
    circle(width/2+120,350,7);
    circle(width/2+140,290,7);
    circle(width/2+120,310,7);}
  else if(su == 6){
    fill(0);
    circle(width/2+130,340,7);
    circle(width/2+140,330,7);
    circle(width/2+120,350,7);
    circle(width/2+130,300,7);
    circle(width/2+140,290,7);
    circle(width/2+120,310,7);}
  else if(su == 7){
    fill(0);
    circle(width/2+140,330,7);
    circle(width/2+120,350,7);
    circle(width/2+140,350,7);
    circle(width/2+120,330,7);
    circle(width/2+130,300,7);
    circle(width/2+140,290,7);
    circle(width/2+120,310,7);}
  else if(su == 8){
    fill(0);
    circle(width/2+140,330,7);
    circle(width/2+120,350,7);
    circle(width/2+140,350,7);
    circle(width/2+120,330,7);
    circle(width/2+140,310,7);
    circle(width/2+120,290,7);
    circle(width/2+140,290,7);
    circle(width/2+120,310,7);}
  else if(su == 9){
    fill(0);
    circle(width/2+130,340,7);
    circle(width/2+140,330,7);
    circle(width/2+120,350,7);
    circle(width/2+140,350,7);
    circle(width/2+120,330,7);
    circle(width/2+140,310,7);
    circle(width/2+120,290,7);
    circle(width/2+140,290,7);
    circle(width/2+120,310,7);}
  //minute domino
  fill(255);
  rect(width/2+60,150,40,80,5);
  line(width/2+65,190,width/2+95,190);
  rect(width/2+110,150,40,80,5);
  line(width/2+115,190,width/2+145,190);
  let min = minute();
  let mt = min;
  let mu = min;
  if(min<10){mt = 0;}
  else if(min>=10&&min<20){
    mt = 1;
    mu = min - 10;
    fill(0);
    circle(width/2+80,210,7);}
  else if(min>=20&&min<30){
    mt = 2;
    mu = min - 20;
    fill(0);
    circle(width/2+80,210,7);
    circle(width/2+80,170,7);}
  else if(min>=30&&min<40){
    mt = 3;
    mu = min - 30;
    fill(0);
    circle(width/2+90,200,7);
    circle(width/2+70,220,7);
    circle(width/2+80,170,7);}
  else if(min>=40&&min<50){
    mt = 4;
    mu = min - 40;
    fill(0);
    circle(width/2+90,160,7);
    circle(width/2+70,180,7);
    circle(width/2+90,200,7);
    circle(width/2+70,220,7);}
  else if(min>=50&&min<60){
    mt = 5;
    mu = min - 50;
    fill(0);
    circle(width/2+90,160,7);
    circle(width/2+70,180,7);
    circle(width/2+80,210,7);
    circle(width/2+90,200,7);
    circle(width/2+70,220,7);}
  if(mu == 1){
    fill(0);
    circle(width/2+130,210,7);}
  else if(mu == 2){
    fill(0);
    circle(width/2+130,210,7);
    circle(width/2+130,170,7);}
  else if(mu == 3){
    fill(0);
    circle(width/2+140,200,7);
    circle(width/2+120,220,7);
    circle(width/2+130,170,7);}
  else if(mu == 4){
    fill(0);
    circle(width/2+140,200,7);
    circle(width/2+120,220,7);
    circle(width/2+140,160,7);
    circle(width/2+120,180,7);}
  else if(mu == 5){
    fill(0);
    circle(width/2+130,210,7);
    circle(width/2+140,200,7);
    circle(width/2+120,220,7);
    circle(width/2+140,160,7);
    circle(width/2+120,180,7);}
  else if(mu == 6){
    fill(0);
    circle(width/2+130,210,7);
    circle(width/2+140,200,7);
    circle(width/2+120,220,7);
    circle(width/2+130,170,7);
    circle(width/2+140,160,7);
    circle(width/2+120,180,7);}
  else if(mu == 7){
    fill(0);
    circle(width/2+140,200,7);
    circle(width/2+120,220,7);
    circle(width/2+140,220,7);
    circle(width/2+120,200,7);
    circle(width/2+130,170,7);
    circle(width/2+140,160,7);
    circle(width/2+120,180,7);}
  else if(mu == 8){
    fill(0);
    circle(width/2+140,200,7);
    circle(width/2+120,220,7);
    circle(width/2+140,220,7);
    circle(width/2+120,200,7);
    circle(width/2+140,180,7);
    circle(width/2+120,160,7);
    circle(width/2+140,160,7);
    circle(width/2+120,180,7);}
  else if(mu == 9){
    fill(0);
    circle(width/2+130,210,7);
    circle(width/2+140,200,7);
    circle(width/2+120,220,7);
    circle(width/2+140,220,7);
    circle(width/2+120,200,7);
    circle(width/2+140,180,7);
    circle(width/2+120,160,7);
    circle(width/2+140,160,7);
    circle(width/2+120,180,7);}
  //hour domino
  fill(255);
  rect(width/2+65,60,80,40,5);
  line(width/2+105,65,width/2+105,95);
  let h = hour();
  if(h>12){h=h-12;}
  if(h == 1){
    fill(0);
    circle(width/2+85,80,7);}
  else if(h == 2){
    fill(0);
    circle(width/2+85,80,7);
    circle(width/2+125,80,7);}
  else if(h == 3){
    fill(0);
    circle(width/2+75,70,7);
    circle(width/2+95,90,7);
    circle(width/2+125,80,7);}
  else if(h == 4){
    fill(0);
    circle(width/2+75,70,7);
    circle(width/2+95,90,7);
    circle(width/2+115,70,7);
    circle(width/2+135,90,7);}
  else if(h == 5){
    fill(0);
    circle(width/2+85,80,7);
    circle(width/2+75,70,7);
    circle(width/2+95,90,7);
    circle(width/2+115,70,7);
    circle(width/2+135,90,7);}
  else if(h == 6){
    fill(0);
    circle(width/2+85,80,7);
    circle(width/2+75,70,7);
    circle(width/2+95,90,7);
    circle(width/2+125,80,7);
    circle(width/2+115,70,7);
    circle(width/2+135,90,7);}
  else if(h == 7){
    fill(0);
    circle(width/2+75,70,7);
    circle(width/2+75,90,7);
    circle(width/2+95,90,7);
    circle(width/2+95,70,7);
    circle(width/2+125,80,7);
    circle(width/2+115,70,7);
    circle(width/2+135,90,7);
  }
  else if(h == 8){
    fill(0);
    circle(width/2+75,70,7);
    circle(width/2+75,90,7);
    circle(width/2+95,90,7);
    circle(width/2+95,70,7);
    circle(width/2+115,70,7);
    circle(width/2+115,90,7);
    circle(width/2+135,90,7);
    circle(width/2+135,70,7);}
  else if(h == 9){
    fill(0);
    circle(width/2+85,80,7);
    circle(width/2+75,70,7);
    circle(width/2+75,90,7);
    circle(width/2+95,90,7);
    circle(width/2+95,70,7);
    circle(width/2+115,70,7);
    circle(width/2+115,90,7);
    circle(width/2+135,90,7);
    circle(width/2+135,70,7);}
  else if(h == 10){
    fill(0);
    circle(width/2+85,80,7);
    circle(width/2+75,70,7);
    circle(width/2+75,90,7);
    circle(width/2+95,90,7);
    circle(width/2+95,70,7);
    circle(width/2+125,80,7);
    circle(width/2+115,70,7);
    circle(width/2+115,90,7);
    circle(width/2+135,90,7);
    circle(width/2+135,70,7);}
  else if(h == 11){
    fill(0);
    circle(width/2+85,70,7);
    circle(width/2+85,90,7);
    circle(width/2+75,70,7);
    circle(width/2+75,90,7);
    circle(width/2+95,90,7);
    circle(width/2+95,70,7);
    circle(width/2+125,80,7);
    circle(width/2+115,70,7);
    circle(width/2+115,90,7);
    circle(width/2+135,90,7);
    circle(width/2+135,70,7);}
  else if(h == 12){
    fill(0);
    circle(width/2+85,70,7);
    circle(width/2+85,90,7);
    circle(width/2+75,70,7);
    circle(width/2+75,90,7);
    circle(width/2+95,90,7);
    circle(width/2+95,70,7);
    circle(width/2+135,70,7);
    circle(width/2+135,90,7);
    circle(width/2+125,70,7);
    circle(width/2+125,90,7);
    circle(width/2+115,90,7);
    circle(width/2+115,70,7);}
}
