if(localStorage.messages) {
    document.getElementById('editor').value = JSON.parse(localStorage.getItem('messages')).lastMessage;
}

const editor = document.getElementById('editor');
const btn = document.querySelector('.btn');

const saveMessage = (event) => {
    const target = event.target.value;
    let messages = {
        lastMessage: target,
    }
    localStorage.setItem('messages', JSON.stringify(messages));
};

editor.addEventListener('input', saveMessage);
btn.addEventListener('click', () => {
    document.getElementById('editor').value = '';
    localStorage.removeItem('messages');
});