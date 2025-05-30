const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de Ler')
    })
}
lerArquivo(caminho) 
.then(conteudo => conteudo.split ('/n'))
.then(linhas => linhas.join (','))
.then (conteudo => `O valor final é: ${conteudo}`)
.then(console.log)
//só pra checar se foi