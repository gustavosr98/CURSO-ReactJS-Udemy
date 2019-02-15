import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Reto App Header </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <span> ~ </span>
        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
        <span> ~ </span>
        <NavLink to="/portafolio" activeClassName="is-active">Portafolio</NavLink>
        <p>{/*Linea en blanco*/}</p>
    </header>
)

export default Header