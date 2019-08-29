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
    //   $members = $(".members"),
      $number = $("#number"),
      $result = $("#result");
    
      console.log (members[0].textContent);

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
          $result.text(members[number].textContent);
        }, 10);
      } else {
        status = true;
        $(this).text("次の人は..");
   console.log (members[number]);
   
        clearInterval(roulette);
   
        result = members[number].textContent;
        
        bingo.splice(random, 1);
   
        $result.text(members.text);
        $number.find("li").eq(parseInt(result, 10)).addClass("hit");
      }
    });
  });