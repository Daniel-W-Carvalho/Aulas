//Variáveis

//var - pode ser redeclarada e atualizada - tem escopo de função e é içado (hoisted) para o topo do seu contexto, podendo ser redeclarado.

//let - pode ser atualizada, mas não redeclarada - let tem escopo de bloco (entre chaves {}) e não pode ser redeclarado no mesmo bloco, além de não ser inicializado até a linha em que é declarado.

//const - o valor da variável é constante, ou seja, não pode ser alterado

var nome = "João"; //Declaração de variável com var - console.log(nome)
let idade = 25; //Declaração de variável com let - console.log(idade)
const cidade = "São Paulo"; //Declaração de constante com const - console.log(cidade)


//ESCOPOS

// A diferença entre escopo local e escopo global é:

// Escopo global: Variáveis declaradas fora de funções ou blocos ficam acessíveis em todo o código, podendo ser usadas em qualquer parte do programa.

// Escopo local: Variáveis declaradas dentro de funções ou blocos (como if, for, etc.) só podem ser acessadas dentro desse bloco ou função, não estando disponíveis fora dele.

let globalVar = "Eu sou global"; // escopo global

function exemplo() {
  let localVar = "Eu sou local"; // escopo local
  console.log(globalVar); // acessível
  console.log(localVar);  // acessível
}

console.log(globalVar); // acessível
console.log(localVar);  // erro: não acessível fora da função



//Escopo de bloco, tudo o que tem dentro de if() e Else(). Dentros os parenteses são considerados blocos.
//Exemplo:
if (idade >= 18) { // escopo de bloco
  let podeDirigir = true;
  let blocoVar = "Maior de idade"; 
  console.log(blocoVar);
  console.log(podeDirigir); // acessível
}
else {
  let blocoVar = "Menor de idade"; 
  console.log(blocoVar);
}