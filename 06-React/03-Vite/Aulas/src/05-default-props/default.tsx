// O Default Props é um recurso que permite definir valores padrão para as suas props. Caso o componente "pai" esqueça de passar alguma informação, o componente "filho" não quebra e nem fica vazio; ele usa esse valor reserva.


type Card = {  
    titulo?: string, //definimos com interrogação que essa propriedade será opcional
}

const NovoCard = ({titulo = "Nenhum produto localizado"}: Card) => {  // ao declarar o parametro com uma string, ele será o valor padrão caso não tenha nenhum valor passado pelo pai
    return ( 
        <div style={{ padding: '20px', border: '2px solid black', margin: '20px'}}> 
            <h1>{titulo}</h1>
        </div>
    )
}

export default NovoCard;