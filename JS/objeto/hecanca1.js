const ferrari = {
    modelo: 'f40',
    velMax: 324
}
const volvo = {
    modelo: 'v40',
    velMax: 200
}
console.log(ferrari.prototype)
console.log(ferrari.__proto__) // duas underline em cada lado
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // nulo, tem nenhum protótipo acima do prototype

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)