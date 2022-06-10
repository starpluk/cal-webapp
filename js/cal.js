var text;


function myFunction() {
    
    var country,weightKG,widht,lenght,height,kg,dimention;
    var usaRate = 1500;
    var valurRate;

    country = document.getElementById("country").value;
    weightKG = document.getElementById("weight").value;
    widht = document.getElementById("width").value;
    lenght = document.getElementById("lenght").value;
    height = document.getElementById("height").value;

    kg =weightKG;
    dimention = (widht*lenght*height)/5000;

    if(dimention > kg){
        valurRate = dimention*1500;
        text = addCommas(valurRate);
    }
    else if (kg > dimention){
        valurRate = kg*1500;
        text = addCommas(valurRate);
    }
    else{
        text = "";
    }
    sessionStorage.setItem("resultText",text);
    window.location.replace('result.html');

}

function ReplaceIndex() {
    window.location.replace('index.html');
    sessionStorage.removeItem("resultText");
}

function addCommas(nStr){
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
     x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

function usaRate(rate){

}


