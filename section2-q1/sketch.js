// 小手調べ

function setup(){
  createCanvas(120,120); //キャンバスの作成
  background(255); //背景色
  noFill() //塗りつぶさない
  for(let i = 0; i < 10; i++){ //初期条件i=0 i<10の間繰り返し　for文が一旦終わったらiを１増やす
    let d = (i+1)*10;
    if (i<5){
      stroke(0,0,255); //線や図形の輪郭線の色を指定する ここでは青
    } else{
      stroke(255,0,0);//線や図形の輪郭線の色を指定する ここでは赤
    }
    ellipse(width/2,height/2,d,d);//楕円　（中心の座標、中心の座標、幅、高さ）
    // BLANK[1]
  }
}

