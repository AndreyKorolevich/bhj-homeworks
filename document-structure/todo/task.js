const form = document.querySelector('.tasks__control');
const tasksList = document.getElementById('tasks__list');
let keyTaskNumber = localStorage.getItem('keyTaskNumber');//здесь храниться id очередной задачи которая будет создана

const createElement = (value,numberID) =>{ //создает елементы с задачами, принимает текст задачи и id
    const task = document.createElement('div');
    const taskTitle = document.createElement('div');
    const taskRemove = document.createElement('a');
    task.className = 'task';
    taskTitle.className = 'task__title';
    taskRemove.className = 'task__remove';
    taskTitle.innerText = value;
    taskRemove.innerHTML = '&times;';
    task.id = numberID;
    task.insertAdjacentElement('afterBegin', taskTitle);
    task.insertAdjacentElement('beforeEnd', taskRemove);
    tasksList.insertAdjacentElement('afterBegin', task);
}

if(keyTaskNumber === null) {//если на страницу зашли впервые устанавливаем id
    keyTaskNumber = 0;
}else{
    for (let i = 0; i < keyTaskNumber; i++) {//проверяем есть ли в localStorage сохраненные задачи
        const value = localStorage.getItem(i);//забираем из localStorage текст задачи
        if(value === null){//т.к. id не переприсваиваются при удалении задачи, проверяем чтобы не добавить пустую задачу
            continue
        }
        createElement(value,i);//создаем в DOM задачи сохраненные в localStorage
    }
}
const sentThing = event => {
    event.preventDefault();
    const value = document.querySelector('.tasks__input').value;
    if (value === '') {
        return
    }
    createElement(value,keyTaskNumber);
    localStorage.setItem(keyTaskNumber, value);//сохраняем в localStorage текст задачи
    keyTaskNumber++;//изменяем id для уникальности задачи
    localStorage.setItem('keyTaskNumber', keyTaskNumber);//переприсваиваем id в localStorage
}

const deleteTask = (event) => {//обработчик события нажатия на крестик
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('task__remove')) {
        const key = target.parentElement.id;
        localStorage.removeItem(key);//удаляем задачу из localStorage
        target.parentElement.remove();//удаляем задачу из DOM
    }
}

form.addEventListener('submit', sentThing);
tasksList.addEventListener('click', deleteTask);