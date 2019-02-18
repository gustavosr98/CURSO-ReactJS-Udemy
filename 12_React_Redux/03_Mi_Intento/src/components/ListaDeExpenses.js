import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import { removeExpense } from '../actions/expenses'

const ListaDeExpenses = (props) => (
    <div>    
        {getVisibleExpenses(props.expenses, props.filters).map( (expense) => (
            <div key={expense.id}>
                <h3>{expense.description}</h3>
                <p>{expense.note} - {expense.amount}$ - Date:{expense.createdAt}</p>
                <button
                    onClick={ () =>
                        props.dispatch( removeExpense(expense) )
                    }
                >
                    Eliminar
                </button>
            </div>
        ))}
    </div>
)

const mapStateToProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters
})

export default connect(mapStateToProps)(ListaDeExpenses)