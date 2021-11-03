function aumento(plano, salarioAtual = 1000){
    let salarioReajustado = 0
    switch(plano){
        case 'A':
            return salarioReajustado = salarioAtual + (salarioAtual * 0.1)
        case 'B':
            return salarioReajustado = salarioAtual + (salarioAtual * 0.15)
        case 'C':
            return salarioReajustado = salarioAtual + (salarioAtual * 0.2)
        default:
            return 'Plano inválido'
    }
}
console.log(aumento('A'))
console.log(aumento('B'))
console.log(aumento('C'))