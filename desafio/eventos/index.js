// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const LinkInteno = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  LinkInteno.forEach((item)=>{  
    item.classList.remove('ativo')
  })
  event.currentTarget.classList.add("ativo");
}

LinkInteno.forEach((Interno) => {
  Interno.addEventListener("click", handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados



const todosElementos = document.querySelectorAll('body *')
//  function handleTodos(event){ 
//      console.log(event.currentTarget)
//  }

//  todosElementos.forEach((item)=>{
//      item.addEventListener('click', handleTodos)
//  })



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleRemove(event){    
    event.currentTarget.remove()
}

todosElementos.forEach((elemnt)=> { 
    elemnt.addEventListener('click', handleRemove)
})

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event){    
    console.log(event.key)
    
    if(event.key === 't'){  
        document.documentElement.classList.toggle('textomaior')
    }
}

window.addEventListener('keydown', handleClickT)