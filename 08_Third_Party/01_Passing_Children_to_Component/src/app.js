import React from 'react';
import ReactDOM from 'react-dom';

const Layout = (props) => (
    <div>
        <p>Hola</p>
        {props.children[1]}
        <p>Chao</p>
    </div>
)

ReactDOM.render(
    <Layout> 
        <p>Primero</p>
        <p>Segundo</p>
    </Layout>, 
    document.getElementById('app')
);