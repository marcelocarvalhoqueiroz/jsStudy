function trocaVetores(vetor1, vetor2){
    if(vetor1.length == vetor2.length){
        for(let i = 0; i < vetor1.length; i++){
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i] 
        }
    } else{
        console.log('Tamanhos diferentes!')
    }
    console.log(`Vetor 1 trocado: ${vetor1} ____________________`)
    console.log(`Vetor 2 trocado: ${vetor2} ____________________`)
}

vetorA = [1, 2, 3 ,4]
vetorB = [4, 3, 2, 1]
trocaVetores(vetorA, vetorB)