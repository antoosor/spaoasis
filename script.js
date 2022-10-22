const iconoMenu = document.querySelector('.nav_menu');
const navMenu = document.querySelector('.nav_list');

iconoMenu.addEventListener('click', ()=>{
    //navMenu.style.transform = 'translateX(0)';
    navMenu.classList.toggle('nav_list--show');

});