const estaEntre = function(num, min, max, incl){
    if(min > max){
        min = max + min
        max = min - max
        min = min - max
    }
    if(incl == true){
        if(num >= min && num <= max){
            console.log(`O ${num} está entre inclusivo ${min} e ${max}`)
        }else{
            console.log(`${num} não está entre inclusivo ${min} e ${max}`)
        }
    } else{
        if(num > min && num < max){
            console.log(`O ${num}, está entre ${min} e ${max}`)
        } else{
            console.log(`O ${num} não está entre ${min} e ${max}`)
        }
    }
}

estaEntre(10, 100, 50)
estaEntre(16, 100, 160)
estaEntre(3, 150, 3)
estaEntre(3, 150, 3, true)
