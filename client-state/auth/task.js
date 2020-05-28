if(localStorage.getItem('id')){
    document.getElementById('welcome').classList.add('welcome_active');
    document.getElementById('user_id').innerText = localStorage.getItem('id');
}else {
    document.getElementById('signin').classList.add('signin_active');
    const signinForm = document.getElementById('signin__form');

    signinForm.addEventListener('submit', event => {
        const formData = new FormData(signinForm);
        event.preventDefault();
        const request = new XMLHttpRequest();
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        request.addEventListener('readystatechange', function () {
            if (this.readyState === request.DONE && this.status === 200) {
                let id = JSON.parse(this.responseText).user_id;
                if (JSON.parse(this.responseText).success) {
                    localStorage.setItem('id', id);
                    document.getElementById('welcome').classList.add('welcome_active');
                    document.getElementById('signin').classList.remove('signin_active');
                    document.getElementById('user_id').innerText = id;
                } else {
                    alert('Неверный логин или пароль')

                }
            }
        });
        request.send(formData);
    });
}