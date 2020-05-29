const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');
//document.cookie='class=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
};

if (document.cookie.length === 0 || getCookie('class') === 'modal_active') {
    subscribeModal.classList.add('modal_active');
    document.cookie = 'class=modal_active;'
}

modalClose.addEventListener('click', () => {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'class=;'
});
