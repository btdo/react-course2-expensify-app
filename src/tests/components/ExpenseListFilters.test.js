import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper =  shallow (
        <ExpenseListFilters filters={filters} setTextFilter={setTextFilter} 
            sortByDate={sortByDate} sortByAmount={sortByAmount} setStartDate={setStartDate} setEndDate={setEndDate} />            
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altfilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const textChange = 'rent';
    wrapper.find('input').simulate('change', {
        target: { value: textChange}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(textChange);
})


test('should handle sort by date change', () => {
    const value = 'date';
    wrapper.setProps({
        filters: altfilters
    });    
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenCalled();
})

test('should handle sort by amount change', () => {
    const value = 'amount';        
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date change', () => {    
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altfilters.startDate,
        endDate: altfilters.endDate 
    });
    expect(setStartDate).toHaveBeenLastCalledWith(altfilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altfilters.endDate);
})

test('should handle date focus', () => {    
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(
        calendarFocused
    );
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})
