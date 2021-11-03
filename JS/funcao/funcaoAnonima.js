const soma = function (x, y){
    return x + y
}
const multiplica = (x, y) => x * y

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)
imprimirResultado(3, 4, multiplica)

const pessoa = {
    falar: function (){
        console.log('Opa')
    },
    darTchau: () => console.log('Mete o Pé xulé'),
    tudoBem(){
        console.log('Opa, turubom?')
    }
}

pessoa.falar()
pessoa.darTchau()
pessoa.tudoBem()

// função arrow sempre será anônima!
