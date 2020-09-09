var token = "b5fa4029f5dfd6ed30ac83a5b4dea85af0b06791";

function choose() {

    var input = $("#input")
    var timer = null;

    input.on("keyup", function() {

        /* Debounce */
        if (timer) clearTimeout(timer);
        timer = setTimeout(function(){
            search(input.val());
        },250);
    });
}

function gelocalized() {

    var requestURL = "https://api.waqi.info/feed/here/?token=" + token;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var result = request.response;
        setCityData(result);
        setDetail(result);
    }

}

function search(city, output) {

    var requestURL = "https://api.waqi.info/feed/" + city + "/?token=" + token;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var result = request.response;
        setCityData(result);
        setDetail(result);
    }
}

function setCityData(result) {
    $("#aqi .mdl-card__title-text").html(result.data.city.name);
    $("#aqi_data").html(result.data.aqi);
    setAirQualityLevel(result.data.aqi);
    $("#time").html(result.data.time.s);
    $("#detail_link").attr('href', "https://aqicn.org/city/" + result.data.city.name);
}

function setLevel(data) {

    if (data <= 50) {
        return ["#4caf50", "Good"];
    } else if (data <= 100) {
        return ["#ffeb3b", "Moderate"];
    } else if (data <= 150) {
        return ["#ff9800", "Unhealthy for Sensitive Groups"];
    } else if (data <= 200) {
        return ["#f44336", "Unhealthy"];
    } else if (data <= 300) {
        return ["#9c27b0", "Very Unhealthy"];
    } else if (data > 300) {
        return ["#b71c1c", "Hazardous"];
    } else {
        return ["", ""];
    }
}

function setAirQualityLevel(aqi) {

        $("#aqi_data").css("background-color", setLevel(aqi)[0]);
        $("#level").html(setLevel(aqi)[1]);
}

function setDetail(result) {

    $("#pm25").css("background-color", setLevel(result.data.iaqi.pm25.v)[0]);
    $("#pm25").html(result.data.iaqi.pm25.v);
    $("#pm10").css("background-color", setLevel(result.data.iaqi.pm10.v)[0]);
    $("#pm10").html(result.data.iaqi.pm10.v);
    $("#o3").css("background-color", setLevel(result.data.iaqi.o3.v)[0]);
    $("#o3").html(Math.floor(result.data.iaqi.o3.v));
    $("#no2").css("background-color", setLevel(result.data.iaqi.no2.v)[0]);
    $("#no2").html(Math.floor(result.data.iaqi.no2.v));
    $("#so2").css("background-color", setLevel(result.data.iaqi.so2.v)[0]);
    $("#so2").html(Math.floor(result.data.iaqi.so2.v));
    $("#co").css("background-color", setLevel(result.data.iaqi.co.v)[0]);
    $("#co").html(Math.floor(result.data.iaqi.co.v));
    $("#temp").css("background-color", setLevel(result.data.iaqi.t.v)[0]);
    $("#temp").html(Math.floor(result.data.iaqi.t.v));
}

$(document).ready(function() {
    gelocalized();
    choose();
    $("#share").on("click", function() {
        window.open("https://telegram.me/share/url?url=https://xxyzz.github.io/air");
        window.open("https://twitter.com/intent/tweet?url=https://xxyzz.github.io&text=Check out your city's air quality.");
    })
});