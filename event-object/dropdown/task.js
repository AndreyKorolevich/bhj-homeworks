const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list');

openList = (event) => {
    if(dropdownList.classList.contains('dropdown__list_active')) {
        event.preventDefault();
        const newValue = event.target.textContent;
        document.querySelector('.dropdown__value').textContent = newValue;
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
}

dropdown.addEventListener('click', openList);
