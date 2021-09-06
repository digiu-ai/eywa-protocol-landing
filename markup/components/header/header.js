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
