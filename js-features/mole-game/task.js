let kills = document.getElementById('dead').textContent;
let miss = document.getElementById('lost').textContent;

const game = document.querySelector('.hole-game');
const zeroing = () => {
    document.getElementById('dead').textContent = 0;
    document.getElementById('lost').textContent = 0;
    kills = 0;
    miss = 0;
}
game.onclick = (event) => {

    let target = event.target;
    if (target.classList.contains('hole_has-mole')) {
        kills++;
        document.getElementById('dead').textContent = kills;
        if (kills === 10) {
            alert('You win!');
            zeroing();
        }
    } else {
        miss++;
        document.getElementById('lost').textContent = miss;
        if (miss === 5) {
            alert('You lost!');
            zeroing();
        }
    }

};
