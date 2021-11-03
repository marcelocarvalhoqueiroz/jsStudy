// identificar valor a ser pago pela idade.
// todos pagam 100 + adicional
// adicional: crianças com menos de 10 anos pagam 80, 
// conveniados com idade entre 10 e 30 pagam 50, 
// acima de 30 e até 60 pagam 95
// acima de 60 pagam 130

function valorPago(idade){
    let valorPadrao = 100
    let plano = acharPlano(idade)
    switch(plano){
        case 4:
            console.log(`R$ ${valorPadrao + 130}`)
            break
        case 3:
            console.log(`R$ ${valorPadrao + 95}`)
            break
        case 2:
            console.log(`R$ ${valorPadrao + 50}`)
            break
        case 1:
            console.log(`R$ ${valorPadrao + 80}`)
            break
        case 5:
            console.log('Idade inválida')
            break
        default:
            console.log('O valor é R$ 100 mais um adicional por idade.')                               
    } 

}

function acharPlano(idade){
    if(idade > 60){
        return 4
    } else if(idade >= 30 && idade <= 60){
        return 3
    } else if(idade >= 10 && idade <= 30){
        return 2
    } else if(idade < 10 && idade >= 0){
        return 1
    } else if(idade < 0){
        return 5
    } else{
        return 5
    }
}

valorPago(-5)
valorPago(2)