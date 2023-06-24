var inputCelcius = document.getElementById("celciusInput");
inputCelcius.addEventListener("click", function() {
    document.getElementById("convertCelcius").style.display = "inline-block";
    document.getElementById("convertReamur").style.display = "none";
    document.getElementById("convertFahrenheit").style.display = "none";
    document.getElementById("convertKelvin").style.display = "none";
    document.getElementById("convertRankine").style.display = "none";

    document.getElementById("celciusInput").placeholder = "Input Celcius";
    document.getElementById("reamurInput").placeholder = "RESULT HERE";
    document.getElementById("fahrenheitInput").placeholder = "RESULT HERE";
    document.getElementById("kelvinInput").placeholder = "RESULT HERE";
    document.getElementById("rankineInput").placeholder = "RESULT HERE";
})

var inputReamur = document.getElementById("reamurInput");
inputReamur.addEventListener("click", function(){
    document.getElementById("convertCelcius").style.display = "none";
    document.getElementById("convertReamur").style.display = "inline-block";
    document.getElementById("convertFahrenheit").style.display = "none";
    document.getElementById("convertKelvin").style.display = "none";
    document.getElementById("convertRankine").style.display = "none";

    document.getElementById("celciusInput").placeholder = "RESULT HERE";
    document.getElementById("reamurInput").placeholder = "Input Reamur";
    document.getElementById("fahrenheitInput").placeholder = "RESULT HERE";
    document.getElementById("kelvinInput").placeholder = "RESULT HERE";
    document.getElementById("rankineInput").placeholder = "RESULT HERE";
})

var inputFahrenheit = document.getElementById("fahrenheitInput");
inputFahrenheit.addEventListener("click", function(){
    document.getElementById("convertCelcius").style.display = "none";
    document.getElementById("convertReamur").style.display = "none";
    document.getElementById("convertFahrenheit").style.display = "inline-block";
    document.getElementById("convertKelvin").style.display = "none";
    document.getElementById("convertRankine").style.display = "none";

    document.getElementById("celciusInput").placeholder = "RESULT HERE";
    document.getElementById("reamurInput").placeholder = "RESULT HERE";
    document.getElementById("fahrenheitInput").placeholder = "Input Fahrenheit";
    document.getElementById("kelvinInput").placeholder = "RESULT HERE";
    document.getElementById("rankineInput").placeholder = "RESULT HERE";
})

var inputKelvin = document.getElementById("kelvinInput");
inputKelvin.addEventListener("click", function(){
    document.getElementById("convertCelcius").style.display = "none";
    document.getElementById("convertReamur").style.display = "none";
    document.getElementById("convertFahrenheit").style.display = "none";
    document.getElementById("convertKelvin").style.display = "inline-block";
    document.getElementById("convertRankine").style.display = "none";

    document.getElementById("celciusInput").placeholder = "RESULT HERE";
    document.getElementById("reamurInput").placeholder = "RESULT HERE";
    document.getElementById("fahrenheitInput").placeholder = "RESULT HERE";
    document.getElementById("kelvinInput").placeholder = "Input Kelvin";
    document.getElementById("rankineInput").placeholder = "RESULT HERE";
})

var inputRankine = document.getElementById("rankineInput");
inputRankine.addEventListener("click", function(){
    document.getElementById("convertCelcius").style.display = "none";
    document.getElementById("convertReamur").style.display = "none";
    document.getElementById("convertFahrenheit").style.display = "none";
    document.getElementById("convertKelvin").style.display = "none";
    document.getElementById("convertRankine").style.display = "inline-block";

    document.getElementById("celciusInput").placeholder = "RESULT HERE";
    document.getElementById("reamurInput").placeholder = "RESULT HERE";
    document.getElementById("fahrenheitInput").placeholder = "RESULT HERE";
    document.getElementById("kelvinInput").placeholder = "RESULT HERE";
    document.getElementById("rankineInput").placeholder = "Input Rankine";
})

function convertCelciusToRe_F_K_Ra() {
    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "") {
        document.getElementById("celciusInput").value = celciusElement;
    }
    // ============================================
    
    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "" || reamurElement !== "") {
        var CelciusToReamur = parseFloat(celciusElement) * 4 / 5;
        document.getElementById("reamurInput").value = CelciusToReamur;
    }
    
    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "" || fahrenheitElement !== "") {
        var CelciusToFahrenheit = (parseFloat(celciusElement) * 9 / 5) + 32;
        document.getElementById("fahrenheitInput").value = CelciusToFahrenheit;
    }
    
    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "" || kelvinElement !== "") {
        var CelciusToKelvin = parseFloat(celciusElement) + 273.15;
        document.getElementById("kelvinInput").value = CelciusToKelvin;
        document.getElementById("convertKelvin").style.display = "none";
    }
    
    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "" || rankineElement !== "") {
        var CelciusToRankine = (parseFloat(celciusElement) + 273.15) * 9 / 5;
        document.getElementById("rankineInput").value = CelciusToRankine;
        document.getElementById("convertRankine").style.display = "none";
    }
}

