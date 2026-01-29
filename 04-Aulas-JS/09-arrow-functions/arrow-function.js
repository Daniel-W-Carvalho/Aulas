// funções de seta (arrow functions)
//Não é possível criar uma arrow function com nome próprio (como em function declarations). Arrow functions são sempre funções anônimas, mas podem ser atribuídas a variáveis, propriedades de objetos ou usadas como métodos, o que lhes dá um "nome externo".

const saudacao = (nome, idade) => {
    return `Olá ${nome}, você tem ${idade} anos`;
}

console.log(saudacao('Maria', 30));




// Outro exemplo de arrow function:
const multiplicar = (num1, num2) => {
    return num1 * num2;
}

let resultado = multiplicar(10, 2);
console.log(resultado);


// Exemplo de arrow function com retorno implícito (sem a palavra-chave return e sem chaves {})
let soma = (a, b) => a + b;
console.log(soma(10, 20));


