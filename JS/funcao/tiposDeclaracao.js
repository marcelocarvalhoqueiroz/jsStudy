console.log(soma(3, 4))

// function declaration, ela pode ser chamada antes da declaração, o resto não
function soma(x, y){ 
    return x + y
}
const somaArrow = (x, y) => x + y

// function expression
const sub = function(x, y){
    return x - y
}
const subArrow = (x, y) => x - y

// named function expression
const mult = function mult(x, y){ // essa não pode ser arrow
    return x * y
}



