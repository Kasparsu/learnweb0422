console.log({doc: document});
let button = document.getElementById('button');

button.addEventListener('click', evt => {
    console.log(evt);
    document.getElementById('message').innerHTML = 'Hello';
});