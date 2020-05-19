const fontSize = document.querySelector('.book__controls');


const changeSixe = (target) => {
    const sizeText = target.dataset.size;
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    target.classList.add('font-size_active');
    document.getElementById('book').classList.remove('book_fs-big', 'book_fs-small');
    document.getElementById('book').classList.add(`book_fs-${sizeText}`)
}

const changeColor = (target) => {
    const sizeColor = target.dataset.color;
    target.parentElement.querySelector('.color_active').classList.remove('color_active');
    target.classList.add('color_active');
    document.getElementById('book').classList.remove('book_color-gray', 'book_color-whitesmoke');
    document.getElementById('book').classList.add(`book_color-${sizeColor}`)
}

const changeBackground = (target) => {
    const sizeBackground = target.dataset.color;
    target.parentElement.querySelector('.color_active').classList.remove('color_active');
    target.classList.add('color_active');
    document.getElementById('book').classList.remove('book_bg-gray', 'book_bg-black');
    document.getElementById('book').classList.add(`book_bg-${sizeBackground}`)
}
const changing = (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.parentElement.classList.contains('book__control_font-size')) {
        changeSixe(target);
    } else if(target.parentElement.classList.contains('book__control_color')) {
        changeColor(target);
    }else if(target.parentElement.classList.contains('book__control_background')) {
        changeBackground(target);
    }
}
fontSize.addEventListener('click', changing);
