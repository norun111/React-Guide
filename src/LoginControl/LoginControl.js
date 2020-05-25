import React from "react";

function LoginButton(props) {

  return(
    <button onClick={props.click}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.click}>
      Logout
    </button>
  );
}


class LoginControl extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      isSignedIn: false
    }
  }

  handleLogin(){

    console.log("login")
    this.setState( state => ({
      isSignedIn: !this.state.isSignedIn
    }));
  }

  handleLogout(){

    console.log("logout")
    this.setState( state => ({
      isSignedIn: state.isSignedIn
    }));
  }
  

  render(){


    return(
      <React.Fragment>
        <LoginButton
          click={() => this.handleLogin()}
        />
        <LogoutButton
          click={() => this.handleLogout()}
        />
      </React.Fragment>
    )
  }
}

export default LoginControl