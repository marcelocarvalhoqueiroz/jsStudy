// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // não faça isso em casa
const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // o attr0 é achado no prototype maior, que tá sendo declarado na linha 2

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h` 
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, o interno vai entrar no lugar do escopo mais abrangente
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // ele chama o status dele mas no super, aciona também o status do prototype dele
    }
}

Object.setPrototypeOf(ferrari, carro) // seta o prototype de ferrari para carro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())