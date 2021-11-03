function calcularMedia(array){
    let soma = 0
    let divisor = array.length
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    console.log(soma/divisor)
    return soma / divisor
}

calcularMedia([1, 2, 3, 4, 5])