const produto = document.querySelector('.produto');
const valorProduto = document.querySelector('.valorProduto');
const btnAdicionar = document.querySelector('.btn-carrinho');
const listaCarrinho = document.querySelector('.carrinho');
const total = document.querySelector('.total')
const spanTotal = document.querySelector('.valor-total');

// let soma = 0;

// btnAdicionar.addEventListener('click', () => {
//     if(produto.value.trim() !== '' && valorProduto.value.trim() !== ''){
//         const lista = document.createElement('li');
//         const valor = Number(valorProduto.value);
//         const valorFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//         lista.textContent = `${produto.value} - ${valorFormatado}`;
//         soma += valor;
//         const somaFormatada = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//         spanTotal.innerText = somaFormatada;

//         const btnRemover = document.createElement('button');
//         btnRemover.textContent = 'x';
//         btnRemover.style.marginLeft = '10px';
//         // Salva o valor do produto no botão
//         btnRemover.dataset.valor = valor;
//         btnRemover.addEventListener('click', () => {
//             btnRemover.parentElement.remove();
//             soma -= Number(btnRemover.dataset.valor);
//             const somaFormatada = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
//             spanTotal.innerText = somaFormatada;
//         });

//         lista.appendChild(btnRemover);
//         listaCarrinho.appendChild(lista);
//         produto.value = "";
//         valorProduto.value = "";
//         produto.focus();
//     }else{
//         alert('Campo está vazio, preencha conforme solicitado!')
//     }
// })


//CORREÇÃO GEMINI

// ... suas seleções de elementos continuam iguais ...

let soma = 0;

// FUNÇÃO AUXILIAR: Ela formata o número e atualiza a tela
const atualizarTotalUI = () => {
    spanTotal.innerText = soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

btnAdicionar.addEventListener('click', () => {
    const nome = produto.value.trim();
    const preco = Number(valorProduto.value);

    if (nome !== '' && preco > 0) {
        const lista = document.createElement('li');
        const precoFormatado = preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
        lista.textContent = `${nome} - ${precoFormatado} `;
        
        // Atualiza a soma e a tela usando a função
        soma += preco;
        atualizarTotalUI();

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'x';
        
        btnRemover.addEventListener('click', () => {
            lista.remove(); // Mais direto que parentElement
            
            // BUG RESOLVIDO: Subtraímos o preço DESTE item específico
            soma -= preco; 
            atualizarTotalUI();
        });

        lista.appendChild(btnRemover);
        listaCarrinho.appendChild(lista);
        
        // Limpeza básica
        produto.value = "";
        valorProduto.value = "";
        produto.focus();
    } else {
        alert('Preencha os campos corretamente!');
    }
});
