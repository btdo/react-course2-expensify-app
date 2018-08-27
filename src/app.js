import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import { startSetExpenses} from './actions/expenses'; 

const store = configureStore();


// setTimeout(() => {
//     store.dispatch(setTextFilter(''));
// },3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    console.log("Rendering done");
    ReactDOM.render(jsx, document.getElementById('app'));
})

