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

    let button
  if(this.state.isSignedIn===true){
    button = <LogoutButton
              click={() => this.handleLogout()}
            />

  }else{
    button = <LoginButton
              click={() => this.handleLogin()}
            />
   }

    return(
      <React.Fragment>
        {button}
      </React.Fragment>
    )
  }
}

export default LoginControl