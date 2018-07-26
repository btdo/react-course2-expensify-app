import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.subscribe(() => {
    const state =  store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
})

store.dispatch(addExpense({description: 'Water bill', amount: 100, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 1013, createdAt: 43}));
store.dispatch(addExpense({description: 'Hydro bill', amount: 10482, createdAt: 1001}));


// setTimeout(() => {
//     store.dispatch(setTextFilter(''));
// },3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));