// Inicializa o valor inicial como zero
let count = 0;

// Seleciona o elemento com o id "value" e os botões
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Itera sobre os botões e adiciona um ouvinte de evento de clique a cada um
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Obtém as classes CSS do elemento de botão atual
    const styles = e.currentTarget.classList;

    // Verifica se o botão tem a classe "decrease"
    if (styles.contains("decrease")) {
      count--;
    } 
    // Verifica se o botão tem a classe "increase"
    else if (styles.contains("increase")) {
      count++;
    } 
    // Se o botão não tem "decrease" nem "increase", redefine o valor para zero
    else {
      count = 0;
    }

    // Atualiza a cor do elemento "value" com base no valor de "count"
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    // Atualiza o texto do elemento "value" com o novo valor de "count"
    value.textContent = count;
  });
});
