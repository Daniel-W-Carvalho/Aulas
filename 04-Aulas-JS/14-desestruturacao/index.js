// Desestruturação de objetos

const user = {
    name: "Daniel",
    idade: 28,
    address: {
        street: 'Rua principal',
        number: 123
    }
}

// // Ao invés de puxar assim:
// const name =  user.name
// const idade = user.idade
// const address = user.address.street

//Fazemos assim:
const {
    name: clientName, //trocando a variavel de name para clietName caso necessário
    idade, 
    phone = '9999999', // incluindo nova propriedade
    address: {street, number}
} = user;

console.log(clientName, idade, street, number)

// Desestruturação de função
//forma tradicional 
// const showAge = (user) => {
//     console.log(user.idade);
// };

//forma desestruturada
const showAge = ({idade}) => {
    console.log(idade);
}

showAge(user)