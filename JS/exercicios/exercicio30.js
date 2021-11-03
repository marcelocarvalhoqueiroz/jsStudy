function menorMaior(vetorNum){
    let maiorNum = 0
    let menorNum = vetorNum[0]
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] > maiorNum){
            maiorNum = vetorNum[i]
        } else if(vetorNum[i] < menorNum){
            menorNum = vetorNum[i]
        }
    }
    console.log(`O maior número é ${maiorNum} e o menor é ${menorNum}`)
}

vetor = [30, 2, 3, 4, 5, 6, 7, 8, 50]

menorMaior(vetor)
