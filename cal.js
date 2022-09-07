
var country, weightKG, widht, lenght, height, kg, dimention;
var valurRate, text, exim, fedex, tnt, ups;
var priceTotal;
var shipping = "";
var KgTotal = "";
var country_1 = "";
var status_1="";
var priceLIFF,nameLIFF,telLIFF,emailLIFF,typeproductLIFF;
var agentShip;

function myFunction() {
  var status;

  country = document.getElementById("country").value;
  weightKG = document.getElementById("weight").value;
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;

  if (document.getElementById("export").checked == true) {
    shipping = "ส่งออก";
  } else if (document.getElementById("import").checked == true) {
    shipping = "นำเข้า";
  }

  country_1 = country;
  kg = weightKG;
  dimention = (widht * lenght * height) / 5000;

  if (dimention > kg) {
    KgTotal = dimention;
    // valurRate = KgTotal * 1500;
    // text = valurRate;
    status = "Dimention";
  } else if (kg > dimention) {
    KgTotal = kg;
    // valurRate = KgTotal * 1500;
    // text = valurRate;
    status = "น้ำหนัก Kg.";
  } else {
    text = "";
  }

  switch(country) {
    case "USA":
	  fedex = exUsaCanadaFedex(KgTotal)
	  tnt = exUsaCanadaTNT(KgTotal)
	  ups = exUsaCanadaUPS(KgTotal)
      break;
    case "Canada":
	  fedex = exUsaCanadaFedex(KgTotal)
	  tnt = exUsaCanadaTNT(KgTotal)
	  ups = exUsaCanadaUPS(KgTotal)
      break;
    case "Australia":
      fedex = exAusFedex(KgTotal);
	  tnt = exAusTNT(KgTotal)
	  ups = exAusUPS(KgTotal)
      break;
    default:
     text = 0;
  }

  status_1 = status;
  priceTotalFedex = addCommas(fedex.toFixed(0));
  priceTotalTNT = addCommas(tnt.toFixed(0));
  priceTotalUPS = addCommas(ups.toFixed(0));
  


  sessionStorage.setItem("weightKG", kg);
  sessionStorage.setItem("resultText", text);
  sessionStorage.setItem("countryResult", country_1);
  sessionStorage.setItem("shippingResult", shipping);
  sessionStorage.setItem("Status", status);
  sessionStorage.setItem("priceTotalFedex",priceTotalFedex);
  sessionStorage.setItem("priceTotalTNT",priceTotalTNT);
  sessionStorage.setItem("priceTotalUPS",priceTotalUPS);
  

  window.location.replace("result.html");
//   sendMsg();
}

function ReplaceIndex() {
  window.location.replace("index.html");
  sessionStorage.removeItem("resultText");
}

function ReplaceForm() {
    priceLIFF = priceTotalFedex;
    agentShip = "Fedex";
	window.location.replace("form.html");
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

    sendMsg();
}

// function UsaCanada(kG){
//   kg = kG;
  
//   if(kg>0 && kg <= 0.5) //1140
// 		{
// 			price = kg*1140;
// 		}
// 		else if (kg>0.5 && kg <= 1) //2280
// 		{
// 			price = kg*2280;
// 		}
// 		else if (kg>1 && kg <=1.5 ) //1826.67
// 		{
// 			price = (float) (kg*1826.67);
// 		}
// 		else if (kg>1.5 && kg <=2 ) //1575
// 		{
// 			price = kg*1575;
// 		}
// 		else if (kg>2 && kg <=2.5 ) //1456
// 		{
// 			price = kg*1456;
// 		}
// 		else if (kg>2.5 && kg <=3 ) //1006.67
// 		{
// 			price = kg*1006.67;
// 		}
// 		else if (kg>3 && kg <=3.5 ) //951.43
// 		{
// 			price = kg*951.43;
// 		}
// 		else if (kg>3.5 && kg <=4 ) //892.5
// 		{
// 			price = kg*892.5;
// 		}
// 		else if (kg>4 && kg <=4.5 ) //862.22
// 		{
// 			price = kg*862.22;
// 		}
// 		else if (kg>4.5 && kg <=5 ) //822
// 		{
// 			price = kg*822;
// 		}
// 		else if (kg>5 && kg <=5.5 ) //707.27
// 		{
// 			price = kg*707.27;
// 		}
// 		else if (kg>5.5 && kg <=6 ) //676.67
// 		{
// 			price = kg*676.67;
// 		}
// 		else if (kg>6 && kg <=6.5 ) //661.54
// 		{
// 			price = kg*661.54;
// 		}
// 		else if (kg>6.5 && kg <=7 ) //638.57
// 		{
// 			price = kg*638.57;
// 		}
// 		else if (kg>7 && kg <=7.5 ) //628
// 		{
// 			price = kg*628;
// 		}
// 		else if (kg>7.5 && kg <=8 ) //610
// 		{
// 			price = kg*610;
// 		}
// 		else if (kg>8 && kg <=8.5 ) //603.53
// 		{
// 			price = kg*603.53;
// 		}
// 		else if (kg>8.5 && kg <=9 ) //588.89
// 		{
// 			price = kg*588.89;
// 		}
// 		else if (kg>9 && kg <=9.5 ) //583.16
// 		{
// 			price = kg*583.16;
// 		}
// 		else if (kg>9.5 && kg <=10 ) //571
// 		{
// 			price = kg*571;
// 		}
// 		else if (kg>10 && kg <=10.5 ) //648.57
// 		{
// 			price = kg*648.57;
// 		}
// 		else if (kg>10.5 && kg <=11 ) //627.27
// 		{
// 			price = kg*627.27;
// 		}
// 		else if (kg>11 && kg <=11.5 ) //614.78
// 		{
// 			price = kg*614.78;
// 		}
// 		else if (kg>11.5 && kg <=12 ) //595.83
// 		{
// 			price = kg*595.83;
// 		}
// 		else if (kg>12 && kg <=12.5 ) //585.6
// 		{
// 			price = kg*585.6;
// 		}
// 		else if (kg>12.5 && kg <=13 ) //570
// 		{
// 			price = kg*570;
// 		}
// 		else if (kg>13 && kg <=13.5 ) //560.74
// 		{
// 			price = kg*560.74;
// 		}
// 		else if (kg>13.5 && kg <=14 ) //547.14
// 		{
// 			price = kg*547.14;
// 		}
// 		else if (kg>14 && kg <=14.5 ) //540
// 		{
// 			price = kg*540;
// 		}
// 		else if (kg>14.5 && kg <=15 ) //528
// 		{
// 			price = kg*528;
// 		}
// 		else if (kg>15 && kg <=15.5 ) //521.29
// 		{
// 			price = kg*521.29;
// 		}
// 		else if (kg>15.5 && kg <=16 ) //510.63
// 		{
// 			price = kg*510.63;
// 		}
// 		else if (kg>16 && kg <=16.5 ) //505.45
// 		{
// 			price = kg*505.45;
// 		}
// 		else if (kg>16.5 && kg <=17 ) //495.29
// 		{
// 			price = kg*495.29;
// 		}
// 		else if (kg>17 && kg <=17.5 ) //490.86
// 		{
// 			price = kg*490.86;
// 		}
// 		else if (kg>17.5 && kg <=18 ) //482.22
// 		{
// 			price = kg*482.22;
// 		}
// 		else if (kg>18 && kg <=18.5 ) //477.84
// 		{
// 			price = kg*477.84;
// 		}
// 		else if (kg>18.5 && kg <=19 ) //470
// 		{
// 			price = kg*470;
// 		}
// 		else if (kg>19 && kg <=19.5 ) //466.67
// 		{
// 			price = kg*466.67;
// 		}
// 		else if (kg>19.5 && kg <=20 ) //459.5
// 		{
// 			price = kg*459.5;
// 		}
// 		else if (kg>20 && kg <=45 ) //529
// 		{
// 			price = kg*529;
// 		}
// 		else if (kg>45 && kg <=71 ) //544
// 		{
// 			price = kg*544;
// 		}
// 		else if (kg>71 && kg <=100 ) //518
// 		{
// 			price = kg*518;
// 		}
// 		else if (kg>100) //510
// 		{
// 			price = kg*510;
// 		}
// 		else {
// 			price = kg*0;
// 		}
//     return price;
// }

