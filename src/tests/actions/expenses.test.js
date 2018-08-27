import {addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => { 
        expensesData[id] = { description, note, amount, createdAt};
    });
    database.ref('expenses').set(expensesData).then(() => done());
})

test('should setup remove expense action', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action', () => {
    const action = editExpense('123abc', {amount: 12});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {amount: 12}
    })
})

test('should setup add expense action object', () =>{
    
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
})

// test('should setup add expense action object', () =>{
//     const expenseData = {
//         description: '',
//         amount: 0,
//         createdAt: 0,
//         note: ''
//     }
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData, id: expect.any(String)
//         }
//     })
// })

test('should add expense to database and store', (done) => {
    const store= createMockStore({});
    const expenseData = { description: 'Mouse', amount: 3000, note: 'this one is good', createdAt: 1000};
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: 'ADD_EXPENSE', expense: {
            id: expect.any(String),
            ...expenseData
        }})
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store= createMockStore({});
    const defaultData = {
        description : '', 
        note : '', 
        amount : 0, 
        createdAt : 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: 'ADD_EXPENSE', expense: {
            id: expect.any(String),
            ...defaultData
        }})
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
    });
});

test('should setup set expenses action object', () =>{    
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenses
    });
})

test('should set expenses from database', (done) => {
    const store= createMockStore({});   
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({type: 'SET_EXPENSES', expenses})
        done();
    });
       
    
});

// test('should set expenses action object', () =>{    
//     const action = setExpenses(expenses);
//     expect(action).toEqual({
//         type: 'SET_EXPENSES',
//         expenses: expenses
//     });
// })