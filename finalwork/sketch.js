// 最終課題を制作しよう

let cx,cy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  cx = width / 4;
  cy = height / 2;

  for(i = 0; i < 10; i++){
    if(random(0,1) > 0.5){
      fill(255);
    }
    else{
      fill(0);
      }
     ellipse(random(0,width),random(0,height),100);
  }
}


function draw(){
  mario();
}


function mario(){
  background(160, 192, 255);
  const red = color(255, 0, 0);
  const black = color(0, 0, 0);
  const brown = color(173, 75, 0);
  const blue = color(0, 0, 200);
  const yellow = color(255, 255, 0);
  const hada = color(255, 173, 91);
  const white = color(255, 255, 255);

  let d = 20;
  let color_1 = [1,1,1,1,1, 1,1,1,1,1,1,1,1,1,  3,3,3,6,6,2,6, 3,6,3,6,6,6,2,6,6,6,  3,6,3,3,6,6,6,2,6,6,6,   3,3,6,6,6,6,2,2,2,2, 6,6,6,6,6,6,6, 1,1,4,1,1,1, 1,1,1,4,1,1,4,1,1,1,  1,1,1,1,4,4,4,4,1,1,1,1,  7,7,1,4,5,4,4,5,4,1,7,7,            7, 7, 7, 4, 4, 4, 4, 4, 4, 7, 7, 7,  7, 7, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7,  4, 4, 4, 4, 4, 4,  3, 3, 3, 3, 3, 3,  3, 3, 3, 3, 3, 3, 3, 3];
  let x =       [3,4,5,6,7, 2,3,4,5,6,7,8,9,10, 2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8,9,10, 1,2,3,4,5,6,7,8,9,10,11, 1,2,3,4,5,6,7,8,9,10,3,4,5,6,7,8,9, 2,3,4,5,6,7, 1,2,3,4,5,6,7,8,9,10, 0,1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11,          0,1,2,3,4,5,6,7,8,9,10,11,           0,1,2,3,4,5,6,7,8,9,10,11,           2, 3, 4, 7 ,8, 9,  1, 2, 3, 8, 9, 10, 0, 1, 2, 3, 8, 9, 10, 11];
  let y =       [0,0,0,0,0, 1,1,1,1,1,1,1,1,1,  2,2,2,2,2,2,2, 3,3,3,3,3,3,3,3,3,3,  4,4,4,4,4,4,4,4,4,4, 4,  5,5,5,5,5,5,5,5,5,5, 6,6,6,6,6,6,6, 7,7,7,7,7,7, 8,8,8,8,8,8,8,8,8,8,  9,9,9,9,9,9,9,9,9,9,9,9,  10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11, 12,12,12,12,12,12,12,12,12,12,12,12, 13,13,13,13,13,13, 14,14,14,14,14,14, 15,15,15,15,15,15,15,15];
 
  if(keyIsDown("C".charCodeAt(0))){ d -= 10; }
  if(keyIsDown("V".charCodeAt(0))){ d += 10; }
  
  noStroke();
  for(let i = 0; i < color_1.length; i++){
    if(color_1[i] == 1){
      fill(red);
    }
    else if(color_1[i] == 2){
      fill(black);
    }
    else if(color_1[i] == 3){
      fill(brown);
    }
    else if(color_1[i] == 4){
      fill(blue);
    }
    else if(color_1[i] == 5){
      fill(yellow);
    }
    else if(color_1[i] == 6){
      fill(hada);
    }
    else if(color_1[i] == 7){
      fill(white);
    }
    rect(cx + x[i] * d, cy + y[i] * d, d);
  }
 
  if(keyIsDown(LEFT_ARROW)){ cx -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ cx += 5; }
  if(keyIsDown(UP_ARROW)){ cy -= 5; }
  if(keyIsDown(DOWN_ARROW)){ cy += 5; }

  if(keyIsDown(LEFT_ARROW) && keyIsDown("B".charCodeAt(0))){ cx -= 10; }
  if(keyIsDown(RIGHT_ARROW) && keyIsDown("B".charCodeAt(0))){ cx += 10; }
  if(keyIsDown(UP_ARROW) && keyIsDown("B".charCodeAt(0))){ cy -= 10; }
  if(keyIsDown(DOWN_ARROW) && keyIsDown("B".charCodeAt(0))){ cy += 10; }
  
}




/*

*/
