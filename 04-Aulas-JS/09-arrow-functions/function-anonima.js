// função anonima é uma função que não tem nome
// função anonima é geralmente usada quando queremos passar uma função como argumento para outra função
// ou quando queremos criar uma função que será executada imediatamente
// função anonima sofre hoisting, ou seja, pode ser chamada antes de ser declarada

//Exemplo:

const soma = function (a, b) { //colocando a função dentro de uma variável
  return a + b;
}

console.log(soma(2,3))
//chamando função através da variável


//Outro exemplo usando hoisting: (fazendo a chamada antes da declaração da função)
saudacao()

function saudacao(){
  console.log('Olá, mundo!')
}

