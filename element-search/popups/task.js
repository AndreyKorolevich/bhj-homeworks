const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.querySelectorAll('.modal__close');
const success = document.querySelector('.show-success');

modalClose.forEach(e => e.onclick = (event) => {
    document.querySelector('.modal_active').classList.remove('modal_active')
})

success.onclick = (event) => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

modalMain.classList.add('modal_active');
