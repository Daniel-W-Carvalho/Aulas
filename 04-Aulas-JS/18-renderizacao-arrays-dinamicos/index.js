//createElement = criar elemento no HTML
//appendChild = adicionar elemento filho dentro de um elemento pai
//prepend = adicionar elemento filho no começo de um elemento pai
//before = adicionar elemento antes de um elemento pai
//after = adicionar elemento depois de um elemento pai
//repalceWith = substituir um elemento por outro
//remove = remover um elemento
//.innerHTML = adicionar conteudo HTML dentro de um elemento (HTML INTERNO)

const lista = document.querySelector('#frutas'); // selecionando a ul com o id frutas


const frutas = ['Maçã', 'Banana', 'Uva', "Linguiceta"]; //criando lista de frutas

frutas.forEach(fruta => { // passand por cada fruta da lista
    const item = document.createElement('li'); // criando variavel que cria um elemento li

    item.textContent = fruta; // adicionando os nomes das frutas dentro do li

    lista.appendChild(item); // adicionando o li dentro da ul
})

//-------------------------------------------------------------------------------------------------------------------------------------

const products = [
 {
   id: 1,
   name: "Camiseta Dev em Dobro Preta",
   image: "./assets/camiseta-1.png",
   price: 3500,
   color: "Preto",
   size: "M",
 },
 {
   id: 2,
   name: "Camiseta Dev em Dobro Roxa",
   image: "./assets/camiseta-2.png",
   price: 2500,
   color: "Roxa",
   size: "G",
 },
 {
   id: 3,
   name: "Camiseta Dev em Dobro Preta - Costas",
   image: "./assets/camiseta-1-costas.png",
   price: 1500,
   color: "Preto",
   size: "G",
 },
 {
   id: 4,
   name: "Camiseta Dev em Dobro Roxa - Costas",
   image: "./assets/camiseta-2-costas.png",
   price: 6000,
   color: "Roxa",
   size: "M",
 },
 {
   id: 5,
   name: "Caneca Dev em Dobro",
   image: "./assets/caneca.png",
   price: 500,
   color: "Branca",
   size: 'M',
 },
]

//renderizando arrays de objetos no html
const listaProdutos = document.getElementById('produtos'); // selecionando a div com o id produtos

const renderizarProdutos = () => { //criando função para renderizar os produtos
    listaProdutos.innerHTML = products.map(product => { //percorrendo o array de produtos com o map e retornando o HTML de cada produto
        return `
            <li> 
                <img src="${product.image}" alt="${product.name}" />
                <h2>${product.name}</h2>
                <p>R$ ${(product.price)}</p>
                <p>Cor: ${product.color}</p>
            </li>
        `
    }).join(''); // o join serve para juntar todos os itens do array em uma string só, sem o join, cada item ficaria separado por vírgula
}

renderizarProdutos();// chamando a função para renderizar os produtos

