// As Keys (chaves) são como "crachás de identificação" que você dá aos elementos de uma lista no React. Elas servem para que o React saiba exatamente qual item é qual quando a lista muda.

// Imagine que você tem uma lista de tarefas e decide deletar a segunda tarefa. Sem as keys, o React ficaria confuso: "Será que a segunda sumiu ou será que a segunda mudou de nome e a terceira é que sumiu?". Com a key, o React olha e diz: "Opa, o item com ID 502 sumiu, os outros continuam iguais".

type Todo = {
  id: number;
  text: string;
};

export const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, text: "Estudar JS" },
    { id: 2, text: "Estudar React" },
    { id: 3, text: "Estudar Css" },
  ];

  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li> //Identificando cada item da lista na key com o próprio id, mas podemos definir o numero da key caso necessário
        ))}
      </ul>
    </>
  );
};


// import { TodoList } from "./08-Keys-Trabalhando ComLista/key";
// import "./App.css"

// function App() {
//     return (
//     <>
//         <TodoList />
//     </>
//   )
// }

// export default App;