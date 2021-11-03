function triangulo(a, b, c){
    if(a === b && a === c){
        console.log('Equilátero')
    } else if(a !== b && a !== c && b !== c){
        console.log('Escaleno')
    } else if(a === b || a === c || b === c ){
        console.log('Isósceles')
    }
}

triangulo(2, 2, 2)
triangulo(2, 2, 3)
triangulo(3, 4, 5)