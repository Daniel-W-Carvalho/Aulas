const infoEmails = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Fazendo a requisição para a API
        if (!response.ok) throw new Error('Erro ao buscar os dados'); // Verificando se a resposta foi bem-sucedida
        const info = await response.json(); // Convertendo a resposta para JSON
        info.forEach(user => {console.log(user.name, user.email);}); // Exibindo os emails no console
    } catch (error) {
        console.error('Erro: falha ao carregar dados', error); // Exibindo qualquer erro que possa ocorrer
    }
}

infoEmails(); // Chamando a função para executar a requisição e exibir os dados

//Exercicio para puxar informações de usuario, name e email da api Jsonplaceholder