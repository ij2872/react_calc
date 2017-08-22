import React, { Component } from 'react';
import Result from './Result';

import './calc.css'
class componentName extends Component {
    constructor(props){
        super(props);
        this.state ={
            displayValue: "0",
            prevValue: "",
            operatorUsed: "",
            tempValue: ""
        };

    }

    // Clears current and previous value
    clearDisplay(){
        this.setState({
            displayValue: "0",
            prevValue: "",
            tempValue: ""
        });
    }
    
    addDigit(digit){
        const {displayValue} = this.state;
        // Limit amount of input to displayValue
        if(displayValue.length < 9){
            this.setState({
                displayValue: (displayValue === "0") ? digit.toString() : displayValue + digit});
        }
        
    }

    addDecimal(){
        const {displayValue} = this.state;

        // If no decimal found
        if(displayValue.indexOf(".") == -1){
            this.setState({displayValue: displayValue + "."});
        }
    }
    changeSign(){
        const {displayValue} = this.state;

        // Check if displayValue is a negative number, if not make negative
        this.setState({
            displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
        });
    }

    toPercent(){
        const {displayValue} = this.state;
        const value = parseFloat(displayValue);

        if(displayValue != '0'){
            this.setState({
                displayValue: String(value/100)
            });
        }
    }

    operation(operator){
        const {displayValue} = this.state;

        if(displayValue != '0'){
            this.setState({
                prevValue: displayValue,
                displayValue: "",
                operatorUsed: operator
            });
            
        }
    }

    calculate(){
        const {operatorUsed, prevValue, displayValue, tempValue} = this.state;

        // perform operation only if there is a previous value and an operator to perform
        if(operatorUsed && prevValue){
            switch(operatorUsed){
                case "+":
                    this.setState({
                        displayValue: tempValue ? String(parseFloat(displayValue) + parseFloat(tempValue)) : String(parseFloat(prevValue) + parseFloat(displayValue)),
                        tempValue: tempValue ? tempValue : displayValue
                    });
                    break;
                case "-":
                    this.setState({
                        displayValue: tempValue ? String(parseFloat(displayValue) - parseFloat(tempValue)) : String(parseFloat(prevValue) - parseFloat(displayValue)),
                        tempValue: tempValue ? tempValue : displayValue
                    });
                    break;
                case "*":
                    this.setState({
                        displayValue: tempValue ? String(parseFloat(displayValue) * parseFloat(tempValue)) : String(parseFloat(prevValue) * parseFloat(displayValue)),
                        tempValue: tempValue ? tempValue : displayValue
                    });
                    break;
                case "/":
                    this.setState({
                        displayValue: tempValue ? String(parseFloat(displayValue) / parseFloat(tempValue)) : String(parseFloat(prevValue) / parseFloat(displayValue)),
                        tempValue: tempValue ? tempValue : displayValue
                    });
                    break;
                
            }
        }
    }

    render() {
        return (
            <div className="calculator">
                <Result result={this.state.displayValue}/>
                
                <button className="btn grey" id="ac" onClick={() => this.clearDisplay()}>AC</button>
                <button className="btn grey" id="pn" onClick={() => this.changeSign()}>+/-</button>
                <button className="btn grey" id="percent" onClick={() => this.toPercent()}>%</button>                
                <button className="btn orange" id="divide" onClick={() => this.operation("/")}>/</button>

                <button className="btn" id="ac" onClick={() => this.addDigit(7)}>7</button>
                <button className="btn" id="pn" onClick={() => this.addDigit(8)}>8</button>
                <button className="btn" id="percent" onClick={() => this.addDigit(9)}>9</button>                
                <button className="btn orange" onClick={() => this.operation("*")} >x</button>
 
                <button className="btn" onClick={() => this.addDigit(4)}>4</button>
                <button className="btn" onClick={() => this.addDigit(5)}>5</button>
                <button className="btn" onClick={() => this.addDigit(6)}>6</button>
                <button className="btn orange" onClick={() => this.operation("-")}>-</button>
                
                <button className="btn" onClick={() => this.addDigit(1)}>1</button>
                <button className="btn" onClick={() => this.addDigit(2)}>2</button>
                <button className="btn" onClick={() => this.addDigit(3)}>3</button>
                <button className="btn orange" onClick={() => this.operation("+")}>+</button>

                <button className="btn" id="zero" onClick={() => this.addDigit(0)}>0</button>
                <button className="btn" id="decimal" onClick={() => this.addDecimal()}>.</button>
                <button className="btn orange" id="equals" onClick={() => this.calculate()}>=</button>

            </div>
        );
    }
}

export default componentName;