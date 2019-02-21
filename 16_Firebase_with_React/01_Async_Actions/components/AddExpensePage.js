import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // EJECUTA EL START EN VEZ DE HACER DISPATCH DIRECTAMENTE 
    this.props.startAddExpense(expense)
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

// AHORA AQUI VA TAMBIEN EL START
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
