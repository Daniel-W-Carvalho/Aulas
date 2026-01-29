// 1. Selecionamos todos os botões que têm a classe 'btn-excluir'
const listaDeBotoes = document.querySelectorAll('.btn-excluir');

// 2. Usamos o forEach para colocar um "escutador" em cada um deles
listaDeBotoes.forEach(botao => {
    
    botao.addEventListener("click", (event) => {
        // O event.target é exatamente o botão que você clicou!
        const elementoClicado = event.target;

        console.log("Você clicou no botão do:", elementoClicado.parentElement.innerText);

        // Mudando o estado do botão clicado
        elementoClicado.innerText = "Excluído!";
        elementoClicado.style.backgroundColor = "#c865e6";
        elementoClicado.style.color = "white";
        elementoClicado.disabled = true; // Desativa para não clicar de novo
    });
    
});