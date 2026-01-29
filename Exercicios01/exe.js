const botoes = document.querySelectorAll('.btn');
const itens = document.querySelectorAll('li')

botoes.forEach(botao => {
    botao.addEventListener ('click', (event) => {
        const botaoClicado = event.target

        itens.forEach(item => {
            const categoriaBotao = botaoClicado.dataset.categoria; // Pegamos o valor da categoria do botão 
            const categoriaItem = item.dataset.categoria; // Pegamos o valor da categoria do item

            // LÓGICA: Se for a mesma categoria OU se o botão for 'todos'
            if (categoriaBotao === categoriaItem || categoriaBotao === "todos") {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    })
});

