const wsUri = "wss://echo.websocket.org/";
const [inp] = document.getElementsByTagName("input");
const btnSend = document.querySelector(".btn__send");
const btnGeo = document.querySelector(".btn__geo");
const out = document.querySelector(".div__out");

let websocket;
let webOp = false;
let mapLink;

function pageLoaded() {
  if (webOp == false) {
    websocket = new WebSocket(wsUri);
  }

  btnSend.onclick = () => {
    const inpMes = inp.value;
    if (inpMes && webOp) {
      websocket.send(inpMes);
      wrt(inpMes, "send");
      console.log(inpMes);
      inp.value = "";
    }
  };
  websocket.onmessage = (evt) => {
    wrt(evt.data, "get");
    console.log(evt.data);
  };

  websocket.onopen = () => {
    webOp = true;
  };

  btnGeo.onclick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        console.log(coords.latitude, coords.longitude);
        mapLink = document.createElement("a");
        mapLink.href = `https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}`;
        mapLink.textContent = "Гео-локация";
        wrt(mapLink, "geo");
      });
    }
  };
}

function wrt(mes, dir) {
  let pre = document.createElement("p");
  //  pre.style.wordWrap = "break-word";
  if (dir != "geo") {
    pre.innerHTML = mes;
  } else {
    pre = mes;
  }
  pre.className = dir + " mess";
  console.log(mes);
  console.log(pre);
  out.append(pre);
}

window.onunload = () => {
  websocket.close();
  webOp = false;
};

document.addEventListener("DOMContentLoaded", pageLoaded);