// function Aus(kG) {
//   kg = kG;
//   if(kg>0 && kg <= 0.5) //1050
// 		{
// 			price = kg*1050;
// 		}
// 		else if (kg>0.5 && kg <= 1) //2140
// 		{
// 			price = kg*2140;
// 		}
// 		else if (kg>1 && kg <=1.5 ) //1740
// 		{
// 			price = kg*1740;
// 		}
// 		else if (kg>1.5 && kg <=2 ) //1450
// 		{
// 			price = kg*1450;
// 		}
// 		else if (kg>2 && kg <=2.5 ) //1344
// 		{
// 			price = kg*1344;
// 		}
// 		else if (kg>2.5 && kg <=3 ) //1333.33
// 		{
// 			price = kg*1333.33;
// 		}
// 		else if (kg>3 && kg <=3.5 ) //1242.86
// 		{
// 			price = kg*1242.86;
// 		}
// 		else if (kg>3.5 && kg <=4 ) //1137.5
// 		{
// 			price = kg*1137.5;
// 		}
// 		else if (kg>4 && kg <=4.5 ) //1088.89
// 		{
// 			price = kg*1088.89;
// 		}
// 		else if (kg>4.5 && kg <=5 ) //1018
// 		{
// 			price = kg*1018;
// 		}
// 		else if (kg>5 && kg <=5.5 ) //1009.09
// 		{
// 			price = kg*1009.09;
// 		}
// 		else if (kg>5.5 && kg <=6 ) //961.67
// 		{
// 			price = kg*961.67;
// 		}
// 		else if (kg>6 && kg <=6.5 ) //944.62
// 		{
// 			price = kg*944.62;
// 		}
// 		else if (kg>6.5 && kg <=7 ) //908.57
// 		{
// 			price = kg*908.57;
// 		}
// 		else if (kg>7 && kg <=7.5 ) //898.67
// 		{
// 			price = kg*898.67;
// 		}
// 		else if (kg>7.5 && kg <=8 ) //868.75
// 		{
// 			price = kg*868.75;
// 		}
// 		else if (kg>8 && kg <=8.5 ) //862.35
// 		{
// 			price = kg*862.35;
// 		}
// 		else if (kg>8.5 && kg <=9 ) //837.78
// 		{
// 			price = kg*837.78;
// 		}
// 		else if (kg>9 && kg <=9.5 ) //833.68
// 		{
// 			price = kg*833.68;
// 		}
// 		else if (kg>9.5 && kg <=10 ) //813
// 		{
// 			price = kg*813;
// 		}
// 		else if (kg>10 && kg <=10.5 ) //790.48
// 		{
// 			price = kg*790.48;
// 		}
// 		else if (kg>10.5 && kg <=11 ) //765.45
// 		{
// 			price = kg*765.45;
// 		}
// 		else if (kg>11 && kg <=11.5 ) //757.39
// 		{
// 			price = kg*757.39;
// 		}
// 		else if (kg>11.5 && kg <=12 ) //736.67
// 		{
// 			price = kg*736.67;
// 		}
// 		else if (kg>12 && kg <=12.5 ) //730.4
// 		{
// 			price = kg*730.4;
// 		}
// 		else if (kg>12.5 && kg <=13 ) //712.31
// 		{
// 			price = kg*712.31;
// 		}
// 		else if (kg>13 && kg <=13.5 ) //706.67
// 		{
// 			price = kg*706.67;
// 		}
// 		else if (kg>13.5 && kg <=14 ) //690.71
// 		{
// 			price = kg*690.71;
// 		}
// 		else if (kg>14 && kg <=14.5 ) //686.9
// 		{
// 			price = kg*686.9;
// 		}
// 		else if (kg>14.5 && kg <=15 ) //672.67
// 		{
// 			price = kg*672.67;
// 		}
// 		else if (kg>15 && kg <=15.5 ) //669.68
// 		{
// 			price = kg*669.68;
// 		}
// 		else if (kg>15.5 && kg <=16 ) //656.25
// 		{
// 			price = kg*656.25;
// 		}
// 		else if (kg>16 && kg <=16.5 ) //653.94
// 		{
// 			price = kg*653.94;
// 		}
// 		else if (kg>16.5 && kg <=17 ) //642.35
// 		{
// 			price = kg*642.35;
// 		}
// 		else if (kg>17 && kg <=17.5 ) //640.57
// 		{
// 			price = kg*640.57;
// 		}
// 		else if (kg>17.5 && kg <=18 ) //629.44
// 		{
// 			price = kg*629.44;
// 		}
// 		else if (kg>18 && kg <=18.5 ) //628.11
// 		{
// 			price = kg*628.11;
// 		}
// 		else if (kg>18.5 && kg <=19 ) //618.42
// 		{
// 			price = kg*618.42;
// 		}
// 		else if (kg>19 && kg <=19.5 ) //617.44
// 		{
// 			price = kg*617.44;
// 		}
// 		else if (kg>19.5 && kg <=20 ) //608
// 		{
// 			price = kg*608;
// 		}
// 		else if (kg>20 && kg <=45 ) //719
// 		{
// 			price = kg*719;
// 		}
// 		else if (kg>45 && kg <=71 ) //674
// 		{
// 			price = kg*674;
// 		}
// 		else if (kg>71 && kg <=100 ) //627
// 		{
// 			price = kg*627;
// 		}
// 		else if (kg>100) //628
// 		{
// 			price = kg*628;
// 		}
// 		else {
// 			price = kg*0;
// 		}

