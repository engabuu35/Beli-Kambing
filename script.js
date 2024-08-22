// toogle class active
const navbarNav = document.querySelector('.navbar-nav');

// daf-menu klik
document.querySelector('#daftar-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

//klik diluar sidebar
const hamburger = document.querySelector ('#daftar-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});