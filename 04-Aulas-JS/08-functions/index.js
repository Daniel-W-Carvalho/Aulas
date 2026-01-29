//Funções nomeadas

// function saudacao(Recebendo parametro de quando a função é chamada) {}
// chamando função: saudacao(passando argumento para o parametro)


// sem parametro
function boaNoite() {
    console.log('Boa noite!');
}

boaNoite();
// -------------------------------------------------------------------------------------

//com parametro
function saudacao(nome) {
  console.log(`Bom dia ${nome}!`);
}

saudacao('João');
// -------------------------------------------------------------------------------------

// com varios parametros 
function somar(num1, num2) {
    console.log(num1 + num2);
}

somar(10, 20);
// -------------------------------------------------------------------------------------

// com retorno
function multiplicar(num1, num2) {
    return num1 * num2; // quando a função é chamada, o valor retornado pode ser armazenado em uma variável se necessário
}

const resultado = multiplicar(10, 20); // armazenando o valor retornado na variável resultado

console.log(resultado);



// Outro exemplo de função com retorno
function éPar (numero) {
    return numero % 2 === 0;
}

let resultadoPar = éPar(4); // armazenando o valor retornado na variável resultadoPar

console.log(resultadoPar); // true




// Exemplo pegando o resultado de uma função e passando como argumento para outra função
function divisao(num1, num2) {
    return num1 / num2;
}
let numero1 = divisao(10, 2); 



function exibirResultado (numero1) {
    console.log(`O resultado da divisão é: ${numero1}`);
}
exibirResultado(numero1);

