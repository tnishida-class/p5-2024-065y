// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  // noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    fill(i % 2 == 0 ? blue : 255);//偶数回目は青、奇数回目は白（２５５）
    rect(0, i * d, width, (i + 1) * d);
    //rectは長方形の描画　左上隅、3番目幅、4番目高さ
  }

//左上の十字架のパート　まず青背景
  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);


  
  fill(255);
  stroke(255);
  rect(40, 0, d,size );
  stroke(255);
  rect(0, 40, size, d);

}
