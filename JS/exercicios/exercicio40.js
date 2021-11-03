function conceitos(notasArray){
    let conceitosArray = []
    for(let i = 0; i < notasArray.length; i++){
        if(notasArray[i] > 0 && notasArray[i] <= 4.9){
            conceitosArray[i] = 'D'
        } else if(notasArray[i] >= 5 && notasArray[i] <= 6.9){
            conceitosArray[i] = 'C'
        } else if(notasArray[i] >= 7 && notasArray[i] <=8.9){
            conceitosArray[i] = 'B'
        } else if(notasArray[i] >= 9 && notasArray[i] <= 10){
            conceitosArray[i] = 'A'
        } else{
            conceitosArray[i] = 'Nota inválida'
        }
    }
    console.log(conceitosArray)
}
notas = [2, 5, 7.7, 10, 19, 8, 4]
conceitos(notas)