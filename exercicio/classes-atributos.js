const menu = document.querySelector('.menu')

menu.classList.add('ativo', 'amor')
menu.classList.remove('ativo')
menu.classList.replace('amor', 'miramor')

if(menu.classList.contains('vida')){
    menu.classList.add('mozaum')
}else{
    menu.classList.add('naoPossui-Vida')
}

menu.className = '13'

console.log(menu.className)