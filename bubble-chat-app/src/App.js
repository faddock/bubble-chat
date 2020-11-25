//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {Button, Input} from '@material-ui/core';
import Message from './Message';




function App() {
  //input constant 
  const[input, setInput] = useState('');
  //stores messages in an array which has default messages.
  const [messages, setMessages] = useState([
    {username: 'suyash', text: 'Welcome to Bubbles'},
    {username: 'vijay', text: 'suyash is cool'}
  ]);
  //set username.
  const [username, setUsername] = useState('');
  
  //useEffect - runs code based on a condition
  //useState - variable in react



  useEffect(() => {
    //run code here..
    //if [] is blank, code runs only once when app loads
    setUsername(prompt('Please name'))

  }, [] ) // condition
  
  //send Message event
  const sendMessage = (event) => {
    event.preventDefault();     //stops form submit refreshing page
    setMessages([...messages, {username: username, text: input}
    ]);      //...messages allows previous messages to remain.
    setInput('');     //clears the input for new.
  }
  
  
  
  
  return (
    
    <div className="App">
      <h1>Hello Bubbles users!</h1>
      <h2> hi {username}</h2>
    <form> 
      <Input placeholder="" inputProps={{ 'aria-label': 'description' }} value={input} onChange={event => setInput(event.target.value)} />
      <Button disabled={!input.trim()} variant='contained' type="submit" onClick={sendMessage}>my button</Button>
    </form>   
    
     {/*messages themsleves*/}

     {//maps messages to an array in Message.js.
     messages.map(message => (
       <Message username={username} message={message}/>
       //username is the current instance, message is the list of previous usernames and texts.
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
