function preco(codigo, quantidade){
    switch(codigo){
        case 100:
            return `R$ ${3 * quantidade}`
        case 200:
            return `R$ ${4 * quantidade}`
        case 300:
            return `R$ ${5.5 * quantidade}`
        case 400:
            return `R$ ${7.5 * quantidade}`
        case 500:
            return `R$ ${3.5 * quantidade}`
        case 600:
            return `R$ ${2.8 * quantidade}`
        default:
            return 'Código não consta no sistema'       
    }
}
console.log(preco(100, 5))