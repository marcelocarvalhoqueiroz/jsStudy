const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // verifica se o número é inteiro
console.log(Number.isInteger(peso2)) // esse Number é função, number com N minusculo é tipo

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total/ (peso1 + peso2)

console.log(media.toFixed(2)) // fixa as casas decimais para 2 casas.
console.log(media.toString(2)) // em binário por causa do (2), sem isso vira string
console.log(typeof media) // typeof imprime o tipo da variável