//     return price;
// }

function exUsaCanadaFedex(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //905
          {
              price = kg*905;
          }
          else if (kg>0.5 && kg <= 1) //1,890
          {
              price = kg*1,890;
          }
          else if (kg>1 && kg <=1.5 ) //1,890
          {
              price = (float) (kg*1,890);
          }
          else if (kg>1.5 && kg <=2 ) //1,540
          {
              price = kg*1,540;
          }
          else if (kg>2 && kg <=2.5 ) //1,335
          {
              price = kg*1,335;
          }
          else if (kg>2.5 && kg <=3 ) //1,236
          {
              price = kg*1,236;
          }
          else if (kg>3 && kg <=3.5 ) //1,087
          {
              price = kg*1,087;
          }
          else if (kg>3.5 && kg <=4 ) //1,043
          {
              price = kg*1,043;
          }
          else if (kg>4 && kg <=4.5 ) //998
          {
              price = kg*998;
          }
          else if (kg>4.5 && kg <=5 ) //976
          {
              price = kg*976;
          }
          else if (kg>5 && kg <=5.5 ) //946
          {
              price = kg*946;
          }
          else if (kg>5.5 && kg <=6 ) //871
          {
              price = kg*871;
          }
          else if (kg>6 && kg <=6.5 ) //833
          {
              price = kg*833;
          }
          else if (kg>6.5 && kg <=7 ) //811
          {
              price = kg*811;
          }
          else if (kg>7 && kg <=7.5 ) //784
          {
              price = kg*784;
          }
          else if (kg>7.5 && kg <=8 ) //768
          {
              price = kg*768;
          }
          else if (kg>8 && kg <=8.5 ) //746
          {
              price = kg*746;
          }
          else if (kg>8.5 && kg <=9 ) //734
          {
              price = kg*734;
          }
          else if (kg>9 && kg <=9.5 ) //717
          {
              price = kg*717;
          }
          else if (kg>9.5 && kg <=10 ) //707
          {
              price = kg*707;
          }
          else if (kg>10 && kg <=10.5 ) //694
          {
              price = kg*694;
          }
          else if (kg>10.5 && kg <=11 ) //748
          {
              price = kg*748;
          }
          else if (kg>11 && kg <=11.5 ) //724
          {
              price = kg*724;
          }
          else if (kg>11.5 && kg <=12 ) //707
          {
              price = kg*707;
          }
          else if (kg>12 && kg <=12.5 ) //686
          {
              price = kg*686;
          }
          else if (kg>12.5 && kg <=13 ) //672
          {
              price = kg*672;
          }
          else if (kg>13 && kg <=13.5 ) //654
          {
              price = kg*654;
          }
          else if (kg>13.5 && kg <=14 ) //642
          {
              price = kg*642;
          }
          else if (kg>14 && kg <=14.5 ) //627
          {
              price = kg*627;
          }
          else if (kg>14.5 && kg <=15 ) //617
          {
              price = kg*617;
          }
          else if (kg>15 && kg <=15.5 ) //603
          {
              price = kg*603;
          }
          else if (kg>15.5 && kg <=16 ) //594
          {
              price = kg*594;
          }
          else if (kg>16 && kg <=16.5 ) //583
          {
              price = kg*583;
          }
          else if (kg>16.5 && kg <=17 ) //575
          {
              price = kg*575;
          }
          else if (kg>17 && kg <=17.5 ) //564
          {
              price = kg*564;
          }
          else if (kg>17.5 && kg <=18 ) //558
          {
              price = kg*558;
          }
          else if (kg>18 && kg <=18.5 ) //548
          {
              price = kg*548;
          }
          else if (kg>18.5 && kg <=19 ) //542
          {
              price = kg*542;
          }
          else if (kg>19 && kg <=19.5 ) //534
          {
              price = kg*534;
          }
          else if (kg>19.5 && kg <=20 ) //528
          {
              price = kg*528;
          }
		  else if (kg>20 && kg <=21 ) //521
          {
              price = kg*521;
          }
          else if (kg>20 && kg <=45 ) //582
          {
              price = kg*582;
          }
          else if (kg>45 && kg <=71 ) //383
          {
              price = kg*383;
          }
          else if (kg>71 && kg <=100 ) //595
          {
              price = kg*595;
          }
          else if (kg>100) //590
          {
              price = kg*590;
          }
          else {
              price = kg*0;
          }
      return price;
  }

