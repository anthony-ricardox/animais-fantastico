// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector("img");

const imgTop = img.offsetTop;
console.log(`distância da primeira imagem  em relação ao topo da página: ${imgTop}`);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll("img");

let soma = 0;
imgs.forEach((img) => {
  soma = soma + img.offsetWidth;
 
}); 
console.log(`a soma das larguras: ${img.offsetWidth} das ${imgs.length} imagens são ${soma}`)
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const link = document.querySelectorAll('a')
link.forEach((a) =>{
    const linkWidth = a.offsetWidth
    const linkHeight = a.offsetHeight
    if(linkWidth >= 48 && linkHeight >= 48){  
        console.log('Possui acessibilidade')
    }else{
        console.log('Não possui uma boa acessibilidade')

    }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall){   
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
    console.log('Menu Mobile')
}
