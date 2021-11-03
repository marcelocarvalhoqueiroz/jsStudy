let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ") // separa as strings para array
    let qtdQuebraDeRecords = 0 // contador das quebras
    let piorJogo = 1 // considera sempre o primeiro como pior, até vir um pior q ele
    let maiorPontuacao = pontuacoes[0] // inicia a maior pontuação na posição 0, que é o primeiro jogo
    let menorPontuacao = pontuacoes[0] // inicia a menor na posição 0, que é o primeiro jogo

    // para i = 1 até ser maior q o tamanho das pontuações, i aumenta em um.
    // esse for usa o tamanho do array pontuacoes para dizer quantas vezes vai percorrer.
    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) { // esse if compara se a pontuação atual do array é maior q a maior registrada
            maiorPontuacao = pontuacoes[i] // se a condição for atendida, troca a pontuação maior
            qtdQuebraDeRecords++ // além de somar na quantidade de quebra de records totais
        }else if (pontuacoes[i] < menorPontuacao) { // esse compara se ela é menor q a menor registrada
            menorPontuacao = pontuacoes[i] // se for, troca a pontuação menor pela atual
            piorJogo = i+1; // o numero do pior jogo altera para i + 1, já q começa em 0
        }
    }
    return [qtdQuebraDeRecords, piorJogo] // os resultados retornados formam um array
}
 
console.log(avaliaPontuacoes(stringPontuacoes))