function exUsaCanadaUPS(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //820
          {
              price = kg*820;
          }
          else if (kg>0.5 && kg <= 1) //1,640
          {
              price = kg*1,640;
          }
          else if (kg>1 && kg <=1.5 ) //1,640
          {
              price = (float) (kg*1,640);
          }
          else if (kg>1.5 && kg <=2 ) //1,333
          {
              price = kg*1,333;
          }
          else if (kg>2 && kg <=2.5 ) //1,150
          {
              price = kg*1,150;
          }
          else if (kg>2.5 && kg <=3 ) //1,064
          {
              price = kg*1,064;
          }
          else if (kg>3 && kg <=3.5 ) //967
          {
              price = kg*967;
          }
          else if (kg>3.5 && kg <=4 ) //914
          {
              price = kg*914;
          }
          else if (kg>4 && kg <=4.5 ) //858
          {
              price = kg*858;
          }
          else if (kg>4.5 && kg <=5 ) //829
          {
              price = kg*829;
          }
          else if (kg>5 && kg <=5.5 ) //794
          {
              price = kg*794;
          }
          else if (kg>5.5 && kg <=6 ) //758
          {
              price = kg*758;
          }
          else if (kg>6 && kg <=6.5 ) //723
          {
              price = kg*723;
          }
          else if (kg>6.5 && kg <=7 ) //705
          {
              price = kg*705;
          }
          else if (kg>7 && kg <=7.5 ) //679
          {
              price = kg*679;
          }
          else if (kg>7.5 && kg <=8 ) //665
          {
              price = kg*665;
          }
          else if (kg>8 && kg <=8.5 ) //645
          {
              price = kg*645;
          }
          else if (kg>8.5 && kg <=9 ) //635
          {
              price = kg*635;
          }
          else if (kg>9 && kg <=9.5 ) //619
          {
              price = kg*619;
          }
          else if (kg>9.5 && kg <=10 ) //612
          {
              price = kg*612;
          }
          else if (kg>10 && kg <=10.5 ) //598
          {
              price = kg*598;
          }
          else if (kg>10.5 && kg <=11 ) //593
          {
              price = kg*593;
          }
          else if (kg>11 && kg <=11.5 ) //580
          {
              price = kg*580;
          }
          else if (kg>11.5 && kg <=12 ) //572
          {
              price = kg*572;
          }
          else if (kg>12 && kg <=12.5 ) //560
          {
              price = kg*560;
          }
          else if (kg>12.5 && kg <=13 ) //554
          {
              price = kg*554;
          }
          else if (kg>13 && kg <=13.5 ) //541
          {
              price = kg*541;
          }
          else if (kg>13.5 && kg <=14 ) //533
          {
              price = kg*533;
          }
          else if (kg>14 && kg <=14.5 ) //521
          {
              price = kg*521;
          }
          else if (kg>14.5 && kg <=15 ) //514
          {
              price = kg*514;
          }
          else if (kg>15 && kg <=15.5 ) //505
          {
              price = kg*505;
          }
          else if (kg>15.5 && kg <=16 ) //495
          {
              price = kg*495;
          }
          else if (kg>16 && kg <=16.5 ) //483
          {
              price = kg*483;
          }
          else if (kg>16.5 && kg <=17 ) //473
          {
              price = kg*473;
          }
          else if (kg>17 && kg <=17.5 ) //462
          {
              price = kg*462;
          }
          else if (kg>17.5 && kg <=18 ) //455
          {
              price = kg*455;
          }
          else if (kg>18 && kg <=18.5 ) //447
          {
              price = kg*447;
          }
          else if (kg>18.5 && kg <=19 ) //439
          {
              price = kg*439;
          }
          else if (kg>19 && kg <=19.5 ) //429
          {
              price = kg*429;
          }
          else if (kg>19.5 && kg <=20 ) //423
          {
              price = kg*423;
          }
          else if (kg>20 && kg <=21 ) //421
          {
              price = kg*421;
          }
          else if (kg>21 && kg <=45 ) //421
          {
              price = kg*421;
          }
          else if (kg>45 && kg <=71 ) //421
          {
              price = kg*421;
          }
          else if (kg>71 && kg <=100 ) //421
          {
              price = kg*421;
          }
          else if (kg>100) //396
          {
              price = kg*421;
          }
          else {
              price = kg*0;
          }
      return price;
  }

