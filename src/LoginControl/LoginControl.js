import React from "react";

function LoginButton(props) {

  return(
    <button onClick={props.onClick}/>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


class LoginControl extends React.Component {

  constructor(props){
    super(props)
  }
  

  render(){


    return(

    )
  }
}

export default LoginControl