var country, weightKG, widht, lenght, height, kg, dimention, oversize, dimentionCeil;
var valurRate,
  text,
  exim,
  fedexEX = 0,
  tntEX = 0,
  upsEX = 0,
  fedexIM = 0,
  tntIM = 0,
  upsIM = 0;
var priceTotal="";
var shipping = "";
var KgTotal = "";
var country_1 = "";
var status_1 = "";
var priceLIFF = "",
  nameLIFF = "",
  telLIFF = "",
  emailLIFF = "",
  typeproductLIFF = "",
  agentLIFF = "",
  shippingLIFF = "",
  countryLIFF = "",
  weightLIFF = "";
var agentShip = "";
var priceTotalFedex, priceTotalTNT, priceTotalUPS;
var priceTempFedex, priceTempTNT, priceTempUPS;
var textOversize = "";
var booOversize = "false";
var origin="Thailand",destination="Thailand";
var dimentionArray = [];
var x=0,y=0,z=0;
var girth;
var dimWeight = "";

function testArray() {
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;
  
  dimentionArray[0] = widht;
  dimentionArray[1] = lenght;
  dimentionArray[2] = height;
  
  dimentionArray.sort((a, b) => b - a);
  dimentionArray = dimentionArray.map(Number);
  
  x = dimentionArray[0];
  y = dimentionArray[1];
  z = dimentionArray[2];
  girth = (y+z)*2;
  
  console.log(dimentionArray)
  
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(x+girth);

}

function oversizeFedEx(OSweight) {
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;
  
  dimentionArray[0] = widht;
  dimentionArray[1] = lenght;
  dimentionArray[2] = height;
  
  dimentionArray.sort((a, b) => b - a);
  dimentionArray = dimentionArray.map(Number);
  
  x = dimentionArray[0];
  y = dimentionArray[1];
  z = dimentionArray[2];
  girth = (y+z)*2;
  
  console.log(dimentionArray)
  
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(x+girth);
if(x < 243)
{
  if(OSweight > 30){
    if(x <= 240 && (y <= 150) && (z <= 120)){
      console.log("loop_1");
       {
         if((x+girth) < 330)
        {
          console.log("loop_2");
          textOversize ="";
        }
         else {
          console.log("loop_3");
          textOversize ="*The product is oversize, Please contact us.";
        }
       }
      }
      else {textOversize ="*The product is oversize, Please contact us.";}
  }
  else if (OSweight <= 30) {
    if(x <= 120 && (y <= 70) && (z <= 50))
       {
  
         if((x+girth) < 330)
        {
          console.log("loop_2");
          textOversize ="";
        }
         else 
        {
          console.log("loop_3");
          textOversize ="*The product is oversize, Please contact us.";
        }
       }
    else {textOversize ="*The product is oversize, Please contact us.";}
  }     
}
else {
  textOversize ="*The product is oversize, Please contact us.";
}
}
function oversizeUPS(OSweight) {
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;
  
  dimentionArray[0] = widht;
  dimentionArray[1] = lenght;
  dimentionArray[2] = height;
  
  dimentionArray.sort((a, b) => b - a);
  dimentionArray = dimentionArray.map(Number);
  
  x = dimentionArray[0];
  y = dimentionArray[1];
  z = dimentionArray[2];
  girth = (y+z)*2;
  
  console.log(dimentionArray)
  
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(x+girth);
  if(OSweight > 40){
    if(x <= 274){
      console.log("loop_1");
       {
         if((x+girth) < 300)
        {
          console.log("loop_2");
          textOversizeUPS ="";
        }
         else {
          console.log("loop_3");
          textOversizeUPS ="*The product is oversize, Please contact us.";
        }
       }
      }
      else {textOversizeUPS ="*The product is oversize, Please contact us.";}
  }
  else if (OSweight <= 40) {
    if(x <= 274)
       {
  
         if((x+girth) < 300)
        {
          console.log("loop_2");
          textOversizeUPS ="";
        }
         else 
        {
          console.log("loop_3");
          textOversizeUPS ="*The product is oversize, Please contact us.";
        }
       }
    else {textOversizeUPS ="*The product is oversize, Please contact us.";}
  }     

else {
  textOversizeUPS ="*The product is oversize, Please contact us.";
}
}


