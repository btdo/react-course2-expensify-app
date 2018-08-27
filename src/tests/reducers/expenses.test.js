import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state =  expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('should remove expense by id',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})


test('should note remove expenses if id not found',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense',() => {
    const newExpense = {
        id: '4',
        description: 'New Expense',
        note: '',
        amount: 1000,
        createdAt: moment(0).add(3,'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
})

test('should edit an expense',() => {
    const updates = {
        description: 'New Expense',
        note: 'new note'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toEqual(updates.description);
    expect(state[2].note).toEqual(updates.note);
})

test('should not edit an expense',() => {
    const updates = {
        description: 'New Expense',
        note: 'new note'
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test ('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer (expenses, action);
    expect(state).toEqual([expenses[1]]);
})


