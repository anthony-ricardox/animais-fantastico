// =========================================================================
//- SEÇÃO "CLASSLIST"
// Objetivo: Manipular as classes do elemento HTML usando a API classList.
// =========================================================================
const menu = document.querySelector(".menu");

// Adiciona as classes "ativo" e "amor" ao elemento (Suporta múltiplos argumentos)
menu.classList.add("ativo", "amor");

// Remove apenas a classe "ativo"
menu.classList.remove("ativo");

// Substitui a classe "amor" por "miramor" (Deixando o elemento com a classe "miramor")
menu.classList.replace("amor", "miramor");

// Verifica se a classe "vida" existe (retorna true ou false)
if (menu.classList.contains("vida")) {
  menu.classList.add("mozaum");
} else {
  // Como "vida" não existe, o código cai aqui e adiciona a classe "naoPossui-Vida"
  menu.classList.add("naoPossui-Vida");
}

// =========================================================================
// - SEÇÃO "READ ONLY VS WRITABLE" (Parte de cima)
// Objetivo: Demonstrar o uso de uma propriedade WRITABLE (Modificável).
// =========================================================================
// O .className retorna uma string modificável. Aqui você concatenou " name".
// Nota de atenção: Como foi usado `+= " name"`, se o elemento já tivesse classes,
// agora ele terá "miramor naoPossui-Vida name".
menu.className += " name";

// console.log(menu.className)

// =========================================================================
// - SEÇÃO "ATTRIBUTES"
// Objetivo: Retornar uma coleção Array-like com todos os atributos do elemento.
// =========================================================================
const animais = document.querySelector(".animais");

// Exibe no console o NamedNodeMap (Array-like) contendo atributos como class, id, etc.
console.log(animais.attributes);

// =========================================================================
// - SEÇÃO "GETATTRIBUTE E SETATTRIBUTE"
// Objetivo: Ler, modificar e verificar a existência de atributos específicos.
// =========================================================================
const img = document.querySelector("img");

// Pega o valor textual que está na tag src da imagem (Ex: "foto.jpg")
const srcImg = img.getAttribute("src");

// Cria ou atualiza o atributo alt da imagem para "amor"
img.setAttribute("alt", "amor");

// Verifica se a tag possui o atributo 'title'. Retorna false porque não foi criado.
const possuiAlt = img.hasAttribute("title");

console.log(possuiAlt); // Vai printar: false

// =========================================================================
//  SEÇÃO "READ ONLY VS WRITABLE" (Conceito Teórico)
// Objetivo: Exemplificar propriedades que aceitam ou não reatribuição direta.
// =========================================================================
// Read Only vs Writable
// Existem propriedades que não permitem a mudança de seus valores,
// essas são considerados Read Only, ou seja, apenas leitura.

const carro = {
  portas: 4, // Propriedade writable (mutável) no escopo do objeto
  andar(km) {
    km = 100; // Aqui você apenas reatribuiu o valor do parâmetro local
    console.log(`andou ${km}`);
  },
};
