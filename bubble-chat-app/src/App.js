//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {FormControl, IconButton, Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() { 
  //input and set.
  const[input, setInput] = useState('');
  //messages and set - stores in an array.
  const [messages, setMessages] = useState([]);
  //username and set.
  const [username, setUsername] = useState('');

  /*
  - useState: variable in react
  - useEffect: runs code based on a condition; can have multiple
      note - if condition [] is blank, code runs only once when app loads
  >> useEffect(() => {<code>}, [] )
  */

  //asks name
  useEffect(() => {setUsername(prompt('Please name'))}, [] ) 

  //Listener - gets collections and documents from database.
  useEffect(() => {db
    .collection('messages1')
    .orderBy('timestamp','asc')
    .onSnapshot(snapshot =>  {      //snapshot is the entire list. 
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()}))) 
    })
  }, [] )
  
  //send Message event.
  const sendMessage = (event) => {
    event.preventDefault();     //stops form submit from refreshing page
    
    db.collection('messages1').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');              //clears the input for new

    /*
    setMessages([...messages, {username: username, message: input}]);      
    ...messages allows previous messages to remain.
    */
  }
  
  return (
    <div className="App">
      <h1>XYZ's Bubble Chat</h1>
      <h2> Welcome {username}!</h2>
    <form className="app__form"> 
      <FormControl className="app__formControl">
      <Input className="app__input" placeholder="" inputProps={{ 'aria-label': 'description' }} value={input} onChange={event => setInput(event.target.value)} />
      <IconButton className="app__iconButton" disabled={!input.trim()} variant='contained' type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>
        
        
      </FormControl>  
    </form>   
    
    <FlipMove>
      {//maps messages to an array in Message.js.
        //key helps with rendering only the new message.
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message}/>   //username is the current instance, message is the list of previous usernames and texts.
     ))}
     </FlipMove>
     
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
