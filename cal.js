
var country, weightKG, widht, lenght, height, kg, dimention;
var valurRate;
var shipping;
var KgTotal;
var text, country_1, exim;

function myFunction() {
  var status;

  country = document.getElementById("country").value;
  weightKG = document.getElementById("weight").value;
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;
  // exim = document.getElementById("exim").value;

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
    valurRate = KgTotal * 1500;
    text = valurRate;
    status = "Dimention";
  } else if (kg > dimention) {
    KgTotal = kg;
    valurRate = KgTotal * 1500;
    text = valurRate;
    status = "Kg";
  } else {
    text = "";
  }

  addCommas(text)

   sessionStorage.setItem("weightKG", kg);
   sessionStorage.setItem("resultText", text);
   sessionStorage.setItem("countryResult", country_1);
   sessionStorage.setItem("shippingResult", shipping);
   sessionStorage.setItem("Status", status);

   window.location.replace("result.html");
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
            "type": "text",
            "text": "Hello, Pluk"
        }
      ])
      alert("Message sent")
    }
}


var country, weightKG, widht, lenght, height, kg, dimention;
var valurRate;
var shipping;
var KgTotal;
var text, country_1, exim;

function myFunction() {
  var status;

  country = document.getElementById("country").value;
  weightKG = document.getElementById("weight").value;
  widht = document.getElementById("width").value;
  lenght = document.getElementById("lenght").value;
  height = document.getElementById("height").value;
  // exim = document.getElementById("exim").value;

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
    valurRate = KgTotal * 1500;
    text = valurRate;
    status = "Dimention";
  } else if (kg > dimention) {
    KgTotal = kg;
    valurRate = KgTotal * 1500;
    text = valurRate;
    status = "Kg";
  } else {
    text = "";
  }

  addCommas(text)

   sessionStorage.setItem("weightKG", kg);
   sessionStorage.setItem("resultText", text);
   sessionStorage.setItem("countryResult", country_1);
   sessionStorage.setItem("shippingResult", shipping);
   sessionStorage.setItem("Status", status);

   window.location.replace("result.html");
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
          "type": "sticker",
          "stickerId": 1,
          "packageId": 1
        }
      ])
      alert("Message sent")
    }
}


