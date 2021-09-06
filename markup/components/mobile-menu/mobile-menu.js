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
