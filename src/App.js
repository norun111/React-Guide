import React from 'react';
import './App.css';
import Clock from './Clock/Clock'
import Toggle from './Toggle/Toggle'
import LoginControl from './LoginControl/LoginControl'

// Welcome Component
function Welcome(props){

return <h1>Hello, {props.name}</h1>

}

// UserGreeting Component
function UserGreeting(props){

  return(
    <div>
      <h1>Welcome back!</h1>
    </div>
  )
}

// GuestGreeting Component
function GuestGreeting(props){

  return(
    <div>
      <h1>Please sign up!</h1>
    </div>
  )
}

function Greeting(props){

  const isLoggedIn = props.isLoggedIn;
  
  if(isLoggedIn) {

    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function ListItem(props) {
  return <li>{props.value}</li>
}

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) => 
  <ListItem
    key={number.toString()}
    value={number}
  />
  );
  return(

  <ul>{listItems}</ul>
  );
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      numbers: [1,2,3,4,5]
    }
  }

  state={
    date: new Date(),
    isToggle: false
  }

  handleClick(){
    console.log('click')
    console.log(this.state.isToggle)
    this.setState( state => ({
      isToggle: !state.isToggle
    }));
  }

  render(){
    let person = ''

    if(this.state.isToggle===true){
        person = <h1>Tomoya</h1>
    }

    return(
      <React.Fragment>
        <Welcome 
        name="sara"
        />
        <Clock/>
        <Toggle
          click={this.handleClick} // This binding is necessary to make `this` work in the callback
        />

       {person}

       <Greeting 
        isLoggedIn={false}
       />
       <LoginControl/>
       <NumberList 
        numbers={this.state.numbers}
       />
      </React.Fragment>
    )
  } 
}
export default App;

