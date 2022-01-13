const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
function navToggle(){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
     document.body.classList.toggle('no-scroll')
}
btn.addEventListener('click', navToggle)

const d= new Date();
document.getElementById('copyright').innerHTML= `@ ${d.getFullYear()} Lotus Hotel All rights reserved`

