$(function(){

  "use strict";
  let members = document.querySelectorAll('.members');
 
  var
    picked = [],
    status = true,
    roulette,
    random,
    classname,
    result,
    // $members = $(".members"), ←これだとエラーが起きた
    $classname = $("#classname"),
    $result = $("#result");
    
    for(var i = 0; i <= 19; i++) {
      picked.push(i);
    }
    console.log (picked.textContent);
 
  // ルーレット開始ボタン
    // ボタンを押すと文字が変わる
  $("#button").on("click", function(){
    if(status) {
      status = false;
      $(this).text("君だ！！");
      
      // ランダムで文字を表示
      // *setIntervalー一定時間に特定の処理を繰り返す
      roulette = setInterval(function(){
        random = Math.floor(Math.random() * picked.length);
        classname = picked[random];
        if (picked.length > 0){
          $result.text(members[classname].textContent);
        }else {
            $('#button').click(function(){
            location.reload();
             })
        }
        
      }, 10);
    } else {
      status = true;
      $(this).text("次の人は..");
 
      //  setInterval を使用して設定された繰り返し動作を止める
      clearInterval(roulette);
 
      // 結果を画面に表示
      result = picked[random];
      
      // 出た結果を決して一回の表示のみにする
      picked.splice(random, 1);

      console.log (picked.length);
      
      // 結果にclassを追加、色を付ける
      $result.text(members.text);
      $classname.find("li").eq(parseInt(result, 10)).addClass("hit");

      
    }
  });
});





