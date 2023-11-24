window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle("nav_color_change_onscroll",window.scrollY>100)
    
})

// show and hide faq section
let faqs = document.querySelectorAll(".faq");

faqs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open')
        const icon=faq.querySelector('.faq__icon i')
       if(icon.className ==='fa-solid fa-plus')
       {
        icon.className="fa-solid fa-minus"
       }
       else
       {
        icon.className="fa-solid fa-plus"
       }
    })
})


// show hide navbar
let Menu = document.querySelector(".nav__menu")
let OpenBtn=document.querySelector("#menu_open")
let CloseBtn=document.querySelector("#menu_close")
let OpenBtnId = document.getElementById("menu_open")


OpenBtn.addEventListener('click',()=>{
    Menu.style.display = "block"
    CloseBtn.style.display = "inline-block"
    OpenBtn.style.display = "none"
})

CloseBtn.addEventListener('click',()=>{
    Menu.style.display = "none"
    OpenBtn.style.display = "inline-block"
    CloseBtn.style.display = "none"
})

// hide nav bar hamburger menu when user clicks elsewhere on screen if it is open
window.onclick = function(event)
{
    if(!(event.target == OpenBtnId || event.target.parentNode == OpenBtnId))
    {
        Menu.style.display = "none"
        OpenBtn.style.display = "inline-block"
        CloseBtn.style.display = "none"
    }
}



