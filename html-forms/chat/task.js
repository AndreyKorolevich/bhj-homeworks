const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.querySelector('.chat-widget__input');
const messages = document.getElementById('chat-widget__messages');
const data = new Date();
const hour = data.getHours();
const minutes = data.getMinutes();
const time = `${hour}:${minutes}`;
const robotAnswers = ['Привет', 'Пока', 'Мы закрыты', 'Рады вас приветствовать', 'У нас сегодня акция', 'Всего вам хорошего'];
const robotQuestion = ['Чем можем вам помочь?', 'Как ваши дела?', 'Ау, вы где?', 'Отдолжишь сотку до пятницы?', 'Может чаю?']
let timeLastMessage = null;

const timerQuestions = () => { //запускает таймер, сверяющий время последнего сообщения с настоящим
    const timer = setInterval(() => {
        const message = document.querySelectorAll('.message');
        if (((new Date() - timeLastMessage) > 30000) && message[message.length - 2].classList.contains('message_client')) { //2-е условие - последнее сообщение от робота
            const randomMessage = robotQuestion[Math.floor(Math.random() * robotQuestion.length)]
            messages.innerHTML += `
     <div class="message">
         <div class="message__time">${time}</div>
         <div class="message__text">${randomMessage}</div>
     </div>
`
            document.querySelector('.chat-widget__messages-container').scrollTop = 9999;
            clearInterval(timer);
        }
    }, 1000)
}

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

chatWidgetInput.addEventListener('keyup', (event) => {
    if ((event.key === 'Enter') && chatWidgetInput.value !== '') {
        const randomMessage = robotAnswers[Math.floor(Math.random() * robotAnswers.length)]
        messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">
      ${chatWidgetInput.value}
    </div>
  </div>
     <div class="message">
         <div class="message__time">${time}</div>
         <div class="message__text">${randomMessage}</div>
     </div>
`;
        chatWidgetInput.value = '';
        document.querySelector('.chat-widget__messages-container').scrollTop = 9999;
        timeLastMessage = new Date();//перезаписывается время когда было отправленно последнее сообщение
        timerQuestions();
    }
})

