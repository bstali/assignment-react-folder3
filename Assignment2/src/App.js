import { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state ={
    userInput: ''
  }
  inputChange = (event) => {
    this.setState({userInput: event.target.value})
  }
  deleteChar = (index) => {
    let text=this.state.userInput.split('');
    text.splice(index, 1);
    text=text.join('');
    this.setState({userInput: text})
  }
  render(){ 
    const charList = this.state.userInput.split('').map((ch,index) => {
      return <Char 
      character={ch} 
      key={index}
      clicked={() => this.deleteChar(index)}/>
    })
  return (
    <div className='App'>
    <input type='text' 
    onChange={this.inputChange} 
    value={this.state.userInput}/>
    <p>{this.state.userInput}</p>
    <Validation inputLength={this.state.userInput.length}/>
    {charList }
    </div>
  );
}}

export default App;
