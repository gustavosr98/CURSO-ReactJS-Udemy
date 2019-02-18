import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <div>
        <h1>App de Gastos</h1>
        <header>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <span> - </span>
            <NavLink to="/edit" activeClassName="is-active">Create Expense</NavLink>
            <span> - </span>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    </div>
)