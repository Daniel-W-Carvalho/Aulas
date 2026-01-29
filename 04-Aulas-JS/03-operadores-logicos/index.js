// = sinal de igual é quando estamos atribuindo um valor a uma variável
//exemplo:
let idade = 25;

// == dois sinais de igual é quando estamos comparando valores, mas não o tipo
//exemplo:
let numero = '25';

if (idade == numero) {
    console.log('As idades são iguais em valor.');
} else {
    console.log('As idades são diferentes em valor.');
}

// === três sinais de igual é quando estamos comparando valores e tipos 
//exemplo:
if (idade === numero) {
    console.log('As idades são iguais em valor e tipo.');
} else {
    console.log('As idades são diferentes em valor ou tipo.');
}

// !== não identicos
if (idade !== numero) {
    console.log('As idades são diferentes em valor.');
} else {
    console.log('As idades são iguais em valor.');
}

// != diferente (não considera o tipo da variavel)
if (idade != numero) {
    console.log('As idades são diferentes em valor.');
} else {
    console.log('As idades são iguais em valor.');
}

// >=  <=  maior ou igual / menor ou igual
let idadeMinima = 18;

if (idade >= idadeMinima) {
    console.log('A idade está dentro do intervalo permitido.');
} else {
    console.log('A idade está fora do intervalo permitido.');
}

