// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(300, 100);//キャンバスの作成
  background(200);//背景色
  fill(0);//色を黒に
  crossmark(10, 10, 90, 90);//ばつ印　X座標の下端、y座標の下端、x座標の上端、y座標の上端
  ngmark(150, 50, 80);//NGマークの作成　中心の座標x、y、半径
  star(250, 50, 40);//星マーク　中心の座標
}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);//指定した２点を結ぶだけ
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r){
  push();
  noFill();
  strokeWeight(r * 0.1);
  let d = sqrt(r * r / 8);
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();
}

N = 7

function star(cx, cy, r){
  beginShape();
  for(var i = 0; i < N; i++){
    let theta = TWO_PI * i  / N - HALF_PI ;//- HALF_PIの部分は頂点を上に持ってくるための90度ずらし。
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
