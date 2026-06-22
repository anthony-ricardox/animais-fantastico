const lista = document.querySelector(".animais-lista");
const animais = document.querySelector('.animais')

const contato = document.querySelector(".contato");

const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

contato.removeChild(mapa)//remove o mapa
contato.replaceChild(mapa,titulo)//substitui o mapa por pelo titulo

console.log(mapa)
//contato.insertBefore(animais, mapa )//insere  animais antes do mapa

