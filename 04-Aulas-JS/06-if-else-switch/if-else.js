// As condicionais são controles de fluxos do nosso código que permitem que determinadas partes do código sejam executadas apenas se uma condição for verdadeira ou falsa.

//exemplo: se for isso, então faça aquilo. Se não for, então, faça outra coisa...

if(condicao){
    //bloco de código a ser executado se a condição for verdadeira
}else{
    //bloco de código a ser executado se a condição for falsa
}

let filme = "Senhor dos Anéis";

if(filme === "Harry Potter") {
    console.log("Vamos assistir Harry Potter!");
} else if(filme === "Senhor dos Anéis") {
    console.log("Vamos assistir Senhor dos Anéis!");
} else {
    console.log("Vamos assistir outro filme.");
}

// operador ternário
// condição ? valor para verdadeiro : valor para falso
let idade = 20;

idade >= 18 ? console.log("Você é maior de idade.") : console.log("Você é menor de idade.");
