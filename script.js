let number = Math.floor(Math.random()*100)+1;
let guess;
while(number!=guess){
    guess = parseInt(prompt('Arva number 1-100neni'));
    if(number > guess){
        alert('Suurem');
    } else if(number < guess){
        alert('Väiksem');
    } else {
        alert('Õige! Võitsid');
    }
}
