const imprimirResultado = function(nota) {
    if(nota >= 7){ // com uma sentença pode tirar o bloco dos 2, mas acho melohr deixar o bloco
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado('Epa!') // Cuidado!!! Na comparação sa porra pega falso, ai entra no else


