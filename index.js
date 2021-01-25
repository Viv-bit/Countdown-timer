const endCountDown = new Date("Feburary 14, 2021 12:00:05").getTime();

var countDown = setInterval(function() {
    var now = new Date().getTime();

    var timeLeft = endCountDown - now;
}, 1000)