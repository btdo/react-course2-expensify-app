// console.log('test');
// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const {name = 'anonymous', age} = person;

// console.log(`${name} is ${age}`);

// let {city, temp: temperature} = person.location;
// console.log(`${city} in ${temperature}`);

// city ='test';

// console.log(`${city} in ${temperature}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguine'
//     }
// }

// const {title} = book;
// const {name: publisherName = 'Self Published'} = book.publisher;

// console.log(`${publisherName}`);

const address = ['1299 test','toronto', 'vancouver','193293'];

const [street, city, state, zip] = address;

console.log(`you are in ${street} `);

const item = ['Coffee (hot)', '$2.00', '2.50', '3.00'];

const [coffeeName,,price = '4.0'] = item;

console.log(`A ${coffeeName} is ${price}`);