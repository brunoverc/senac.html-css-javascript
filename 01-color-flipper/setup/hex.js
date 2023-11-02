const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const botao = document.getElementById("btn");
const cor = document.querySelector(".color");

botao.addEventListener("click", function(){
    let hexColor = "#";

    //Gerando um código de cor hexadecimal de 6 dígidos
    for(let i = 0; i < 6; i++)
    {
        hexColor += hex[getNumeroAletorio()];
    }

    cor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getNumeroAletorio(){
    return Math.floor(Math.random() * hex.length);
}