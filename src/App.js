import React from 'react';
import './App.css';
import Clock from './Clock/Clock'


function Welcome(props){

return <h1>Hello, {props.name}</h1>

}

class App extends React.Component {

  state={
    date: new Date()
  }

  render(){

    return(
      <React.Fragment>
        <Welcome 
        name="sara"
        />
        <Clock/>
       
      </React.Fragment>
    )
  } 
}
export default App;
