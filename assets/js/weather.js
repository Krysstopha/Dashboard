var APPID = "ede815877b3dea2d8189dfa6b5e8d50f";
var temp;
var loc;
var main;
var desc;
/*
function updateByZip(zip) {
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
      "zip=" + zip +
      "&APPID=" + APPID;
    sendRequest(url);
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.temp = data.main.temp;
            weather.loc = data.name;
            weather.main = data.weather.main;
            weather.desc = data.weather.description;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
*/

function update(weather) {
    temp.innerHTML = weather.wind;
    loc.innerHTML = weather.location;
    main.innerHTML = weather.main;
    desc.innerHTML = weather.desc;
}

window.onload = function() {
    temp = document.getElementById("temp");
    loc = document.getElementById("loc");
    main = document.getElementById("main");
    desc = document.getElementById("desc");

    var weather = {};
    weather.temp = 27;
    weather.loc = "Menai";
    weather.main = "Sunny";
    weather.desc = "Cloudy";

    update(weather);
}
