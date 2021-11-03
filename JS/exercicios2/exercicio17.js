function somarNum(array){
    let soma = 0
    for(let i = 0; i < array.length; i++){
        soma += array[i]
    }
    console.log(soma)
}
somarNum([5, 3, 2])