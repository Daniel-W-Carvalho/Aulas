import NovoCard from "./card"

const ConteudoCard = () => { //criando a função do conteudo que terá dentro do card que ja definimos o layout no arquivo pai
    return <section> 
        <NovoCard titulo="Guerra" descricao="Lorem adushduasdijasdojasd"></NovoCard> 
        <NovoCard titulo="Paz" descricao="Lorem adushduasdijasdojasd"></NovoCard>
    </section>
} //retorna uma seção, que cobre a div do arquivo card(filho) passando as informações para dentro do titulo e a descrição

export default ConteudoCard;