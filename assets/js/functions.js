// FUNCTION FOR TIME
function localTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if(h > 12) {
        h = h-12;
    }
    else {
        h = h;
    }
    document.getElementById('timeAct').innerHTML =
    h + ":" + m;
    var t = setTimeout(localTime, 500);
};

// FUNCTION TO CHECK TIME
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

// FUNCTION TO SET AM OR PM
function setTimeArea() {
    var type = ["am", "pm"];
    var today = new Date();
    var h = today.getHours();
    if(h <= 11) {
        document.getElementById("ampm").innerHTML = type[0];
    }
    else {
        document.getElementById("ampm").innerHTML = type[1];
    }
}

// FUNCTION TO EXTEND VIEW -- WEATHER -- COMPLETE
var weatherSlide = function() {
  /*WEATHER OPEN */
  $("#wClick").click(function(){
    $(this).fadeToggle(200);
    $("#weatherOver").animate({
      left: "+=2200px"
    }, 600);
  });
  /* WEATHER CLOSE */
  $("#weatherExit").click(function(){
    $("#wClick").fadeToggle(200);
    $("#weatherOver").animate({
      left: "-=2200px"
    }, 600);
  });
};

// FUNCTION TO EXTEND VIEW -- NEWS -- COMPLETE
var newsSlide = function() {
  /* NEWS OEPN */
  $("#nClick").click(function(){
    $(this).fadeToggle(200);
    $("#newsOver").animate({
      left: "+=2200px"
    }, 500);
  });
  /* NEWS CLOSE */
  $("#newsExit").click(function(){
    $("#nClick").fadeToggle(200);
    $("#newsOver").animate({
      left: "-=2200px"
    }, 500);
  });
};

// FUNCTION TO EXTEND VIEW -- NOTES -- INCOMPLETE
var notesSlide = function() {
  /* NOTES OEPN */
  $("#noClick").click(function(){
    $(this).fadeToggle(200);
    $("#notesOver").animate({
      left: "+=2200px"
    }, 500);
  });
  /* NOTES CLOSE */
  $("#notesExit").click(function(){
    $("#noClick").fadeToggle(200);
    $("#notesOver").animate({
      left: "-=2200px"
    }, 500);
  });
};

// FUNCTION TO EXTEND VIEW -- SETTINGS -- INCOMPLETE
var settingsSlide = function() {
  /* SETTINGS OEPN */
  $("#sClick").click(function(){
    $(this).fadeToggle(200);
    $("#settingsOver").animate({
      left: "+=2200px"
    }, 500);
  });
  /* SETTINGS CLOSE */
  $("#settingsExit").click(function(){
    $("#sClick").fadeToggle(200);
    $("#settingsOver").animate({
      left: "-=2200px"
    }, 500);
  });
};

// CALLING ALL FUNCTIONS | NON-DOCUMENT READY FUNCTIONS
window.onload = function() {
    localTime();
    setTimeArea();
    weatherSlide();
    newsSlide();
    notesSlide();
    settingsSlide();
};
