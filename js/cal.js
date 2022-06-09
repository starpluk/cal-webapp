var text;


function myFunction() {
    
    var country,weightKG,widht,lenght,height,kg,dimention;

    country = document.getElementById("country").value;
    weightKG = document.getElementById("weight").value;
    widht = document.getElementById("width").value;
    lenght = document.getElementById("lenght").value;
    height = document.getElementById("height").value;

    kg =weightKG;
    dimention = (widht*lenght*height)/5000;

    if(dimention > kg){
        text = "Dimention YES!";
    }
    else if (kg > dimention){
        text = "KG Yes!";
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


