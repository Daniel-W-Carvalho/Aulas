// 01 - O Filtro de Preços
const precos = [10, 50, 150, 2, 36, 94, 200, 14, 67, 28, 51, 60];
const precosAbaixoCinquenta = precos.filter (preco => preco <= 50)
console.log("Abaixo de 50:", precosAbaixoCinquenta);

// 02 - Formatação de Moedas  
const valores = [10, 20, 30];
let convertendoValors = valores.map (valor => String(valor)); 
console.log(convertendoValors)

// outra forma de fazer const formatados = valores.map(valor => `R$ ${valor.toFixed(2).replace('.', ',')}`);
// valor.toFixed(2)
// Aqui começa a mágica:
// O método .toFixed(2) garante que o número tenha sempre duas casas decimais.
// Se o valor for 10, ele vira "10.00".
// Se for 10.5, ele vira "10.50".
// Importante: O .toFixed() transforma o número em uma String.

// .replace('.', ',')
// Como o JavaScript segue o padrão americano, o separador decimal é o ponto (.).
// O .replace('.', ',') procura o ponto na string e o troca pela vírgula, transformando "10.00" em "10,00".

// 03 - Buscando usuarios
const usuarios = [
    {id: 1, name: "billu", idade: 40},
    {id: 2, name: "doga", idade: 200},
    {id: 3, name: "Beto", idade: 18},
    {id: 4, name: "gordo", idade: 35},
    {id: 5, name: "bruxo", idade: 5}
];
let cacandoUsuarios = usuarios.find(usuario => usuario.name === "Beto")
console.log(cacandoUsuarios)

// 04 - Lista de Presença
const convidados = ["Carlos","Jasmine","Cleyton","Jonatan","Harry"]
convidados.forEach (convidado => console.log(`Olá, ${convidado} seja bem vindo!`))


// 05 - Somando tudo
const itens = [5, 12, 8, 25];
let soma = itens.reduce ((soma, numero) => numero + soma, 0)
console.log(soma)


// 06 - Novo Desafio - Encadeamento

const produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Calça", preco: 120 },
    { nome: "Meia", preco: 10 },
    { nome: "Tênis", preco: 200 }
];

let maisDeSessenta = produtos.filter((produto => produto.preco >= 60)).map(nomes => nomes.nome);
console.log(maisDeSessenta) 

