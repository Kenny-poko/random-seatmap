$(function(){

  "use strict";
  let members = document.querySelectorAll('.members');
  console.log (members);
  let resultLength = members.length - 1;
 
  var
    bingo = [],
    status = true,
    roulette,
    random,
    number,
    result,
    // $members = $(".members"),
    $number = $("#number"),
    $result = $("#result");
  
    console.log (members.textContent);
  for(var i = 0; i <= 19; i++) {
    bingo.push(i);
  }
 
  $("#button").on("click", function(){
    if(status) {
      status = false;
      $(this).text("君だ！！");
 
      roulette = setInterval(function(){
        random = Math.floor(Math.random() * bingo.length);
        number = bingo[random];
        // console.log(members[number].textContent);
        // console.log(number);
        $result.text(members[number].textContent);
      }, 50);
    } else {
      status = true;
      $(this).text("次の人は..");
 
 
      clearInterval(roulette);
 
      result = bingo[random];
      
      bingo.splice(random, 1);
 
      $result.text(members.text);
      $number.find("li").eq(parseInt(result, 10)).addClass("hit");
    }
  });


// // リセットボタン
$('#reset-button').click(function(){
  location.reload();
})


});




