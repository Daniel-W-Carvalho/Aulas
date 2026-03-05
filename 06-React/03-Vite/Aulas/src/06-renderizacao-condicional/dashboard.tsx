import "./dashboard.css"

type DashboardProps = {
    username: string | null;
}

export const Dashboard = ({username}: DashboardProps) => {
    return (
        <div>
            {username ? (
                <h1>Bem vindo {username}!</h1>
            ) : (
                <h2 className = "not-logged">Você precisar fazer o login.</h2>
            )}
        </div>
    )
}

// No App.tsx

//     <>
//         <Dashboard /> //sem o valor, para aparecer voce precisa fazer o login
//         {/* <Dashboard username = "Daniel" /> */} //com o valor do usuario logado
//     </>