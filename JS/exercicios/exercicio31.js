function qntNegativo(vetorNum){
    let negaCount = 0
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] < 0){
            negaCount++
        }
    }
    console.log(`Existem ${negaCount} números negativos neste vetor.`)
}

vetor = [-1, -5, 15, 20, -100]
qntNegativo(vetor)
