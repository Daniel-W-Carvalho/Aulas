//Promise.all (Tudo ou Nada): Imagine que você precisa de 3 ingredientes para uma receita (farinha, ovos, leite). Você manda 3 assistentes buscarem, um para cada ingrediente. Promise.all só te entrega os ingredientes se TODOS os 3 assistentes voltarem com sucesso. Se um deles falhar (o mercado não tinha ovos), a operação inteira é cancelada e você recebe um erro.
//Ele recebe um array de Promises e retorna uma única Promise.
// Sucesso: A Promise do Promise.all só é resolvida quando todas as Promises do array são resolvidas. O resultado é um array com os resultados de cada uma, na mesma ordem.
// Falha: Se qualquer uma das Promises do array for rejeitada (der erro), a Promise do Promise.all é imediatamente rejeitada com o motivo da primeira que falhou.
// Quando usar? Quando você precisa que todas as operações sejam bem-sucedidas para continuar. Se uma falhar, o resto não importa.



//Promise.allSettled (Tenta Todos): Na mesma situação, Promise.allSettled espera os 3 assistentes voltarem, não importa o resultado. No final, ele te entrega um relatório: "O assistente 1 trouxe farinha, o assistente 2 falhou em trazer ovos, o assistente 3 trouxe leite". Você pode então decidir o que fazer com o que deu certo.
// Promise.allSettled
// Ele também recebe um array de Promises e retorna uma única Promise.
// Sucesso (Sempre): A Promise do Promise.allSettled é resolvida depois que todas as Promises do array terminam, seja com sucesso (fulfilled) ou com falha (rejected).
// Resultado: O resultado é um array de objetos, onde cada objeto descreve o resultado de uma Promise:
// Se deu certo: { status: 'fulfilled', value: <resultado> }
// Se deu errado: { status: 'rejected', reason: <erro> }
// Quando usar? Quando você quer executar várias operações independentes e precisa saber o resultado de cada uma, mesmo que algumas falhem.


//EXEMPLO COM 1 UNIDADE
const baseURL = "https://ghibliapi.vercel.app"

const loadSingleMovie = async (id) => {
    try{
        const response = await fetch (`${baseURL}/films/${id}`)

        const movie = await response.json()


    }catch(error) {
        console.log("Erro ao carregar o filme:", error)
    };
}
loadSingleMovie()






//EXEMPLO COM .ALL
const moviesIds = ["2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky 
                "58611129-2dbc-4a81-a72f-77ddfc1b1b49"] // My Neighbor Totoro

const loadMultipleMovies = async (movieIds) => {
    try{
        const promises = movieIds.map(async (id) => {
            const response = await fetch(`${baseURL}/films/${id}`);
        
            if(!response.ok){
                throw new Error (`Erro ao carregar o filme de id: ${id}`);
            }

            return response.json();
    
        });

        const movies = await Promise.all(promises);
        console.log(movies);

    } catch(error) {
        console.log("Erro ao carregar o filme:", error);
    }
}

loadMultipleMovies(moviesIds)




//EXEMPLO COM ALLSETTLED
const loadMultipleMoviesAll = async (movieIds) => {
    try{
        const promises = movieIds.map(async (id) => {
            const response = await fetch(`${baseURL}/films/${id}`);
        
            if(!response.ok){
                throw new Error (`Erro ao carregar o filme de id: ${id}`);
            }

            return response.json();
    
        });

        const movies = await Promise.allSettled(promises);

        console.log("Relatório Final:");

        movies.forEach((movie, index) => {
            if(movie.status === "fulfilled"){
                console.log("Ok:", movie.value.title);
            } else {
                console.log(`Erro no filme ${moviesIds[index]}`, movie.reason.message);
            }
        });

    }catch(error) {
        console.log("Erro ao carregar o filme:", error);
    }
}

loadMultipleMoviesAll(moviesIds)