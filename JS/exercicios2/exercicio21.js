function menorNum(array){
    let menorNum = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] < menorNum){
            menorNum = array[i]
        }
    }
    console.log(menorNum)
}

menorNum([10, 5, 35, 65])