function myFunction() {
  var status;

  country = document.getElementById("country").value;
  weightKG = document.getElementById("weight").value;
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;

  country_1 = country;
  kg = weightKG;
  dimention = (widht * lenght * height) / 5000;
  dimentionCeil = Math.ceil(dimention/0.5)*0.5;
  
  
  if (dimention > kg) {
    KgTotal = Math.ceil(kg/0.5)*0.5;
    dimWeight = dimentionCeil;
    // KgTotal = dimention;
  } else if (kg > dimention) {
    KgTotal = Math.ceil(kg/0.5)*0.5;
    dimWeight = "-";
    // valurRate = KgTotal * 1500;
    // text = valurRate;
    status = "น้ำหนัก Kg.";
  } else {
    text = "";
  }

  oversizeFedEx(KgTotal);
  oversizeUPS(KgTotal);
  

  switch (country) {
    case "Macau":
      fedexEX = exFedexZoneA(KgTotal);
      tntEX = exTNTZone3(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneA(KgTotal);
      tntIM = imTNTZone3(KgTotal);
      break;
    case "New Zealand":
      fedexEX = exFedexZoneB(KgTotal);
      tntEX = exTNTZone5(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneB(KgTotal);
      tntIM = imTNTZone5(KgTotal);
      break;
    case "Brunei":
      fedexEX = exFedexZoneC(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneC(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Cambodia":
      fedexEX = exFedexZoneC(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneC(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Laos":
      fedexEX = exFedexZoneC(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneC(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Mongolia":
      fedexEX = exFedexZoneC(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneC(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Afghanistan ":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Bahrain ":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Bangladesh":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Bhutan":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Egypt":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Iraq":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Jordan":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Kuwait":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Lebanon":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Maldives":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Nepal":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Oman":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Pakistan":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Qatar":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Saudi Arabia":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Sri Lanka":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "United Arab Emirates":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Yemen":
      fedexEX = exFedexZoneD(KgTotal);
      tntEX = exTNTZone9(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneD(KgTotal);
      tntIM = imTNTZone9(KgTotal);
      break;
    case "Canada":
      fedexEX = exFedexZoneE(KgTotal);
      tntEX = exTNTZone6(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneE(KgTotal);
      tntIM = imTNTZone6(KgTotal);
      break;
    case "Mexico":
      fedexEX = exFedexZoneE(KgTotal);
      tntEX = exTNTZone6(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneE(KgTotal);
      tntIM = imTNTZone6(KgTotal);
      break;
    case "Usa":
      fedexEX = exFedexZoneE(KgTotal);
      tntEX = exTNTZone6(KgTotal);
      upsEX = exUPSZone4(KgTotal);
      fedexIM = imFedexZoneE(KgTotal);
      tntIM = imTNTZone6(KgTotal);
      break;
    case "Belgium":
      fedexEX = exFedexZoneF(KgTotal);
      tntEX = exTNTZone7(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneF(KgTotal);
      tntIM = imTNTZone7(KgTotal);
      break;
    case "France":
      fedexEX = exFedexZoneF(KgTotal);
      tntEX = exTNTZone7(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneF(KgTotal);
      tntIM = imTNTZone7(KgTotal);
      break;
    case "Germany":
      fedexEX = exFedexZoneF(KgTotal);
      tntEX = exTNTZone7(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneF(KgTotal);
      tntIM = imTNTZone7(KgTotal);
      break;
    case "Italy":
      fedexEX = exFedexZoneF(KgTotal);
      tntEX = exTNTZone7(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneF(KgTotal);
      tntIM = imTNTZone7(KgTotal);
      break;
    case "Netherlands":
      fedexEX = exFedexZoneF(KgTotal);
      tntEX = exTNTZone7(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneF(KgTotal);
      tntIM = imTNTZone7(KgTotal);
      break;
    case "Spain":
      fedexEX = exFedexZoneF(KgTotal);
      tntEX = exTNTZone7(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneF(KgTotal);
      tntIM = imTNTZone7(KgTotal);
      break;
    case "United Kingdom":
      fedexEX = exFedexZoneF(KgTotal);
      tntEX = exTNTZone7(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneF(KgTotal);
      tntIM = imTNTZone7(KgTotal);
      break;
    case "Albania":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Andorra":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Armenia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Austria":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Azerbaijan":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Belarus":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Bosnia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Bulgaria":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Croatia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Cyprus":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Czech Republic":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Denmark":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Estonia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Faeroe Islands":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Finland":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Georgia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Gibraltar":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Greece":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Greenland":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Hungary":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Iceland":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Ireland":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Israel":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Kazakhstan":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Kyrgyzstan":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Latvia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Liechtenstein":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Lithuania":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Luxembourg":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Macedonia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Malta":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Moldova":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Monaco":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Montenegro":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Norway":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Poland":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Portugal":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Romania":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Russian":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Serbia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Slovakia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Slovenia":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Sweden":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Switzerland":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Turkey":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Ukraine":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Uzbekistan":
      fedexEX = exFedexZoneG(KgTotal);
      tntEX = exTNTZone8(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneG(KgTotal);
      tntIM = imTNTZone8(KgTotal);
      break;
    case "Algeria":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "American Samoa":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Angola":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Anguilla":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Antigua&Barbuda":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Argentina":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Aruba":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Bahama":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Barbados":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Belize":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Bermuda":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Bolivia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Bonaire":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Brazil":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Burkina Faso":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Cameroon":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Cape Verde":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Cayman Islands":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Chad":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Chile":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Colombia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Congo":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Cook Islands":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Costa Rica":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Cote D'ivoire":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Cuba":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Congo":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Djibouti":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Dominica":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "East Timor":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Ecuador":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Ei Salvador":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Eritrea":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Fiji":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Gabon":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Gambia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Ghana":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Grenada":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Guadeloupe":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Guam":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Guatemala":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Guinea":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Guyana":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Haiti":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Honduras":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Jamaica":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Kenya":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Lesotho":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Liberia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Madagascar":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Malawi":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Mali":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Marshall Islands":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Martinique":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Mauritania":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Mauritius":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Micronesia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Monserrat":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Morocco":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Mozambique":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Namibia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Nicaragua":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Niger":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Nigeria":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Northern Mariana Islands":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Palau":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Panama":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Papua New Guinea":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Paraguay":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Peru":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Reunion":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Rwanda":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Saint Lucia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Samoa":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Senegal":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Seychelles":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Suriname":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Swaziland":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Tanzania":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Togo":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Tonga":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Tunisia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Uganda":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Uruguay":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Vanuatu":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Venezuela":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Wallis&Futuna":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Zambia":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Zimbabwe":
      fedexEX = exFedexZoneH(KgTotal);
      tntEX = exTNTZone10(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneH(KgTotal);
      tntIM = imTNTZone10(KgTotal);
      break;
    case "Vietnam":
      fedexEX = exFedexZoneN(KgTotal);
      tntEX = exTNTZone3(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneN(KgTotal);
      tntIM = imTNTZone3(KgTotal);
      break;
    case "India":
      fedexEX = exFedexZoneO(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneO(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Japan":
      fedexEX = exFedexZoneP(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneP(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Malaysia":
      fedexEX = exFedexZoneQ(KgTotal);
      tntEX = exTNTZone1(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneQ(KgTotal);
      tntIM = imTNTZone1(KgTotal);
      break;
    case "Philliphines":
      fedexEX = exFedexZoneS(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneS(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Indonesia":
      fedexEX = exFedexZoneT(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneT(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Australia":
      fedexEX = exFedexZoneU(KgTotal);
      tntEX = exTNTZone5(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneU(KgTotal);
      tntIM = imTNTZone5(KgTotal);
      break;
    case "Hongkong":
      fedexEX = exFedexZoneV(KgTotal);
      tntEX = exTNTZone2(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneV(KgTotal);
      tntIM = imTNTZone2(KgTotal);
      break;
    case "China":
      fedexEX = exFedexZoneW(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneW(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Taiwan":
      fedexEX = exFedexZoneX(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneX(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;
    case "Singapore":
      fedexEX = exFedexZoneY(KgTotal);
      tntEX = exTNTZone1(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneY(KgTotal);
      tntIM = imTNTZone1(KgTotal);
      break;
    case "South Korea":
      fedexEX = exFedexZoneZ(KgTotal);
      tntEX = exTNTZone4(KgTotal);
      upsEX = exUPSZone2(KgTotal);
      fedexIM = imFedexZoneZ(KgTotal);
      tntIM = imTNTZone4(KgTotal);
      break;

    default:
      text = 0;
  }

  //Condition Ex/Im
  if (document.getElementById("export").checked == true) {
    shipping = "Export";
    priceTempFedex = fedexEX;
    priceTempTNT = tntEX;
    priceTempUPS = upsEX;
  } else if (document.getElementById("import").checked == true) {
    shipping = "Import";
    priceTempFedex = fedexIM;
    priceTempTNT = tntIM;
    priceTempUPS = upsIM;
  }

  priceTotalFedex = addCommas(priceTempFedex.toFixed(0));
  priceTotalTNT = addCommas(priceTempTNT.toFixed(0));
  priceTotalUPS = addCommas(priceTempUPS.toFixed(0));

  sessionStorage.setItem("weightKG", kg);
  sessionStorage.setItem("resultText", text);
  sessionStorage.setItem("countryResult", country);
  sessionStorage.setItem("shippingResult", shipping);
  sessionStorage.setItem("Status", status);
  sessionStorage.setItem("priceTotalFedex", priceTotalFedex);
  sessionStorage.setItem("priceTotalTNT", priceTotalTNT);
  sessionStorage.setItem("priceTotalUPS", priceTotalUPS);
  sessionStorage.setItem("textOversize",textOversize);
  sessionStorage.setItem("textOversizeUPS",textOversizeUPS);
  sessionStorage.setItem("booOversize",booOversize);
  sessionStorage.setItem("dimWeight",dimWeight);

  if (document.getElementById("export").checked == true) {
    if(country=="Australia"||country=="Austria"||country=="Belgium"||country=="Denmark"||country=="Finland"
    ||country=="France"||country=="Germany"||country=="Iceland"||country=="Italy"||country=="Japan"||country=="Netherlands"
    ||country=="New Zealand"||country=="Norway"||country=="Spain"||country=="Sweden"||country=="Switzerland"
    ||country=="United Kingdom"||country=="Usa"){
      window.location.replace("resultEXportUPS.html");
      
    }
    else{window.location.replace("resultEXPORT.html");}
    
  } else if (document.getElementById("import").checked == true) {
    window.location.replace("resultIMPORT.html");
  }

  //   sendMsg();
}

function ReplaceIndex() {
  window.location.replace("index.html");
  sessionStorage.removeItem("resultText");
}

function ReplaceForm() {
  if (document.getElementById("rbtnFedex").checked == true) {
    agentShip = "FedEx";
    priceTotal = sessionStorage.getItem("priceTotalFedex");
    window.location.replace("form.html");
  } else if (document.getElementById("rbtnTnt").checked == true) {
    agentShip = "TNT";
    priceTotal = sessionStorage.getItem("priceTotalTNT");
    window.location.replace("form.html");
  } else if (document.getElementById("rbtnUps").checked == true) {
    agentShip = "UPS";
    priceTotal = sessionStorage.getItem("priceTotalUPS");
    window.location.replace("form.html");
    console.log(priceTotal);
  }

  
  sessionStorage.setItem("priceTotal", priceTotal);
  sessionStorage.setItem("agentShip", agentShip);
  console.log(priceTotal);
  
}

function ReplaceResult() {

  country_1 = sessionStorage.getItem("countryResult");

    if(country_1=="Australia"||country_1=="Austria"||country_1=="Belgium"||country_1=="Denmark"||country_1=="Finland"
    ||country_1=="France"||country_1=="Germany"||country_1=="Iceland"||country_1=="Italy"||country_1=="Japan"||country_1=="Netherlands"
    ||country_1=="New Zealand"||country_1=="Norway"||country_1=="Spain"||country_1=="Sweden"||country_1=="Switzerland"
    ||country_1=="United Kingdom"||country_1=="Usa")
    {
      window.location.replace("resultEXportUPS.html");
    }
    else{window.location.replace("resultEXPORT.html");
   }
}

function addCommas(nStr) {
  nStr += "";
  x = nStr.split(".");
  x1 = x[0];
  x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

function submitForm() {
  nameLIFF = document.getElementById("input__field_1").value;
  telLIFF = document.getElementById("input__field_2").value;
  emailLIFF = document.getElementById("input__field_3").value;
  typeproductLIFF = document.getElementById("input__field_4").value;

  sessionStorage.setItem("nameLIFF", nameLIFF);
  sessionStorage.setItem("telLIFF", telLIFF);
  sessionStorage.setItem("emailLIFF", emailLIFF);
  sessionStorage.setItem("typeproductLIFF", typeproductLIFF);
  sessionStorage.setItem("priceTotalFedex", priceTotalFedex);
  sessionStorage.setItem("priceLIFF", priceLIFF);

  window.location.replace("confirm.html");
}

///////////////////////////////////
///////// LIFF Function ///////////
///////////////////////////////////
function createUniversalLink() {
  const link1 = liff.permanentLink.createUrl();
  document.getElementById("universalLink1").append(link1);

  liff.permanentLink.setExtraQueryParam("param=9");
  const link2 = liff.permanentLink.createUrl();
  document.getElementById("universalLink2").append(link2);
}

async function shareMsg() {
  await liff.shareTargetPicker([
    {
      type: "text",
      text: "This message was sent by ShareTargetPicker",
    },
  ]);
}

function logOut() {
  liff.logout();
  window.location.reload();
}

function closed() {
  liff.closeWindow();
}

async function scanCode() {
  const result = await liff.scanCode();
  document.getElementById("scanCode").append(result.value);
}

function openWindow() {
  liff.openWindow({
    url: "https://line.me",
    external: true,
  });
}

async function getFriendship() {
  const friend = await liff.getFriendship();
  document.getElementById("friendship").append(friend.friendFlag);
  if (!friend.friendFlag) {
    if (confirm("คุณยังไม่ได้เพิ่ม Bot เป็นเพื่อน จะเพิ่มเลยไหม?")) {
      window.location = "https://line.me/R/ti/p/@YOUR-BOT-ID";
    }
  }
}

function getContext() {
  if (liff.getContext() != null) {
    document.getElementById("type").append(liff.getContext().type);
    document.getElementById("viewType").append(liff.getContext().viewType);
    document.getElementById("utouId").append(liff.getContext().utouId);
    document.getElementById("roomId").append(liff.getContext().roomId);
    document.getElementById("groupId").append(liff.getContext().groupId);
  }
}

async function getUserProfile() {
  const profile = await liff.getProfile();
  document.getElementById("pictureUrl").src = profile.pictureUrl;
  document.getElementById("userId").append(profile.userId);
  document.getElementById("statusMessage").append(profile.statusMessage);
  document.getElementById("displayName").append(profile.displayName);
  document
    .getElementById("decodedIDToken")
    .append(liff.getDecodedIDToken().email);
}

function getEnvironment() {
  document.getElementById("os").append(liff.getOS());
  document.getElementById("language").append(liff.getLanguage());
  document.getElementById("version").append(liff.getVersion());
  document.getElementById("accessToken").append(liff.getAccessToken());
  document.getElementById("isInClient").append(liff.isInClient());
  // if (liff.isInClient()) {
  //   document.getElementById("btnLogOut").style.display = "none"
  // } else {
  //   document.getElementById("btnMsg").style.display = "none"
  //   document.getElementById("btnScanCode").style.display = "none"
  //   document.getElementById("btnClose").style.display = "none"
  // }
}

/////////////////////////////////
//////// SEND MESSAGE ///////////
/////////////////////////////////

async function sendMsg() {

  shippingLIFF = sessionStorage.getItem("shippingResult")
  agentLIFF = sessionStorage.getItem("agentShip")
  countryLIFF = sessionStorage.getItem("countryResult")
  weightLIFF = sessionStorage.getItem("weightKG")
  priceLIFF = sessionStorage.getItem("priceTotal", priceTotal);
  nameLIFF = document.getElementById("input__field_1").value;
  telLIFF = document.getElementById("input__field_2").value;
  emailLIFF = document.getElementById("input__field_3").value;
  typeproductLIFF = document.getElementById("input__field_4").value;
  booOversize = sessionStorage.getItem("booOversize")

  if(shippingLIFF == "Export"){
    destination = countryLIFF;
  }
  else {
    origin = countryLIFF;
  }

  

    if (liff.getContext().type !== "none") {
      await liff.sendMessages([
        {
          "type": "text",
          "text": "Service Type : "+shippingLIFF+
          "\nAgent : "+agentLIFF+
          "\n\nOrigin Country : "+origin+
          "\nDestination Country : "+destination+
          "\n\nWeight : "+weightLIFF+" Kg.\n\nProduct Type : "+typeproductLIFF+
          "\n\nEST.Price : "+priceLIFF+" บาท\n\nContact Name : "+nameLIFF+
          "\nPhone Number : "+telLIFF+
          "\nE-mail : "+emailLIFF+"\n\nTerm & Condition :\n\n📌 Rate Include\n- Vat 7%\n- Insurance 2% of Product Value + Freight Charge\n📌 Rate Exclude\n- Local Delivery from Origin\n- Remote Area (If Any)\n- Import Duty & Tax at Destination (If Any)\n- In case of being inspected, the product may be bounced or destroyed, Depending on the consideration of the destination customs department. (If Any)\n\n📌📦The higher weight between Actual Weight [kg] and Dimension Weight [Width (cm) x Length (cm) x Height (cm) / 5,000] will be used to calculate shipping rate. "
        },
      ]);
      closed();
    }
}



////////////////////////////////////////////
/////////////////// UPS ////////////////////
////////////////////////////////////////////

function exUPSZone1(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1590;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1920;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2290;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2620;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2990;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3180;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3410;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3600;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3820;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4010;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 4210;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 4370;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4560;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4720;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4920;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 5060;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 5240;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5380;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 5560;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 5700;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 6770;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 6890;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 7040;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 7160;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 7320;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 7420;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 7570;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 7670;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 7820;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 7920;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 8010;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 8050;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 8130;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 8170;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 8250;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 8280;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 8340;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 8370;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 8440;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 8470;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 424;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 424;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 424;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 423;
  } else if (kg > 100) {
    //
    price = kg * 424;
  } else {
    price = kg * 0;
  }
  return price;
}
function exUPSZone2(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1740;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2040;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2520;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2820;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3300;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3530;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3930;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4150;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4550;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4780;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 6050;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 6230;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 6600;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 6780;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 7150;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 7340;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 7710;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 7900;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 8270;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 8460;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 8770;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 8910;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 9230;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 9360;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 9680;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 9740;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 9980;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 10050;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 10290;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 10350;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 10570;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 10600;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 10820;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 10860;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 11070;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 11110;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 11330;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 11360;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 11570;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 11580;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 579;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 579;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 579;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 579;
  } else if (kg > 100) {
    //
    price = kg * 579;
  } else {
    price = kg * 0;
  }
  return price;
}
function exUPSZone3(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 2000;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2350;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2880;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 3230;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3760;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 4020;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 4460;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4720;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 5160;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 5420;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 7790;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 8040;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 8470;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 8720;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 9150;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 9410;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 9850;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 10100;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 10540;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 10790;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 11160;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 11340;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 11710;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 11890;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 12250;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 12340;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 12610;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 12690;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 12950;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 13040;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 13270;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 13310;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 13550;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 13590;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 13820;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 13880;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 14100;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 14150;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 14380;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 14380;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 720;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 719;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 719;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 720;
  } else if (kg > 100) {
    //
    price = kg * 720;
  } else {
    price = kg * 0;
  }
  return price;
}
function exUPSZone4(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1560;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1910;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2350;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2700;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3140;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3410;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3780;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4050;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4420;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4690;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 4950;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 5150;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 5450;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 5650;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 5940;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 6150;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 6440;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 6640;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 6940;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 7140;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 7460;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 7620;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 7880;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 8050;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 8310;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 8430;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 8650;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 8770;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 8980;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 9100;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 9250;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 9300;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 9440;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 9490;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 9630;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 9720;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 9850;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 9880;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 10020;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 10210;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 511;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 511;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 511;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 511;
  } else if (kg > 100) {
    //
    price = kg * 511;
  } else {
    price = kg * 0;
  }
  return price;
}
function exUPSZone5(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1760;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2090;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2500;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2830;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3240;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3520;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3900;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4170;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4550;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4820;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 5180;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 5440;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 5800;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 6060;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 6410;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 6650;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 6990;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 7220;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 7560;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 7800;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 7930;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 7970;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 8110;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 8150;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 8280;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 8320;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 8460;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 8500;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 8630;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 8670;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 8810;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 8850;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 8980;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 9020;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 9160;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 9170;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 9270;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 9270;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 9380;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 9390;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 468;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 468;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 468;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 468;
  } else if (kg > 100) {
    //
    price = kg * 468;
  } else {
    price = kg * 0;
  }
  return price;
}
function exUPSZone6(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1950;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2350;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2840;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 3240;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3730;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 4070;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 4490;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4820;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 5250;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 5580;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 6010;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 6340;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 6770;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 7100;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 7530;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 7750;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 8070;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 8300;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 8620;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 8840;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 9090;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 9250;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 9500;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 9660;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 9910;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 10070;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 10320;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 10470;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 10730;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 10880;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 11140;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 11290;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 11550;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 11700;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 11950;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 12110;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 12360;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 12520;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 12770;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 12930;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 581;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 581;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 571;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 546;
  } else if (kg > 100) {
    //
    price = kg * 543;
  } else {
    price = kg * 0;
  }
  return price;
}

////////////////////////////////////////////
/////////////////// TNT ////////////////////
////////////////////////////////////////////

function imTNTZone1(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1360;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1540;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1810;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2020;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2300;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2440;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2650;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2780;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2990;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3130;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3280;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3350;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3490;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3570;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3710;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3790;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3930;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 4010;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4150;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4220;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4380;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4400;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4480;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 4500;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 4590;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 4600;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 4690;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 4710;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 4790;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 4810;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 4890;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 4910;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 5000;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 5010;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 5100;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 5120;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 5200;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 5220;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 5310;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 5320;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 214;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 193;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 191;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 182;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 182;
  } else if (kg > 250) {
    //
    price = kg * 176;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone2(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1450;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1630;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1910;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2120;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2400;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2540;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2760;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2900;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3110;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3260;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3410;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3500;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3650;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3740;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3890;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3980;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 4130;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 4220;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4370;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4460;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4660;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4700;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4810;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 4850;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 4970;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 5010;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 5120;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 5160;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 5270;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 5320;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 5430;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 5470;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 5580;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 5630;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 5740;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 5780;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 5890;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 5930;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 6050;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 6090;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 257;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 238;
  } else if (kg > 50 && kg <= 70) {
    //
    price = kg * 231;
  } else if (kg > 70 && kg <= 100) {
    //
    price = kg * 214;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 214;
  } else if (kg > 250) {
    //
    price = kg * 204;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone3(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1750;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1950;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2230;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2440;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2720;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2870;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3080;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3230;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3440;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3590;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3830;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 4000;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4240;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4410;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4650;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 4820;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 5060;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5240;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 5480;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 5650;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 5840;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 5900;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 6020;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 6070;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 6190;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 6240;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 6360;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 6410;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 6530;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 6580;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 6700;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 6750;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 6870;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 6920;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 7040;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 7090;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 7210;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 7270;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 7390;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 7440;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 317;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 317;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 298;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 266;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 255;
  } else if (kg > 250) {
    //
    price = kg * 242;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone4(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1890;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2100;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2390;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2600;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2880;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3050;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3290;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3450;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3690;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3860;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 4100;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 4270;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4510;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4690;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4930;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 5100;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 5340;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5520;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 5760;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 5930;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 6160;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 6230;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 6370;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 6440;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 6580;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 6650;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 6790;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 6860;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 7000;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 7070;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 7210;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 7280;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 7420;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 7490;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 7630;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 7700;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 7840;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 7910;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 8050;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 8120;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 353;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 343;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 334;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 334;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 332;
  } else if (kg > 250) {
    //
    price = kg * 330;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone5(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1990;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2200;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2490;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2700;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2990;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3180;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3430;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3620;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3880;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4070;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 4320;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 4500;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4750;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4930;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 5180;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 5370;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 5620;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5800;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 6050;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 6230;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 6490;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 6580;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 6730;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 6820;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 6970;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 7060;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 7210;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 7300;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 7450;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 7540;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 7690;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 7780;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 7930;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 8020;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 8170;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 8260;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 8410;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 8500;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 8650;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 8740;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 392;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 388;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 388;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 371;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 368;
  } else if (kg > 250) {
    //
    price = kg * 360;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone6(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 2080;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2300;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2520;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2740;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2970;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3180;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3410;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3620;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3860;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4060;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 4300;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 4500;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4740;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4950;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 5180;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 5390;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 5620;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5830;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 6060;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 6270;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 6500;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 6630;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 6770;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 6900;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 7040;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 7170;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 7310;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 7440;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 7580;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 7710;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 7850;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 7980;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 8120;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 8250;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 8390;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 8520;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 8660;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 8780;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 8930;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 9050;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 401;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 401;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 394;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 358;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 356;
  } else if (kg > 250) {
    //
    price = kg * 349;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone7(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 2180;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2420;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2790;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 3160;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3530;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3880;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 4260;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4610;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4980;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 5330;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 5600;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 5850;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 6130;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 6380;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 6650;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 6900;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 7170;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 7420;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 7690;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 7940;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 8250;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 8380;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 8530;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 8660;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 8820;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 8950;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 9110;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 9240;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 9390;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 9520;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 9670;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 9790;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 9940;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 10060;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 10210;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 10330;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 10480;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 10600;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 10750;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 10870;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 463;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 463;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 443;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 398;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 398;
  } else if (kg > 250) {
    //
    price = kg * 394;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone8(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 2280;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2540;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2920;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 3300;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3700;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 4060;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 4450;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4820;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 5210;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 5580;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 5870;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 6140;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 6430;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 6700;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 6990;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 7260;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 7560;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 7820;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 8120;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 8380;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 8710;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 8850;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 9010;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 9140;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 9300;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 9440;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 9600;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 9730;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 9890;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 10030;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 10180;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 10310;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 10460;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 10590;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 10740;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 10860;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 11020;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 11140;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 11300;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 11420;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 503;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 503;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 493;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 439;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 437;
  } else if (kg > 250) {
    //
    price = kg * 433;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone9(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 2570;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 3020;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 3460;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 3900;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 4350;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 4800;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 5270;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 5710;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 6180;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 6620;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 6940;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 7230;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 7550;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 7840;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 8160;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 8450;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 8770;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 9060;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 9370;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 9670;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 10000;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 10130;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 10290;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 10430;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 10590;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 10720;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 10880;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 11020;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 11180;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 11310;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 11470;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 11610;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 11770;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 11900;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 12060;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 12200;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 12360;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 12500;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 12660;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 12790;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 570;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 570;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 570;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 533;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 533;
  } else if (kg > 250) {
    //
    price = kg * 518;
  } else {
    price = kg * 0;
  }
  return price;
}
function imTNTZone10(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 3430;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 4050;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 4660;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 5280;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 5900;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 6520;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 7160;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 7770;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 8410;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 9030;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 9490;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 9920;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 10380;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 10810;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 11270;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 11700;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 12160;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 12590;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 13050;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 13480;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 13920;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 14070;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 14250;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 14400;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 14570;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 14720;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 14900;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 15050;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 15220;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 15370;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 15550;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 15700;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 15870;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 16020;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 16200;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 16350;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 16520;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 16670;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 16850;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 17000;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 700;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 700;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 670;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 655;
  } else if (kg > 100 && kg <= 250) {
    //
    price = kg * 649;
  } else if (kg > 250) {
    //
    price = kg * 647;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone1(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1020;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1140;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1360;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1520;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 1740;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 1840;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2010;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2110;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2280;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2390;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2500;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2560;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 2680;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 2730;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 2850;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 2910;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3030;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3080;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 3200;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 3250;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 3360;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 3370;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 3450;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 3460;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 3540;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 3550;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 3630;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 3640;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 3720;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 3730;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 3810;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 3820;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 3900;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 3910;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 3980;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 4000;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 4070;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 4090;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 4160;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 4170;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 172;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 172;
  } else if (kg > 50 && kg <= 70) {
    //
    price = kg * 158;
  } else if (kg > 70 && kg <= 100) {
    //
    price = kg * 154;
  } else if (kg > 100) {
    //
    price = kg * 148;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone2(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1080;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1210;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1430;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1590;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 1810;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 1920;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2090;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2190;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2360;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2470;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2590;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2650;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 2780;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 2840;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 2960;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3020;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3150;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3210;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 3340;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 3400;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 3560;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 3590;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 3680;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 3710;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 3800;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 3830;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 3920;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 3950;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 4040;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 4070;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 4160;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 4190;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 4290;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 4310;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 4410;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 4440;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 4530;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 4560;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 4650;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 4680;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 201;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 189;
  } else if (kg > 50 && kg <= 70) {
    //
    price = kg * 189;
  } else if (kg > 70 && kg <= 100) {
    //
    price = kg * 183;
  } else if (kg > 100) {
    //
    price = kg * 172;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone3(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1300;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1440;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1670;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1820;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2050;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2150;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2320;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2430;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2600;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2710;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2900;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3020;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3210;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3330;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3520;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3650;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3830;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3960;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4140;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4270;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4420;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4460;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4570;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 4610;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 4710;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 4750;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 4860;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 4900;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 5000;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 5040;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 5150;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 5190;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 5300;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 5340;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 5440;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 5480;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 5590;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 5630;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 5730;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 5770;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 247;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 247;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 233;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 209;
  } else if (kg > 100) {
    //
    price = kg * 201;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone4(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1400;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1560;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1780;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1940;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2160;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2280;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2470;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2590;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2780;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2900;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3090;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3210;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3400;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3530;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3720;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3850;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 4040;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 4160;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4350;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4480;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4650;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4700;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4820;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 4870;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 4990;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 5040;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 5160;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 5210;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 5330;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 5380;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 5500;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 5550;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 5670;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 5720;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 5840;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 5890;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 6010;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 6060;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 6180;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 6230;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 274;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 274;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 265;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 257;
  } else if (kg > 100) {
    //
    price = kg * 255;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone5(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1570;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1730;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2050;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2200;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2520;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2660;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2960;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3090;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3390;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3520;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3820;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3950;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4240;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4370;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4670;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 4800;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 5090;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5220;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 5520;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 5650;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 5960;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 6020;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 6240;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 6310;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 6530;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 6590;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 6820;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 6880;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 7110;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 7170;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 7390;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 7460;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 7680;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 7740;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 7970;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 8030;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 8250;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 8320;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 8540;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 8600;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 399;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 399;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 395;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 383;
  } else if (kg > 100) {
    //
    price = kg * 381;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone6(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1540;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1700;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1920;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2080;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2310;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2460;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2680;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2830;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3050;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3210;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3420;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3580;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3800;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3950;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4170;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 4320;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 4540;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 4690;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4910;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 5070;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 5240;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 5320;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 5470;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 5560;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 5710;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 5790;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 5940;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 6030;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 6180;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 6260;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 6410;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 6490;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 6640;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 6730;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 6880;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 6960;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 7110;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 7200;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 7350;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 7430;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 338;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 338;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 334;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 310;
  } else if (kg > 100) {
    //
    price = kg * 308;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone7(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1620;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1800;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2140;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2410;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2760;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3010;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3330;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3580;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3910;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4160;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 4420;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 4600;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4860;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 5040;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 5290;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 5470;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 5730;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5910;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 6170;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 6350;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 6640;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 6740;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 6910;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 7010;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 7180;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 7280;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 7450;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 7550;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 7720;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 7820;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 7990;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 8080;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 8250;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 8340;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 8510;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 8600;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 8770;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 8860;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 9020;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 9120;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 395;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 395;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 381;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 350;
  } else if (kg > 100) {
    //
    price = kg * 350;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone8(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1690;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1880;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2230;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2510;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2870;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3130;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3480;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3740;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4090;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4350;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 4630;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 4820;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 5100;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 5290;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 5570;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 5760;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 6040;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 6230;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 6500;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 6700;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 6980;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 7080;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 7250;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 7350;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 7530;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 7630;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 7810;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 7900;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 8080;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 8180;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 8350;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 8440;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 8610;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 8700;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 8870;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 8970;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 9140;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 9230;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 9400;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 9490;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 425;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 425;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 417;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 377;
  } else if (kg > 100) {
    //
    price = kg * 377;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone9(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1910;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2230;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2630;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2950;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3350;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3680;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 4080;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4400;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4800;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 5130;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 5410;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 5630;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 5920;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 6130;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 6420;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 6630;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 6920;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 7130;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 7420;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 7630;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 7910;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 8010;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 8190;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 8290;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 8470;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 8570;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 8750;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 8850;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 9030;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 9130;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 9310;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 9410;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 9590;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 9690;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 9870;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 9970;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 10140;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 10250;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 10420;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 10530;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 474;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 474;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 474;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 447;
  } else if (kg > 100) {
    //
    price = kg * 447;
  } else {
    price = kg * 0;
  }
  return price;
}
function exTNTZone10(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 2540;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2990;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 3510;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 3960;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 4490;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 4940;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 5460;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 5910;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 6440;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 6880;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 7270;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 7580;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 7970;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 8280;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 8670;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 8980;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 9370;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 9680;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 10070;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 10380;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 10770;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 10880;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 11070;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 11180;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 11370;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 11490;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 11680;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 11790;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 11980;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 12090;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 12280;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 12400;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 12590;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 12700;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 12890;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 13000;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 13190;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 13310;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 13500;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 13610;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 569;
  } else if (kg > 21 && kg <= 50) {
    //
    price = kg * 569;
  } else if (kg > 50 && kg <= 71) {
    //
    price = kg * 547;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 538;
  } else if (kg > 100) {
    //
    price = kg * 530;
  } else {
    price = kg * 0;
  }
  return price;
}

////////////////////////////////////////////
/////////////////// Fedex //////////////////
////////////////////////////////////////////

function exFedexZoneA(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1470;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1740;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2010;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2210;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2480;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2630;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2840;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2980;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3190;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3340;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3790;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3870;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4030;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4110;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4260;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 4350;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 4500;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 4590;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4740;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4830;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 5350;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 5370;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 5460;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 5480;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 5570;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 5600;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 5690;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 5710;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 5800;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 5820;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 5910;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 5930;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 6020;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 6040;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 6130;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 6150;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 6240;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 6260;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 6350;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 6370;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 293;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 292;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 281;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 265;
  } else if (kg > 100) {
    //
    price = kg * 265;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneB(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1380;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1870;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2300;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2560;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2980;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3820;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 4170;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4350;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4700;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4880;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 6020;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 6260;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 6660;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 6900;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 7310;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 7540;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 7950;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 8180;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 8590;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 8820;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 9040;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 9170;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 9490;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 9620;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 9940;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 10070;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 10380;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 10520;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 10830;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 10970;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 11280;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 11420;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 11730;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 11870;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 12180;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 12320;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 12630;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 12770;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 13080;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 13220;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 681;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 677;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 598;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 598;
  } else if (kg > 100) {
    //
    price = kg * 598;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneC(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1540;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1970;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2320;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2600;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2950;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2960;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3170;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3320;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3540;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3690;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3760;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3940;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4180;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4350;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4590;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 4770;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 5010;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5180;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 5430;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 5600;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 5670;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 5760;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 5910;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 6000;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 6150;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 6240;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 6390;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 6480;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 6630;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 6720;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 6870;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 6960;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 7110;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 7200;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 7350;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 7440;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 7600;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 7680;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 7840;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 7920;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 475;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 467;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 444;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 442;
  } else if (kg > 100) {
    //
    price = kg * 442;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneD(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1140;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1310;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1570;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1760;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2020;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2260;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2460;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2590;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2800;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2930;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3610;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3730;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3910;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4030;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4210;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 4320;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 4510;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 4620;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4800;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4920;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 8630;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 8770;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 8970;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 9100;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 9300;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 9430;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 9640;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 9770;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 9970;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 10100;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 10300;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 10440;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 10640;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 10770;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 10970;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 11100;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 11300;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 11440;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 11640;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 11770;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 697;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 697;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 596;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 501;
  } else if (kg > 100) {
    //
    price = kg * 472;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneE(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 2100;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2520;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 3050;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 3510;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 4040;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 4140;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 4540;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4870;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 5260;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 5590;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 6010;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 6280;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 6620;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 6900;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 7240;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 7510;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 7860;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 8130;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 8470;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 8750;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 9600;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 9730;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 9930;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 10060;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 10260;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 10390;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 10590;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 10720;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 10920;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 11060;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 11260;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 11390;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 11590;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 11720;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 11920;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 12050;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 12250;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 12380;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 12580;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 12710;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 531;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 531;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 525;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 472;
  } else if (kg > 100) {
    //
    price = kg * 465;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneF(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1960;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 2160;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2590;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2950;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3380;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3410;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3760;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4040;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4390;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4670;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 4870;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 5070;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 5360;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 5570;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 5860;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 6070;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 6350;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 6560;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 6850;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 7060;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 8020;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 8130;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 8310;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 8420;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 8610;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 8720;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 8900;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 9010;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 9200;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 9310;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 9490;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 9600;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 9790;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 9900;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 10080;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 10190;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 10380;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 10490;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 10670;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 10780;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 548;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 548;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 519;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 509;
  } else if (kg > 100) {
    //
    price = kg * 492;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneG(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1530;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1710;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2120;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2440;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2850;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3350;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3700;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3960;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4310;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4570;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 5100;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 5320;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 5610;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 5830;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 6130;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 6340;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 6640;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 6860;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 7160;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 7370;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 8110;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 8190;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 8350;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 8430;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 8580;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 8660;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 8820;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 8900;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 9050;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 9130;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 9290;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 9370;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 9520;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 9600;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 9760;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 9830;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 9990;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 10070;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 10230;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 10300;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 632;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 632;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 612;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 612;
  } else if (kg > 100) {
    //
    price = kg * 601;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneH(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1980;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 3040;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 3620;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 4130;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 4710;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 5620;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 6150;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 6610;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 7150;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 7610;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 8820;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 9200;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 9660;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 10040;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 10500;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 10880;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 11340;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 11730;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 12180;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 12570;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 13980;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 14130;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 14350;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 14500;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 14710;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 14860;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 15080;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 15230;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 15440;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 15590;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 15810;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 15960;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 16180;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 16320;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 16540;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 16690;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 16910;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 17050;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 17270;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 17420;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 1124;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 1124;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 1093;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 885;
  } else if (kg > 100) {
    //
    price = kg * 880;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneK(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 770;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1180;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1380;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1520;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 1720;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 1730;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 1890;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 1980;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2140;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2230;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2310;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2360;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 2480;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 2530;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 2640;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 2690;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 2810;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 2860;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 2970;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 3020;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4200;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4220;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4300;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 4320;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 4400;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 4420;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 4500;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 4520;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 4600;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 4620;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 4700;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 4720;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 4800;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 4820;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 4900;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 4920;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 5000;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 5020;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 5110;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 5120;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 236;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 227;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 217;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 202;
  } else if (kg > 100) {
    //
    price = kg * 202;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneN(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1400;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1450;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1720;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1930;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2210;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2210;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2380;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2490;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2670;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2780;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2850;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2960;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3150;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3260;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3450;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3560;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3740;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3860;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4040;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4150;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4220;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4290;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4430;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 4490;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 4630;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 4700;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 4830;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 4900;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 5040;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 5100;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 5240;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 5310;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 5440;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 5510;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 5650;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 5720;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 5850;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 5920;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 6050;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 6120;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 309;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 301;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 273;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 269;
  } else if (kg > 100) {
    //
    price = kg * 269;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneO(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1120;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1380;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1650;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1850;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2120;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2580;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2800;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2950;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3180;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3330;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3640;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3760;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3940;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4060;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4240;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 4350;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 4540;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 4650;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4840;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4950;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 5270;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 5350;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 5490;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 5570;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 5710;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 5790;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 5930;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 6010;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 6150;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 6230;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 6370;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 6450;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 6590;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 6670;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 6810;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 6890;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 7040;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 7110;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 7260;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 7330;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 358;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 357;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 326;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 320;
  } else if (kg > 100) {
    //
    price = kg * 320;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneP(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 990;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1550;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1830;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2050;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2340;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2340;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2530;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2640;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2830;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2950;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3020;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3160;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3360;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3500;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3700;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3840;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 4040;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 4180;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4380;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4520;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 5350;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 5430;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 5570;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 5650;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 5800;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 5880;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 6030;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 6110;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 6260;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 6340;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 6490;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 6570;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 6720;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 6800;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 6950;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 7030;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 7180;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 7260;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 7410;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 7490;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 340;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 340;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 323;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 289;
  } else if (kg > 100) {
    //
    price = kg * 290;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneQ(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 750;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1210;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1420;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1550;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 1760;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 1780;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 1940;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2030;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2190;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2290;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2510;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2570;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 2690;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 2740;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 2860;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 2920;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3040;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3090;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 3210;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 3270;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 3550;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 3560;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 3640;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 3660;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 3740;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 3750;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 3830;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 3840;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 3930;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 3940;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 4020;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 4030;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 4120;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 4130;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 4210;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 4220;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 4300;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 4320;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 4400;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 4410;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 243;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 243;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 226;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 207;
  } else if (kg > 100) {
    //
    price = kg * 196;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneS(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 950;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1400;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1670;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1870;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2140;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2140;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2320;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2430;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2600;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2710;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2780;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2890;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3070;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3180;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3360;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3470;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3650;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3760;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 3940;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4050;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4420;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4490;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4630;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 4700;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 4840;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 4910;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 5050;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 5120;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 5260;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 5330;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 5470;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 5550;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 5680;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 5760;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 5900;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 5970;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 6110;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 6180;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 6320;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 6390;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 324;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 324;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 322;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 321;
  } else if (kg > 100) {
    //
    price = kg * 310;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneT(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1200;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1510;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1800;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2010;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2300;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2870;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 3080;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 3230;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 3440;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 3590;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 3740;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3900;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 4120;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 4280;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 4500;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 4660;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 4880;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 5040;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 5270;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 5420;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 5490;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 5580;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 5740;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 5840;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 6000;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 6090;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 6250;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 6340;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 6500;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 6600;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 6760;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 6850;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 7010;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 7100;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 7260;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 7350;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 7520;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 7610;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 7770;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 7860;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 344;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 344;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 342;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 343;
  } else if (kg > 100) {
    //
    price = kg * 344;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneU(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 1520;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1890;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 2320;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 2570;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 3000;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 3690;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 4040;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 4210;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 4560;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 4730;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 5690;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 5910;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 6300;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 6520;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 6910;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 7120;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 7510;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 7730;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 8120;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 8340;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 8730;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 8860;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 9170;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 9300;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 9610;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 9740;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 10040;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 10180;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 10480;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 10610;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 10920;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 11050;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 11360;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 11490;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 11800;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 11930;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 12230;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 12370;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 12670;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 12800;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 691;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 691;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 687;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 606;
  } else if (kg > 100) {
    //
    price = kg * 606;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneV(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 660;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 990;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1160;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1270;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 1450;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 1470;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 1610;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 1680;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 1830;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 1900;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 1980;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2020;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 2130;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 2170;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 2270;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 2310;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 2420;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 2460;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 2570;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 2610;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 3450;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 3460;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 3540;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 3550;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 3630;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 3650;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 3730;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 3740;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 3820;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 3830;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 3910;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 3930;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 4010;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 4020;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 4100;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 4110;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 4190;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 4210;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 4290;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 4300;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 225;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 225;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 216;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 198;
  } else if (kg > 100) {
    //
    price = kg * 188;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneW(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 850;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1240;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1480;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1660;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 1910;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 1920;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2080;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2180;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2340;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2430;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2510;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2610;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 2770;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 2870;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3040;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3140;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3310;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3400;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 3570;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 3670;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4990;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 5070;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 5220;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 5300;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 5450;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 5540;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 5690;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 5770;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 5920;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 6000;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 6150;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 6240;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 6390;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 6470;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 6620;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 6700;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 6850;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 6940;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 7090;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 7170;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 342;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 342;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 313;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 311;
  } else if (kg > 100) {
    //
    price = kg * 304;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneX(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 750;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1370;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1630;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1830;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2090;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2100;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2270;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2370;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2540;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2650;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2720;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2820;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3000;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3110;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3290;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3390;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3570;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3680;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 3860;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 3960;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4030;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4100;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4230;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 4290;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 4430;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 4490;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 4620;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 4690;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 4820;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 4880;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 5010;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 5080;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 5210;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 5270;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 5410;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 5470;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 5600;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 5670;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 5800;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 5860;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 290;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 290;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 276;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 267;
  } else if (kg > 100) {
    //
    price = kg * 254;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneY(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 830;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1360;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1580;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1740;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 1960;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 1960;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2140;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2240;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2410;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2520;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2590;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 2650;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 2770;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 2820;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 2950;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3000;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3130;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3180;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 3310;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 3360;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 3800;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 3810;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 3900;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 3910;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 3990;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 4010;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 4090;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 4100;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 4190;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 4200;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 4280;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 4300;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 4380;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 4400;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 4480;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 4490;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 4570;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 4590;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 4670;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 4690;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 263;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 263;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 257;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 229;
  } else if (kg > 100) {
    //
    price = kg * 227;
  } else {
    price = kg * 0;
  }
  return price;
}
function exFedexZoneZ(kG) {
  kg = kG;

  if (kg > 0 && kg <= 0.5) {
    //
    price = 980;
  } else if (kg > 0.5 && kg <= 1) {
    //
    price = 1460;
  } else if (kg > 1 && kg <= 1.5) {
    //
    price = 1740;
  } else if (kg > 1.5 && kg <= 2) {
    //
    price = 1950;
  } else if (kg > 2 && kg <= 2.5) {
    //
    price = 2230;
  } else if (kg > 2.5 && kg <= 3) {
    //
    price = 2230;
  } else if (kg > 3 && kg <= 3.5) {
    //
    price = 2410;
  } else if (kg > 3.5 && kg <= 4) {
    //
    price = 2520;
  } else if (kg > 4 && kg <= 4.5) {
    //
    price = 2700;
  } else if (kg > 4.5 && kg <= 5) {
    //
    price = 2810;
  } else if (kg > 5 && kg <= 5.5) {
    //
    price = 2880;
  } else if (kg > 5.5 && kg <= 6) {
    //
    price = 3000;
  } else if (kg > 6 && kg <= 6.5) {
    //
    price = 3180;
  } else if (kg > 6.5 && kg <= 7) {
    //
    price = 3300;
  } else if (kg > 7 && kg <= 7.5) {
    //
    price = 3480;
  } else if (kg > 7.5 && kg <= 8) {
    //
    price = 3600;
  } else if (kg > 8 && kg <= 8.5) {
    //
    price = 3780;
  } else if (kg > 8.5 && kg <= 9) {
    //
    price = 3900;
  } else if (kg > 9 && kg <= 9.5) {
    //
    price = 4080;
  } else if (kg > 9.5 && kg <= 10) {
    //
    price = 4200;
  } else if (kg > 10 && kg <= 10.5) {
    //
    price = 4710;
  } else if (kg > 10.5 && kg <= 11) {
    //
    price = 4790;
  } else if (kg > 11 && kg <= 11.5) {
    //
    price = 4940;
  } else if (kg > 11.5 && kg <= 12) {
    //
    price = 5010;
  } else if (kg > 12 && kg <= 12.5) {
    //
    price = 5160;
  } else if (kg > 12.5 && kg <= 13) {
    //
    price = 5240;
  } else if (kg > 13 && kg <= 13.5) {
    //
    price = 5380;
  } else if (kg > 13.5 && kg <= 14) {
    //
    price = 5460;
  } else if (kg > 14 && kg <= 14.5) {
    //
    price = 5610;
  } else if (kg > 14.5 && kg <= 15) {
    //
    price = 5680;
  } else if (kg > 15 && kg <= 15.5) {
    //
    price = 5830;
  } else if (kg > 15.5 && kg <= 16) {
    //
    price = 5910;
  } else if (kg > 16 && kg <= 16.5) {
    //
    price = 6050;
  } else if (kg > 16.5 && kg <= 17) {
    //
    price = 6130;
  } else if (kg > 17 && kg <= 17.5) {
    //
    price = 6270;
  } else if (kg > 17.5 && kg <= 18) {
    //
    price = 6350;
  } else if (kg > 18 && kg <= 18.5) {
    //
    price = 6500;
  } else if (kg > 18.5 && kg <= 19) {
    //
    price = 6570;
  } else if (kg > 19 && kg <= 19.5) {
    //
    price = 6720;
  } else if (kg > 19.5 && kg <= 20) {
    //
    price = 6800;
  } else if (kg > 20 && kg <= 21) {
    //
    price = kg * 326;
  } else if (kg > 21 && kg <= 45) {
    //
    price = kg * 326;
  } else if (kg > 45 && kg <= 71) {
    //
    price = kg * 324;
  } else if (kg > 71 && kg <= 100) {
    //
    price = kg * 313;
  } else if (kg > 100) {
    //
    price = kg * 314;
  } else {
    price = kg * 0;
  }
  return price;
}

function imFedexZoneA(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 2090;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 2750;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 3140;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 3460;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 3850;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 3860;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 4150;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 4370;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 4660;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 4880;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 5220;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 5380;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 5620;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 5780;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 6020;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 6180;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 6420;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 6580;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 6820;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 6980;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 8090;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 8140;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 8260;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 8320;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 8440;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 8490;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 8620;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 8670;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 8790;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 8850;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 8970;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 9020;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 9150;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 9200;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 9320;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 9380;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 9500;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 9560;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 9680;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 9730;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*419;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*419;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*406;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*350;
        }
        else if (kg>100) //
        {
            price = kg*310;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneB(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1370;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1630;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1930;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 2160;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 2450;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 3510;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 3770;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 3950;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 4200;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 4390;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 5080;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 5310;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 5610;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 5840;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 6130;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 6360;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 6660;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 6890;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 7190;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 7420;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 7600;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price =7740 ;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 7940;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 8070;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 8270;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 8410;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 8610;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 8740;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 8940;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 9070;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 9280;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 9410;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 9610;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 9740;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 9940;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 10080;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 10280;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 10410;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 10610;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 10750;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*567;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*567;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*564;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*557;
        }
        else if (kg>100) //
        {
            price = kg*538;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneC(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 3660;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 4220;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 4890;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 5500;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 6170;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 6640;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 7060;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 7420;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 7850;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 8200;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 8640;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 9080;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 9590;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 10040;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 10550;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 10990;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 11510;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 11950;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 12460;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 12900;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 13040;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 13260;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 13540;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 13750;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 14030;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 14240;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 14520;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 14740;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 15020;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 15230;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 15510;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 15720;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 16010;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 16220;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 16500;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 16710;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 16990;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 17210;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 17490;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 17700;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*848;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*848;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*754;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*719;
        }
        else if (kg>100) //
        {
            price = kg*688;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneD(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 3340;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price =3970 ;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 4670;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 5300;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 6010;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 6050;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 6490;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 6870;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price =7320;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 7690;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 8510;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 8800;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price =9160;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 9450;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 9820;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 10110;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 10470;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 10760;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 11120;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 11420;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 11720;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 11950;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 12250;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 12480;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 12780;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 13020;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 13320;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 13550;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 13850;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 14080;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 14380;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 14610;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 14920;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 15150;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 15450;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 15680;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 15980;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price =16210;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 16510;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 16750;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*817;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*817;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*750;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*728;
        }
        else if (kg>100) //
        {
            price = kg*684;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneE(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 2240;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price =3420;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 4120;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 4740;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 5440;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 5490;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 6020;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 6470;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 7010;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 7460;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 7540;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 7880;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 8310;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 8650;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 9070;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 9410;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 9830;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 10170;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 10600;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 10940;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 12540;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 12710;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 12960;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 13130;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 13380;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 13550;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 13800;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 13970;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 14220;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 14390;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 14640;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 14810;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 15060;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 15230;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 15480;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 15650;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 15900;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 16070;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 16320;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 16490;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*809;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*809;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*681;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*862;
        }
        else if (kg>100) //
        {
            price = kg*849;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneF(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1890;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 3620;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 4320;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 4940;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 5640;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 5650;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 6190;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 6660;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 7210;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 7670;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 7760;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 8110;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 8550;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 8900;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 9330;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 9680;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 10110;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 10460;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 10900;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 11250;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 11330;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 11440;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 11630;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 11740;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 11930;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 12030;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 12220;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 12330;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price =12520;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 12630;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 12820;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 12930;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 13110;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 13220;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 13410;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 13520;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 13710;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 13820;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 14010;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 14110;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*601;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*601;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*598;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*598;
        }
        else if (kg>100) //
        {
            price = kg*600;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneG(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price =1880;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 3740;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 4630;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 5430;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 6310;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 6320;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 6950;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 7490;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 8120;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 8660;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 8750;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 9090;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 9520;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 9860;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price =10280;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 10620;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 11050;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 11390;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 11810;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 12150;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price =12240 ;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 12420;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 12690;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 12870;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 13140;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 13320;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 13590;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 13780;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 14040;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 14230;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 14490;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 14680;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 14950;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 15130;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 15400;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 15580;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 15850;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 16030;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 16300;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 16490;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*636;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*636;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*633;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*636;
        }
        else if (kg>100) //
        {
            price = kg*635;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneH(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1900;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 3660;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 4530;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 5340;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 6220;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 6230;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 6830;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 7360;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 7960;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 8500;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 8560;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 8890;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 9290;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price =9610;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 10010;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 10340;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 10730;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 11060;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 11450;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price =11780;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 25460;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price =25830;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 26270;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 26650;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 27090;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 27460;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 27910;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 28280;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 28720;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 29100;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 29540;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 29910;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 30350;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 30730;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 31170;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 31540;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 31990;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 32360;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 32800;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 33180;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*1876;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*1876;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*1592;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*1466;
        }
        else if (kg>100) //
        {
            price = kg*1422;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneK(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1060;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1280;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1490;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 1640;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 1850;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 1970;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 2140;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 2250;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 2420;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 2530;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 2940;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 3030;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 3180;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 3270;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 3420;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 3510;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 3670;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 3750;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 3910;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 4000;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 5370;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 5400;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 5510;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 5540;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 5640;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 5680;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 5780;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 5810;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 5920;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 5950;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 6050;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 6090;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 6190;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 6220;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 6330;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 6360;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 6460;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 6500;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 6600;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 6630;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*314;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*314;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*316;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*271;
        }
        else if (kg>100) //
        {
            price = kg*269;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneN(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1770;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 2080;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 2440;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price =2730;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 3100;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 3200;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 3440;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 3610;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 3840;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 4010;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 4270;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 4460;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 4720;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 4910;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 5170;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 5360;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 5620;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 5810;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 6070;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 6260;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 6330;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 6440;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 6610;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 6720;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 6900;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 7010;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 7180;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 7290;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 7470;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price =7580 ;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 7750;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 7860;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 8040;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 8150;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 8320;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 8430;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 8610;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 8720;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 8890;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price =9000;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*680;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*680;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*577;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*570;
        }
        else if (kg>100) //
        {
            price = kg*526;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneO(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1790;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price =2370;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 2820;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 3190;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 3630;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 3630;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 3920;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 4140;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 4430;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 4650;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 6560;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 6780;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 7070;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 7290;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 7580;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 7800;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 8100;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 8320;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 8610;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 8830;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 10440;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 10650;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 10920;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 11130;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 11400;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 11610;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 11880;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 12090;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 12360;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 12560;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 12840;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 13040;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 13320;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 13520;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 13800;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 14000;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 14270;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 14480;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 14750;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 14960;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*730;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*730;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*671;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*199;
        }
        else if (kg>100) //
        {
            price = kg*198;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneP(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1270;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1420;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1680;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 1870;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 2140;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 2290;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 2480;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 2590;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 2780;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 2890;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 2970;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 3110;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 3310;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 3450;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 3660;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 3790;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 4000;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 4140;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 4340;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 4480;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 5730;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 5810;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 5970;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 6050;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 6210;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 6290;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 6450;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 6530;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 6690;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 6770;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 6930;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 7010;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 7170;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 7250;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 7410;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 7500;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 7650;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 7740;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 7890;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price =7980;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*426;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*426;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*418;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*414;
        }
        else if (kg>100) //
        {
            price = kg*398;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneQ(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 980;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1220;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1430;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 1560;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 1770;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 1770;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 1940;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 2030;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 2190;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 2290;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 2360;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 2430;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 2560;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 2630;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 2760;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 2830;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 2970;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price =3030;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 3170;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 3240;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 3450;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 3470;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 3560;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 3580;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 3670;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 3690;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 3780;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 3800;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 3890;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 3910;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 3990;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 4010;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 4100;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 4120;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 4210;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 4230;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 4320;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 4340;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 4430;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 4450;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*283;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*283;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*266;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*235;
        }
        else if (kg>100) //
        {
            price = kg*234;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneS(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1190;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1450;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1720;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 1920;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 2200;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 2200;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 2380;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 2490;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 2670;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 2780;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 2850;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 2970;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 3160;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 3280;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price =3470;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 3590;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 3780;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 3900;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 4090;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 4210;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 5050;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 5130;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 5280;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 5370;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 5520;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 5600;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 5750;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 5840;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 5990;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 6070;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 6220;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 6310;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 6460;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 6540;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 6690;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 6780;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 6930;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 7010;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 7160;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 7250;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*339;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*339;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*339;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*332;
        }
        else if (kg>100) //
        {
            price = kg*315;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneT(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1490;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1870;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 2200;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 2460;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 2800;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 3060;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 3290;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 3450;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 3680;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 3840;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 4260;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 4450;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 4710;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 4900;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 5160;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 5350;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 5610;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 5800;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 6060;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 6250;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 7690;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price =7830;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 8030;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 8170;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 8370;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 8500;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 8710;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 8840;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 9050;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 9180;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 9380;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 9520;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 9720;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 9860;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 10060;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 10190;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 10400;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 10530;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 10730;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 10870;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*428;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*428;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*423;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*411;
        }
        else if (kg>100) //
        {
            price = kg*410;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneU(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1630;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 2280;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 2670;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 3000;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 3390;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 3470;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 3720;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 3900;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 4150;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 4330;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 4420;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 4620;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 4890;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price =5090 ;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 5350;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price =5550 ;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price =5820;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 6020;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 6280;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 6480;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 6660;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 6780;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 6960;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 7080;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 7260;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 7370;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 7560;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 7670;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 7850;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 7970;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 8150;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 8270;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 8450;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 8560;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 8750;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 8860;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 9040;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 9160;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 9340;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 9460;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*610;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*610;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*560;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*540;
        }
        else if (kg>100) //
        {
            price = kg*522;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneV(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 880;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1030;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1220;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 1330;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 1520;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 1600;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 1760;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 1840;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 1990;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 2080;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 2620;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 2700;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 2840;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 2920;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 3060;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 3140;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 3280;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 3360;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 3500;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 3580;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 6280;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 6320;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 6430;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 6470;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 6580;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 6620;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 6730;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 6770;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 6880;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 6920;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 7030;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 7070;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 7180;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 7220;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 7330;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 7370;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 7480;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 7520;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 7630;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 7670;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*327;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*327;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*325;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*282;
        }
        else if (kg>100) //
        {
            price = kg*282;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneW(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1030;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1400;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1660;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 1860;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 2120;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 2180;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 2360;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 2470;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 2650;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 2760;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 3160;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 3290;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 3500;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price =3630;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 3840;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 3970;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price =4180;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 4310;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 4520;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 4650;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 6380;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 6490;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 6670;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 6780;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 6950;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 7060;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 7240;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 7350;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 7530;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 7640;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 7810;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 7920;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 8100;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 8210;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 8390;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 8500;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 8670;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 8780;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 8960;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 9070;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*465;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*465;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*448;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*443;
        }
        else if (kg>100) //
        {
            price = kg*406;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneX(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 970;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1610;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1910;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 2130;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price =2430;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 2580;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 2780;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 2910;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 3110;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 3240;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 3310;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 3460;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 3670;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 3810;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 4020;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 4170;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 4380;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 4520;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 4730;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 4880;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 5380;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 5470;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 5620;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 5710;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 5870;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 5960;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 6120;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 6210;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 6370;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 6460;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 6620;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 6700;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 6860;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 6950;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 7110;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 7200;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 7360;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 7450;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 7610;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 7700;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*320;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*320;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*315;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*306;
        }
        else if (kg>100) //
        {
            price = kg*305;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneY(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1160;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1480;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 1720;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 1890;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 2130;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 2620;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 2830;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 2980;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 3190;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 3340;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price = 3520;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 3630;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 3800;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 3910;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 4090;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 4190;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 4370;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 4480;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 4650;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 4760;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 4830;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 4860;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 4960;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 4990;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 5090 ;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 5120;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 5210;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price = 5240;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 5340;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 5370;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 5470;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 5500;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 5600;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 5630;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 5730;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 5760;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 5860;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 5890;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 5990;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 6020;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*315;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*315;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*297;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*294;
        }
        else if (kg>100) //
        {
            price = kg*293;
        }
        else {
            price = kg*0;
        }
    return price;
}
function imFedexZoneZ(kG){
  kg = kG;
  
  if(kg>0 && kg <= 0.5) //
        {
            price = 1340;
        }
        else if (kg>0.5 && kg <= 1) //
        {
            price = 1720;
        }
        else if (kg>1 && kg <=1.5 ) //
        {
            price = 2030;
        }
        else if (kg>1.5 && kg <=2 ) //
        {
            price = 2270;
        }
        else if (kg>2 && kg <=2.5 ) //
        {
            price = 2580;
        }
        else if (kg>2.5 && kg <=3 ) //
        {
            price = 2820;
        }
        else if (kg>3 && kg <=3.5 ) //
        {
            price = 3030;
        }
        else if (kg>3.5 && kg <=4 ) //
        {
            price = 3180;
        }
        else if (kg>4 && kg <=4.5 ) //
        {
            price = 3390;
        }
        else if (kg>4.5 && kg <=5 ) //
        {
            price = 3540;
        }
        else if (kg>5 && kg <=5.5 ) //
        {
            price =3730 ;
        }
        else if (kg>5.5 && kg <=6 ) //
        {
            price = 3900;
        }
        else if (kg>6 && kg <=6.5 ) //
        {
            price = 4130;
        }
        else if (kg>6.5 && kg <=7 ) //
        {
            price = 4290;
        }
        else if (kg>7 && kg <=7.5 ) //
        {
            price = 4530;
        }
        else if (kg>7.5 && kg <=8 ) //
        {
            price = 4690;
        }
        else if (kg>8 && kg <=8.5 ) //
        {
            price = 4920;
        }
        else if (kg>8.5 && kg <=9 ) //
        {
            price = 5090;
        }
        else if (kg>9 && kg <=9.5 ) //
        {
            price = 5320;
        }
        else if (kg>9.5 && kg <=10 ) //
        {
            price = 5480;
        }
        else if (kg>10 && kg <=10.5 ) //
        {
            price = 5600;
        }
        else if (kg>10.5 && kg <=11 ) //
        {
            price = 5700;
        }
        else if (kg>11 && kg <=11.5 ) //
        {
            price = 5860;
        }
        else if (kg>11.5 && kg <=12 ) //
        {
            price = 5950;
        }
        else if (kg>12 && kg <=12.5 ) //
        {
            price = 6110;
        }
        else if (kg>12.5 && kg <=13 ) //
        {
            price = 6210;
        }
        else if (kg>13 && kg <=13.5 ) //
        {
            price = 6370;
        }
        else if (kg>13.5 && kg <=14 ) //
        {
            price =6460 ;
        }
        else if (kg>14 && kg <=14.5 ) //
        {
            price = 6630;
        }
        else if (kg>14.5 && kg <=15 ) //
        {
            price = 6720;
        }
        else if (kg>15 && kg <=15.5 ) //
        {
            price = 6880;
        }
        else if (kg>15.5 && kg <=16 ) //
        {
            price = 6980;
        }
        else if (kg>16 && kg <=16.5 ) //
        {
            price = 7140;
        }
        else if (kg>16.5 && kg <=17 ) //
        {
            price = 7230;
        }
        else if (kg>17 && kg <=17.5 ) //
        {
            price = 7400;
        }
        else if (kg>17.5 && kg <=18 ) //
        {
            price = 7490;
        }
        else if (kg>18 && kg <=18.5 ) //
        {
            price = 7650;
        }
        else if (kg>18.5 && kg <=19 ) //
        {
            price = 7750;
        }
        else if (kg>19 && kg <=19.5 ) //
        {
            price = 7910;
        }
        else if (kg>19.5 && kg <=20 ) //
        {
            price = 8000;
        }
        else if (kg>20 && kg <=21 ) //
        {
            price = kg*446;
        }
        else if (kg>21 && kg <=45 ) //
        {
            price = kg*446;
        }
        else if (kg>45 && kg <=71 ) //
        {
            price = kg*429;
        }
        else if (kg>71 && kg <=100 ) //
        {
            price = kg*416;
        }
        else if (kg>100) //
        {
            price = kg*415;
        }
        else {
            price = kg*0;
        }
    return price;

}
