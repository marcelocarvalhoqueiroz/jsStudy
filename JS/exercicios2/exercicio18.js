function despesasTotais(array){
    let total = 0

    for(let item of array){
        total += item.preco
    }

    console.log(`R$ ${total}`)
}