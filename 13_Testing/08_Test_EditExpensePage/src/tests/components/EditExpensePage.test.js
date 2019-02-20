import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expensesFixture from '../fixtures/expenses'

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach( ()=> {
    editExpenseSpy = jest.fn()
    removeExpenseSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(
        <EditExpensePage 
            expense={expensesFixture[1]}
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={historySpy}
        />
    )
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesFixture[1])
    
    expect(historySpy.push).toHaveBeenLastCalledWith("/")
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expensesFixture[1].id, expensesFixture[1])
})

test('should handle deleteExpense', () => {
    wrapper.find('button').simulate('click')
    
    expect(historySpy.push).toHaveBeenLastCalledWith("/")
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({
        id: expensesFixture[1].id
    })
})