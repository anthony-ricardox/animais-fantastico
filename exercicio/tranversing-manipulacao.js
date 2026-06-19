//InnerHTML e OuterHtml

const h1 = document.querySelector("h1");
const animaisList = document.querySelector(".animais-descricao");

console.log(h1.innerHTML);
console.log((h1.innerHTML = "<p> Olá Mundo<p>"));
console.log((h1.outerHTML = "<p> Olá Mundo<p>"));

//Transversing

const lista = document.querySelector(".animais-lista");

console.log(lista.parentElement.parentElement); //elemento pai do pai;
console.log(lista.nextElementSibling); // mostra o proximo elemnto depois da lista;

console.log(lista.previousElementSibling); //vai pegar o element anterior da lista

console.log(lista.children); // mostra todos os elemnto filho de lista;
console.log(lista.children[--lista.children.length]);//pega o ultimo filho da lista
console.log(lista.children[0])//pega o primeiro elemento filho da lista

console.log(lista.querySelector('lista:last-child'))// retorna o ultimo elemnt filho de lista

//Node 

console.log(lista.childNodes) //busca todos os filhos node da lista, retorna varios itens nodes , incluindo ate espaço e comentario se tiver dentro da tag
