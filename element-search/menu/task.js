let menuLink = document.querySelectorAll('.menu_main');

menuLink.forEach(e => e.onclick = (event) => {
    let neighborTarget = event.target.nextElementSibling;

    if (neighborTarget.classList.contains('menu_active')) {
        neighborTarget.classList.remove('menu_active');
        return false;
    } else if (!neighborTarget.classList.contains('menu_active')) {
        event.currentTarget.querySelectorAll('.menu_active').forEach(e => e.classList.remove('menu_active'))
        neighborTarget.classList.add('menu_active')
        return false;
    }
})
