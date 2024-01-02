// Definindo um array com dígitos hexadecimais (0-9 e A-F)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Obtendo uma referência ao botão com o id "btn"
const btn = document.getElementById("btn");

// Obtendo uma referência ao elemento HTML com a classe "color"
const color = document.querySelector(".color");

// Adicionando um ouvinte de eventos de clique ao botão
btn.addEventListener("click", function () {
  // Inicializando uma string vazia para representar a cor hexadecimal
  let hexColor = "#";

  // Gerando um código de cor hexadecimal de 6 dígitos
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  // Atualizando o texto do elemento com a classe "color" com a cor gerada
  color.textContent = hexColor;

  // Alterando a cor de fundo do corpo do documento para a cor gerada
  document.body.style.backgroundColor = hexColor;
});

// Função que gera um número aleatório para acessar o array hex
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
