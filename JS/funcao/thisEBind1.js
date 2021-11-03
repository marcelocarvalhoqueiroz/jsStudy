const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// bind é um método responsável por amarrar um objeto para o dono sempre que ele for chamado.
