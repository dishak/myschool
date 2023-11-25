window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle("nav_color_change_onscroll", window.scrollY > 100)

})

// show and hide faq section
let faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')
        const icon = faq.querySelector('.faq__icon i')
        if (icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus"
        }
        else {
            icon.className = "fa-solid fa-plus"
        }
    })
})


// show hide navbar
let Menu = document.querySelector(".nav__menu")
let OpenBtn = document.querySelector("#menu_open")
let CloseBtn = document.querySelector("#menu_close")
let OpenBtnId = document.getElementById("menu_open")


OpenBtn.addEventListener('click', () => {
    Menu.style.display = "block"
    CloseBtn.style.display = "inline-block"
    OpenBtn.style.display = "none"
})

CloseBtn.addEventListener('click', () => {
    Menu.style.display = "none"
    CloseBtn.style.display = "none"
    OpenBtn.style.display = "inline-block"

})


// hide nav bar hamburger menu when user clicks elsewhere on screen if it is open
window.onclick = function (event) {

    if (!(event.target == OpenBtnId || event.target.parentNode == OpenBtnId)) {
        if (window.innerWidth <= 1024) {
            Menu.style.display = "none"
            OpenBtn.style.display = "inline-block"
            CloseBtn.style.display = "none"
            console.log(`openbtn is block and innerwidth is: ${window.innerWidth}`)
        }

    }

}

// Reset form after submit clicked function
const reset_form = document.getElementById('contact_form')
let allInputs = document.querySelectorAll('input');
let form_textarea = document.querySelector('textarea');
console.log(`The textarea is  : ${form_textarea}`)
reset_form.addEventListener('submit', (e) => {

    console.log(`The allinputs are : ${allInputs}`)
    allInputs.forEach(singleInput => singleInput.value = '');
    form_textarea.value = " ";
    console.log(`The allinputs after clearing are : ${allInputs}`)
})

// to update content on page reloading when screenwidth changes

// window.addEventListener('resize',()=>{
// console.log("window is resised")
// location.reload(true)
// })


