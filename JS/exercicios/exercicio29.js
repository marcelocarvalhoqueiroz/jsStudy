function entreDezVinte(vetorNum){
    let intervaloCerto = 0
    let intervaloFora = 0
    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] >= 10 && vetorNum[i] <= 20){
            intervaloCerto++
        } else{
            intervaloFora++
        }
    }
    console.log(`${intervaloCerto} números no intervalo fechado de 10 e 20, ${intervaloFora} estão fora`)
}

let vetor = [1, 2, 15, 13, 14, 12, 2, 25]
entreDezVinte(vetor)