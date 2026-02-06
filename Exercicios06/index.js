const userId = 5

const infoUser = (async (userId) =>{
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await response.json()
    console.log(user.name, user.email, user.address.street, user.address.city)
    }catch(error){
        console.log('Erro:', error)
    }
})

infoUser(userId)

// Exercicio buscando um usuário especifico na API pela variavel userId 

