
function handleImg(event){   
    console.log(event.target)
}

const imgs = document.querySelectorAll('img')
imgs.forEach((img)=>{
    img.addEventListener('click', handleImg)
})