// Array - são listas que armazenam múltiplos valores em uma única variável
const filmes = ["Vingadores", "Homem de Ferro", "Capitão América", "Thor"];
console.log(filmes);
console.log(filmes[0]); // acessando valores do array




// Arrays bidimensionais
const avaliacoesFilmes = [
    ["Velozes e Furiosos", 8.5],
    ["O Senhor dos Anéis", 9.0],
    ["Matrix", 8.7]
] 
console.log(avaliacoesFilmes[2][0]); // acessando o nome do terceiro filme



//Array com várias informações
const pessoa = ["PlayTV" , 30, "Pedreiro", true, {cidade: ["São Paulo", "Pernambuco"], estado: "SP"}];
console.log(pessoa[4].cidade[1]); // acessando a cidade dentro do objeto no array

const pessoa1 = ["PlayTV" , 30, "Pedreiro", true, {cidade: ["balneario", "bahia"], estado: "SP"}];
console.log(pessoa1[4].cidade)