var time = 0; // time in sec start from
var timeout = 0; // minimum time limit
var showtime = setInterval(function () {
    var sec = time % 60;
    var minut = Math.floor(time / 60);
    sec = (sec < 10) ? '0' + sec : sec;
    minut = (minut < 10) ? '0' + minut : minut;
    document.getElementById('clock').innerHTML = minut +  ':' + sec;
    --time;
    if (time < timeout){
        clearInterval(showtime);
    }
}, 1000);
