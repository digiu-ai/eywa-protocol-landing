const menuButton = document.getElementById('mobile-menu-button');
menuButton.onclick = () => {
    const menu = document.getElementById('mobile-menu');
    menu.className = menu.className + ' _active';
};
