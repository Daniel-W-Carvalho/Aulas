//1. Webpack (O Veterano)
// É a ferramenta mais clássica e poderosa. Ele pega todos os seus arquivos (módulos) e os empacota em um único arquivo (ou poucos) para o navegador.
// Destaque: Extremamente configurável e cheio de plugins.
// Ponto Fraco: Em projetos grandes, ele pode ser bem lento para iniciar o desenvolvimento.
// Resumo para nota: "O empacotador completo e tradicional que resolve qualquer problema de configuração."


// 2. Rollup.js (O Especialista em Bibliotecas)
// Focado em gerar pacotes menores e mais limpos. É o preferido de quem cria bibliotecas (como o próprio React ou Lodash).
// Destaque: Usa uma técnica chamada Tree Shaking (ele "sacode" o código e remove tudo o que você não está usando, deixando o arquivo final leve).
// Resumo para nota: "Focado em eficiência e tamanho de arquivo; o padrão ouro para criar bibliotecas JavaScript."

// 3. esbuild (O Ligeirinho)
// Uma ferramenta escrita em uma linguagem chamada Go, focada em velocidade extrema. Ele consegue ser até 100x mais rápido que o Webpack.
// Destaque: Consegue transformar TypeScript em JavaScript quase instantaneamente.
// Resumo para nota: "O motor de alta performance que transforma TS em JS em milissegundos."


// 4. Vite (O Moderno / "A Nova Era")
// O Vite não é exatamente um "empacotador" do zero, ele é um gerenciador de ambiente. Ele usa o esbuild para transformar o código rápido e o Rollup para o empacotamento final.
// Destaque: No desenvolvimento, ele não empacota tudo de uma vez. Ele entrega o arquivo que o navegador pede na hora. Por isso, ele inicia o projeto em segundos, não importa o tamanho.
// Resumo para nota: "A ferramenta de desenvolvimento mais rápida da atualidade, que une o melhor do esbuild e do Rollup."