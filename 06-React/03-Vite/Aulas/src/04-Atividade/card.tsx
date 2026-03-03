type Card = {  //criando o tipo, definindo que o card terá um titulo string e uma descrição string
    titulo: string,
    descricao: string
}

const NovoCard = ({titulo, descricao}: Card) => { //criando a função novocard que terá um titulo e uma descrição em string mode que defini acima
    return ( //retorna uma div com o h1 do titulo e o p da descrição que passarei no arquivo filho
        <div style={{ padding: '20px', border: '2px solid black', margin: '20px'}}> 
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    )
}

export default NovoCard;
