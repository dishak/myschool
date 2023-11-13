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
