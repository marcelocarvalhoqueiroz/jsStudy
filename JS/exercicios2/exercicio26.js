function removerVogais(frase){
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    console.log(frase)
    return frase
}
removerVogais('Cod3r')