import React from 'react';
import './App.css';
import Clock from './Clock/Clock'
import Toggle from './Toggle/Toggle'


function Welcome(props){

return <h1>Hello, {props.name}</h1>

}

class App extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
      </React.Fragment>
    )
  } 
}
export default App;
