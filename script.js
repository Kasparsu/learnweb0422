let addItem = document.querySelector('#addItem');
let newItem = document.querySelector('#newItem');
let shoppingList = document.querySelector('#shoppingList');

let addRemoveEvents = () => {
    let checkboxes = document.querySelectorAll('#shoppingList>li>input');
    checkboxes.forEach(check => {
        check.addEventListener('click', event => {
            event.target.parentElement.remove();
        });
    });
}

addRemoveEvents();

let addingItem = ()=> {
    if(newItem.value.trim() != ''){
        shoppingList.innerHTML += '<li>' + newItem.value + ' <input type="checkbox"></li>';
        addRemoveEvents();
    }
    newItem.value = '';
}


addItem.addEventListener('click', addingItem);
newItem.addEventListener('keydown', event => {
    if(event.code == 'Enter'){
        addingItem();
    }
});

