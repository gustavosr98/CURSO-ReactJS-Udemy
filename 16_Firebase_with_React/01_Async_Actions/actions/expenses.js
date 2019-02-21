import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
}); 

export const startAddExpense = (expenseData = {}) => {
  // ESTO RETORNA UNA F(X) - FUNCION
  return (dispatch) => {
    // DESTRUCTURING Y VALORES POR DEFECTO
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    //  refArray.push( elemento ).then ( despacha la accion al redux store )
    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
}; 