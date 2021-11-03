function filtrarNumeros(arrayEx){
    let arrayFiltro = []
    for(let i = 0; i < arrayEx.length; i++){
        let tipoDado = typeof arrayEx[i]
        if(tipoDado == "number"){
            arrayFiltro.push(arrayEx[i])
        }
    }
    console.log(arrayFiltro)
}
let arrayTeste = ['Javascript', 1, 3, 4, true, 'Paçoca']
filtrarNumeros(arrayTeste)