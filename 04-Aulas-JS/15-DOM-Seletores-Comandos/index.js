// DOM é a forma de como o navegador representa uma página HTML ou XML na memória.
//Cada Elemento é transformado em um objeto em JS organizados em forma de árvore. Essa estrutura em árvore permite a gente acessar, modificar, adicionar e remover
// elementos de uma página.

// Documento -> raiz, documento inteiro
// Elementos -> (tags HTML) -> <html>, <body>, <div>, <p>, etc
// Atributos -> id, class, src, href...
// Texto -> Conteudo dentro das tags

//OBS: todo document nos tras um objeto para a variavel 

//--------------------------------------------------------------------------------------------------------------------------

//getElementById - Busca um elemento pelo atributo OBS: o getelementbyId volta 1 ID apenas, pois só existe 1 ID por página
const button = document.getElementById("button");
console.log(button)

//getElementByClass - Busca elemento pelo nome da classe
const h1 = document.getElementsByClassName("title");
console.log(h1)

// querySelectorAll - busca todos os seletores que correspondem a um seletor CSS
const p = document.querySelectorAll(".texto"); // colocando . quer dizer que está selecionando uma classe, [] conchetes para atributos e para ID usamos o #
console.log(p);

// querySelector - Busca apenas o primeiro elemento que corresponde a um seletor css
const paragrafo = document.querySelector(".pp");
paragrafo.textContent = "New World"  // Aqui estamos pegando a variavel pagrafo e colocar um novo texto la no HTML no lugar do Lorem
console.log(paragrafo);

// Observação, o querySelectorAll ele nos retorna no console parecendo uma lista, e neste caso do querySelectorAll nós conseguimos fazer algumas funções de lista, por exemplo um forEach e dar algumas funcionalidades para cada item que vier na lista.
//Ja no getElementById-Name nós não conseguimos fazer esses processos de listas, por exemplo, se fossemos percorrer os itens dentro de uma suposta "lista", nós precisariamos fazer o laço for e não o forEach

// tentar usar mais o querySelectorAll no fim das contas