function exUsaCanadaTNT(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //850
          {
              price = kg*850;
          }
          else if (kg>0.5 && kg <= 1) //1,700
          {
              price = kg*1,700;
          }
          else if (kg>1 && kg <=1.5 ) //1,700
          {
              price = (float) (kg*1,700);
          }
          else if (kg>1.5 && kg <=2 ) //1,280
          {
              price = kg*1,280;
          }
          else if (kg>2 && kg <=2.5 ) //1,040
          {
              price = kg*1,040;
          }
          else if (kg>2.5 && kg <=3 ) //924
          {
              price = kg*924;
          }
          else if (kg>3 && kg <=3.5 ) //820
          {
              price = kg*820;
          }
          else if (kg>3.5 && kg <=4 ) //766
          {
              price = kg*766;
          }
          else if (kg>4 && kg <=4.5 ) //708
          {
              price = kg*708;
          }
          else if (kg>4.5 && kg <=5 ) //678
          {
              price = kg*678;
          }
          else if (kg>5 && kg <=5.5 ) //642
          {
              price = kg*642;
          }
          else if (kg>5.5 && kg <=6 ) //622
          {
              price = kg*622;
          }
          else if (kg>6 && kg <=6.5 ) //597
          {
              price = kg*597;
          }
          else if (kg>6.5 && kg <=7 ) //585
          {
              price = kg*585;
          }
          else if (kg>7 && kg <=7.5 ) //564
          {
              price = kg*564;
          }
          else if (kg>7.5 && kg <=8 ) //556
          {
              price = kg*556;
          }
          else if (kg>8 && kg <=8.5 ) //540
          {
              price = kg*540;
          }
          else if (kg>8.5 && kg <=9 ) //534
          {
              price = kg*534;
          }
          else if (kg>9 && kg <=9.5 ) //521
          {
              price = kg*521;
          }
          else if (kg>9.5 && kg <=10 ) //517
          {
              price = kg*517;
          }
          else if (kg>10 && kg <=10.5 ) //507
          {
              price = kg*507;
          }
          else if (kg>10.5 && kg <=11 ) //499
          {
              price = kg*499;
          }
          else if (kg>11 && kg <=11.5 ) //484
          {
              price = kg*484;
          }
          else if (kg>11.5 && kg <=12 ) //476
          {
              price = kg*476;
          }
          else if (kg>12 && kg <=12.5 ) //463
          {
              price = kg*463;
          }
          else if (kg>12.5 && kg <=13 ) //457
          {
              price = kg*457;
          }
          else if (kg>13 && kg <=13.5 ) //445
          {
              price = kg*445;
          }
          else if (kg>13.5 && kg <=14 ) //440
          {
              price = kg*440;
          }
          else if (kg>14 && kg <=14.5 ) //431
          {
              price = kg*431;
          }
          else if (kg>14.5 && kg <=15 ) //426
          {
              price = kg*426;
          }
          else if (kg>15 && kg <=15.5 ) //417
          {
              price = kg*417;
          }
          else if (kg>15.5 && kg <=16 ) //414
          {
              price = kg*414;
          }
          else if (kg>16 && kg <=16.5 ) //406
          {
              price = kg*406;
          }
          else if (kg>16.5 && kg <=17 ) //402
          {
              price = kg*402;
          }
          else if (kg>17 && kg <=17.5 ) //396
          {
              price = kg*396;
          }
          else if (kg>17.5 && kg <=18 ) //393
          {
              price = kg*393;
          }
          else if (kg>18 && kg <=18.5 ) //387
          {
              price = kg*387;
          }
          else if (kg>18.5 && kg <=19 ) //384
          {
              price = kg*384;
          }
          else if (kg>19 && kg <=19.5 ) //379
          {
              price = kg*379;
          }
          else if (kg>19.5 && kg <=20 ) //377
          {
              price = kg*377;
          }
          else if (kg>20 && kg <=21 ) //372
          {
              price = kg*372;
          }
          else if (kg>21 && kg <=50 ) //338
          {
              price = kg*338;
          }
          else if (kg>50 && kg <=70 ) //334
          {
              price = kg*334;
          }
          else if (kg>70 && kg <=100 ) //310
          {
              price = kg*310;
          }
          else if (kg>100 && kg <=250 ) //308
          {
              price = kg*308;
          }
          else if (kg>250) //302
          {
              price = kg*302;
          }
          else {
              price = kg*0;
          }
      return price;
  }

function imUsaCanadaTNT(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //1,085
          {
              price = kg*1,085;
          }
          else if (kg>0.5 && kg <= 1) //2,170
          {
              price = kg*2,170;
          }
          else if (kg>1 && kg <=1.5 ) //2,170
          {
              price = (float) (kg*2,170);
          }
          else if (kg>1.5 && kg <=2 ) //1,587
          {
              price = kg*1,587;
          }
          else if (kg>2 && kg <=2.5 ) //1,295
          {
              price = kg*1,295;
          }
          else if (kg>2.5 && kg <=3 ) //1,124
          {
              price = kg*1,124;
          }
          else if (kg>3 && kg <=3.5 ) //1,000
          {
              price = kg*1,000;
          }
          else if (kg>3.5 && kg <=4 ) //920
          {
              price = kg*920;
          }
          else if (kg>4 && kg <=4.5 ) //855
          {
              price = kg*855;
          }
          else if (kg>4.5 && kg <=5 ) //809
          {
              price = kg*809;
          }
          else if (kg>5 && kg <=5.5 ) //768
          {
              price = kg*768;
          }
          else if (kg>5.5 && kg <=6 ) //738
          {
              price = kg*738;
          }
          else if (kg>6 && kg <=6.5 ) //708
          {
              price = kg*708;
          }
          else if (kg>6.5 && kg <=7 ) //688
          {
              price = kg*688;
          }
          else if (kg>7 && kg <=7.5 ) //667
          {
              price = kg*667;
          }
          else if (kg>7.5 && kg <=8 ) //652
          {
              price = kg*652;
          }
          else if (kg>8 && kg <=8.5 ) //636
          {
              price = kg*636;
          }
          else if (kg>8.5 && kg <=9 ) //625
          {
              price = kg*625;
          }
          else if (kg>9 && kg <=9.5 ) //611
          {
              price = kg*611;
          }
          else if (kg>9.5 && kg <=10 ) //602
          {
              price = kg*602;
          }
          else if (kg>10 && kg <=10.5 ) //592
          {
              price = kg*592;
          }
          else if (kg>10.5 && kg <=11 ) //585
          {
              price = kg*585;
          }
          else if (kg>11 && kg <=11.5 ) //568
          {
              price = kg*568;
          }
          else if (kg>11.5 && kg <=12 ) //556
          {
              price = kg*556;
          }
          else if (kg>12 && kg <=12.5 ) //543
          {
              price = kg*543;
          }
          else if (kg>12.5 && kg <=13 ) //532
          {
              price = kg*532;
          }
          else if (kg>13 && kg <=13.5 ) //520
          {
              price = kg*520;
          }
          else if (kg>13.5 && kg <=14 ) //511
          {
              price = kg*511;
          }
          else if (kg>14 && kg <=14.5 ) //501
          {
              price = kg*501;
          }
          else if (kg>14.5 && kg <=15 ) //494
          {
              price = kg*494;
          }
          else if (kg>15 && kg <=15.5 ) //485
          {
              price = kg*485;
          }
          else if (kg>15.5 && kg <=16 ) //478
          {
              price = kg*478;
          }
          else if (kg>16 && kg <=16.5 ) //471
          {
              price = kg*471;
          }
          else if (kg>16.5 && kg <=17 ) //465
          {
              price = kg*465;
          }
          else if (kg>17 && kg <=17.5 ) //458
          {
              price = kg*458;
          }
          else if (kg>17.5 && kg <=18 ) //453
          {
              price = kg*453;
          }
          else if (kg>18 && kg <=18.5 ) //447
          {
              price = kg*447;
          }
          else if (kg>18.5 && kg <=19 ) //442
          {
              price = kg*442;
          }
          else if (kg>19 && kg <=19.5 ) //436
          {
              price = kg*436;
          }
          else if (kg>19.5 && kg <=20 ) //432
          {
              price = kg*432;
          }
          else if (kg>20 && kg <=21 ) //428
          {
              price = kg*428;
          }
          else if (kg>21 && kg <=50 ) //378
          {
              price = kg*378;
          }
          else if (kg>50 && kg <=70 ) //372
          {
              price = kg*372;
          }
          else if (kg>70 && kg <=100 ) //338
          {
              price = kg*338;
          }
          else if (kg>100 && kg <=250 ) //336
          {
              price = kg*336;
          }
          else if (kg>250) //330
          {
              price = kg*330;
          }
          else {
              price = kg*0;
          }
      return price;
  }

