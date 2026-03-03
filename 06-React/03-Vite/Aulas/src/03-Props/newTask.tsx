type taskProps = {
    description: string;
}

const NewTask = ({description}: taskProps) => {
    return <p>Tarefa: {description}</p>
}

export default NewTask;