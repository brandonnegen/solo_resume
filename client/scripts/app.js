$(document).ready(function(){
    $("body").append("<button id='clickyButton'>Click Me!</button>");

    $("body").on('click', '#clickyButton', function(){
        $(this).hide();
        $(".slidingEffect").slideDown().then(function(){
            $(".slidingEffect").removeClass('.slidingEffect').addClass('.slidingShow');
        });
    });
    $("body").on('click', function(){
       $(".slidingEffect").slideUp();
       $("#clickyButton").show();
    });
});


