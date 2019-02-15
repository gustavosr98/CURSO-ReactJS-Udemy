import React from 'react'

const PortafolioId = (props) => {
    console.log(props)
    return (
        <div>
            PortafolioId -> {props.match.params.id} ----- NOTA: Revisa la consola :)
        </div> 
    )
}

export default PortafolioId