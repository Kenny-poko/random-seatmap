$(function(){

  "use strict";
  let members = document.querySelectorAll('.members');
 
  var
    bingo = [],
    status = true,
    roulette,
    random,
    classname,
    result,
    // $members = $(".members"), ←これだとエラーが起きた
    $classname = $("#classname"),
    $result = $("#result");
    
    for(var i = 0; i <= 19; i++) {
      bingo.push(i);
    }
    console.log (bingo);
 
  // ルーレット開始ボタン
    // ボタンを押すと文字が変わる
  $("#button").on("click", function(){
    if(status) {
      status = false;
      $(this).text("君だ！！");
      
      // ランダムで文字を表示
      // *setIntervalー一定時間に特定の処理を繰り返す
      roulette = setInterval(function(){
        random = Math.floor(Math.random() * bingo.length);
        classname = bingo[random];
        $result.text(members[classname].textContent);
      }, 10);
    } else {
      status = true;
      $(this).text("次の人は..");
 
      //  setInterval を使用して設定された繰り返し動作を止める
      clearInterval(roulette);
 
      // 結果を画面に表示
      result = bingo[random];
      
      // 出た結果を決して一回の表示のみにする
      bingo.splice(random, 1);
      
      // 結果にclaaを追加、色を付ける
      $result.text(members.text);
      $classname.find("li").eq(parseInt(result, 10)).addClass("hit");
    }
  });


//リセットボタン
$('#reset-button').click(function(){
  location.reload();
})


});




