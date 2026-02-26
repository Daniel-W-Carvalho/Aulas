// Em TypeScript, Assertions (ou Type Assertions) são uma forma de dizer ao compilador: "Ei, eu sei o que estou fazendo, confia em mim que esse dado é do tipo X".
// É como se você fizesse uma "coerção de tipo" manual. Você usa assertions quando tem informações sobre o tipo de um valor que o TypeScript não consegue descobrir sozinho.

//Atenção: Uma Assertion não converte o dado de verdade (como transformar "10" em 10). Ela apenas avisa ao sistema de tipos como ele deve tratar aquela variável durante a escrita do código.

const button = document.getElementById("button") as HTMLButtonElement; //definindo o tipo do botão explicitamente.

button.addEventListener("click", event => {
    const eventoClick = event as MouseEvent; //definimos que a const é do tipo MouseEvent
})




// O que é: Uma instrução para o compilador tratar um valor como um tipo específico.
// Quando usar: Quando você tem certeza do tipo, mas o TS não consegue deduzir (ex: retornos de API ou elementos do DOM).
// Sintaxe: Prefira sempre o valor as Tipo.