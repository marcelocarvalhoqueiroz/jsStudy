const nums = []

let abobra = 1
for(let i = 0; i < 10; i++){
    nums[i] = abobra
    abobra++
}

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

// as duas causam desvio de fluxo, o break sai do laço corrente, o continue interrompe e pula pra prox