function exAusFedex(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //1165
          {
              price = kg*1165;
          }
          else if (kg>0.5 && kg <= 1) //2,330
          {
              price = kg*2,330;
          }
          else if (kg>1 && kg <=1.5 ) //2,330
          {
              price = (float) (kg*2,330);
          }
          else if (kg>1.5 && kg <=2 ) //1,593
          {
              price = kg*1,593;
          }
          else if (kg>2 && kg <=2.5 ) //1,225
          {
              price = kg*1,225;
          }
          else if (kg>2.5 && kg <=3 ) //1,108
          {
              price = kg*1,108;
          }
          else if (kg>3 && kg <=3.5 ) //943
          {
              price = kg*943;
          }
          else if (kg>3.5 && kg <=4 ) //869
          {
              price = kg*869;
          }
          else if (kg>4 && kg <=4.5 ) //798
          {
              price = kg*798;
          }
          else if (kg>4.5 && kg <=5 ) //756
          {
              price = kg*756;
          }
          else if (kg>5 && kg <=5.5 ) //710
          {
              price = kg*710;
          }
          else if (kg>5.5 && kg <=6 ) //658
          {
              price = kg*658;
          }
          else if (kg>6 && kg <=6.5 ) //632
          {
              price = kg*632;
          }
          else if (kg>6.5 && kg <=7 ) //617
          {
              price = kg*617;
          }
          else if (kg>7 && kg <=7.5 ) //596
          {
              price = kg*596;
          }
          else if (kg>7.5 && kg <=8 ) //585
          {
              price = kg*585;
          }
          else if (kg>8 && kg <=8.5 ) //569
          {
              price = kg*569;
          }
          else if (kg>8.5 && kg <=9 ) //561
          {
              price = kg*561;
          }
          else if (kg>9 && kg <=9.5 ) //548
          {
              price = kg*548;
          }
          else if (kg>9.5 && kg <=10 ) //542
          {
              price = kg*542;
          }
          else if (kg>10 && kg <=10.5 ) //531
          {
              price = kg*531;
          }
          else if (kg>10.5 && kg <=11 ) //517
          {
              price = kg*517;
          }
          else if (kg>11 && kg <=11.5 ) //500
          {
              price = kg*500;
          }
          else if (kg>11.5 && kg <=12 ) //489
          {
              price = kg*489;
          }
          else if (kg>12 && kg <=12.5 ) //474
          {
              price = kg*474;
          }
          else if (kg>12.5 && kg <=13 ) //465
          {
              price = kg*465;
          }
          else if (kg>13 && kg <=13.5 ) //452
          {
              price = kg*452;
          }
          else if (kg>13.5 && kg <=14 ) //444
          {
              price = kg*444;
          }
          else if (kg>14 && kg <=14.5 ) //434
          {
              price = kg*434;
          }
          else if (kg>14.5 && kg <=15 ) //427
          {
              price = kg*427;
          }
          else if (kg>15 && kg <=15.5 ) //417
          {
              price = kg*417;
          }
          else if (kg>15.5 && kg <=16 ) //412
          {
              price = kg*412;
          }
          else if (kg>16 && kg <=16.5 ) //403
          {
              price = kg*403;
          }
          else if (kg>16.5 && kg <=17 ) //398
          {
              price = kg*398;
          }
          else if (kg>17 && kg <=17.5 ) //390
          {
              price = kg*390;
          }
          else if (kg>17.5 && kg <=18 ) //386
          {
              price = kg*386;
          }
          else if (kg>18 && kg <=18.5 ) //379
          {
              price = kg*379;
          }
          else if (kg>18.5 && kg <=19 ) //376
          {
              price = kg*376;
          }
          else if (kg>19 && kg <=19.5 ) //369
          {
              price = kg*369;
          }
          else if (kg>19.5 && kg <=20 ) //366
          {
              price = kg*366;
          }
          else if (kg>20 && kg <=21 ) //360
          {
              price = kg*360;
          }
          else if (kg>21 && kg <=45 ) //461
          {
              price = kg*461;
          }
          else if (kg>45 && kg <=71 ) //424
          {
              price = kg*424;
          }
          else if (kg>71 && kg <=100 ) //409
          {
              price = kg*409;
          }
          else if (kg>100) //396
          {
              price = kg*396;
          }
          else {
              price = kg*0;
          }
      return price;
  }

