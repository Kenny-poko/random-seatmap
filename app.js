$(".outer-seat").on("click", function() {
    $(this).toggleClass('selected-outerColor');
});

$(".inner-seat").on("click", function() {
    $(this).toggleClass('selected-innerColor');
});




$(function(){
    "use strict";

    let members = document.getElementsByClassName('members');
    console.log (members);

    let resultLenrth = members.length - 1;

   


    var
      bingo = [],
      status = true,
      roulette,
      random,
      number,
      result,
      $members = $(".members"),
      $number = $("#number"),
      $result = $("#result");
    
      console.log (members[0].textContent);

    for(var i = 1; i <= 20; i++) {
      bingo.push(i);
    }
   
    $("#button").on("click", function(){
      if(status) {
        status = false;
        $(this).text("君だ！！");
   
        roulette = setInterval(function(){
          random = Math.floor(Math.random() * bingo.length);
          number = bingo[random];
          $result.text(members[number].textContent);
        }, 10);
      } else {
        status = true;
        $(this).text("次の人は..");
   
   
        clearInterval(roulette);
   
        result = bingo[random];
        bingo.splice(random, 1);
   
        $result.text(result);
        $number.find("li").eq(parseInt(result, 10) - 1).addClass("hit");
      }
    });
  });