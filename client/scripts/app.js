$(document).ready(function(){
    $("body").prepend("<button id='clickyButton'>Click Me!</button>");

    $("body").on('click', '#clickyButton', function(){
        $(".container").slideDown().then(function(){
            $(".container").removeClass('.container').addClass('.containerShow');
        });
    });
    $("body").on('click', function(){
       $(".container").slideUp();
    });
});


