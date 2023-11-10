window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle("nav_color_change_onscroll",window.scrollY>100)
    
})