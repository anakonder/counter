import { Component } from "react"
import css from './Counter.module.css'

export class Counter extends Component {
    state = {
        value: 0,
    }

   handleChangeIncr = (e) => {
        this.setState((prevState) => {
            return {value: prevState.value += 1}
        }) 
    }

    handleChangeDecr = (e) => {
        this.setState((prevState) => {
            return {value: prevState.value -= 1}
        }) 
    }

    HandleChangeValue = (e) => { 
        const newValue = prompt("enter your new value")
        if (newValue !== null) { 
            this.setState(()=>{return {value: parseInt(newValue, 10)}})
        }
    }

    render() {
    return (
        <div>
            <h1>Counter</h1>
            <p>{this.state.value}</p>
            <button className={css.btn} type="button" onClick={this.handleChangeIncr}>+</button>
            <button className={css.btn} type="button" onClick={this.handleChangeDecr}>-</button>
            <button className={css.btn} type="button" onClick={this.HandleChangeValue}>Enter value counter</button>
        </div>
    )
    }
}