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
};

// FUNCTION TO CHECK TIME
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// FUNCTION TO SET AM OR PM -- INCOMPLETE
function setTimeArea() {
    var ampm = ["am", "pm"];
    var today = new Date();
    var h = today.getHours();
    if(h < 12) {
      document.getElementById("ampm").innerHTML = ampm[0];
    }
    else {
      document.getElementById("ampm").innerHTML = ampm[1];
    }
}

// FUNCTION TO SET nameSpace -- INCOMPLETE
function nameSet() {
    var name = [input(entername /* continue */)];
    if(name.length =< 0){
      name = "";
    }
    else if(name.length => 20)
      name = "";
    }
    else {
      name /* continue */
    }
}

// FUNCTION TO CHOOSE MORNING OR AFTERNOON OR EVENING
function greetingSet() {
    var greetArray = ["Good Morning", "Good Afternoon", "Good Evening"];
    if()
}
