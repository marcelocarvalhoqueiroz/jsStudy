const receberUltPrim = function(newArray){
    let novoArray = []
    for(let i = 0; i < newArray.length; i++){
        if(i == 0 || i == newArray.length - 1){
            novoArray.push(newArray[i])
        }
    }
    console.log(novoArray)
}

receberUltPrim([ 7, 14, 'Olá'])