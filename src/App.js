import { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    username: 'Baaasit',
  }

  nameChange = (event) => {
    this.setState({username: event.target.value})
  }
  render(){ 
  return (
    <div className="App">
     <UserInput changed={this.nameChange}/>
     <UserOutput userName={this.state.username}/>
     <UserOutput userName={this.state.username} />
     <UserOutput userName="Ahmad"/>
    </div>
  );
}}

export default App;
