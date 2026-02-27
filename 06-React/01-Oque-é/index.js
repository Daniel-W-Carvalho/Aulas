// 1. O que é o React?
// O React é uma biblioteca JavaScript criada pelo Facebook para construir Interfaces de Usuário (UI) baseada em Componentes.

// Imagine que você está montando um conjunto de LEGO. Em vez de escrever uma página HTML gigante, você cria peças pequenas e reutilizáveis:

// Um componente de Botao

// Um componente de BarraDeBusca

// Um componente de CardDeProduto

// Você define como cada peça deve parecer e se comportar, e depois as junta para formar a página completa. Se você mudar o "molde" do Botao, todos os botões do site mudam automaticamente.`

//-------------------------------------------------------------------------------------------------------------------------------------------

// O que é o Virtual DOM?
// Para entender o Virtual DOM, primeiro precisamos lembrar que o DOM Real (a estrutura da página que o navegador lê) é "pesado". Toda vez que você altera algo via JavaScript puro, o navegador precisa recalcular muita coisa, o que pode deixar o site lento.

// O Virtual DOM é como um "rascunho" ou uma cópia leve da sua página que o React mantém na memória.

// Como ele funciona na prática (O processo de Reconciliação):
// Mudança: O usuário clica em um botão e o estado do seu aplicativo muda.

// Rascunho: O React cria um novo Virtual DOM com essa mudança.

// Comparação (Diffing): O React compara esse novo rascunho com a versão anterior do Virtual DOM para ver exatamente o que mudou.

// Atualização Cirúrgica: O React vai até o DOM Real e altera apenas o que mudou.

// Analogia: Imagine que você quer trocar apenas uma lâmpada em uma mansão com 100 quartos.

// Sem o Virtual DOM: Você derrubaria a mansão inteira e construiria uma nova só para ter a lâmpada trocada.

// Com o Virtual DOM: Você localiza o quarto exato, entra e troca apenas aquela lâmpada.