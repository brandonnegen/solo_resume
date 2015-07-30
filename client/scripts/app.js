$(document).ready(function(){
    $("body").append("<button id='clickyButton'>Click Me!</button>");

    $("body").on('click', '#clickyButton', function(){
        $(this).hide();
        $(".container").slideDown().then(function(){
            $(".container").removeClass('.container').addClass('.containerShow');
        });
    });
    $("body").on('click', function(){
       $(".container").slideUp();
       $("#clickyButton").show();
    });
});


