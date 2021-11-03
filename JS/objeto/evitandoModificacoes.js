// Object.preventExtensions -> Impede adição de novos atributos no objeto
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível: ', Object.isExtensible(produto)) // retorna true se der pra aumentar o objeto, colocando mais atributos

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa) // não dá pra adicionar nem excluir, mas pode modificar
console.log('Selado: ', Object.isSealed(pessoa)) // checa se tá "selado"

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado e com valores constantes, não pode ser modificado