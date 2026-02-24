//Usando tipos no TypeScript, deve definir o tipo que irá receber na variavel ou parametros
// let nome: string = "Beto"; 
// let idade: number = 42;
// let mandouEmail: boolean = true;
// let idades: number[] = [12, 22, 69]
// let nomes: string[] = ["baiano","doga"]
// let idades: array<number> = [12, 22, 39]
// let obj: any = {x:0} //serve para qualquer coisa


function sendMessage (userName: string, isLogged: boolean) {
    console.log(`Olá ${userName}. Você ${!isLogged? " não" : ""} pode logar.`)
}

const userName = "Beto"
const isLogged = true

sendMessage(userName, isLogged);



//Outro exemplo
let obj: any = {x:0};

function imprimirCoordenadas(pt: { x: number; y: number }) {
 console.log("The coordinate's x value is " + pt.x);
 console.log("The coordinate's y value is " + pt.y);
}
imprimirCoordenadas({ x: 3, y: 7 });


//Tuple
// Tuplas são usadas apenas quando a ordem e a quantidade são fixas (como uma coordenada [latitude, longitude]).