import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// ESTO ES LO QUE VAMOS A PROBAR 
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    // SE AGREGO EL RETURN PARA PODER HACER THEN() ENCADENADOS
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};