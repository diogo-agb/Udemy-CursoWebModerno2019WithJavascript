
/*Algumas notações utilizadas durante o curso

Math.PI
Math.floor
Math.ceil
Math.pow
Math.round (valor arredondado)
var
let
const
function name(params) {
    
}
console.log()
this
setInterval
.bind = Muda o contexto do .this
.typeof
.pop
.length = 
null
NaN
undefined
new 
.random()
.toUpperCase()
module.exports
Number.isInteger()
.toFixed()
.toString()
.charAt()
.charCodeAt()
.indexOf()
.substring()
.concat()
.replace()
.split()
.call()
.apply()
delete
Object.freeze
JSON.stringify()
JSON.parse()

*/
//Exercício função arrow

/*
function imprimirSoma(a, b){
    console.log(a + b)
}
*/

// let imprimirSomaArrow = (a, b) => console.log (a / b)
// imprimirSomaArrow(100, 2)

/*Função com retorno

function soma(a = 1, b = 1){ // Teste com valores padrões
    return a + b
}
*/

// const notasGerais = [
//     {nome: 'Marcos', nota: 5.5 },
//     {nome: 'Pedro', nota: 9},
//     {nome: 'Laura', nota: 10},
//     {nome: 'Vivian', nota: 3.4},
//     {nome: 'Fernanda', nota: 9.4},
//     {nome: 'Levi', nota:3}
// ]

// const aprovados = []
// const reprovados = []

// const verificarNota = aluno => aluno.nota >= 5 ? aprovados.push(aluno.nome) : reprovados.push(aluno.nome)
// notasGerais.map(verificarNota)
// console.log(aprovados, reprovados)

const notasGerais = [
    {nome: 'Marcos', nota: 5.5 },
    {nome: 'Pedro', nota: 9},
    {nome: 'Laura', nota: 10},
    {nome: 'Vivian', nota: 3.4},
    {nome: 'Fernanda', nota: 9.4},
    {nome: 'Levi', nota:3}
]

const array = [2]
console.log(array)
