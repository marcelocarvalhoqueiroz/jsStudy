function bissexto (ano) {
    if (ano <= 0){
        console.log('Não é bissexto')
    } else if (ano % 400 == 0) {
        console.log('É bissexto')
    } else if (ano % 100 == 0) {
        console.log('Não é bissexto')
    } else if (ano % 4 == 0) {
        console.log('É bissexto')
    } else {
        console.log('Não é bissexto')
    }
}

bissexto(2016)