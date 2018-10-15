$(document).ready(function (){
  setTimeout(function () {
        $(".dark-box").css("background-color", "rgba(0,0,0,0.6)");
        $(".title h1").css("color", "white");

        setTimeout(function () {
          $(".title img").css("opacity", "0.5");

          setTimeout(function () {
            $(".title img").css("-webkit-transition", "opacity 0s");
            $(".title img").css("transition", "opacity 0s");

            $(".title img").effect( "bounce", {times:3}, 1500 );
          }, 1000);
        }, 1000);
    }, 500);

    $(".title img").hover(function(){
        $(this).css("opacity", "1");
        }, function(){
        $(this).css("opacity", "0.5");
    });

    $(".title img").click(function() {
      $('html, body').animate({
        scrollTop: $(".navigation-page").offset().top
    }, 1000);
    });

    $("#center").click(function() {
      // window.location.href = "html/meetTheTeam.html";
      //we should delete this function and just use a tags
    });
});
