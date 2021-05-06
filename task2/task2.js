const btn = document.querySelector(".btn");

function pageLoaded() {
  btn.addEventListener("click", btnCl);
}

function btnCl() {
  const heightDev = window.screen.height;
  const widthDev = window.screen.width;
  const heightWinSc = window.innerHeight;
  const widthWinSc = window.innerWidth;
  const heightWin = document.documentElement.clientHeight;
  const widthWin = document.documentElement.clientWidth;
  alert(
    `Экран - ${widthDev}/${heightDev}, область просмотра со скроллом - ${widthWinSc}/${heightWinSc}, область просмотра без скролла - ${widthWin}/${heightWin}`
  );
}

document.addEventListener("DOMContentLoaded", pageLoaded);
