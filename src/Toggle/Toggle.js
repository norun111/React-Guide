import React from 'react';

class Toggle extends React.Component {

  render(){

    return(
      <button onClick={this.props.click} />
    )
  }
}

export default Toggle;