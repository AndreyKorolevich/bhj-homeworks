const hasTooltip = document.querySelectorAll('.has-tooltip');

const addHint = (target) => {
    const tooltip = target.title;
    const position = target.dataset.position;
    const tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip tooltip_active';
    tooltipElem.innerText = tooltip;
    target.insertAdjacentElement('afterend', tooltipElem);

    const coords = target.getBoundingClientRect();
    let left = 0;
    let top = 0;
    if (position == 'top') {
        left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        top = coords.top - tooltipElem.offsetHeight - 5;
    } else if (position == 'right') {
        left = coords.left + target.offsetWidth;
        top = coords.top - 5;
    } else if (position == 'left') {
        left = coords.left - tooltipElem.offsetWidth;
        top = coords.top - 5;
    } else if (position == 'bottom') {
        left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
        top = coords.top + target.offsetHeight;
    }
    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';
}

const openHint = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.nextElementSibling !== null && target.nextElementSibling.classList.contains('tooltip')) {
        target.nextElementSibling.remove();
    } else if (document.querySelector('.tooltip_active') != null) {
        document.querySelector('.tooltip_active').remove();
        addHint(target);
    } else {
        addHint(target);
    }
}

hasTooltip.forEach(elem => {
    elem.addEventListener('click', openHint);
})
