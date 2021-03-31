import { render } from '@testing-library/react';
import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
        <p>userName: {props.userName}</p>
        <p>This is working</p>   
        </div>
    )   
}
export default userOutput;