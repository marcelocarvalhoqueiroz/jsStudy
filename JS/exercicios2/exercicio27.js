function inverter(obj){
    const objInvertido = {}

    Object.entries(obj).forEach( parChaveValor => {
        const chave = 0
        const valor = 1

        objInvertido[ parChaveValor[valor]] = parChaveValor[chave]
    })

    console.log(objInvertido)
    return objInvertido
}
inverter({ 'a': 1, 'b': 2, 'c': 3})