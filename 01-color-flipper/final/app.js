const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // Obtém um número aleatório com base no comprimento do array de cores

  document.body.style.backgroundColor = colors[randomNumber];
  // Define a cor de fundo do corpo da página com a cor aleatória
  color.textContent = colors[randomNumber];
  // Atualiza o conteúdo do elemento HTML com a cor atual
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
  // Retorna um número inteiro aleatório entre 0 e o comprimento do array de cores
}
