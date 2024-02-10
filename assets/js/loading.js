var elem = document.getElementById("myBar");
var canvasBox = document.getElementById("canvas");
var loading = document.getElementById("time-counter");
var width = 95;
const mili = 31536000;
const countDownDate = new Date("Feb 10, 2024 00:00").getTime();

var countDownFunction = setInterval(function() {
    var now = new Date().getTime(); // Get todays date and time

    var distance = countDownDate - now; // Find the distance between now an the count down date
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // document.getElementById("timeText").innerText = days + " : " + hours + " : " + minutes + " : " + seconds;
  
    // If the count down is over, write some text 
    if (distance < 0 || width >= 100) {
        clearInterval(countDownFunction);
        loading.style.display = "none";
        canvasBox.style.display = "block";
        requestAnimationFrame(render);
    } else {
        width = Math.floor((mili - distance) / mili * 100);
        // width++;
        elem.style.width = width + '%';
    }
}, 1000);