// Seleciona o elemento que possui a classe "animais-lista"
const listaAnimais = document.querySelector('.animais-lista')

// Retorna a altura total do elemento, incluindo a parte que pode estar escondida pelo scroll
const height = listaAnimais.scrollHeight

// Retorna a distância do topo da página até o elemento
const animaisTop = listaAnimais.offsetTop

// Seleciona o primeiro elemento <h2> da página
const primeiroh2 = document.querySelector('h2')

// Retorna a distância da borda esquerda da página até o elemento <h2>
const h2 = primeiroh2.offsetLeft

// Exibe no console a posição horizontal (esquerda) do h2
console.log(h2)