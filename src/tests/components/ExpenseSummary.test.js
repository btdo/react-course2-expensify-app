import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render expense summary with 1 expense', () => {
    const wrapper = shallow (<ExpenseSummary expenseCount={1} total={1223}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render expense summary with multiple expenses', () => {
    const wrapper = shallow (<ExpenseSummary expenseCount={12} total={121223}/>);
    expect(wrapper).toMatchSnapshot();
})