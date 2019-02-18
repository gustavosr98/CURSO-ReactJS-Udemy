import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch( addExpense( {description:'COMPRAS EN PANAMA', amount:1000, note:'Fiesta', createdAt:0} ) )
store.dispatch( addExpense( {description:'COMPRAS EN TUCACAS', amount:300, note:'Comida', createdAt:100} ) )
store.dispatch( addExpense( {description:'COMPRAS EN MIAMI', amount:5000, note:'Ropa', createdAt:70} ) )


store.subscribe( ()  => {
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render( jsx , document.getElementById('app'));
