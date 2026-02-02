// Isso é um objeto
const heroObject = {
    name: "Homem de Ferro",
    age : 48,
    hasPower: false
}

console.log(typeof heroObject)

// Isso é um Json - parece um objeto, mas ele vem em formato de string
const heroJson = '{"name":"Homem de Ferro","age":48,"hasPower":false}'
console.log(typeof heroJson)

// estamos criando uma variavel com JSON que seria um comando global e o .parse seria como "interpretar", ou seja, estamos interpretando de uma String para objeto
//JSON é um objeto global do JS e o .parse é um método do JSON
const hero = JSON.parse(heroJson) // aqui interpretamos a string heroJson como objeto e agora podemos acessar suas informaçoes
console.log(hero.name)
console.log(typeof hero)


// transformando de objeto para string
const heroString = JSON.stringify(hero)// aqui interpretamos a string heroString como string, onde antes era objeto
console.log(heroString)
console.log(typeof heroString)

//RESUMINDO:
//JSON.parse() -> Quando quer converter o documento de String para Objeto
//JSON.stringify() -> Quando quer converter o documento de Objeto para String
