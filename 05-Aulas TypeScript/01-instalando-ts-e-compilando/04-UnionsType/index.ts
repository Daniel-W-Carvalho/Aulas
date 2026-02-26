// Usamos a | para dizer que podemos receber dois tipos como parametros, ou numero ou string se necessário, possibilitando mais tipagens

function printClient(id: number | string){
    console.log(`id: ${id}`);
}

printClient(10)
printClient("100")

// declarando variavel com union type
// let identificacao: string | number = "1000"
// console.log(identificacao) 