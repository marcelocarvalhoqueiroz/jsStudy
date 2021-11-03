function buscarPalavras(inicio, palavras){
    const result = []

    for(let palavra of palavras){
        if(palavra.includes(inicio)){
            result.push(palavra)
        }
    }
    console.log(result)
    return result
}

buscarPalavras('pro', ['programação', 'arroz', 'produto'])