let clos = document.querySelector('.fa-xmark')
let menu = document.getElementById('menu')
let men = document.querySelector('.fa-bars')

clos.addEventListener('click',function(){
    menu.classList.add('close')
})
men.addEventListener('click',function(){
    menu.classList.toggle('close')
})