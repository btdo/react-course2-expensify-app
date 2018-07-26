import {createStore} from 'redux';


const incrementCount = ({incrementBy = 1} = {}) => ({    
        type: 'INCREMENT',
        incrementBy: incrementBy    
})

const decrementCount = ({decrementBy = 1} = {})  => ({
    type: 'DECREMENT',
    decrementBy
})

const reset = () => ({
    type: 'RESET'
})

const set = ({count = 0} = {}) => ({
    type: 'SET',
    count
})

const countReducer = (state = {count:0}, action) => {
    console.log('running');
    switch(action.type){
        case 'INCREMENT': 
            return {count: state.count + action.incrementBy};
        case 'DECREMENT':             
            return {count: state.count - action.decrementBy};
        case 'RESET': return {count: 0};
        case 'SET': return {count: action.count};
        default:
            return state;
    }    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());


store.dispatch(set({count: 10}));

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({    
    decrementBy: 5
}));

store.dispatch(set({count: 101}));
unsubscribe();