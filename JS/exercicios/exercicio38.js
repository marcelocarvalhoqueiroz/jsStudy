function sla(inicio = 0, fim = 100){
    let mudanca = 0
    if(inicio > fim){
        mudanca = fim
        fim = inicio
        inicio = mudanca
    }
    for(let i = inicio; i <= fim; i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
sla(0, 13)