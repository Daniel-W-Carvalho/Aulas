// reduce é usado para reduzir um array a um único valor.
// Ele itera sobre cada elemento e acumula o resultado com base em uma lógica.

// numero.reduce(acumuludaor, numeroAtual, indice, arrayOriginal)




const numeros = [1, 2, 3, 4, 5];

// acumulador: guarda o valor acumulado das iterações anteriores
// numeroAtual: é o elemento do array que está sendo processado no momento
const soma = numeros.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
}, 0); // <--- O 0 aqui é o valor INICIAL do acumulador

console.log(soma); // Saída: 15 (1+2+3+4+5)



