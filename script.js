let person = {
    name: 'kaspar',
    age: 12,
    'last name': 'Suursalu',
    books: [
        'Harry Potter',
        'Martian',
        'Mees kes teadis ussisõnu'
    ],
    address: {
        street: 'Rae',
        city: 'Tallinn',
        country: 'Estonia'
    }
};
let key = 'name';
console.log(person[key]);

console.log('hello ' + person.name + ' ' + person['last name']);

console.log(person.books[1]);
console.log(person.address.country);