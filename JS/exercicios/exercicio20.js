function sacarDinheiro(valorSaque) { // função principal
    let contador100 = 0 // todas essas variáveis são de contagem
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque) // valorNota vai receber uma função de calcular o valor da nota, passando o parâmetro valorSaque
    while (valorSaque >= valorNota) { // enquanto valor do saque foi maior ou igual ao valorNota, executa:
        switch (valorNota) { // um switch para retirar a quantia referente a nota e somar um no contador.
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque) // após o switch, o valorNota recebe novamente a função calcularValorNota passando valorSaque como parametro

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1) // essa função sacar dinheiro retorna o elaborarResultado, passando os contadores
}

function calcularValorNota(valorSaque) { // a função que é chamada duas vezes acima, responsavel para checar quanto que está sendo pedido.
    if (valorSaque >= 100) { // esse if é responsável pra indentificar onde que o valor se encaixa, acima de qual nota, para reduzir a quantidade de notas no troco
        return 100 // retorna sempre o valor daqui, que vai ser usado para contar no troco
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) { // essa função vai ser responsável por apresentar somente os resultados que tiverem algum valor
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));