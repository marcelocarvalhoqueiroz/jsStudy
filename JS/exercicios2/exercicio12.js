function removerPropriedade(objeto, nomeProp){
    const copia = Object.assign({}, objeto)
    delete copia[nomeProp]

    console.log(copia)
}

