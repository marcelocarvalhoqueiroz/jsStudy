function estoqueFrutas(fruta){
    switch(fruta){
        case 'Maca':
            console.log('Não vendemos essa fruta aqui.')
            break
        case 'Kiwi':
            console.log('Estamos com escassez de Kiwi')
            break
        case 'Melancia':
            console.log('Aqui está, são 3 pila o quilo')
            break
        default:
            console.log('Ocorreu um erro, por favor, insira ou Maca, ou Kiwi ou Melancia')
    }
}

estoqueFrutas()
