function media(vetorNum){
    let cima = 0
    let baixo = 0
    for(let i = 0; i < vetorNum.length; i++){
        baixo++
        cima += vetorNum[i]
    }
    console.log(`A média é: ${cima/baixo}`)
}

vetor = [2, 2, 2, 4]
media(vetor)