function contadores(vetorNum){
    let contPar = 0
    let contImpar = 0
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] % 2 == 0){
            contPar++
        } else{
            contImpar++
        }
    }
    console.log(`A quantidade de pares é ${contPar} e a de ímpares é ${contImpar}`)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13]
contadores(vetor)
