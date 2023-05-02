const upload = document.querySelector(".upload")
const notifications = document.querySelector(".notifications")
const uploadContainer = document.querySelector(".uploadWindow")
const uploadIcon = document.querySelector("#camera")
const uploadIconFill = document.querySelector("#camera-fill")
const notificationsContainer = document.querySelector(".notificationsWindow")
const notificationsIcon = document.querySelector("#bell")
const notificationsIconFill = document.querySelector("#bell-fill")
const cuenta = document.querySelector(".cuenta")
const cuentaContainer = document.querySelector(".cuentaWindow")

const accountMenusFadeInOut = (div,div2,icon1,icon2)=>{
    div.addEventListener("focusin", event =>{
        event = div2
        event.style.display="flex";
        icon1.style.display="none";
        icon2.style.display="flex";
    })

    div.addEventListener("focusout", event =>{
        event = div2
        event.style.display="none";
        icon1.style.display="flex";
        icon2.style.display="none";
    })
}

const cuentaMenuFadeInOut = (div,divcontainer) =>{
    div.addEventListener("focusin", event =>{
        event = divcontainer
        event.style.display="flex";
    })
    div.addEventListener("focusout", event =>{
        event = divcontainer
        event.style.display="none";
    })
}
accountMenusFadeInOut(upload,uploadContainer,uploadIcon,uploadIconFill)
accountMenusFadeInOut(notifications,notificationsContainer,notificationsIcon,notificationsIconFill)
cuentaMenuFadeInOut(cuenta,cuentaContainer)