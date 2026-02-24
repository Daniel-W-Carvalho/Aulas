// Os Enums (abreviação de Enumerations) são uma das poucas funcionalidades do TypeScript que não existem no JavaScript puro. Eles permitem definir um conjunto de constantes com nome, facilitando a organização de categorias ou opções fixas no seu código.

// Pense neles como uma lista fechada de opções que você pode escolher, evitando que você digite strings ou números "soltos" (os famosos magic numbers) que podem gerar erros de digitação.

// as propriedades dentro do enum começam com a letra maiuscula
// enum Color {
//     Red, 
//     Blue,
//     Green
// }

//---------------------------------------------------------------------

// enum StatusPedido {
//   Pendente,   // 0
//   Processando, // 1
//   Enviado,     // 2
//   Entregue     // 3
// }

// let statusAtual = StatusPedido.Enviado; 
// console.log(statusAtual); // Saída: 2

//---------------------------------------------------------------------

//Outro exemplo:
// enum UserResponse {
//     No = 0, 
//     Yes = 1
// }

// function respondedEmail(recipient: string, UserResponse: UserResponse): void {
//     // ...
// }
// respondedEmail("Caroline", UserResponse.Yes);

//---------------------------------------------------------------------

// enum tradeType {
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6554    
// }

// SaveTrade(tradeType.TESOURO_DIRETO)

//---------------------------------------------------------------------

// enum StatusCode {
//     OK = 200,
//     BadRequest = 400,
//     Unauthorized = 401,
//     NotFound = 404
// }

// StatusCode.NotFound;

//---------------------------------------------------------------------
//EXERCICIO 01
enum Progresso {
    criando = 'Criando...',
    enviando = 'Enviando...', 
    carregando = 'Carregando...',
    salvo = 'Salvo.'
}

let statusAtual: Progresso = Progresso.enviando; 

console.log(statusAtual)

export {}