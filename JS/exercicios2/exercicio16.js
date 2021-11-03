function checarBi(ano){
    if(ano % 4 == 0){
        if(ano % 100 == 0 && ano % 400 != 0){
            console.log(false)
        } else{
            console.log(true)
        }
    }
}

checarBi(2100)