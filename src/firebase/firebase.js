import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider =  new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })
//     console.log(expenses);
// }, (e) => {
//     console.log('error fetchign');
// })

// database.ref('expenses').push({
//     description: 'test',
//     note: 'bus',
//     amount: '12.23',
//     createdAt: 2323
// })


// database.ref('notes').push({
//                 title: 'Course Topics',
//                 body: 'Reactive native, angular'
//             });

// database.ref('notes/-LK4fhsJvYtJgGhzsYF9').update({body: 'Buy Food'});
// database.ref('notes/-LK4fhsJvYtJgGhzsYF9').remove();

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const {name, job: {title}, job: {company} } = snapshot.val();     
//     console.log(`${name} is a ${title} at ${company}`);
// }, (e) => {
//     console.log('error fetchign');
// })

// setTimeout(() => {
//     database.ref('name').set('Mike');
// }, 3500);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error fetchign');
// })

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);


// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);


// setTimeout(() => {
//     database.ref('age').set(30);
// }, 7000);


// database.ref('location').once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error while fetching')
// });

// database.ref().set({
//   name: 'Bao Do',
//   stressLevel: 6,
//   job: {
//       title: 'software developer',
//       company: 'Google'
//   },
//   age: 35,
//   isSingle: false,
//   location: {
//       city: 'burlington',
//       country: 'United States'
//   }  
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This failed.',e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Seattle',
//     'job/company': 'Amazon'
// })

// database.ref('isSingle').remove().then(() => {
//     console.log('data is removed');
// })