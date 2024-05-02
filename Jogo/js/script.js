var pontos = 0;

$(document).keydown(function(event) {
    var key = event.key;

    if (key == 'ArrowUp' || key == ' ') {
        $('.mario').addClass('jump');
        setTimeout(function() {
            $('.mario').removeClass('jump');
        }, 500);
    }
});

const loopGame = setInterval(() => {
    const pipePosition = $('.pipe').offset().left;
    const marioPosition = parseInt($('.mario').css('bottom').replace('px', '')); 

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        $('.pipe').css('animation', 'none'); 
        $('.pipe').css('left', `${pipePosition}px`);

        $('.mario').css('animation', 'none'); 
        $('.mario').css('bottom', `${marioPosition+25}px`);

        $('.mario').attr('src', './img/woke_times.webp');
        $('.mario').css('width', '130px');
        $('.mario').css('marginLeft', '10px');

        clearInterval(loopGame);
        clearInterval(pont);
    }
}, 10);

function tempo(){
    pontos++;
    console.log(pontos);
    $("#score").text(pontos);
}

const pont = setInterval(tempo, 100);

$(".button").on("click", function(){
    window.location.reload();
})
