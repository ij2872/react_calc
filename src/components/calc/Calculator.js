import React, { Component } from 'react';
import Result from './Result';

import './calc.css'
class componentName extends Component {
    constructor(props){
        super(props);
        this.state ={
            displayValue: "1241241241",
            prevValue: ""
        };

    }

    clearDisplay(){
        this.setState({displayValue: ""});
    }
    
    addDigit(digit){
        const {displayValue} = this.state;
        if(displayValue.length < 9){
            this.setState({displayValue: displayValue + digit});
        }
        
    }

    render() {
        return (
            <div className="calculator">
                <Result result={this.state.displayValue}/>
                
                <button className="btn grey" id="ac" onClick={() => this.clearDisplay()}>AC</button>
                <button className="btn grey" id="pn" onClick={() => this.addDigit}>+/-</button>
                <button className="btn grey" id="percent" onClick={() => this.addDigit}>%</button>                
                <button className="btn orange" id="divide" onClick={() => this.addDigit}>/</button>

                <button className="btn" id="ac" onClick={() => this.addDigit(7)}>7</button>
                <button className="btn" id="pn" onClick={() => this.addDigit(8)}>8</button>
                <button className="btn" id="percent" onClick={() => this.addDigit(9)}>9</button>                
                <button className="btn orange">x</button>
 
                <button className="btn" onClick={() => this.addDigit(4)}>4</button>
                <button className="btn" onClick={() => this.addDigit(5)}>5</button>
                <button className="btn" onClick={() => this.addDigit(6)}>6</button>
                <button className="btn orange">-</button>
                
                <button className="btn" onClick={() => this.addDigit(1)}>1</button>
                <button className="btn" onClick={() => this.addDigit(2)}>2</button>
                <button className="btn" onClick={() => this.addDigit(3)}>3</button>
                <button className="btn orange">+</button>

                <button className="btn" id="zero" onClick={() => this.addDigit(0)}>0</button>
                <button className="btn" id="decimal" >.</button>
                <button className="btn orange" id="equals" >=</button>

            </div>
        );
    }
}

export default componentName;