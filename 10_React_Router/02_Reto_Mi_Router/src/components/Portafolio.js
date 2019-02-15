import React from 'react'
import { Link } from 'react-router-dom'

const Portafolio = () => (
    <div>
        Portafolio bro
        <h3>Elige un trabajo mio men</h3>
        <Link to="/portafolio/1">Trabajo 1</Link>
        <span> ~ </span>
        <Link to="/portafolio/2">Trabajo 2</Link>
    </div>
)

export default Portafolio