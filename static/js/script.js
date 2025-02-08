const menu = document.querySelector(".menuLinksCollapse");
var IsAtiv = false;
function ShowMenu(){
    IsAtiv = !IsAtiv;

    if (IsAtiv){
        menu.classList.add("Appear");
    } else{
        menu.classList.remove("Appear");
    }
}


const bgs = document.querySelectorAll(".imgBg");
const max = bgs.length;
var ind = max-2;

function bg1(){
    
    // console.log("bg1", ind);
    if (ind <= 0){
        bgs.forEach(bg => {
            bg.classList.remove("disappear");
            ind = max-1;
        });
    };

    bgs[ind].classList.add("disappear");
    
    ind --;

    setTimeout(()=>{
        bg2();
    }, 6000);
}
function bg2(){
    
    // console.log("bg2", ind);
    if (ind <= 0){
        bgs.forEach(bg => {
            bg.classList.remove("disappear");
            ind = max-1;
        });
    };

    bgs[ind].classList.add("disappear");

    ind --;

    setTimeout(()=>{
        bg1();
        
    }, 6000);
}
bg1();

function scrollOutros(){
    var out = document.getElementById('IdOutros').offsetTop;
    
    window.scrollTo({
        behavior: "smooth",
        top: out - 100
    })
}

// function ValidarDados(){ 
//     var idade = parseFloat(document.forms["formIMC"]["idade"].value);
//     var peso = parseFloat(document.forms["formIMC"]["peso"].value);
//     var altura = parseFloat(document.forms["formIMC"]["altura"].value);

//     try {
//         if (idade <= 0 || idade > 122){
//             throw new Error("Idade inválida");
//         }
//         if (idade < 18){
//             throw new Error("Apenas para adultos");
            
//         }
        
//         if (isNaN(idade) || isNaN(peso) || isNaN(altura)){
//             throw new Error("Digite números");
//         }
//         CalcularIMC(idade, peso, altura);
        
//     } catch (error) {
//         document.getElementById("Mensage").innerHTML = error;
        
//         setTimeout(()=>{
//             document.getElementById("Mensage").innerHTML = "";
//         }, 5000);
//         return false;
//     }
//     finally{
//         return false;
        
//     }
// }



// function CalcularIMC(idade, peso, altura){
    
//     const pai = document.querySelector(".ResultadoIMC");
//     var filho = document.createElement("h1");
    
//     var circulos = document.querySelectorAll(".Circurlo");
//     var quadrados = document.querySelector(".contentQuadrados");
//     var Esp = document.getElementById("Esperando");
    
//     imc = peso/altura**2;

//     Esp.classList.add("sumir");
//     quadrados.classList.add("sumir");
//     circulos.forEach(c => {
//         c.classList.add("sumir");
//     });
    
//     if ( idade < 60){
//         // console.log("Adulto");
//         if (imc < 18.5){
//             // console.log("Abaixo do Peso");
//             filho.innerHTML = "Abaixo do Peso";
//         } else if (imc <= 24.9){
//             // console.log("Peso Normal");
//             filho.innerHTML = "Peso Normal";
//         } else if(imc <= 29.9){
//             // console.log("Excesso de peso");
//             filho.innerHTML = "Excesso de peso";
//         } else if(imc <= 34.9){
//             // console.log("Obesidade classe 1");
//             filho.innerHTML = "Obesidade classe 1";
//         } else if(imc <= 39.9){
//             // console.log("Obesidade classe 2");
//             filho.innerHTML = "Obesidade classe 2";
//         } else if(imc >= 40){
//             // console.log("Obesidade classe 3");
//             filho.innerHTML = "Obesidade classe 3";
//         }
//     } else{
//         // console.log("idoso");
//         if (imc <= 22){
//             // console.log("Abaixo do peso");
//             filho.innerHTML = "Abaixo do Peso";
//         } else if(imc < 27) {
//             // console.log("Adequado");
//             filho.innerHTML = "Adequado";
//         } else{
//             // console.log("Sobrepeso");
//             filho.innerHTML = "Sobrepeso";
//         }
//     }

//     filho.classList.add("Imc");
//     pai.appendChild(filho);
    
// }


// const Inputs = document.querySelectorAll(".DadosIMC input");

// function Redefirnir(){
//     Inputs.forEach(element => {
//         element.value = "";
//     });

//     const pai = document.querySelector(".ResultadoIMC");
//     var filhos = pai.childElementCount;
//     while (filhos > 4){
//         pai.removeChild(document.querySelector(".Imc"));
//         var filhos = pai.childElementCount;
//     }

//     // 

//     document.getElementById("Esperando").classList.remove("sumir");
//     document.querySelector(".contentQuadrados").classList.remove("sumir");
//     document.querySelectorAll(".Circurlo").forEach(c => {
//         c.classList.remove("sumir");
//     });

// }



// // Efect cards
// VanillaTilt.init(document.querySelectorAll(".card"), {
//     max: 25,
//     scale: 1.02,
//     speed: 300
    
// });



// //Menu Footer
// var isFuntional = false;

// function ShowMenuFooter(){
//     isFuntional = !isFuntional;
//     var MenuFooter = document.querySelector(".OutrosLinksResponsive");
    
//     if (isFuntional){
//         MenuFooter.classList.add("AparecerMenu");
//     } else{
//         MenuFooter.classList.remove("AparecerMenu");
//     }
// }


// const ConteinerComentarios = document.querySelector(".ConteinerComentarios");
// const comentarios = ConteinerComentarios.children;
// var indice = 0;
// var intervalo = 6000;
// var StartComentarios = false;


// const isVisible = (element) => {
//     const rect = element.getBoundingClientRect()
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     )
// }

// function ShowComentarios(){
//     indice ++;
    
//     if (indice >= comentarios.length){
//         indice = 0;
//     }

//     comentarios[indice].scrollIntoView({
//         behavior: "smooth",
//         block: "nearest",
//         inline: "center"
//     });
// }
// function Loop1(){
//     if (isVisible(ConteinerComentarios)){
//         ShowComentarios();
//     }
    
//     setTimeout(() => {Loop2();}, intervalo);
// }
// function Loop2(){
//     if (isVisible(ConteinerComentarios)){
//         ShowComentarios();
//     }
    
//     setTimeout(() => {Loop1();}, intervalo);
// }

// Loop1();