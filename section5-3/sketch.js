// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);
  daysInYear(2024);
  let dow = dayOfWeek(2024,11,12)
  text(dow, 100,100)

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

//関数

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}





function daysInYear(y){
  if(isLeapYear(y)){
    return 366
  }
  else{
    return 365
  }

}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  const baseYear = 1970;
  const baseMonth = 1;
  const baseday = 1;
  const baseDow = 4;

  let countdays_without_thisY = 0;
  let totaldays = 0;

  for (let year = baseYear; year < y; year++){
    totaldays += isLeapYear(year)? 366:365;
  }
  for (let month = 1; month < m; month++){
    totaldays += daysInMonth(y, month);
  }
  totaldays += d - 1;

  return (baseDow + totaldays)%7;

/*
  for(let i = 1900; i < y; i++){
    countdays_without_thisY += daysInYear(i);
  }
  totaldays = countdays_without_thisY + dayOfYear(y, m, d);
  return totaldays;
  */
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
