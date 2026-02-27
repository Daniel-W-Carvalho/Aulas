import "./App.css"

function App(){
  const name = "Ricardo";
  return (
    <>  
      <h1>Hello {name}</h1>
      <p>hasdyrhasd hasufasd</p>
    </>
  )
}

export default App;

//sempre que formor utilizar JS dentro do html, precisamos colocar chaves {}
// As chaves servem para fazer uma interpolação. Ou seja, você "foge" do texto e entra no mundo do JavaScript (para usar variáveis, funções ou contas matemáticas).

// Sempre temos que ter um pai para os filhos, mas caso não saiba qual elemento utilizar, pode apenas usar <> </> (Fragment)

//Utilizar parenteses () sempre que tiver mais de um elemento na mesma seção

// function App(){ 
//   const name = "Ricardo";
//   return (
//     <>  
//       <h1>Hello {name}</h1>
//       <p>hasdyrhasd hasufasd</p>
//     </>
//   )
// }



// Sugestão de "Manual de Regras" (Versão Pro)
// Para suas anotações ficarem perfeitas, você pode organizá-las assim:

// Regra do Elemento Único: Um componente deve retornar apenas um elemento raiz. Se tiver vários irmãos, use um Fragment <> ... </> ou uma <div>.

// JSX Expressions: Use { } para injetar qualquer lógica JS.

// Exemplo: <h1>{1 + 1}</h1> ou <h1>{name.toUpperCase()}</h1>.

// Fechamento de Tags: No JSX, toda tag precisa ser fechada. Tags sem conteúdo devem ser self-closing.

// Errado: <img src="...">

// Certo: <img src="..." /> ou <br />.

// CamelCase para Atributos: Como o JSX é JavaScript, usamos camelCase em vez de nomes do HTML puro.

// Errado: <div class="container">

// Certo: <div className="container"> (porque class é uma palavra reservada do JS).