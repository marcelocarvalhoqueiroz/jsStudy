const escola = 'Cod3r'

console.log(escola.charAt(4)) // função que mostra o caracter no indice 4
console.log(escola.charAt(5)) // não geraria erro, mesmo não tendo letra nesse indice
console.log(escola.charCodeAt(3)) // gera unicode
console.log(escola.indexOf('3')) // retorna em qual indice tá o caracter q tá procurando

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))
// console.log(escola.replace(/\w/g, 'e')) //regex

console.log('Ana,Maria,Pedro'.split(','))