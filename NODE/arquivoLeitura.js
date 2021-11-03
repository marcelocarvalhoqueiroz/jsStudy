const fs = require('fs')

// é duas underline __ não uma _
const caminho = __dirname + '/arquivo.json'

// sincrono...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db.host)

fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})