// Pense nos Generics como uma "variável para tipos".

// Até agora, você definiu tipos fixos (como string, number ou sua interface User). Mas e se você precisasse de uma função ou interface que funcionasse com qualquer tipo, mas ainda mantivesse a segurança do TypeScript?

// Sem o Generic, você teria que usar any (o que é ruim) ou criar várias versões da mesma função. Com o Generic, você cria um código flexível que se adapta ao tipo que você passar para ele.

//EXEMPLO:
// colocando o <type> dizemos que vamos usar diversos tipos nesta função, podemos usar tanto strings quanto numbers como parametro e o retorno também dentro do array
function makeArray<Type>(item: Type): Type[] { 
    return [item]
} 

//Agora as duas chamadas irão funcionar, tanto do número quanto da string
const numbers = makeArray(10);
console.log(numbers);

const names = makeArray('João');
console.log(names);

//--------------------------------------------------------------------------------------

//OUTRO EXEMPLO:

// O Exemplo da "Caixa"
// Imagine uma caixa. Ela pode guardar brinquedos, ferramentas ou frutas. O formato da caixa é o mesmo, mas o conteúdo muda.

// O <T> é o Generic. É um "espaço reservado" para um tipo que será definido depois.
interface Caixa<T> {
    conteudo: T;
}

// Agora eu decido o que vai ter na caixa na hora de usar:
const caixaDeTexto: Caixa<string> = { conteudo: "Uma carta" };
const caixaDeNumero: Caixa<number> = { conteudo: 100 };


// Resumo rápido:
// O que é: Um jeito de passar "tipos como parâmetros".

// Sinal visual: Uso de "angle brackets" com uma letra dentro, geralmente <T> (de Type), mas pode ser qualquer nome.

// Vantagem: Reutilização de código sem perder a segurança (você evita o any).


function mostrarLista<T>(item: T[]): void {
    item.forEach(element => {
        console.log(element);
    });
}

const itensN = mostrarLista<number>([100, 250, 300, 50]);
const itensS = mostrarLista<string>(['a', 'b', 'c'])
const itensAny = mostrarLista<number | string>([10, "Hello World", 25]);



