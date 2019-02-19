import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import getVisibleExpenses from '../selectors/expenses'

const ListaDeExpenses = (props) => (
    <div>    
        {getVisibleExpenses(props.expenses, props.filters).map( (expense) => (
            <div key={expense.id}>
                <Link to={`/edit/${expense.id}`}>
                    <h3>{expense.description}</h3>
                </Link>
                <p>{expense.note} - {(expense.amount / 100).toString()}$ - { moment(expense.ceatedAt).format('MM/DD/YYYY') }</p>
            </div>
        ))}
    </div>
)

const mapStateToProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters
})

export default connect(mapStateToProps)(ListaDeExpenses)