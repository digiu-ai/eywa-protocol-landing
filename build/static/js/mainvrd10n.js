









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














