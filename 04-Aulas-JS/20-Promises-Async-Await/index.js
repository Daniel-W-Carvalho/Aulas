// Promises (Promessas) em JavaScript são objetos que representam a conclusão (ou falha) eventual de uma operação assíncrona.

// Imagine que você pede um Uber. O aplicativo te dá uma "promessa" de que o carro vai chegar.
// Pending (Pendente): Enquanto você espera, a promessa está pendente.
// Fulfilled / Resolved (Resolvida): O carro chega. A promessa foi cumprida com sucesso.
// Rejected (Rejeitada): O motorista cancela. A promessa foi rejeitada (deu erro).

// No código, usamos Promises para lidar com coisas que demoram, como buscar dados de uma API, ler arquivos ou aguardar um tempo, sem travar o restante do código

//OBSERVAÇÃO:
// não usamos o new sempre.
// A regra é simples:
// new Promise(...): Usamos apenas quando estamos CRIANDO uma promessa do zero (geralmente para transformar algo que não é promessa em uma).
// Sem new: Usamos quando estamos apenas CONSUMINDO uma função que já retorna uma promessa pronta (como fetch(), axios, ou funções async).
// Na prática, no dia a dia (consumindo APIs), você quase nunca escreve new Promise, você apenas chama a função e usa .then() ou await.

//Criando uma Promisse na mão, mas quando formos usar uma API, não faremos desse jeito, mas é bom para sabermos como funciona.
const pedirPizza = () => {
    return new Promise((resolve) => { // criando uma nova promessa. - o resolve retorna quando a pizza estiver pronta
        console.log("Pedido da pizza enviado para a cozinha...");

        setTimeout(() => { // definindo um tempo de conclusão
            resolve("Pizza pronta!") // resolve, ou seja, promessa cumprida depois de 3s que definimos abaixo
        }, 3000); // definindo tempo para resolve, de 3s ou 3000 milisegundos.
    }); 
}

//Simular uma API que entrega a pizza
const deliverPizza = () => {
    return new Promise((resolve) => {
        console.log("pizza está a caminho...");

        setTimeout(() => {
            resolve("pizza entregue");
        }, 3000);
    })
}

pedirPizza().then(message =>{ //após a pizza acima ficar pronta, (then)então...
    console.log(message);

    deliverPizza().then(message => { //chamando uma função com then, dentro de uma função com then, mas não é aconselhavel utilizar assim
        console.log(message);
    })
}) //só podemos usar o then quando o retorno de uma função tem uma promises. O then é algo que vai ser executado após a promessa for resolvida ou rejeitada

//.then ->  Ele serve para dizer ao JavaScript: "Espere a promessa terminar e, então, execute esse código aqui com o resultado dela".
//O que ele faz exatamente? Ele "desembrulha" o valor da promessa.
// Lá dentro da Promise, você fez resolve("Pizza pronta!").
// O .then() pega esse texto "Pizza pronta!" e o entrega como argumento para a função que você colocar dentro dele.

// Aplica após resolvida ou rejeitada?
// Resolvida (Sucesso): O .then() é executado.
// Rejeitada (Erro): O .then() é ignorado/pulado e o código procura pelo .catch().





//ASYNC E AWAIT
//ASYNC é qualquer tarefa que demora um tempo para ser concluida e não trava o resto do programa enquanto está acontencendo.
//O que acontece quando marco uma função como async? 
//Quando uma função é marcada como async, ela automaticamente retorna uma Promise.

const makeOrder = async () => {
    const pizzaMessage = await pedirPizza();
    console.log(pizzaMessage);
}

makeOrder();

//MAIS EXEMPLOS DE ASYNC AWAIT

//Síncrono: O garçom anota seu pedido e fica parado na sua frente esperando o prato ficar pronto. Ele não atende mais ninguém até te entregar a comida. (Isso trava o restaurante/site).
// Assíncrono (Async): O garçom anota seu pedido, leva para a cozinha e volta para atender outras mesas. Quando o prato fica pronto, ele te entrega. (O site continua funcionando enquanto os dados não chegam).

// Async: É o sinal de que você vai fazer uma "ligação telefônica".
// Await: É você segurando o telefone no ouvido esperando a pessoa responder. Enquanto você espera (await), você pode até fazer outras coisas com a outra mão, mas aquela conversa específica só continua quando o outro lado fala.

// O que é cada um?
// async: É uma palavra que você coloca antes de uma função para dizer ao JavaScript: "Ei, esta função vai realizar tarefas que levam tempo e ela vai retornar uma Promessa (Promise)".
// await: É o botão de "pausa inteligente". Você o usa dentro da função async para dizer: "Espere aqui até que este dado chegue da internet, depois continue o código".