function calculadora(a, operacao, b){
    switch(operacao){
        case '+':
            return a + b
        case '*':
            return a * b
        case '/':
            return a / b
        case '-':
            return a - b
        default:
            console.log('Operação inválida')
    }
}
console.log(calculadora(calculadora(2, '+', 2), '+', calculadora(2, '+', 1)))
