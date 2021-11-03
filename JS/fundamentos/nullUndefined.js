// const a = {nome : 'Xubasco'}
// const b = a
//const a = 3
//const b = a
//let c = 3
//let d = c
//d++
//console.log(a)
//console.log(d)

// com numeros primitivos, passa uma cópia do valor que tá na variável, 1, 2, 3
// com objetos, a atribuição é feita por referência, as variáveis apontam para a mesma referência.

// -----------------------------------------------------
let valor // não inicializada
console.log(valor) // valor undefined
//console.log(valor2) // erro que o valor não foi nem declarado
valor = null // auxência de valor. Ela tá inicializada porém não tem valor
// usar null para zerar o valor da variável
// console.log(valor.toString()) não consegue acessar toString de null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined, preferir null
console.log(!!produto.preco)
console.log(produto)

produto.preco = null 
// sem preço, se tiver q atribuir explicitamente, como para diferenciar um produto gratuito de um sem preço definido
console.log(!!produto.preco)
console.log(produto)


