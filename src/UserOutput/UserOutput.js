import { render } from '@testing-library/react';
import React from 'react';

const userOutput = (props) => {
    return (
        <div>
         <p>userName: {props.userName}</p>
        <p>This is working</p>   
        </div>
    )   
}
export default userOutput;