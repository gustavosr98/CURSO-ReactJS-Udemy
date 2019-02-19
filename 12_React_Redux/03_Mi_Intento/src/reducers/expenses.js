// EXPENSE REDUCER
// ENCARGADO DE LA MANERA DE COMO SE MANEJAN LAS ACCIONES

const defaultState = []

export default (state = defaultState, action) => {
    switch (action.type) {
        case  'ADD_EXPENSE' : {
            return [...state, action.expense ]
        }
        case  'REMOVE_EXPENSE' : 
            return state.filter( ({ id }) => id !== action.id )
        case  'EDIT_EXPENSE' : 
            return state.map( (expense) => {
                if (expense.id === action.id)
                    return { 
                        id: expense.id,
                        ...action.updates
                    }
                else 
                    return expense
            })
        default :
            return state
    }
}