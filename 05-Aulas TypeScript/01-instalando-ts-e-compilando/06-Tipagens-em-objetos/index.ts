// aqui criamos um tipo chamado customer, que aparentemente é um obejto, e vamos utilizar esse objeto especifico chamado customer como parametro.
type Customer2 = {
    name: string;
    agr: number;
}

function showCustomerInfo(customer: Customer2){
    console.log(`O nome do cliente é ${customer.name}`);
}