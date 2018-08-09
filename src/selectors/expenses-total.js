export default (expenses) => {
    const amounts = expenses.map((expense) => expense.amount);
    const sum = amounts.reduce((total,amount) => total + amount,0);
    return sum;
}; 