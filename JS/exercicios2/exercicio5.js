const maiorOuIgual = function(num1, num2){
    if(num1 > num2 || num1 === num2){
        console.log(`${num1} é maior ou igual a ${num2}`)
    } else{
        console.log(`${num1} é diferente ou menor que ${num2}`)
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(0, '0')
maiorOuIgual(5, 1)