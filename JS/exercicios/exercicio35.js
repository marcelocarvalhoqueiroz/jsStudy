let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function unir(vetorAd = vetorAdiciona){
    for(let i = 0; i < vetorAd.length; i++){
        vetorPilha.push(vetorAd[i])
    }
    console.log(vetorPilha)
}
unir()
