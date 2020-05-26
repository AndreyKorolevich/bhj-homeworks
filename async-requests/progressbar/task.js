let data = document.getElementById('form');
data.addEventListener('submit', event => {
    event.preventDefault();
    let progress = document.getElementById('progress');
    let formData = new FormData(data);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    request.upload.onprogress = function(event) {
       // let value = document.getElementById('progress').value;
        document.getElementById('progress').value = event.loaded/event.total
        console.log(`Отправлено ${event.loaded} из ${event.total}`);
    };
    request.send(formData);
});
