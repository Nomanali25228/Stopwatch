var isstop = true

var s = 0
var min = 0
var hr = 0

function start() {
    if (isstop == true) {
        isstop = false
        timer()

    }
}

function timer() {

    if (isstop == false) {
        s = parseInt(s)
        min = parseInt(min)
        hr = parseInt(hr)
        s++;

        if (s == 60) {
            s = 0;
            min++;
        }
        if (min == 60) {
            min = 0
            hr++;
        }
        
        if (s < 10) {
            s = "0" + s;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (s < 10) {
            hr = "0" + hr;
        }


        display.innerHTML = hr + " : " + min + " : " + s
        setTimeout("timer()", 1000)
    }
}

function stop() {
    isstop = true;
}

function reset() {
    isstop = true
    s = 0;
    min = 0;
    hr = 0;

    display.innerHTML = "00 : 00 : 00"
}