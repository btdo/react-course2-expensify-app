import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'testing'
    })
    expect(state.text).toBe('testing');
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    })
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to state', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }

    const state = filtersReducer(currentState, {
        type: 'SORT_BY_DATE'
    })
    expect(state.sortBy).toBe('date');
})

test('should set startDate', () => {    
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: moment().endOf('month')
    })
    expect(state.startDate).toEqual(moment().endOf('month'));
})

test('should set endDate', () => {    
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: moment().startOf('month')
    })
    expect(state.endDate).toEqual(moment().startOf('month'));
})