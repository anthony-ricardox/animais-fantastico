
const img = document.querySelector('img')
function callback(e){    
    console.log(e)
}

 img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista')

const callbacklist = (event) =>{ 
    console.log(event.target)
    console.log(event.type)

}

animaisLista.addEventListener('click', callbacklist)

const linkExterno = document.querySelector('a[href^="http"')

function handleLinkExterno(e){   
    e.preventDefault()
    console.log(this)
}

linkExterno.addEventListener('click', handleLinkExterno)

const h1 = document.querySelector('h1')

function handleEvent(event){  
    console.log(event.type, event)
}

h1.addEventListener('click', handleEvent)
 // h1.addEventListener('mousemove', handleEvent)
// window.addEventListener('scroll', handleEvent)
// h1.addEventListener('mouseenter', handleEvent)
// window.addEventListener('resize', handleEvent)
// window.addEventListener('keyup', handleEvent)

function handleKeyboard (e){
    if(e.key === 'a'){   
        document.body.classList.toggle('azul')
    }else if(e.key === 'v'){ 
        document.body.classList.toggle('vermelho')
    }

    console.log(e.type, e)
}    
window.addEventListener('keydown', handleKeyboard )





