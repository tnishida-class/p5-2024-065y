// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」

let size = 50;
let count = 0;
let cycle = 100;
let increment = 1;
function setup() {
  createCanvas(200, 200);
}
function draw() {
  background(160, 192, 255);
  count = (count + increment) % cycle;
  if (keyIsPressed) {
    increment = 2;
  } else {
    increment = 1;
  }
  if (count < cycle / 2) {
    size = count + 50;
  } else {
    size = (cycle - count) + 50;
  }
  ellipse(width / 2, height / 2, size);
}

/*
円を描く
円を描く関数を使う
let size = 50; ellipse(width/2, height/2, size);
円の鼓動を表現する
円の鼓動を表現するための変数を宣言する
let count = 0; let cycle = 100; let increment = 1;
countを0-100の間で増加させる
count = (count + increment) % cycle;
もしcountが周期の半分未満の時は円を大きくし，半分以上の時は円を小さくする
if (count < cycle/2) { size = count + 50; } else { size = (cycle - count) + 50; }
キー入力で鼓動の早さを変化させる
キー入力があるときは鼓動の入力を倍にする
if (keyIsPressed) { increment = 2; } else { increment = 1; }
*/
