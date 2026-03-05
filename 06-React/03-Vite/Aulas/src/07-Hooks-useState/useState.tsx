// O useState é o Hook mais fundamental do React. Ele é o que permite que seu componente tenha "memória" e se torne interativo.
// Imagine que um componente comum é como uma foto: ele exibe o que recebeu via props e pronto. Um componente com useState é como um vídeo ou um jogo: ele pode mudar o que está na tela em resposta a ações do usuário.

// 1. O que é o useState?
// No JavaScript puro, se você mudar o valor de uma variável let x = 10, o navegador não sabe que precisa "redesenhar" a tela. No React, o useState faz duas coisas:
// Guarda o valor: Mantém o dado gravado mesmo que o componente seja recarregado.
// Gatilha o Render: Sempre que você atualiza o estado, o React automaticamente atualiza o HTML na tela para refletir o novo valor.
// 2. Como se aplica (A Sintaxe)
// Ele sempre retorna um array com dois elementos, e usamos a desestruturação para pegá-los:

// TypeScript
// const [estado, setEstado] = useState(valorInicial);
// estado: A variável que guarda o valor atual.

// setEstado: A função que você deve usar para mudar esse valor.
// valorInicial: Como o dado começa (pode ser string, número, array, etc).

import {useState} from 'react';

function Contador () {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    return (
        <>
            <p>Contador: {count}</p>
            <button onClick={increment}>Incrementar</button>
        </>
    )
}

export default Contador;