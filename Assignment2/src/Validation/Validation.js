import React from 'react';

const validation = (props) => {
    let lengthMessage = 'Text long Enough!';
    if (props.inputLength<5){
        lengthMessage = 'Text is too Short! ';
    }
return(
    <div><p>{lengthMessage}</p></div>
);
} ;

export default validation;