import {createStore, combineReducers} from 'redux';
import uuid from 'uuid'

const addExpense = ({ description = '', notes = '', amount = 0, createdAt = 0} = {}) => ({
   type: 'ADD_EXPENSE',
   expense: {
       id: uuid(),
       description,
       notes,
       amount,
       createdAt
   } 
});

const removeExpense = ({id}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})


const expensesReducerDefaultState = [];

const expensesReducer = (state=expensesReducerDefaultState,action) => {
    
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id){
                    return {
                        ...expense, ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default: 
            return state;
    }
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByDate =() => ({
    type: 'SORT_BY_DATE'
})

const sortByAmount =() => ({
    type: 'SORT_BY_AMOUNT'
})

const setStartDate =(startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate =(endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
})

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filtersReducerDefaultState,action) => {
    switch(action.type) {
        default: 
            return state;
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};
        case 'SORT_BY_DATE':
            return {...state, sortBy: 'date'};
        case 'SORT_BY_AMOUNT':
            return {...state, sortBy: 'amount'};
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};

    }


};


const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
}));

store.subscribe(() => {
    const state =  store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 10}));

// store.dispatch(setTextFilter('text'));

store.dispatch(sortByAmount());
 store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1000));
//store.dispatch(setTextFilter('COFF'));




const demoState = {
    expenses: [{
        id: 'dadfadsf',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}
