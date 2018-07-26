import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent',
        amount: 1022,
        createdAt: 1000,
        note: 'last month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData, id: expect.any(String)
        }
    })
})

test('should setup add expense action object', () =>{
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData, id: expect.any(String)
        }
    })


})

