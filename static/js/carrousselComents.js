const ConteinerComentarios = document.querySelector(".ConteinerComentarios");
const comentarios = ConteinerComentarios.children;
var indice = 0;
var intervalo = 6000;
var StartComentarios = false;


const isVisible = (element) => {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

function ShowComentarios(){
    indice ++;
    
    if (indice >= comentarios.length){
        indice = 0;
    }

    comentarios[indice].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
    });
}
function Loop1(){
    if (isVisible(ConteinerComentarios)){
        ShowComentarios();
    }
    
    setTimeout(() => {Loop2();}, intervalo);
}
function Loop2(){
    if (isVisible(ConteinerComentarios)){
        ShowComentarios();
    }
    
    setTimeout(() => {Loop1();}, intervalo);
}

Loop1();