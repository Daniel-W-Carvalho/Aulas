// 2 - Criando a pizza
const orderPizza = async (hasIngredients) => { // variavel que recebe uma função assincrona e tem o parametro true do MakeOrder, pois tem ingrediente, 
        console.log("Pedido da pizza enviado para a cozinha..."); //avisando que entrou na função e o pedido foi enviado p cozinha
    //lançando um erro proposital
        if (!hasIngredients){  // se não tiver ingrediente...                       
            throw new Error ("Não temos ingredientes...") // lança o erro, não temos ingrediente e encerra todo o processamento seguinte e ja cai no finally
        }
        //mas caso tenha o ingrediente
        await new Promise((resolve, reject) => { // espera e cria uma nova promessa que pode ser resolvida ou rejeitada
            setTimeout(() => { //definindo que terá um tempo
            
            const hasErrors = Math.random() < 0.1; // variavel que simula uma chance de 10% de dar erro

            if (hasErrors) { // se a chance de erro for true
                reject("Erro ao preparar a pizza"); //ele rejeita e mostra a mensagem
            } else { //se não
                resolve("Pizza pronta!"); // resolve e mostra mensagem
            }
        }, 3000); // definindo tempo para cada processamento dentro dessa promessa
        })

        return "Pizza pronta" //retorno do throw, caso tenha ingrediente ele retorna e faz o await da linha 9
};



// 3 - simular uma api que entrega a pizza
const deliverPizza = () => { // variavel que recebe a função 
    return new Promise((resolve) => { // retorna uma nova promessa que vai conseguir entregar 
        console.log("A pizza está a caminho..."); // avisando que esta a caminho

        setTimeout(() => { //definindo que vai ter um tempo de entrega
            resolve("Pizza entregue!"); //pizza entregue
        }, 3000); // definindo o tempo de entrega
    });
};


// 1 - iniciando uma função assincrona que vai chamar algumas outras funções 
const makeOrder = async () => { // criando variavel que é uma função assincrona e não recebe parametro
    try {  // try - tente
        const pizzaMessage = await orderPizza(true); // criando variavel que recebe a função, pedido da pizza e aguarda, aqui passamos o parametro true dizendo que tem ingrediente pra cozinha
        console.log(pizzaMessage); // vai receber uma mensagem dependendo do que acontecer na cozinha

        const deliverPizzaMessage = await deliverPizza(); // variavel que recebe uma função de entregar a pizza e aguarda
        console.log(deliverPizzaMessage); // aguarda uma mensagem dependendo do que acontecer na entrega
    } catch (error) { //caso tenha erro, vai pegar o erro e mostrar abaixo
        console.log("Ocorreu um erro", error); // mostrando erro
    } finally { // e finalmente ele imprimi o que tiver aqui, independente se der errado ou se der certo.
        console.log("Obrigado por pedir conosco. Volte sempre") // mostrando mensagem
    }
};

makeOrder() //chamando a função.