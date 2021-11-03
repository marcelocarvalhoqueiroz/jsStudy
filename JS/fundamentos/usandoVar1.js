{
    {
        {
            {
                 var sera = 'Será?'
            }
        }
    }
}
// a variável Var ficará visível mesmo para quem estiver fora do bloco, excessão é Function
console.log(sera)

function teste(){
    var local = 123 // como neste caso, ela vai ficar apenas dentro do escopo da função, não de forma global
}
teste()
//console.log(local)

// evitar variáveis que vão para o escopo global, pois pode ser sobrescrita em qualquer lugar








