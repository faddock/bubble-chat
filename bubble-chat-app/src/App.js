//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';




function App() {
  //input constant 
  const[input, setInput] = useState('');
  //stores messages in an array which has default messages.
  const [messages, setMessages] = useState(['Welcome to Bubbles','Suyash']);
  //send Message event
  const sendMessage = (event) => {
    event.preventDefault();     //stops form submit refreshing page
    setMessages([...messages, input]);      //...messages allows previous messages to remain.
    setInput('');     //clears the input for new.
  }
  console.log(messages);
  
  
  
  return (
    
    <div className="App">
      <h1>Hello Bubbles users!</h1>
    <form> 
      <Input placeholder="" inputProps={{ 'aria-label': 'description' }} value={input} onChange={event => setInput(event.target.value)} />
      <Button disabled={!input.trim()} variant='contained' type="submit" onClick={sendMessage}>my button</Button>
    </form>   
     {/*messages themsleves*/}
     {messages.map(message => (
       <p>{message}</p>
     ))} 

    </div>
    
  );
  
}

export default App;

/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/  
