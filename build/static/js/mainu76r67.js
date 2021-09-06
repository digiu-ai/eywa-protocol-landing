





const header = document.getElementById('header');
console.log(header);
const scrolledCheck = () => {
    const scrollY = window.scrollY;
    if (scrollY && !header.className.includes('_scrolled')) {
        header.className = header.className + ' _scrolled';
    }
    if (!scrollY && header.className.includes('_scrolled')) {
        header.className = header.className.replace(' _scrolled', '');
    }
};
document.addEventListener('DOMContentLoaded', () => {
    console.log('kekw');
    scrolledCheck();
});
document.onscroll = () => {
    scrolledCheck();
};



const menuButton = document.getElementById('mobile-menu-button');
menuButton.onclick = () => {
    const menu = document.getElementById('mobile-menu');
    menu.className = menu.className + ' _active';
};

const closeButton = document.getElementById('mobile-menu__close-button');
closeButton.onclick = () => {
    const menu = document.getElementById('mobile-menu');
    menu.className = menu.className.replace(' _active', '');
};














