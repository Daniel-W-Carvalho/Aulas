// 01 - Somando +1 na nota de cada aluno dentro de um array de objetos e mostrando todo o array com as notas atualizadas.
let alunos = [
    { nome: "doga", nota: 0 },
    { nome: "billu", nota: 5 },
    { nome: "kojjou", nota: 6 }
];

const alunosAtualizados = alunos.map(aluno => {  // Criamos uma nova constante para guardar o resultado do .map() - O .map() vai percorrer o array 'alunos' um por um.
    return { // 3. Para cada 'aluno', estamos retornando um NOVO objeto {}
        ...aluno, //O '...' (Spread) copia todas as propriedades do objeto 'aluno' atual - Ele traz o "nome" e a "nota" original para dentro deste novo objeto.
        nota: aluno.nota + 1  //Aqui dizemos: "Pode manter o nome que veio do spread, mas a 'nota' eu quero que seja sobrescrita pelo valor atual + 1"
    }; // 6. Esse novo objeto é "empurrado" para dentro do array 'alunosAtualizados'
});

// 7. Exibimos o resultado final, que agora é uma lista com as notas incrementadas
console.log(alunosAtualizados);


// 02

const carrinho = [
    {produto: "playstation",
    preco:2500},
    {produto: "xbox",
    preco:2200},
    {produto: "PC",
    preco:12500}
]

let somaTotal = carrinho.reduce((soma, item) => {return  soma + item.preco}, 0);

let total = somaTotal
console.log(total)

//03
const numeros = [10, 20, 30, 40]

let soma = numeros.reduce((inteirar, number) => {return inteirar + number},0) 
console.log(soma);

//04

let numeros1 = [1,2,3];
let numeros2 = [4,5,6];

let todosNumeros = [...numeros1, ...numeros2]
console.log(todosNumeros)



let pessoa = {
    nome: "daniel",
    idade: 28
}

let pessoaAtualizada = {...pessoa,
    cidade: "Sao Paulo"
}

console.log(pessoaAtualizada)


//05 - Desestruturando um objeto, passando para outro objeto com o resto (resto das informações que eu não puxei dentro do primeiro objeto)
const usuario = {
    nome: "Daniel",
    idade: 28
};

let {
    nome, 
    idade, 
    cidade = "Desconhecida",
    ...resto
    } = usuario;
console.log(nome, idade, resto);

const novoUsuario = { 
    ...resto, 
    nome,  
    cidade    
};

console.log(novoUsuario);


// 06
const usuarios = [
    {id: 1,
    nome: "Soldado Invernal"
    },
    {id: 2,
    nome: "Venom"},
    {id: 3,
    nome: "Juggernaut"},
    {id: 4,
    nome: "Justiceiro"}
];

let usuarioEncontrado = usuarios.find(usuario => usuario.id === 3)

console.log(usuarioEncontrado)







