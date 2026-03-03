// As children permitem que, quando a gente cria um componente, possa passar elementos dentro dele, como textos, botões, imagens, listas ou até mesmo outros componentes React, tornando ele mais flexível e reutilizável.

// Pensa assim: imagina que tu tem uma caixa onde tu organiza teus jogos e controles do videogame.

// A caixa é o componente
// O que tu coloca dentro dela são as children
// O que são props.children?

// Quando usamos um componente e colocamos elementos entre as tags dele, esses elementos são passados automaticamente para a propriedade children.
// Isso permite criar componentes genéricos que podem receber qualquer conteúdo.

type CardProps = {
    children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
    return <div className = "card">{children}</div>
}

export default Card;