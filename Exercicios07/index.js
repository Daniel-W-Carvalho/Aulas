const infoIds = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fazendo a requisição para a API
        if (!response.ok) throw new Error('Erro ao buscar os dados'); // Verificando se a resposta foi bem-sucedida
        const info = await response.json(); // Convertendo a resposta para JSON
        info
            .filter(user => user.id >= 1 && user.id <= 5) // Filtrando os usuários com ID entre 1 e 5
            .forEach(user => {console.log(user.title, user.body);}); // Exibindo as informações no console
    } catch (error) {
        console.error('Erro: falha ao carregar dados', error); // Exibindo qualquer erro que possa ocorrer
    }
}

infoIds(); // Chamando a função para executar a requisição e exibir os dados

//Exercicio assincrono, utilizando API e .filter para pegar o usuario de 1 a 5 e exibir titulo e corpo