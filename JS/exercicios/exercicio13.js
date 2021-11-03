function diaUtil(dia){
    switch(dia){
        case 7:
            console.log('Não é dia útil')
            break
        case 6: case 5: case 4: case 3: case 2:
            console.log('É dia útil')
            break
        case 1:
            console.log('Não é dia útil')
            break
        default: 
            console.log('Número inválido')
    }
}

diaUtil(3)