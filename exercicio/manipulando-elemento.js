const lista = document.querySelector(".animais-lista");
const animais = document.querySelector('.animais')

const contato = document.querySelector(".contato");

const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

contato.removeChild(mapa)//remove o mapa
contato.replaceChild(mapa,titulo)//substitui o mapa pelo titulo

console.log(mapa)
//contato.insertBefore(animais, mapa )//insere  animais antes do mapa

const novoh1 = document.createElement('h1')

console.log(novoh1)
novoh1.innerHTML = 'Novo Titulo'
novoh1.classList.add('titulo')

mapa.appendChild(novoh1)// apôs o mapa adiciona o 'novoh1' depois do ultimo filho do mapa


