const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const botao = document.getElementById("btn");
const cor = document.querySelector(".color");

botao.addEventListener("click", function(){
    //obtém um número aleatório
    const numeroAleatorio = getNumeroAletorio();

    document.body.style.backgroundColor = 
        colors[numeroAleatorio];
        cor.textContent = colors[numeroAleatorio];
});

//Retorna um número inteiro aleatório entre 0 e o comprimento
//do array colors
function getNumeroAletorio(){
    return Math.floor(Math.random() * colors.length);
}

