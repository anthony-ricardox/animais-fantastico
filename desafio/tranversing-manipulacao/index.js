// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const menuNovo = menu.cloneNode(true);
copy.appendChild(menuNovo);

// Selecione o primeiro DT da dl de Faq
const dt = document.querySelector(".faq-lista");
const dl = dt.children[0];
console.log(dl);

// Selecione o DD referente ao primeiro DT

console.log(dl.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;
