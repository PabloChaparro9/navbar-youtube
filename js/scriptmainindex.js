const menubtn = document.getElementById("menu")
const menucompleto = document.querySelectorAll('div.section-items')
const contenedorMenu = document.querySelector('#guide-content')
const contenedoroverlay = document.getElementById("overlay-hover")
const overlayicon = document.getElementById("icon-mostrar")
const overlaytext = document.getElementById("text-mostrar")
menubtn.addEventListener("click",()=>{
    minibarmenu()
})
const minibarmenu = () => {
    contenedorMenu.classList.toggle("miniguidecontent")
    for(elemento of menucompleto){
        if(elemento.firstElementChild.id == "mainmenu"){
            elemento.classList.toggle("minibar")
            for(child of elemento.children){
                if(child.id == "mainmenu"){
                    child.classList.toggle("minibarelement")
                }else if(child.id != "mainmenu"){
                    child.classList.toggle("ocultar")
                }
            }
        }else{
            elemento.classList.toggle("ocultar")
        }
    }
}
contenedoroverlay.addEventListener("mouseover", ()=>{
    overlayicon.style.display="block"
    overlaytext.style.display="block"
})
contenedoroverlay.addEventListener("mouseout", ()=>{
    overlayicon.style.display="none"
    overlaytext.style.display="none"
})