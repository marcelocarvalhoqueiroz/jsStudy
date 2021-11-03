console.log('01)', '1' == 1) // true, pq compara conteudo, n tipo
console.log('02)', '1' === 1) // falso, considera tipo
console.log('03)', '3' != 3) // falso, pq n considera tipo
console.log('04)', '3' !== 3) // verdadeiro, pois considera o tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)