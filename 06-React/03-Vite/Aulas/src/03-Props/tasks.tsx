import NewTask from "./newTask"

const Tasks = () => {
    return (
        <div>
            <h2>Lista de Tarefas</h2>
            <NewTask description="Estudar React no fim de semana"></NewTask>
            <NewTask description="Fazer bolo"></NewTask>
        </div>
    )
}

export default Tasks;