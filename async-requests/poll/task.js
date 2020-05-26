let request = new XMLHttpRequest();
request.open('GET', ' https://netology-slow-rest.herokuapp.com/poll.php');
request.addEventListener('readystatechange', function () {
    if (this.readyState == request.DONE && this.status == 200) {
        let quiz = JSON.parse(this.responseText);
        document.getElementById('poll__title').innerText = quiz.data.title;
        let output = '';
        for (let key in quiz.data.answers) {
            output += '<button class="poll__answer" id=" ' + key + '">' + quiz.data.answers[key] + '</button>';
        }
        document.getElementById('poll__answers').innerHTML = output;
        document.getElementById('poll__answers').dataset.id = quiz.id
    }
});
request.send();

postAnswer = (event) => {
    document.querySelector('.dialog__window').classList.remove('hide');
    const target = event.target;
    const request = new XMLHttpRequest();
    const voteId = document.getElementById('poll__answers').dataset.id
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.addEventListener('readystatechange', function () {
        if (this.readyState == request.DONE && this.status == 200) {
            document.querySelectorAll('.poll__answer').forEach(elem => {elem.remove()});
            let data = JSON.parse(this.responseText).stat;
            let output = '<ul class="hide">';
            let sumAnswer = 0;
            data.forEach(elem => sumAnswer += elem.votes);
            console.log(sumAnswer)
            for (let key in data) {
                let procent = Math.ceil((data[key].votes/sumAnswer)*100);
                output += '<li><b>' + data[key].answer + "</b>: " + procent +" %"+ '</li>';
            }
            output += '</ul>';
            document.getElementById('poll__answers').innerHTML = output;
            console.log(data)

        }
    });
    request.send(`vote=${voteId}&answer=${target.id}`);

};

document.getElementById('poll__answers').addEventListener('click', postAnswer);
document.querySelector('.button__close').addEventListener('click', () => {
    document.querySelector('.dialog__window').classList.add('hide');
    document.querySelector('ul').classList.remove('hide');
});