function exAusTNT(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //865
          {
              price = kg*865;
          }
          else if (kg>0.5 && kg <= 1) //1,730
          {
              price = kg*1730;
          }
          else if (kg>1 && kg <=1.5 ) //1,730
          {
              price = (float) (kg*1730);
          }
          else if (kg>1.5 && kg <=2 ) //1,367
          {
              price = kg*1367;
          }
          else if (kg>2 && kg <=2.5 ) //1,100
          {
              price = kg*1100;
          }
          else if (kg>2.5 && kg <=3 ) //1,008
          {
              price = kg*1008;
          }
          else if (kg>3 && kg <=3.5 ) //887
          {
              price = kg*887;
          }
          else if (kg>3.5 && kg <=4 ) //846
          {
              price = kg*846;
          }
          else if (kg>4 && kg <=4.5 ) //773
          {
              price = kg*773;
          }
          else if (kg>4.5 && kg <=5 ) //753
          {
              price = kg*753;
          }
          else if (kg>5 && kg <=5.5 ) //704
          {
              price = kg*704;
          }
          else if (kg>5.5 && kg <=6 ) //695
          {
              price = kg*695;
          }
          else if (kg>6 && kg <=6.5 ) //658
          {
              price = kg*658;
          }
          else if (kg>6.5 && kg <=7 ) //652
          {
              price = kg*652;
          }
          else if (kg>7 && kg <=7.5 ) //624
          {
              price = kg*624;
          }
          else if (kg>7.5 && kg <=8 ) //623
          {
              price = kg*623;
          }
          else if (kg>8 && kg <=8.5 ) //600
          {
              price = kg*600;
          }
          else if (kg>8.5 && kg <=9 ) //599
          {
              price = kg*599;
          }
          else if (kg>9 && kg <=9.5 ) //580
          {
              price = kg*580;
          }
          else if (kg>9.5 && kg <=10 ) //581
          {
              price = kg*581;
          }
          else if (kg>10 && kg <=10.5 ) //565
          {
              price = kg*565;
          }
          else if (kg>10.5 && kg <=11 ) //568
          {
              price = kg*568;
          }
          else if (kg>11 && kg <=11.5 ) //547
          {
              price = kg*547;
          }
          else if (kg>11.5 && kg <=12 ) //543
          {
              price = kg*543;
          }
          else if (kg>12 && kg <=12.5 ) //526
          {
              price = kg*526;
          }
          else if (kg>12.5 && kg <=13 ) //522
          {
              price = kg*522;
          }
          else if (kg>13 && kg <=13.5 ) //507
          {
              price = kg*507;
          }
          else if (kg>13.5 && kg <=14 ) //505
          {
              price = kg*505;
          }
          else if (kg>14 && kg <=14.5 ) //491
          {
              price = kg*491;
          }
          else if (kg>14.5 && kg <=15 ) //490
          {
              price = kg*490;
          }
          else if (kg>15 && kg <=15.5 ) //478
          {
              price = kg*478;
          }
          else if (kg>15.5 && kg <=16 ) //477
          {
              price = kg*477;
          }
          else if (kg>16 && kg <=16.5 ) //466
          {
              price = kg*466;
          }
          else if (kg>16.5 && kg <=17 ) //465
          {
              price = kg*465;
          }
          else if (kg>17 && kg <=17.5 ) //455
          {
              price = kg*455;
          }
          else if (kg>17.5 && kg <=18 ) //455
          {
              price = kg*455;
          }
          else if (kg>18 && kg <=18.5 ) //446
          {
              price = kg*446;
          }
          else if (kg>18.5 && kg <=19 ) //446
          {
              price = kg*446;
          }
          else if (kg>19 && kg <=19.5 ) //438
          {
              price = kg*438;
          }
          else if (kg>19.5 && kg <=20 ) //438
          {
              price = kg*438;
          }
          else if (kg>20 && kg <=21 ) //430
          {
              price = kg*430;
          }
          else if (kg>21 && kg <=50 ) //399
          {
              price = kg*399;
          }
          else if (kg>50 && kg <=70 ) //395
          {
              price = kg*395;
          }
          else if (kg>70 && kg <=100 ) //383
          {
              price = kg*383;
          }
          else if (kg>100 && kg <=250 ) //381
          {
              price = kg*381;
          }
          else if (kg>250) //375
          {
              price = kg*375;
          }
          else {
              price = kg*0;
          }
      return price;
  }

