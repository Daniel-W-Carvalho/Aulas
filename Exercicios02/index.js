const input = document.getElementById('input-nome');
const select = document.getElementById('select-category');
const botaoAdicionar = document.getElementById('btn-adicionar');
const botaoFiltro = document.querySelectorAll('.btn-filtro');
const listas = document.getElementById('lista-itens');


botaoAdicionar.addEventListener('click', () => {

    const textoDigitado = input.value.trim();

    if(textoDigitado !== ''){
        const item = document.createElement('li')
        item.textContent = input.value
        item.dataset.categoria = select.value
        item.style.listStyle = "none";

        const btnExcluir = document.createElement('button')
        btnExcluir.textContent = 'X'
        btnExcluir.style.marginLeft = "10px";

        btnExcluir.addEventListener('click', (event) => {
        event.target.parentElement.remove()
    })

        item.appendChild(btnExcluir)
        listas.appendChild(item);
        input.value = ""; // Limpa o campo
        input.focus();    // Coloca o cursor lá de novo

    }else{
        alert("Por favor digite o nome de uma fruta ou legumes")
    }
});

botaoFiltro.forEach(botao => {
    botao.addEventListener('click', (event) => {
        const botaoClicado = event.target

        const itensCriados = document.querySelectorAll('li')

        const valordoBotao = botaoClicado.dataset.categoria
        
        itensCriados.forEach(itens => {
            const valorItem = itens.dataset.categoria

            if(valordoBotao === valorItem || valordoBotao === 'todos'){
                itens.style.display = "block"
            }else{
                itens.style.display = "none"
            }
        })
    })
});
 