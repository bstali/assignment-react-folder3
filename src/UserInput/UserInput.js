import React from 'react';

const userInput = (props) => {
   const inputStyle={
         border: '2px solid blue',
         textAlign: 'center',
         boxShadow: '1px 1px 10px lightblue'
   }

   return <input type="text" 
   style={inputStyle}
   onChange={props.changed}
   value={props.currentName}/>
}
export default userInput;