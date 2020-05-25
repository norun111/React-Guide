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
    this.setState({
      isSignedIn: !this.state.isSignedIn
    });
  }

  handleLogout(){

    console.log("logout")
    this.setState({
      isSignedIn: !this.state.isSignedIn
    });
  }
  

  render(){

    return(
      <React.Fragment>

        {this.state.isSignedIn
         ? <LogoutButton click={() => this.handleLogout()} />
         : <LoginButton click={() => this.handleLogin()} />
        }
        
      </React.Fragment>
    )
  }
}

export default LoginControl