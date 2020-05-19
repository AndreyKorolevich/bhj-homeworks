const isInViewport = () => {
    const reveal = document.querySelector('.reveal')
    const viewportHeight = window.innerHeight;
    const elementTop = reveal.getBoundingClientRect().top;
    const elementBottom = reveal.getBoundingClientRect().bottom;
    if((elementTop < viewportHeight) && elementBottom > 0) {
        reveal.classList.add('reveal_active');
    } else if (reveal.classList.contains('reveal_active')) {
        reveal.classList.remove('reveal_active');
    }
};
;
document.addEventListener('scroll', isInViewport)
