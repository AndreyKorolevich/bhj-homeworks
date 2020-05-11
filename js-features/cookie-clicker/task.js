const clicker = document.getElementById('cookie');
let startTime = new Date;
clicker.onclick = () => {
    const clickerCounter = document.getElementById('clicker__counter');
    clickerCounter.textContent++;
    if(!clicker.classList.contains('big')){
        clicker.classList.add('big');
    }else{
        clicker.classList.remove('big');
    }
    const endTime = new Date;
    const time = (endTime - startTime) / 1000;
    const averageSpeed = (1 / time).toFixed(2);
    startTime = endTime;
    document.getElementById('clicker__speed').textContent = averageSpeed;
}


