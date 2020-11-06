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
