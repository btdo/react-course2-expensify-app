import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({expenseCount, total }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    return (
    <div> 
        Viewing { expenseCount } {expenseWord} totalling { numeral(total/100).format('$0,0.00') }
    </div>
)};

const mapStateToProps = (state) => {
    return {
        expenseCount: selectExpenses(state.expenses, state.filters).length,
        total: totalExpenses(state.expenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);