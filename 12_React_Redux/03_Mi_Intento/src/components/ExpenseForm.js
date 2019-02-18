import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
    // LOCAL STATE PARA SEGUIR LOS CAMBIOS ANTES DE ENVIARLOS EN SUBMIT 
    state = {
        descripcion: "",
        note: "",
        amount: "",
        createdAt: moment(),
        calendarFocused : false
    }

    onDescriptionChange = (e) => {
        const descripcion = e.target.value
        this.setState( () => ({
            descripcion
        }))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState( () => ({
            note
        }))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        /* REGULAR EXPRESIONS - REGEX101.COM*/
        if (amount.match( /^\d*(\.\d{0,2})?$/ ))
            this.setState( () => ({
                amount
            }))
    }

    onDateChange = (createdAt) => {
        this.setState( () => ({createdAt}) )
    }

    onFocusChange = ({focused}) => {
        this.setState( () => ({calendarFocused:focused}) )
    }

    render(){
        return (
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="Insert descripcion"
                        autoFocus
                        value={this.state.descripcion}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker /** COMPONENTE DE 3RD PARTY */
                        /* PROPIEDADES OBLIGATORIAS */
                        date = {this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        /* PROPIEDADES OPCIONALES */
                        numberOfMonths={1}
                        isOutsideRange={ (day) => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}