
//PRIMEIRO EXERCICIO
const botao = document.getElementById('btn');
const container = document.getElementById('container');

// botao.addEventListener('click', () => {
//     container.classList.contains('claro') ? container.classList.replace ('claro', 'dark-mode') && botao.classList.replace('dark-mode', 'claro') : container.classList.replace('dark-mode', 'claro') && botao.classList.replace('claro', 'dark-mode');
// })

container.classList.add('claro');
botao.classList.add('dark-mode');

botao.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
    container.classList.toggle('claro');
    
    botao.classList.toggle('claro');
    botao.classList.toggle('dark-mode');
});


//SEGUNDO EXERCICIO
const listinha = document.querySelector('#listinha'); 

const tecnologias = ["HTML","CSS","JS","React"]; 

tecnologias.map (tecnologia => {
    
    const lista = document.createElement('li')

    lista.textContent = tecnologia

    listinha.appendChild(lista);
})


