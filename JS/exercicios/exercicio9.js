// todos alunos recebem uma nota de 0 a 100
// notas abaixo de 40 vão pro saco
// se a diferença entre a nota e o próximo multimo de 5 for menor q 3, arredonda para o prox multiplo de 5.
// se a nota for abaixo de 38, não ocorre arredondamento.

function aprovacao(nota){
    let resultado = 'Resultado não consta no sistema'
    notaArredondada = arredondar(nota)

    if(notaArredondada<40){
        resultado = 'Reprovado'
        console.log(resultado, ': com nota ', notaArredondada)
    }else{
        resultado = 'Aprovado'
        console.log(resultado, ': com nota ', notaArredondada)
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}
