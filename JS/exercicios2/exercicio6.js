const inverso = function(valor){
    const tipo = typeof valor
    if(tipo == 'boolean'){
        console.log(`${!valor}`)
    } else if(tipo == 'number'){
        console.log(`${-valor}`)    
    } else{
        console.log(`Booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`)
    }
}

inverso()