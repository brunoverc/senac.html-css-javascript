let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//Itera sobre os botões e adciona um ouvinte de evento 
//de clique a cada um
btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        //Obtém as classes CSS do elemento de botão atual
        const styles = e.currentTarget.classList;

        //Verifica se o botão tem a classe "decrease"
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }

        //Atualizar a cor do elemento "value" com base no valor 
        //de count
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }

        //Atualiza o texto do  elemento "value"
        value.textContent = count;
    });
});