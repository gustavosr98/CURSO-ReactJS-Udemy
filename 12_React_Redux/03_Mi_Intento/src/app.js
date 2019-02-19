import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';

import { addExpense } from './actions/expenses';
 
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.dispatch( addExpense( {description:'COMPRAS EN PANAMA', amount:1005, note:'Fiesta', createdAt:1000000000000} ) )
store.dispatch( addExpense( {description:'COMPRAS EN TUCACAS', amount:307, note:'Comida', createdAt:1000500000000} ) )
store.dispatch( addExpense( {description:'COMPRAS EN MIAMI', amount:5000, note:'Ropa', createdAt:1500000000000} ) )


store.subscribe( ()  => {
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render( jsx , document.getElementById('app'));
