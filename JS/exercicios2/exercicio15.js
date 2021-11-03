function receberPares(array){
    let result = []
    for(let i = 0; i < array.length; i+= 2){
        if(array[i] % 2 === 0){
            result.push(array[i])
        }
    }
    console.log(result)
}

function receberParesVerdade(array){
    console.log(numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0
    }))
}
arrayTeste = [1, 2, 22, 32, 12, 10, 8]
receberPares(arrayTeste)