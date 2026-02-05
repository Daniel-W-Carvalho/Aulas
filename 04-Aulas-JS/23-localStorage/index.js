localStorage.setItem("name", "Daniel Carvalho");
localStorage.setItem("age", "28")

let usuario = {
    name: "Daniel",
    idade: 28,
    sexo: "Anal"
}
localStorage.setItem("usuario", JSON.stringify(usuario)); 


const produtos = [
   { id: 1, nome: 'Produto 1', preco: 90 },
   { id: 2, nome: 'Produto 2', preco: 60 },
   { id: 3, nome: 'Produto 3', preco: 80 },
   { id: 4, nome: 'Produto 4', preco: 120 },
   { id: 5, nome: 'Produto 5', preco: 150 },
]
localStorage.setItem("produtos", JSON.stringify(produtos));


const user = localStorage.getItem("name")
// console.log(user)

const userJson = localStorage.getItem("usuario");
// console.log(userJson)

const userObject = JSON.parse(userJson);
console.log(userObject); // podemos usar o objeto para ter acesso como por exemplo: userObject.age, userObject.name

const productsJson = localStorage.getItem("produtos");
const productsArray = JSON.parse(productsJson);
console.log(productsArray[0].nome); //acessando o objeto 0 de nome produto 01 da lista do array de objetos

//Removendo itens do localStorage
// removendo 1 por 1
localStorage.removeItem("produtos")

//removendo todos de uma unica vez
//localStorage.clear()