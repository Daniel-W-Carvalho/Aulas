// spread - espalha os elementos de um array ou objeto em outro array ou objeto - copiar
const number = [1, 2, 3];

const newNumber = [...number, 4, 5]; // pegando os elementos do array number e adicionando mais elementos

console.log(newNumber);

//Exeplo mais complexo do uso de Spread (Criando outro array com os mesmos objetos dentro mas aumentando a nota dos alunos em +1)

let alunos = [
    {nome: "doga",
    nota: 0},
    {nome:"billu",
    nota:5},
    {nome:"kojjou",
    nota: 6
    }]

const alunosAtualizados = alunos.map(aluno => {
    return{ ...aluno,
        nota: aluno.nota + 1
    };
});
console.log(alunos, alunosAtualizados)