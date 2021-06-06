const toTop = document.querySelector('.to-top');

//to top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('go');
    } else {
        toTop.classList.remove('go');
    }
})