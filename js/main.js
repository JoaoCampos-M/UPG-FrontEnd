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
