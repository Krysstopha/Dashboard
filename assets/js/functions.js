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
        $("#ampm").fadeToggle(7500);
    }
    else {
        document.getElementById("ampm").innerHTML = type[1];
        $("#ampm").fadeToggle(7500);
    }
}

// FUNCTION TO SET THE DATE -- INCOMPLETE
function setDate() {
    var today = new Date();
    var day = today.getDate();
    var month = String(parseInt(today.getMonth()) + 1);
    var year = today.getFullYear();
    console.log(year);
    console.log(month);
    result = document.getElementById("date").innerHTML =
    day + "/" + month + "/" + year;
};

// FUNCTION TO EXTEND VIEW -- WEATHER -- COMPLETE
var tabOn = false;
var weatherSlide = function() {
  /*WEATHER OPEN */
  $("#wClick").click(function(){
    if(tabOn){
      console.log("blocked");
    }
    else {
      tabOn = true;
      $(this).fadeToggle(200);
      $("#weatherOver").animate({
        left: "+=2200px"
      }, 600);
    // $('#settingsExit').trigger("click");
    // $('#notesExit').trigger("click");
  }
});
  /* WEATHER CLOSE */
  $("#weatherExit").click(function(){
    $("#wClick").fadeToggle(200);
    $("#weatherOver").animate({
      left: "-=2200px"
    }, 600);
    tabOn = false;
  });
};

// FUNCTION TO EXTEND VIEW -- NEWS -- COMPLETE
var newsSlide = function() {
  /*NEWS OPEN */
  $("#nClick").click(function(){
    if(tabOn){
      console.log("blocked");
    }
    else {
      tabOn = true;
      $(this).fadeToggle(200);
      $("#newsOver").animate({
        left: "+=2200px"
      }, 600);
    // $('#settingsExit').trigger("click");
    // $('#notesExit').trigger("click");
  }
});
  /* NEWS CLOSE */
  $("#newsExit").click(function(){
    $("#nClick").fadeToggle(200);
    $("#newsOver").animate({
      left: "-=2200px"
    }, 600);
    tabOn = false;
  });
};
// FUNCTION TO EXTEND VIEW -- NOTES -- INCOMPLETE
var notesSlide = function() {
  /*NOTES OPEN */
  $("#noClick").click(function(){
    if(tabOn){
      console.log("blocked");
    }
    else {
      tabOn = true;
      $(this).fadeToggle(200);
      $("#notesOver").animate({
        left: "+=2200px"
      }, 600);
    // $('#settingsExit').trigger("click");
    // $('#notesExit').trigger("click");
  }
});
  /* NOTES CLOSE */
  $("#notesExit").click(function(){
    $("#noClick").fadeToggle(200);
    $("#notesOver").animate({
      left: "-=2200px"
    }, 600);
    tabOn = false;
  });
};

// FUNCTION TO EXTEND VIEW -- SETTINGS -- INCOMPLETE
var settingsSlide = function() {
  /*NEWS OPEN */
  $("#sClick").click(function(){
    if(tabOn){
      console.log("blocked");
    }
    else {
      tabOn = true;
      $(this).fadeToggle(200);
      $("#settingsOver").animate({
        left: "+=2200px"
      }, 600);
    // $('#settingsExit').trigger("click");
    // $('#notesExit').trigger("click");
  }
});
  /* NEWS CLOSE */
  $("#settingsExit").click(function(){
    $("#sClick").fadeToggle(200);
    $("#settingsOver").animate({
      left: "-=2200px"
    }, 600);
    tabOn = false;
  });
};

// FUNCTION TO RANDOMMIZE BACKGROUND IMAGE -- INCOMPLETE
var a = Math.floor((Math.random() * 10) + 1);
var b = "assets/imgs/" + a + ".jpg";
console.log(b);
$(document).ready(function(){
  $("#body").attr("style", "background-image: url(\""+b+"\")");
});

// WEATHER API FUNCTION -- COMPLETE
var APPID = "ede815877b3dea2d8189dfa6b5e8d50f";
var unit = "metric";
var temp;
var loc;
var main;
var desc;

function updateById(id) {
  console.log(id)
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
      "id=" + id +
      "&APPID=" + APPID +
      "&units=" + unit;
    sendRequest(url);
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            $('#temp').html("Temperature: " + Math.floor(data.main.temp + 0.5) + "°C");
            $('#loc').html("Location: " + data.name);
            $('#desc').html("Description: " + data.weather[0].description);
        } else {
          console.log('err!');
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// NEWS API FUNCTION -- INCOMPLETE
var key = "c2c41026edfa4a35b92f84a618c26ede";
var first;
var second;
var third;
var fourth;

function updateByKey() {
  console.log(key);
    var url = "https://newsapi.org/v1/articles?" +
    "source=abc-news-au&sortBy=top&" + "apiKey=" + key;
  sendReq(url);
}

function sendReq(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);
            var story = {};
            $("#story0").html(data.articles[0].title);
            $("#story0").attr("href", data.articles[0].url);
            $("#story1").html(data.articles[1].title);
            $("#story1").attr("href", data.articles[1].url);
            $("#story2").html(data.articles[2].title);
            $("#story2").attr("href", data.articles[2].url);
            $("#story3").html(data.articles[3].title);
            $("#story3").attr("href", data.articles[3].url);
            $("#story4").html(data.articles[4].title);
            $("#story4").attr("href", data.articles[4].url);
            $("#story5").html(data.articles[5].title);
            $("#story5").attr("href", data.articles[5].url);
            $("#story6").html(data.articles[6].title);
            $("#story6").attr("href", data.articles[6].url);
            $("#story7").html(data.articles[7].title);
            $("#story7").attr("href", data.articles[7].url);
        } else {
          console.log('err!');
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// CALLING ALL FUNCTIONS | NON-DOCUMENT READY FUNCTIONS
window.onload = function() {
  localTime();
  setTimeArea();
  weatherSlide();
  newsSlide();
  notesSlide();
  settingsSlide();
  updateById(2147714);
  updateByKey();
  setDate();
};