function convertReamurToC_F_K_Ra() {
    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "") {
        document.getElementById("reamurInput").value = reamurElement;
    }
    // ============================================

    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "" || celciusElement !== "") {
        var ReamurToCelcius = parseFloat(reamurElement) * 5 / 4;
        document.getElementById("celciusInput").value = ReamurToCelcius;
    }

    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "" || fahrenheitElement !== "") {
        var ReamurToFahrenheit = (parseFloat(reamurElement) * 9 / 4) + 32;
        document.getElementById("fahrenheitInput").value = ReamurToFahrenheit;
    }

    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "" || kelvinElement !== "") {
        var ReamurToKelvin = (parseFloat(reamurElement) * 5 / 4) + 273.15;
        document.getElementById("kelvinInput").value = ReamurToKelvin;
    }

    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "" || rankineElement !== "") {
        var ReamurToRankine = (parseFloat(reamurElement) * 9 / 4) + 491.67;
        document.getElementById("rankineInput").value = ReamurToRankine;
    }
}

function convertFahrenheitToC_Re_K_Ra() {
    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "") {
        document.getElementById("fahrenheitInput").value = fahrenheitElement;
    }
    // ============================================
    
    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "" || celciusElement !== "") {
        var FahrenheitToCelcius = (parseFloat(fahrenheitElement) - 32) * 5/9;
        document.getElementById("celciusInput").value = FahrenheitToCelcius;
    }

    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "" || reamurElement !== "") {
        var FahrenheitToReamur = (parseFloat(fahrenheitElement) - 32) * 4/9;
        document.getElementById("reamurInput").value = FahrenheitToReamur;
    }

    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "" || kelvinElement !== "") {
        var FahrenheitToKelvin = (parseFloat(fahrenheitElement) + 459.67) * 5/9;
        document.getElementById("kelvinInput").value = FahrenheitToKelvin;
    }

    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "" || rankineElement !== "") {
        var FahrenheitToRankine = parseFloat(fahrenheitElement) + 459.67;
        document.getElementById("rankineInput").value = FahrenheitToRankine;
    }
}

function convertKelvinToC_Re_F_Ra() {
    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "") {
        document.getElementById("kelvinInput").value = kelvinElement;
    }
    // ============================================
    
    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "" || celciusElement !== "") {
        var KelvinToCelcius = (parseFloat(kelvinElement) - 273.15);
        document.getElementById("celciusInput").value = KelvinToCelcius;
    }
    
    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "" || reamurElement !== "") {
        var KelvinToReamur = (parseFloat(kelvinElement) - 273.15) * 4/5;
        document.getElementById("reamurInput").value = KelvinToReamur;
    }
    
    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "" || fahrenheitElement !== "") {
        var KelvinToFahrenheit = (parseFloat(kelvinElement) * 9/5) - 459.67;
        document.getElementById("fahrenheitInput").value = KelvinToFahrenheit;
    }

    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "" || rankineElement !== "") {
        var KelvinToRankine = parseFloat(kelvinElement) * 9/5;
        document.getElementById("rankineInput").value = KelvinToRankine;
    }
}

function convertRankineToC_Re_F_K() {
    var rankineElement = document.getElementById("rankineInput").value;
    if (rankineElement === "") {
        document.getElementById("rankineInput").value = rankineElement;
    }
    // ============================================
    
    var celciusElement = document.getElementById("celciusInput").value;
    if (celciusElement === "" || celciusElement !== "") {
        var RankineToCelcius = (parseFloat(rankineElement) - 491.67) * 5/9;
        document.getElementById("celciusInput").value = RankineToCelcius;
    }
    
    var reamurElement = document.getElementById("reamurInput").value;
    if (reamurElement === "" || reamurElement !== "") {
        var RankineToReamur = (parseFloat(rankineElement) - 491.67) * 4/9;
        document.getElementById("reamurInput").value = RankineToReamur;
    }
    
    var fahrenheitElement = document.getElementById("fahrenheitInput").value;
    if (fahrenheitElement === "" || fahrenheitElement !== "") {
        var RankineToFahrenheit = parseFloat(rankineElement) - 459.67;
        document.getElementById("fahrenheitInput").value = RankineToFahrenheit;
    }
    
    var kelvinElement = document.getElementById("kelvinInput").value;
    if (kelvinElement === "" || kelvinElement !== "") {
        var RankineToKelvin = parseFloat(rankineElement) * 5/9;
        document.getElementById("kelvinInput").value = RankineToKelvin;
    }
    
}

function reset() {
    alert("Do you want to reset all?");

    document.getElementById("celciusInput").value = "";
    document.getElementById("reamurInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("kelvinInput").value = "";
    document.getElementById("rankineInput").value = "";

    document.getElementById("convertCelcius").style.display = "inline-block";
    document.getElementById("convertReamur").style.display = "inline-block";
    document.getElementById("convertFahrenheit").style.display = "inline-block";
    document.getElementById("convertKelvin").style.display = "inline-block";
    document.getElementById("convertRankine").style.display = "inline-block";

    document.getElementById("celciusInput").placeholder = "Click Here...";
    document.getElementById("reamurInput").placeholder = "Click Here...";
    document.getElementById("fahrenheitInput").placeholder = "Click Here...";
    document.getElementById("kelvinInput").placeholder = "Click Here...";
    document.getElementById("rankineInput").placeholder = "Click Here...";
}