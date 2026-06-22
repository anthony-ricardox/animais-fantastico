const lista = document.querySelector(".animais-lista");
const animais = document.querySelector('.animais')

const contato = document.querySelector(".contato");

const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");


const novoh1 = document.createElement('h1')


const h1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneh1 = h1.cloneNode(true)// clona a tag sem remover
cloneh1.classList.add('azul') //adciona uma classe 
faq.appendChild(cloneh1)//depois da ultima tag filho da faq, adiciona o 'cloneh1'

