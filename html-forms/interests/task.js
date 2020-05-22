const onChange = ({target}) => {
    updateChildren(target);
    updateParents(target);
}

const updateChildren = (el) => {
    const {checked} = el; //определяем какое значение свойства checked будем устанавливать потомкам
    getChildren(el).forEach(child => {
        child.checked = checked; //изменяет у всех потомков свойство checked;
        child.indeterminate = false;
    });
}

const updateParents = (parent) => {
    while (parent = getParent(parent)) { //устанавливаем родителя выбранного чекбокса если он есть
        let children = getChildren(parent); //находим всех потомков этого родителя
        let checked = [...children]
            .filter(child => child.checked).length; //находим сколько потомков у этого родителя с checked=true
        parent.checked = (checked === children.length); //сравниваем кол-во потомков с кол-вом потомков с checked=true
        parent.indeterminate = checked && !parent.checked;//если у родительского элемента checked=false и есть хоть
        // один потомок с checked=true то indeterminate=true;
    }
}

const getChildren = (el) => { //находит всех потомков выбранного чекбокса
    el = el.closest('li');//поднимаемся к ближайшему родителю 'li'
    el = el && el.querySelector('ul');//определяем есть ли вложенные списки
    return el && el.querySelectorAll('input[type="checkbox"]') || [];//если есть вложенные списки возвращаем их
    // иначе пустой массив
}

const getParent = (el) => { //находит ближайшего родителя выбранного чекбокса
    el = el.closest('ul');//поднимаемся к ближайшему родителю 'ul'
    el = el && el.closest('li');//поднимаемся еще выше ближайшему родителю 'li'
    return el && el.querySelector('input[type="checkbox"]');//если родитель есть то возвращаем его иначе null
}
document.addEventListener('change', onChange);
