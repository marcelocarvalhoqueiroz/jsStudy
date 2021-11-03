function multiplica(vetorNum, b){
    let resultadoMult = []
    for(let i = 0; i < vetorNum.length; i++){
        resultadoMult[i] = vetorNum[i] * b
    }
    console.log(`${resultadoMult}`)
}
function multiplicaSe(vetorNum, b){
    let resultado2 = []
    let indiceResult = 0
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] > 5){
            resultado2[indiceResult] = vetorNum[i] * b
            indiceResult++
        }
    }
    console.log(`${resultado2}`)
}
function multiplicaEMantem(vetorNum, b){
    let resultado3 = []
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] > 5){
            resultado3[i] = vetorNum[i] * b
        }else{
            resultado3[i] = vetorNum[i]
        }
    }
    console.log(`${resultado3}`)
}

let vetor = [3, 4, 6]
multiplica(vetor, 2)
multiplicaSe(vetor, 2)
multiplicaEMantem(vetor, 2)
