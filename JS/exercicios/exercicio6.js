function f1(captInicial, taxaJuros, tempo){
    let juros = captInicial * taxaJuros * tempo
    let total = captInicial + juros
    console.log(total) 
}
function f2(captInicial, taxaJuros, tempo){
    let total = captInicial * (Math.pow(1 + taxaJuros, tempo)) // a potencia pode ser substituida por **
    console.log(total) 
}

