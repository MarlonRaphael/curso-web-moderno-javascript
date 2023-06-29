let valor // Não inicializada
console.log(valor)

// console.log(valor2) // Not defined

valor = null
console.log(valor) // Ausência de valor
// console.log(valor.toString()) // Erro

const produto = {}
// console.log(produto.preco)
// console.log(produto.preco.a)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // Evite atributir undefined, prefira null
// console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)

delete produto.preco
console.log(produto)

produto.preco = null
console.log(produto)
console.log(!!produto.preco)