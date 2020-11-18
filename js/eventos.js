// function menuAlternar(mb){

// }
// /**
//  * mb -> Botão para alternar os estados de menu lateral
//  */
// let mb = aside.getElementsByClassName('menu-alt')[0];

// if(mb != undefined && mb != null){
//     mb.addEventListener('click',()=>{
//         menuAlternar(mb);
//     });
// }

function exibir(idElm){
    let elm = document.querySelector("#"+idElm);
    elm.style.display="block";
}

function fechar(idElm){
    let elm = document.querySelector("#"+idElm);
    elm.style.display="none";
}