var i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout('this.timedCount()',500);
}

timedCount();