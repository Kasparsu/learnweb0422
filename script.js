let addItem = document.querySelector('#addItem');
let newItem = document.querySelector('#newItem');
let shoppingList = document.querySelector('#shoppingList');

let addingItem = ()=> {
    if(newItem.value.trim() != ''){
        shoppingList.innerHTML += '<li>' + newItem.value + '</li>';
    }
    newItem.value = '';
}


addItem.addEventListener('click', addingItem);
newItem.addEventListener('keydown', event => {
    console.log(event);
    if(event.code == 'Enter'){
        addingItem();
    }
});
