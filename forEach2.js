Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})
/*
let forEach2 = function (array){
    for(i = 0; i < array.length; i++){
        let nome = array[i]
        let indice = i
        console.log(`${indice + 1}) ${nome}`)
    }
}
forEach2(aprovados)
*/