const menu = document.querySelector(".menu");

menu.classList.add("ativo", "amor");
menu.classList.remove("ativo");
menu.classList.replace("amor", "miramor");

if (menu.classList.contains("vida")) {
  menu.classList.add("mozaum");
} else {
  menu.classList.add("naoPossui-Vida");
}

menu.className += " name";

//console.log(menu.className)

const animais = document.querySelector(".animais");

console.log(animais.attributes);

const img = document.querySelector("img");
const srcImg = img.getAttribute("src");
img.setAttribute("alt", "amor");

const possuiAlt = img.hasAttribute('title')

console.log(possuiAlt);
