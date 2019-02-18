import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
    // LOCAL STATE PARA SEGUIR LOS CAMBIOS ANTES DE ENVIARLOS EN SUBMIT 
    state = {
        description: "",
        note: "",
        amount: "",
        createdAt: moment(),
        calendarFocused : false,
        error: ''
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState( () => ({
            description
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
        if (!amount || amount.match( /^\d{1,}(\.\d{0,2})?$/ ))
            this.setState( () => ({
                amount
            }))
    }

    onDateChange = (createdAt) => {
        if (createdAt)
            this.setState( () => ({createdAt}) )
    }

    onFocusChange = ({focused}) => {
        this.setState( () => ({calendarFocused:focused}) )
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.amount || !this.state.description) {
            this.setState(()=>({error:"Please provide description and amount!."}))
        } else {
            this.setState(()=>({error:""}))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) *100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
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