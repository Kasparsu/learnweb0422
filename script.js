
function add(a, b){
    return a+b;
}

let divide = function(a,b) {
    if(b!=0){
        return a/b;
    }
    return NaN;
}

let sub = (a,b) => a-b;

let person = {
    hello() {
        console.log('hello');
    } 
}


let sum = add(3,5);
let sum2 = add(2,6);
console.log(sum, sum2);
let value = divide(4,0);
console.log(value);
value = sub(4,3);
console.log(value);
person.hello();

function recursive(i){
    console.log(i);
    if(i<10){
        recursive(i+1);
    }
}
recursive(0);
