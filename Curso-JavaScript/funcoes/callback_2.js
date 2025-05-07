const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}
console.log('inicio....')
fs.readFileSync(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log ('fim...')
// fs.readfilesync (caminho)