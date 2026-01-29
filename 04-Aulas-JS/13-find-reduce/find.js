// find é usado quando queremos encontrar o primeiro elemento que satisfaça uma condição específica em um array.
//Usamos quando queremos apenas um valor que atenda ao critério.

const numeros = [1, 3, 7, 8, 10, 15];
const primeiroPar = numeros.find((numero) => numero % 2 === 0);
console.log(primeiroPar); // Saída: 8