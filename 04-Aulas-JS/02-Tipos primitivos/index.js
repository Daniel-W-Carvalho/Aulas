//Alguns exemplos de tipos primitivos em JavaScript:
// String TEXTO
const nome = "Daniel Carvalho";

//number NUMERO
const idade = 30;
const pi = 3.14;

//boolean VERDADEIRO OU FALSO
const possuiFaculdade = true;
if (possuiFaculdade){
    console.log("Possui faculdade"); //true
} else {
    console.log("Não possui faculdade"); //false
}

//undefined INDEFINIDO
let cor;
console.log(cor)

let pessoa = {nome: "Ana", idade: 25};
console.log(`O nome da pessoa é ${pessoa.nome} e ela tem ${pessoa.idade} anos. E o sexo dela é ${pessoa.sexo}`); //undefined

//null NULO - Não tem valor definido
//Usamos nulo propositalmente para zerar um valor, exemplo, uma loja onde vende 1 item e tem a seção de avaliações, mas o produto ainda não foi avaliado por ninguém, então ele recebe nulo até receber uma avaliação.
let nulo = null
console.log(nulo);
