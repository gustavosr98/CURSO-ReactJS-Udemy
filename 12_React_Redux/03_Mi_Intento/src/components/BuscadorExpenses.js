import React from 'react'
import { connect } from 'react-redux'
import {setTextFilter , sortByDate, sortByAmount } from '../actions/filters'

const BuscadorExpenses = (props) => (
    <div>    
        <input 
            type="text"
            value={props.filters.text}
            onChange={ (e) => {
                // CON CONNECT, PROPS SE CONVIERTE EN STORE
                // STORE.DISPATCH( ACTION ) ENVIA LA ACCION AL REDUCER
                props.dispatch( setTextFilter (e.target.value ))
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={ (e) => {
                if (e.target.value === 'date') 
                    props.dispatch( sortByDate() )
                else if (e.target.value === 'amount')
                    props.dispatch( sortByAmount() )
        }}

        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters
})

// CONNECT( FUNCION => STATE )( COMPONENTE )
// TRANSFORMA EL STATE EN PROPS PARA EL COMPONENTE
export default connect(mapStateToProps)(BuscadorExpenses)