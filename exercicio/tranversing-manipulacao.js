//InnerHTML e OuterHtml

const h1 = document.querySelector("h1");
const animaisList = document.querySelector(".animais-descricao");

console.log(h1.innerHTML)
console.log((h1.innerHTML = "<p> Olá Mundo<p>"));
console.log((h1.outerHTML = "<p> Olá Mundo<p>"));

