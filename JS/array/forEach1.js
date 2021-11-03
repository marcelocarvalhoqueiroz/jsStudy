const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// o proprio array pode ser passado como parametro, ele entra em 3 lugar
aprovados.forEach(function(nome, indice, array){ // indice sempre é passado como segundo parâmetro
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)