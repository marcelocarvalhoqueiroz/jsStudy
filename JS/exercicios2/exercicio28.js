function filtrarQuantDigitos(array, num){
    console.log(array.filter(numero => {
        const quantDigitos = String(numero).length
        return quantDigitos === num
    }))
}

filtrarQuantDigitos([38, 2, 365, 10, 125, 11], 2)