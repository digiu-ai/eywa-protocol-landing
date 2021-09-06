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
