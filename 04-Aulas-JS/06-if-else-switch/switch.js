// Switch funciona como if e else if, mas é mais indicado quando temos muitas condições para verificar. Uma forma abreviada de escrever múltiplos ifs.

const cor = "branco";

switch(cor) {
    case "azul": // caso a cor  seja azul, então:
        console.log("cor azul");
        break; // sai do switch
    case "amarelo":
        console.log("cor amarela");
        break;
    case "vermelho":
        console.log("Essa é a cor vermelha");
        break;
    case "verde":
        console.log("cor verde");
        break;
    default:
        console.log("cor não encontrada");
}

//Exercicio de fixação

// let nota = 8;

// if(nota >= 7){
//     console.log("Aprovado");
// } else if (nota >= 5 && nota < 7){
//     console.log("Recuperação");
// }   else {
//     console.log("Reprovado");
// }

let diaDaSemana = 5;

switch(diaDaSemana){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}
