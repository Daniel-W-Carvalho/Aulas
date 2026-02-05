const wtsCep = document.getElementById('wtsCep');
const btn = document.getElementById('btn');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', async () => { // A função do evento se tornou assíncrona
    try {
        // A lógica que estava em 'buscar' agora fica aqui diretamente
        const cep = wtsCep.value;
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const dados = await response.json();
        console.log(dados);

        // Mostrando o resultado na tela
        resultado.textContent = `Endereço:${dados.logradouro}, ${dados.bairro} - ${dados.localidade} - ${dados.uf}`;
    } catch (erro) {
        console.log("Deu erro!", erro);
        resultado.textContent = "Ocorreu um erro ao buscar o CEP.";
    }
});
