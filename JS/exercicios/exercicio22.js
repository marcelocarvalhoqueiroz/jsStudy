// calcular valor pago anuidade
// recebe parametro inteiro referente a mês
// deve ser paga em janeiro
// por mês é cobrado 5% de juros (compostos)
// juros compostos = (Montante = Capital * (1 + taxa) ** tempo)
// nesse caso, capital = num sei, taxa é 0.05 e o tempo é respectivo ao mês

function calcularJuros(tempo = 1){
    let anuidade = 100
    let i = 0.05
    let total = 0
    if(tempo == 1){
        total = anuidade
    } else if(tempo > 1 && tempo <= 12){
        total = anuidade * (1 + i) ** tempo
    } else{
        total = 'Valor inválido'
    }
    return total
}

console.log(calcularJuros(2))
