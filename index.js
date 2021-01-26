var endCountDown = new Date("Feb 14, 2021 12:00:05").getTime();

var countDown = setInterval(function() {
    var now = new Date().getTime();

    var timeLeft = endCountDown - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days 
    document.getElementById("hours").innerHTML = hours
    document.getElementById("mins").innerHTML = mins
    document.getElementById("secs").innerHTML = secs

    if (timeLeft < 0) {
        clearInterval(countDown);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "LAUNCH DAY!!";
    }
}, 1000)