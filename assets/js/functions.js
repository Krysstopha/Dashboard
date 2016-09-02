// FUNCTION FOR # TIME
function localTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timeAct').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(localTime, 500);
}
// FUNCTION TO CHECK TIME
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// FUNCTION TO SET AM OR PM -- INCOMPLETE
function setTimeArea() {
    var ampm = "am";
    var h = today.getHours();
    if(h < 12) {
      ampm = "am";
      document.getElementById('AMPM').innerHTML =
      ampm;
    }
    else {
      ampm = "pm";
      document.getElementById('AMPM').innerHTML =
      ampm;
    }

}
