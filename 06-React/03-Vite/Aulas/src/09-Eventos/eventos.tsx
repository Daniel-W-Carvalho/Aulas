// Os Eventos no React são a forma como o seu site "escuta" e reage às ações do usuário, como cliques, digitação, passadas de mouse ou envios de formulário.
// Se o useState é a memória do componente, o Evento é o gatilho que faz essa memória mudar.

// Principais eventos:
// onClick – clique simples
// onDoubleClick – clique duplo
// onMouseDown – quando o botão do mouse é pressionado
// onMouseUp – quando o botão é solto
// onMouseEnter – mouse entrou no elemento

// Como era:
// const botao = document.getElementById("botao");
// botao.addEventListener("click", () => {})

//Como fica:
// return (
//     <button onClick={HandleClick}>
//         Mostrar saudação
//     </button>
// )

import React from 'react';
import type { KeyboardEvent } from "react"; //importando o tipo do react, keyboadevent é um tipo da biblioteca react

export default function MyClique() {
    const handleClick = (name: string) => { //recebendo parametro nome 
        alert(`${name} clicou no botão`);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => { //definindo que o parametro vai ser um evento que importamos do react (keyboardevent)
        console.log(`a tecla pressionada foi: ${event.key}`)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('O formulário foi enviado!')
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
    }


    return (
        <>
            <button onClick={() => handleClick("Daniel")}> 
                Mostrar saudação
            </button>
            <input type="text" onKeyDown={handleKeyDown}/>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="digite algo" onChange={handleChange}/>
                <button type="submit">Enviar</button>
            </form> 
        </>
    ) //onKeyDown = tecla pressionada
}


// O KeyboardEvent no TypeScript/React é o tipo que define as informações geradas por ações no teclado (como onKeyDown, onKeyUp ou onKeyPress).
// 1. O que ele faz?
// Sempre que você pressiona uma tecla, o navegador gera um objeto cheio de detalhes. O KeyboardEvent serve para o TypeScript saber exatamente o que tem dentro desse objeto.
// Com ele, você pode acessar propriedades como:
// e.key: Qual tecla foi pressionada (ex: "Enter", "a", "Escape").
// e.shiftKey: Se o Shift estava pressionado junto.
// e.code: O código físico da tecla.

//----------------------------------------------------------------------------------------------------------------------------------------------------------

// O motivo é que o React não usa os eventos nativos do navegador diretamente.
// Lembra que eu mencionei os Eventos Sintéticos?
// O navegador tem o seu próprio KeyboardEvent (nativo).
// O React cria o seu próprio React.KeyboardEvent (sintético).
// Temos que importar porque:
// Compatibilidade: O evento do React garante que o código funcione igual em todos os navegadores.
// Segurança do TypeScript: Se você não importar e usar o tipo do React, o TypeScript pode reclamar que certas propriedades não existem ou que os tipos não batem, pois o evento do React tem algumas "perfumarias" extras que o nativo não tem.

// Os Eventos Sintéticos mais utilizados
// Clique	React.MouseEvent	Botões, links, divs clicáveis.
// Digitação	React.ChangeEvent	Inputs de texto, checkboxes, selects.
// Teclado	React.KeyboardEvent	Atalhos (Enter, Esc), jogos, acessibilidade.
// Formulário	React.FormEvent	Quando o usuário dá "Submit" no <form>.
// Foco	React.FocusEvent	Quando o input ganha ou perde o destaque azul.