function exAusUPS(kG){
    kg = kG;
    
    if(kg>0 && kg <= 0.5) //875
          {
              price = kg*875;
          }
          else if (kg>0.5 && kg <= 1) //1,750
          {
              price = kg*1,750;
          }
          else if (kg>1 && kg <=1.5 ) //1,750
          {
              price = (float) (kg*1,750);
          }
          else if (kg>1.5 && kg <=2 ) //1,427
          {
              price = kg*1,427;
          }
          else if (kg>2 && kg <=2.5 ) //1,200
          {
              price = kg*1,200;
          }
          else if (kg>2.5 && kg <=3 ) //1,120
          {
              price = kg*1,120;
          }
          else if (kg>3 && kg <=3.5 ) //997
          {
              price = kg*997;
          }
          else if (kg>3.5 && kg <=4 ) //946
          {
              price = kg*946;
          }
          else if (kg>4 && kg <=4.5 ) //878
          {
              price = kg*878;
          }
          else if (kg>4.5 && kg <=5 ) //851
          {
              price = kg*851;
          }
          else if (kg>5 && kg <=5.5 ) //804
          {
              price = kg*804;
          }
          else if (kg>5.5 && kg <=6 ) //927
          {
              price = kg*927;
          }
          else if (kg>6 && kg <=6.5 ) //877
          {
              price = kg*877;
          }
          else if (kg>6.5 && kg <=7 ) //854
          {
              price = kg*854;
          }
          else if (kg>7 && kg <=7.5 ) //817
          {
              price = kg*817;
          }
          else if (kg>7.5 && kg <=8 ) //801
          {
              price = kg*801;
          }
          else if (kg>8 && kg <=8.5 ) //771
          {
              price = kg*771;
          }
          else if (kg>8.5 && kg <=9 ) //761
          {
              price = kg*761;
          }
          else if (kg>9 && kg <=9.5 ) //737
          {
              price = kg*737;
          }
          else if (kg>9.5 && kg <=10 ) //728
          {
              price = kg*728;
          }
          else if (kg>10 && kg <=10.5 ) //709
          {
              price = kg*709;
          }
          else if (kg>10.5 && kg <=11 ) //699
          {
              price = kg*699;
          }
          else if (kg>11 && kg <=11.5 ) //678
          {
              price = kg*678;
          }
          else if (kg>11.5 && kg <=12 ) //670
          {
              price = kg*670;
          }
          else if (kg>12 && kg <=12.5 ) //652
          {
              price = kg*652;
          }
          else if (kg>12.5 && kg <=13 ) //646
          {
              price = kg*646;
          }
          else if (kg>13 && kg <=13.5 ) //625
          {
              price = kg*625;
          }
          else if (kg>13.5 && kg <=14 ) //616
          {
              price = kg*616;
          }
          else if (kg>14 && kg <=14.5 ) //597
          {
              price = kg*597;
          }
          else if (kg>14.5 && kg <=15 ) //589
          {
              price = kg*589;
          }
          else if (kg>15 && kg <=15.5 ) //573
          {
              price = kg*573;
          }
          else if (kg>15.5 && kg <=16 ) //565
          {
              price = kg*565;
          }
          else if (kg>16 && kg <=16.5 ) //549
          {
              price = kg*549;
          }
          else if (kg>16.5 && kg <=17 ) //542
          {
              price = kg*542;
          }
          else if (kg>17 && kg <=17.5 ) //529
          {
              price = kg*529;
          }
          else if (kg>17.5 && kg <=18 ) //523
          {
              price = kg*523;
          }
          else if (kg>18 && kg <=18.5 ) //510
          {
              price = kg*510;
          }
          else if (kg>18.5 && kg <=19 ) //505
          {
              price = kg*505;
          }
          else if (kg>19 && kg <=19.5 ) //493
          {
              price = kg*493;
          }
          else if (kg>19.5 && kg <=20 ) //489
          {
              price = kg*489;
          }
          else if (kg>20 && kg <=21 ) //477
          {
              price = kg*360;
          }
          else if (kg>21 && kg <=45 ) //477
          {
              price = kg*477;
          }
          else if (kg>45 && kg <=71 ) //476
          {
              price = kg*476;
          }
          else if (kg>71 && kg <=100 ) //477
          {
              price = kg*477;
          }
          else if (kg>100) //477
          {
              price = kg*477;
          }
          else {
              price = kg*0;
          }
      return price;
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

// async function sendMsg() {
//   if (liff.getContext().type !== "none") {
//     await liff.sendMessages([
//       {
//         "type": "flex",
//         "altText": "Flex Message",
//         "contents": {
//           "type": "bubble",
//           "direction": "ltr",
//           "hero": {
//             "type": "image",
//             "url": "https://www.img.in.th/images/8101764dd39238f4e26d8110cd237fae.png",
//             "size": "full",
//             "aspectRatio": "1.51:1",
//             "aspectMode": "fit"
//           },
//           "body": {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "คำนวณค่าขนส่ง",
//                 "weight": "bold",
//                 "size": "lg",
//                 "align": "center",
//                 "contents": []
//               },
//               {
//                 "type": "box",
//                 "layout": "horizontal",
//                 "margin": "lg",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "Shipping : ",
//                     "weight": "bold",
//                     "contents": []
//                   },
//                   {
//                     "type": "text",
//                     "text": ""+shipping,
//                     "align": "end",
//                     "contents": []
//                   }
//                 ]
//               },
//               {
//                 "type": "box",
//                 "layout": "horizontal",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "Country : ",
//                     "weight": "bold",
//                     "contents": []
//                   },
//                   {
//                     "type": "text",
//                     "text": ""+country_1,
//                     "align": "end",
//                     "contents": []
//                   }
//                 ]
//               },
//               {
//                 "type": "box",
//                 "layout": "horizontal",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "น้ำหนัก :",
//                     "weight": "bold",
//                     "contents": []
//                   },
//                   {
//                     "type": "text",
//                     "text": KgTotal+" Kg.",
//                     "align": "end",
//                     "contents": []
//                   }
//                 ]
//               },
//               {
//                 "type": "box",
//                 "layout": "horizontal",
//                 "margin": "lg",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": ""+priceTotal,
//                     "weight": "bold",
//                     "size": "xxl",
//                     "color": "#229104FF",
//                     "align": "center",
//                     "margin": "none",
//                     "contents": []
//                   },
//                   {
//                     "type": "text",
//                     "text": "Bath",
//                     "weight": "bold",
//                     "align": "end",
//                     "gravity": "center",
//                     "margin": "none",
//                     "contents": []
//                   }
//                 ]
//               },
//               {
//                 "type": "text",
//                 "text": "*ราคาค่าขนส่งคำนวณจาก"+status_1,
//                 "size": "xs",
//                 "color": "#777777FF",
//                 "align": "center",
//                 "margin": "lg",
//                 "contents": []
//               }
//             ]
//           }
//         }
//       }
//     ]);
//     closed();
//   }
// }

async function sendMsg() {
    if (liff.getContext().type !== "none") {
      await liff.sendMessages([
        {
            
                "type": "text",
                "text": "ประเภทขนส่ง :"+shipping+"\n\nประเทศต้นทาง : Thailand\nประเทศปลายทาง : "+country+"\n\nประเภทสินค้า : "+typeproductLIFF+"\n\nน้ำหนัก : "+weightKG+" KG.\n\nสนใจใช้บริการ : "+agentShip+"\n\nราคาคำนวนเบื้องต้น : "+priceLIFF+"\n\nชื่อผู้ส่ง : "+nameLIFF+"\nเบอร์โทร : "+telLIFF+"\nE-mail : "+emailLIFF
              
        }
      ]);
      closed();
    }
  }