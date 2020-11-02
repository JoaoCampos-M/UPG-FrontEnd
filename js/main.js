const aside = document.getElementsByTagName("aside")[0];

function menuReveal() {
  aside.style.animationName = "reduzirAside";
  let p;
  let quant = aside.getElementsByTagName("p").length;
  for (let c = 0; c < quant; c++) {
    p = aside.getElementsByTagName("p")[c];
    p.style.display = "none";
  }
}

function menuCover() {
  aside.style.animationName = "aumentarAside";
  let p;
  setTimeout(function () {
    let tam = aside.getElementsByTagName("p").length;
    for (let c = 0; c < tam; c++) {
      p = aside.getElementsByTagName("p")[c];
      p.style.display = "block";
    }
  }, 400);
}

function menuAlternar(elm) {
  let menu = aside.querySelector("#menu-abg");
  let menuClass = menu.getAttribute("class");
  if (menuClass == "desativado") {
    menuReveal();
    menu.setAttribute("class", "ativo");
  } else {
    menuCover();
    menu.setAttribute("class", "desativado");
  }
}
