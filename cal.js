var country, weightKG, widht, lenght, height, kg, dimention;
var valurRate, text, exim, price;
var priceTotal = "";
var shipping = "";
var KgTotal = "";
var country_1 = "";
var status_1="";

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
    case "Australia":
     text = Aus(KgTotal);
      break;
    default:
     text = 0;
  }

  status_1 = status;
  priceTotal = addCommas(text);
  

  sessionStorage.setItem("weightKG", kg);
  sessionStorage.setItem("resultText", text);
  sessionStorage.setItem("countryResult", country_1);
  sessionStorage.setItem("shippingResult", shipping);
  sessionStorage.setItem("Status", status);

  // window.location.replace("result.html");
  sendMsg();
}

function ReplaceIndex() {
  window.location.replace("index.html");
  sessionStorage.removeItem("resultText");
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

function Aus(kg){
  kg = KgTotal;
  
  if(kg>0 && kg <= 0.5) //1140
		{
			price = kg*1140;
		}
		else if (kg>0.5 && kg <= 1) //2280
		{
			price = kg*2280;
		}
		else if (kg>1 && kg <=1.5 ) //1826.67
		{
			price = (float) (kg*1826.67);
		}
		else if (kg>1.5 && kg <=2 ) //1575
		{
			price = kg*1575;
		}
		else if (kg>2 && kg <=2.5 ) //1456
		{
			price = kg*1456;
		}
		else if (kg>2.5 && kg <=3 ) //1006.67
		{
			price = kg*1006.67;
		}
		else if (kg>3 && kg <=3.5 ) //951.43
		{
			price = kg*951.43;
		}
		else if (kg>3.5 && kg <=4 ) //892.5
		{
			price = kg*892.5;
		}
		else if (kg>4 && kg <=4.5 ) //862.22
		{
			price = kg*862.22;
		}
		else if (kg>4.5 && kg <=5 ) //822
		{
			price = kg*822;
		}
		else if (kg>5 && kg <=5.5 ) //707.27
		{
			price = kg*707.27;
		}
		else if (kg>5.5 && kg <=6 ) //676.67
		{
			price = kg*676.67;
		}
		else if (kg>6 && kg <=6.5 ) //661.54
		{
			price = kg*661.54;
		}
		else if (kg>6.5 && kg <=7 ) //638.57
		{
			price = kg*638.57;
		}
		else if (kg>7 && kg <=7.5 ) //628
		{
			price = kg*628;
		}
		else if (kg>7.5 && kg <=8 ) //610
		{
			price = kg*610;
		}
		else if (kg>8 && kg <=8.5 ) //603.53
		{
			price = kg*603.53;
		}
		else if (kg>8.5 && kg <=9 ) //588.89
		{
			price = kg*588.89;
		}
		else if (kg>9 && kg <=9.5 ) //583.16
		{
			price = kg*583.16;
		}
		else if (kg>9.5 && kg <=10 ) //571
		{
			price = kg*571;
		}
		else if (kg>10 && kg <=10.5 ) //648.57
		{
			price = kg*648.57;
		}
		else if (kg>10.5 && kg <=11 ) //627.27
		{
			price = kg*627.27;
		}
		else if (kg>11 && kg <=11.5 ) //614.78
		{
			price = kg*614.78;
		}
		else if (kg>11.5 && kg <=12 ) //595.83
		{
			price = kg*595.83;
		}
		else if (kg>12 && kg <=12.5 ) //585.6
		{
			price = kg*585.6;
		}
		else if (kg>12.5 && kg <=13 ) //570
		{
			price = kg*570;
		}
		else if (kg>13 && kg <=13.5 ) //560.74
		{
			price = kg*560.74;
		}
		else if (kg>13.5 && kg <=14 ) //547.14
		{
			price = kg*547.14;
		}
		else if (kg>14 && kg <=14.5 ) //540
		{
			price = kg*540;
		}
		else if (kg>14.5 && kg <=15 ) //528
		{
			price = kg*528;
		}
		else if (kg>15 && kg <=15.5 ) //521.29
		{
			price = kg*521.29;
		}
		else if (kg>15.5 && kg <=16 ) //510.63
		{
			price = kg*510.63;
		}
		else if (kg>16 && kg <=16.5 ) //505.45
		{
			price = kg*505.45;
		}
		else if (kg>16.5 && kg <=17 ) //495.29
		{
			price = kg*495.29;
		}
		else if (kg>17 && kg <=17.5 ) //490.86
		{
			price = kg*490.86;
		}
		else if (kg>17.5 && kg <=18 ) //482.22
		{
			price = kg*482.22;
		}
		else if (kg>18 && kg <=18.5 ) //477.84
		{
			price = kg*477.84;
		}
		else if (kg>18.5 && kg <=19 ) //470
		{
			price = kg*470;
		}
		else if (kg>19 && kg <=19.5 ) //466.67
		{
			price = kg*466.67;
		}
		else if (kg>19.5 && kg <=20 ) //459.5
		{
			price = kg*459.5;
		}
		else if (kg>20 && kg <=45 ) //529
		{
			price = kg*529;
		}
		else if (kg>45 && kg <=71 ) //544
		{
			price = kg*544;
		}
		else if (kg>71 && kg <=100 ) //518
		{
			price = kg*518;
		}
		else if (kg>100) //510
		{
			price = kg*510;
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

async function sendMsg() {
  if (liff.getContext().type !== "none") {
    await liff.sendMessages([
      {
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
          "type": "bubble",
          "direction": "ltr",
          "hero": {
            "type": "image",
            "url": "https://www.img.in.th/images/8101764dd39238f4e26d8110cd237fae.png",
            "size": "full",
            "aspectRatio": "1.51:1",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "คำนวนค่าขนส่ง",
                "weight": "bold",
                "size": "lg",
                "align": "center",
                "contents": []
              },
              {
                "type": "box",
                "layout": "horizontal",
                "margin": "lg",
                "contents": [
                  {
                    "type": "text",
                    "text": "Shipping : ",
                    "weight": "bold",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": ""+shipping,
                    "align": "end",
                    "contents": []
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "Country : ",
                    "weight": "bold",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": ""+country_1,
                    "align": "end",
                    "contents": []
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": "น้ำหนัก :",
                    "weight": "bold",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": KgTotal+" Kg.",
                    "align": "end",
                    "contents": []
                  }
                ]
              },
              {
                "type": "box",
                "layout": "horizontal",
                "margin": "lg",
                "contents": [
                  {
                    "type": "text",
                    "text": ""+priceTotal,
                    "weight": "bold",
                    "size": "xxl",
                    "color": "#229104FF",
                    "align": "center",
                    "margin": "none",
                    "contents": []
                  },
                  {
                    "type": "text",
                    "text": "Bath",
                    "weight": "bold",
                    "align": "end",
                    "gravity": "center",
                    "margin": "none",
                    "contents": []
                  }
                ]
              },
              {
                "type": "text",
                "text": "*ราคาค่าขนส่งคำนวนจาก"+status_1,
                "size": "xs",
                "color": "#777777FF",
                "align": "center",
                "margin": "lg",
                "contents": []
              }
            ]
          }
        }
      }
    ]);
    closed();
  }
}
