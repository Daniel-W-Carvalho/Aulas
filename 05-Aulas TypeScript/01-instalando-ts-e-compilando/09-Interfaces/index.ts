//A interface é focada exclusivamente na definição de objetos e classes. Ela é muito usada no desenvolvimento orientado a objetos (POO) porque se comporta como um "contrato" que uma classe ou objeto deve seguir.

//Principais Diferenças entre Type e Interface
// Embora hoje em dia eles sejam muito parecidos, aqui estão os pontos onde eles divergem:
// A. Extensibilidade (Declaration Merging)
// Esta é a maior diferença técnica. Você pode declarar a mesma interface duas vezes e o TS vai "mesclar" as duas automaticamente. Com o type, isso gera um erro.

interface ICustomer {
    name: string;
    age: number;
}

interface Iadress {
    street: string;
}

interface ICustomerProfile extends ICustomer, Iadress {// a interface IcusterProfile está recebendo as propriedades da ICustmer e do Iadress
    id: number | string;
} 

const newProfile: ICustomerProfile = { // aqui estamos concatenando as informações dentro do ICustomerProfile baseado nas informações que juntamos acima.
    id: 1,
    name: "daniel",
    age: 28,
    street: "rua do carai"
}




// interface User {
//     id: number,
//     name: string,
//     email: string | number
// }

// const user: User = {
//     id: 24,
//     name: "Tchola Silva",
//     email: "tchola24@gmail.com"
// }

// console.log(user)


interface User {
    nome: string;
    idade: number;
    genero?: string;
}


function showUser({ nome, idade, genero = "masculino" }: User) {
    console.log(`Nome: ${nome}, Idade: ${idade}, Gênero: ${genero}`);
}

//Definindo o genero
showUser({ nome: "Luana", idade: 25, genero: "feminino" });

//por padrão sem definir o genero mas com masculino como padrão
showUser({ nome: "Carlos", idade: 30 });