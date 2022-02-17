const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.nav-logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);






