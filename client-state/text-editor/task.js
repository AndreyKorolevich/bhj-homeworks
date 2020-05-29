if(localStorage.lastMessage) {
    document.getElementById('editor').value = JSON.parse(localStorage.getItem('lastMessage'));
}

const editor = document.getElementById('editor');
const btn = document.querySelector('.btn');

const saveMessage = (event) => {
    const lastMessage = event.target.value;
    localStorage.setItem('lastMessage', JSON.stringify(lastMessage));
};

editor.addEventListener('input', saveMessage);
btn.addEventListener('click', () => {
    document.getElementById('editor').value = '';
    localStorage.removeItem('lastMessage');
});