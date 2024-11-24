// テキスト「繰り返し」
/*function setup() {
  createCanvas(100,100);
  fill(0);
  let x = 0;
  while(x < 100){ // 四角を描く座標が描画範囲内であれば続ける
    rect(x, x, 20, 20);
    x = x + 20; // 繰り返し1回ごとに場所を動かす
  }
}
*/

// for 文を使うと、同じプログラムを以下のように書くことができます
// function setup() {
//   createCanvas(100,100);
//   fill(0);
//   for(let i = 0; i < 5; i++){
//     rect(i * 20, i * 20, 20, 20);
//   }
// }


function setup() {
  createCanvas(400, 400);
  background(255);

  // 変換するm進数とn進数、ボールの直径などを設定
  let mBase = 3;
  let nBase = 10;
  let mNumber = [2, 1, 0];
  let ballDiameter = 30;
  let ballSpacing = 10;

  // ボールを配置する関数
  function drawBalls(base, number, x, y) {
    for (let i = 0; i < number.length; i++) {
      fill(color(i * 255 / base));
      ellipse(x + i * (ballDiameter + ballSpacing), y, ballDiameter, ballDiameter);
    }
  }

  // m進数を表示
  drawBalls(mBase, mNumber, 50, 50);

  // 変換処理とアニメーション
  let currentDigit = mNumber.length - 1; // 現在処理中の桁
  let result = []; // 変換結果を格納する配列

  function convert() {
    let remainder = mNumber[currentDigit] % nBase;
    let quotient = floor(mNumber[currentDigit] / nBase);
    result.unshift(remainder); // 結果の先頭に余りを追加
    mNumber[currentDigit] = quotient; // 現在の桁を商で更新

    if (currentDigit > 0 && mNumber[currentDigit] === 0) {
      currentDigit--; // 次の桁へ
    } else if (currentDigit === 0 && mNumber[currentDigit] === 0) {
      noLoop(); // 変換終了
    }
  }

  // draw関数でアニメーションを更新
  draw = () => {
    background(255);
    drawBalls(mBase, mNumber, 50, 50);
    drawBalls(nBase, result, 250, 50); // 変換結果を表示
    convert();
  };
}