const aside = document.getElementsByTagName("aside")[0];

function revelarMenuAside() {
  let ul = aside.querySelector("#apenasIcones");
  ul.style.display = "none";
  let div = aside.querySelector("#menuCompleto");
  div.style.display = "flex";
}

function menuCover() {
  let ul = aside.querySelector("#apenasIcones");
  ul.style.display = "flex";
  let div = aside.querySelector("#menuCompleto");
  div.style.display = "none";
}

var detalhesCont = document.getElementsByClassName("tarefa-det-cont")[0];

function exibirDetalhes(det) {
  detalhesCont.style.display = "block";
  let item = detalhesCont.getElementsByClassName("d-t-item")[det];
  item.style.display = "block";
}

function ocultarDetalhes(det) {
  detalhesCont.style.display = "none";
  let item = detalhesCont.getElementsByClassName("d-t-item")[det];
  item.style.display = "none";
}

var achou = false;
var a = document.querySelector("#user-box");
var userIcon = document.querySelector("#img-user-toggle");
addClickExibir(userIcon, 1);

var clicou = false;
var notiBox = document.querySelector("#noti-box");
var notiIcon = document.querySelector("#img-noti-toggle");
addClickExibir(notiIcon, 2);

function addClickExibir(elm, est) {
  if (elm != undefined) {
    if (est == 1) {
      userIcon.addEventListener("click", function () {
        exibir("user-box");
        achou = true;
      });
    } else if (est == 2) {
      notiIcon.addEventListener("click", function () {
        exibir("noti-box");
        clicou = true;
      });
    }
  }
}
/*
if(userIcon != undefined){
  userIcon.addEventListener('click', function () {
    exibir("user-box");
    achou = true;
    });    
}
*/

function user_click_out_check(target) {
  var tgClass = target.getAttribute("class");
  if (tgClass == null || tgClass.indexOf("j-1") == -1) {
    fechar("user-box");
    achou = false;
  }
}
function noti_click_out_check(target) {
  var tgClass = target.getAttribute("class");
  if (tgClass == null || tgClass.indexOf("j-2") == -1) {
    fechar("noti-box");
    clicou = false;
  }
}

document.body.onclick = function (event) {
  //console.log("chegou aqui");
  if (achou) {
    user_click_out_check(event.target);
  }
  if (clicou) {
    noti_click_out_check(event.target);
  }
};

function retomarFocusEfeito(Elm) {
  Elm.addEventListener("focus", function () {
    Elm.style.border = "1.5px solid  #01514B";
  });
  Elm.addEventListener("blur", function () {
    Elm.style.border = "1.5px solid  #A5A5B1";
  });
  return 0;
}

function msgErroLogin() {
  let msg = document.querySelector(".msg-erro-login");
  msg.style.display = "flex";

  let inp1 = document.getElementsByTagName("input")[0];
  let inp2 = document.getElementsByTagName("input")[1];

  inp1.style.border = "1.5px solid red";
  inp2.style.border = "1.5px solid red";

  setTimeout(function () {
    msg.style.display = "none";
    inp1.style.border = "1.5px solid #A5A5B1";
    inp2.style.border = "1.5px solid #A5A5B1";
    retomarFocusEfeito(inp1);
    retomarFocusEfeito(inp2);
  }, 1800);
}

function dadosUserStep() {
  var dadosgeral = document.querySelector(".dados-geral");
  transformAnimacaoMostrar(dadosgeral);
}

function buttonsStepController(elm) {
  let div = document.querySelector(".linksMinhaConta");
  let t = div.getElementsByTagName("a").length;
  let element = div.getElementsByTagName("a");
  for (let c = 0; c < t; c++) {
    element[c].style.textDecoration = "none";
  }
  stepVerify(elm.getAttribute("class"));
  elm.style.textDecoration = "underline";
}
var step = [];
step.push(document.querySelector(".dados-geral"));
step.push(document.querySelector(".dados-endereco"));
step.push(document.querySelector(".dados-pessoal"));
function stepVerify(linkClass) {

  if (linkClass == "link-for-general") {
    transformAnimacaoMostrar(step[0]);
  } else if (linkClass == "link-for-address") {
    transformAnimacaoMostrar(step[1]);
  } else {
    transformAnimacaoMostrar(step[2]);
  }
}

function transformAnimacaoMostrar(elm) {
  for(c=0;c<=2;c++){
    step[c].style.display="none";
  }

  elm.style.display = "block";
  elm.style.animationDuration = "0.4s";
  elm.style.animationName = "animacaoTrasformMostrar";
  elm.style.animationFillMode = "forwards";
}
