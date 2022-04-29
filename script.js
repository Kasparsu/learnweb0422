let addItem = document.querySelector('#addItem');
let newItem = document.querySelector('#newItem');
let shoppingList = document.querySelector('#shoppingList');
addItem.addEventListener('click', ()=> {
    shoppingList.innerHTML += '<li>' + newItem.value + '</li>';
    newItem.value = '';
});