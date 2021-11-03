function funcaoDaSorte(num){
    const min = 1
    const max = 10
    let sorteado = (Math.random(10) * (max - min + 1) + min)
    if(sorteado = num){
        return `Parabéns! O número sorteado foi o ${sorteado}`
    } else{
        return `Que pena! O número sorteado foi o ${sorteado}`
    }
}