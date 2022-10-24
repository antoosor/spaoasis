const iconoMenu = document.querySelector('.nav_menu');
const navMenu = document.querySelector('.nav_list');

iconoMenu.addEventListener('click', ()=>{

    navMenu.classList.toggle('nav_list--show');

});