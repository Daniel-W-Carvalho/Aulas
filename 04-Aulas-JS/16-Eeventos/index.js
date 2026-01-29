const input = document.getElementById("nome");
const button = document.getElementById("btn");
const formBusca = document.getElementById("form-busca")

// Adicionando um evento ao botão - Como se fosse um evento de escuta, assim que o usuário clicar, acontecerá algo que definirmos.
// O evento precisar ter algumas informações, como por exemplo, o tipo do evento, no caso abaixo vamos usar o evento de click
// E logo em seguida fazer a função do que vai acontecer após o evento de click acontecer

button.addEventListener("click", () =>{
    console.log("Clica")
})



// Caso queira passar uma função ja pronta como parametro para um evento. Neste caso faz a mesma coisa que a situação de cima, porém mostrando com função como parametro
const mostrar = () => {
    console.log("Clicou")
}
button.addEventListener("click", mostrar)



// Evento de INPUT - sempre que digitar algo no campo de Input ele acontecerá algo que definirmos.
input.addEventListener("input", () => {
    console.log("Digitou");

    const value = input.value // .value -> pegar o valor dentro do input, pegar o que alguém digitou por exemplo
    console.log(value)
})

//Adicionando evento de submit, que seria após clicar no botão para enviar informações de um formulário por exemplo
//Event serve como parametro e como informações guardadas do que foi feito no navegador por parte do usuario, podemos usar essas informações para pegarmos valores, o que foi feito, pra onde foi, etc. Podemos guardar essas informações dentro de uma variavel e usa-las posteriormente.
formBusca.addEventListener("submit", (event) =>{

    event.preventDefault() //Evento para não recarregar a página após envio do formulário - Existe uma lista de eventos para usar

    console.log(`Formulário enviado" ${input.value}`);
})





