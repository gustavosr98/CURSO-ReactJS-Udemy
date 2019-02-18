import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const CreateExpense = (props) => (
    <div>
        <h1>Create Expense</h1>
        <ExpenseForm 
            onSubmit={ (expense) => {
                props.dispatch( addExpense(expense) )
                // ME REDIRECCIONA AL PATH QUE QUIERA
                props.history.push('/')
            }}
        />
    </div>
) 

export default connect()(CreateExpense)