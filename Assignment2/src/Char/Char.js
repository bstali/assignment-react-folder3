import React from 'react';

const char = (props) =>{
    const styleChar ={
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        textAlign: 'center',
        border: '1px solid black', 
    }
    return(
        <div 
        onClick={props.clicked}
        style={styleChar}>
        {props.character}
        </div>
    )
}
export default char;