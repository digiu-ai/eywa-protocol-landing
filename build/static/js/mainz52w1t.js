









const header = document.getElementById('header');
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
    scrolledCheck();
});
document.onscroll = () => {
    scrolledCheck();
};

const menuButton = document.getElementById('mobile-menu-button');
menuButton.onclick = () => {
    const menu = document.getElementById('mobile-menu');
    menu.className = menu.className + ' _active';
    document.body.className = document.body.className + ' _is-modal-open';
};

const closeButton = document.getElementById('mobile-menu__close-button');
const navLinks = document.getElementsByClassName('mobile-menu__item');
const closeHandler = () => {
    const menu = document.getElementById('mobile-menu');
    menu.className = menu.className.replace(' _active', '');
    document.body.className = document.body.className.replace(' _is-modal-open', '');
};
for (let item of navLinks) {
    item.onclick = closeHandler;
}
closeButton.onclick = closeHandler;














