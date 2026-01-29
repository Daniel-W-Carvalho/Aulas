const input = document.getElementById('input-nome');
const select = document.getElementById('select-category');
const botaoAdicionar = document.getElementById('btn-adicionar');
const botaoFiltro = document.querySelectorAll('.btn-filtro');
const listas = document.getElementById('lista-itens');


botaoAdicionar.addEventListener('click', () => {
    const item = document.createElement('li')

    item.dataset.categoria = select.value
    item.textContent = input.value
    listas.appendChild(item);
    input.value = ""; // Limpa o campo
    input.focus();    // Coloca o cursor lá de novo
});

botaoFiltro.forEach(botao => {
    botao.addEventListener('click', (event) => {
        const botaoClicado = event.target

        const itensCriados = document.querySelectorAll('li')
        
        itensCriados.forEach(itens => {
            const valordoBotao = botaoClicado.dataset.categoria
            const valorItem = itens.dataset.categoria

            if(valordoBotao === valorItem || valordoBotao === 'todos'){
                itens.style.display = "block"
            }else{
                itens.style.display = "none"
            }
        })
    })
});
 