import React from 'react';

const CalcButton = (props) => {
    return (
        <button className={"btn " + props.color} id={props.btnID}>{props.display}</button>
    );
};

export default CalcButton;