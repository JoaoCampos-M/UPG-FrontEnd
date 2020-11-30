const aside = document.getElementsByTagName("aside")[0];

function revelarMenuAside() {
  let ul = aside.querySelector("#apenasIcones");
  ul.style.display="none";
  let div = aside.querySelector("#menuCompleto");
  div.style.display="flex";
}

function menuCover() {
  let ul = aside.querySelector("#apenasIcones");
  ul.style.display="flex";
  let div = aside.querySelector("#menuCompleto");
  div.style.display="none";
}

var detalhesCont = document.getElementsByClassName('tarefa-det-cont')[0];


function exibirDetalhes(det){
  detalhesCont.style.display="block";
  let item = detalhesCont.getElementsByClassName('d-t-item')[det];
  item.style.display="block";
}

function ocultarDetalhes(det){
  detalhesCont.style.display="none";
  let item = detalhesCont.getElementsByClassName('d-t-item')[det];
  item.style.display="none";
}

var achou = false;
var a = document.querySelector("#user-box");
var userIcon = document.querySelector("#img-user-toggle");

if(userIcon != undefined){
  userIcon.addEventListener('click', function () {
    exibir("user-box");
    achou = true;
    });    
}


function notification_click_out_check(target) {
var tgClass = target.getAttribute('class');
if (tgClass == null) {
    fechar("user-box");
    achou = false;
} else {
    if ((tgClass.indexOf('j-1')) == (-1)) {
    fechar("user-box");
    achou = false;
    }
}

}

document.body.onclick = function (event) {
    console.log('chegou aqui');
    if (achou) {
        notification_click_out_check(event.target);
    }
}

function retomarFocusEfeito(Elm){
  Elm.addEventListener('focus',function(){
    Elm.style.border="1.5px solid  #01514B"
  });
  Elm.addEventListener('blur',function(){
    Elm.style.border="1.5px solid  #A5A5B1"
  });
  return 0;
}

function msgErroLogin(){
  let msg = document.querySelector(".msg-erro-login");
  msg.style.display="flex";

  let inp1 = document.getElementsByTagName('input')[0];
  let inp2 = document.getElementsByTagName('input')[1];

  inp1.style.border="1.5px solid red";
  inp2.style.border="1.5px solid red";
  
  setTimeout(function(){
    msg.style.display="none";
    inp1.style.border="1.5px solid #A5A5B1";
    inp2.style.border="1.5px solid #A5A5B1";
    retomarFocusEfeito(inp1);
    retomarFocusEfeito(inp2);
  },1800)

}
