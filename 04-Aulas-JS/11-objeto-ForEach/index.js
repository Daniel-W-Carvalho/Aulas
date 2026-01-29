// objetos em JavaScript

const user = {
    nome: "PlayTV", //propriedade: valor
    age: 30,
    apresentar: function(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.age} anos.`);
    }
}

console.log(user.nome); //acessando a propriedade nome do objeto user
console.log(user['age']); // outra forma de acessar a propriedade age do objeto user
user.apresentar(); // chamando o método apresentar do objeto user

// adicionando novas propriedades ao objeto
user.profissao = "Pedreiro";

//reatribuindo valores as propriedades do objeto
user.age = 31;



// Outro exemplo com mais nomes
const user1 = {
    nome: ["playTV", "FafaDeBelem"],
    age: 30,
    apresentar: function(){
        console.log(`Olá, meu nome é ${this.nome[0]}`);
    }
}

user1.apresentar();



//Arrays de Objetos
const products = [
    {id: 1, nome: "camisa", preco: 29.99},
    {id: 2, nome: "calça", preco: 49.99},
    {id: 3, nome: "tênis", preco: 89.99}
];
console.log(products[2].preco); // acessando o preço do terceiro produto no array de objetos


// METODO FOREACH - para iterar sobre arrays
products.forEach((product) => {
    console.log(`${product.nome} custa R$ ${product.preco}`);
});