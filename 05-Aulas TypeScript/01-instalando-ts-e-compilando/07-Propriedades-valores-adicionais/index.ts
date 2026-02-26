// usamos o ? (interrogação) para dizer que o valor de uma propriedade é opcional, ou seja, não é obrigatória para o funcionamento do aplicativo/programa.

type Customer = {
    firstName: string;
    lastName?: string; // colocamos o sinal de interrogação na frente do lastName dizendo que ele é opcional, não é obrigatório para rodar no programa
    age: number;
}

const newCustomer: Customer = {
    firstName:"João",
    age:32
}

console.log(newCustomer)

//Obs, caso tirassemos o ? do lastName, o const newCustomer iria acusar um erro, dizendo que é obrigatório passar o lastName, ja que ele não seria mais um requisito opcional.




//usando propriedade-valores opcionais em funções:
function printName(firstName: string, lastName?: string){
    console.log(`o primeiro nome é ${firstName}`)
    console.log(`o ultimo nome é ${lastName}`)
}

printName("Daniel");

//caso eu não tivesse o ? no lastName como parametro, eu teria que passar duas strings obrigatoriamente, mas como deixei o lastName como opcional, ele não da problemas.