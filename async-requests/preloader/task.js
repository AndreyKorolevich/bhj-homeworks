const creatElement = (str) => {
    let data = JSON.parse(str).response.Valute;
    document.getElementById('loader').classList.remove('loader_active');
    let output = '<ul>';
    for (let key in data) {
        output += '<li><b>' + data[key].CharCode + "</b>: " + data[key].Value  + " руб." + '</li>';
    }
    output += '</ul>';
    document.getElementById('items').innerHTML = output;
}

if(localStorage.length !== 0) {
    creatElement(localStorage.getItem('data'));
}

let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.addEventListener('readystatechange', function () {
    if (this.readyState == request.DONE && this.status == 200) {
        localStorage.setItem('data', this.responseText);
        creatElement(this.responseText);
    }
});
request.send();

