const sequencia = {
    _valor: 1, // convenção do "_"
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // como o set tá validando pra n entrar valor menor, ele pula essa alteração e não deixa ela acontecer
console.log(sequencia.valor, sequencia.valor)