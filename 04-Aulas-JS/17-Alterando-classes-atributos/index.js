// O .classList é, sem dúvida, uma das ferramentas que você mais vai usar no dia a dia como desenvolvedor Front-end.
// Em vez de mexer no estilo do elemento diretamente pelo JavaScript (o que pode deixar seu código bagunçado), o classList permite que você apenas adicione ou remova classes de CSS que já estão prontas no seu arquivo .css.
// Pense nele como um "gerenciador de etiquetas". Você não pinta a parede com o JavaScript; você apenas coloca a etiqueta "parede-azul" nela, e o CSS faz o trabalho de pintar.

//PRINCIPAIS METODOS OS CLASSLIST:
//.add() -> Adiciona uma classe ao elemento
//.remove() -> remove uma classe existente
//.toggle() -> Interruptor, ou seja, se ela não existe, então adiciona. Se ela existe, então remove. Exemplo: Botão do theme Dark ou Claro
//.contains() -> Verifica se o elemento possui a classe especificada. Retorna true ou false
//.replace() -> Substitui uma classe existente por uma nova classe

const quadrado = document.querySelector('.quadrado');

// quadrado.classList.remove('azul');
// quadrado.classList.add('preto');

const hasBlue = quadrado.classList.contains('azul');

if(hasBlue){
    console.log("quadrado tem a classe AZUL");
}else{
    console.log("quadrado NÃO tem a classe AZUL")
}

// EXEMPLO DE .CONTAINS E .REPLACE, TANTO DO MODO TERNARIO QUANTO DO IF/ELSE
// quadrado.addEventListener('click', () => {
//     quadrado.classList.contains("azul") ? quadrado.classList.replace("azul", "preto"): quadrado.classList.replace("preto", "azul");
// });

// quadrado.addEventListener('click', () => {
//     if (quadrado.classList.contains("azul")){
//         quadrado.classList.replace("azul", "preto");
//     }else{
//         quadrado.classList.replace("preto", "azul")
//     }
// });


//Mexendo com atributos dos elementos HTML
//setAttribute() -> Define um atributo para um elemento
//getAttribute() -> Retorna o valor de um atributo
//removeAttribute() -> Remove um atributo especificado de um elemento

const inputCor = document.getElementById('cor');
inputCor.setAttribute("placeholder", "Digite uma cor");



const valorPlaceholder = inputCor.getAttribute("placeholder");
console.log(valorPlaceholder);

inputCor.removeAttribute("placeholder");
