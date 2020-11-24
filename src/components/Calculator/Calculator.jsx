import React, { Component, Fragment } from 'react';

import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

import './Calculator.css';

class Calculator extends Component {
    constructor (props){
        super(props);

        // El estado son variables que son solo del componente, no pasan de padre a hijo ni son globales
        this.state = {
            result: '',
            num1: '',
            // Operator coge un símbolo entre ''
            operator: '',
            num2: ''
        }
    }
    
    render(){
        //Si ponemos esto aquí nos ahorramos poner abajo en Screen this.state.num1
        const {result, num1, num2, operator} = this.state;
        return(
            <Fragment>
                <main className="calculator"> 
                    <Screen 
                    result={result} 
                    arit={`${num1}${operator}${num2}`} />
                    <Keypad />
                </main>
            </Fragment>
        )
    }
}

export default Calculator;