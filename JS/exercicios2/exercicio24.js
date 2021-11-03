function contarCaractere(charBusc, frase){
    let quanti = 0
    for(let i = 0; i < frase.length; i++){
        if(frase.charAt(i).toUpperCase() === charBusc.toUpperCase()){
            quanti++
        }
    }
    console.log(quanti)
}

contarCaractere('c', 'Casa de concubina')
