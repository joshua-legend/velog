const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    const text = input.value;
    if(text==='') {
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class','item__row');

    const item = document.createElement('div');
    item.setAttribute('class','item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class','item__name');
    itemName.innerText = text;

    const itemDelete = document.createElement('button');
    itemDelete.setAttribute('class','item__delete');
    itemDelete.addEventListener('click',()=>{
        items.removeChild(itemRow);
    })

    const itemIcon = document.createElement('i');
    itemIcon.setAttribute('class','fas fa-trash');

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class','item__divider')

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    item.appendChild(itemName);
    item.appendChild(itemDelete);
    itemDelete.appendChild(itemIcon);

    return itemRow;
}
addBtn.addEventListener('click',()=>{
    onAdd();
});

input.addEventListener('keypress',()=>{
    console.log('레전두')
})