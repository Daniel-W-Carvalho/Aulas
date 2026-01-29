// Filtra elementos de um array com base em uma condição
// usamos quando queremos múltiplos valores que atendam ao critério.

const products = 
[{id: 1, name: "Notebook", price: 3000, category: "Eletrônicos"},
{id: 2, name: "Mouse", price: 20, category: "Eletrônicos"},
{id: 3, name: "Caderno", price: 30, category: "Papelaria"},
{id: 4, name: "Caneta", price: 5, category: "Papelaria"},
{id: 5, name: "Celular", price: 2000, category: "Eletrônicos"}];

const maiorQue100 = products.filter (product => product.price > 100); // Filtra produtos com preço maior que 100
console.log(maiorQue100);