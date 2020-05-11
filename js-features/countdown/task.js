let timer = document.getElementById('timer').textContent;
const leftSecond = () => {
    timer--;
    document.getElementById('timer').textContent = new Date(timer * 1000).toISOString().substr(11, 8);
    if(timer === 0) {
        alert('Вы победили в конкурсе');
    }
}
setInterval(leftSecond,1000)