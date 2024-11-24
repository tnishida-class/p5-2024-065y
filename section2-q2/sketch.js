// チェッカー
/*
function setup() {
  let s = 50;//枠の辺の長さ（正方形の長さ）
  let d = 40;//円の大きさ
  createCanvas(400, 400);//キャンバスの作成
  background(255);//背景色
  noStroke();//図形の輪郭の無効

  for (let i = 0; i < 8; i++) {//初期条件i=0 i<8の間繰り返し　for文が一旦終わったらiを１増やす
    for (let j = 0; j < 8; j++) {
      let x = i * s;
      let y = j * s;
      if ((i + j) % 2 === 1) //i行j列に関して　i+Jをあまりのある割り算であまり１の時（要は奇数）
        fill(122);//灰色に着色
        rect(x, y, s, s);//長方形(前二つは左隅の座標、幅、高さ)
      }
      if (((i + j) % 2 === 1) && (j < 3)) {
        fill(255, 0, 0);
        ellipse(x + s / 2, y + s / 2, d);
      }
      if (((i + j) % 2 === 1) && (4 < j)) {
        fill(0);
        ellipse(x + s / 2, y + s / 2, d, d);
      }
    }
  }*/




function setup() {
  let s = 50;//枠の辺の長さ（正方形の長さ）
  let d = 40;//円の大きさ
  createCanvas(400, 400);//キャンバスの作成
  background(255);//背景色
  noStroke();//図形の輪郭の無効
  for (let i = 0; i < 8; i++) {//初期条件i=0 i<8の間繰り返し　for文が一旦終わったらiを１増やす
    for (let j = 0; j < 8; j++) {
      let x = i * s;
      let y = j * s;
      if ((i + j) % 2 === 1) {//　i+Jをあまりのある割り算であまり１の時（要は奇数）
        fill(122);//灰色に着色
        rect(x, y, s, s);//長方形(前二つは左隅の座標、幅、高さ)
      }
      if (((i + j) % 2 === 1) && (j < 3)) {//i+jが奇数　かつ　jが３未満
        fill(255, 0, 0);//赤色
        ellipse(x + s / 2, y + s / 2, d);//前二つの座標が枠の中心　半径dの円をかく
      }
      if (((i + j) % 2 === 1) && (4 < j)) {//i+jが奇数　かつ　jが４より大きい
        fill(0);//黒
        ellipse(x + s / 2, y + s / 2, d);//前二つの座標が枠の中心　半径dの円をかく
      }
    }
  }
}
  