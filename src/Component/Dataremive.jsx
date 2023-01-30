import React, { Component } from 'react'

export default class Dataremive extends Component {
  constructor(props){
    super(props);
    this.handleLoginClick=this.handleLoginClick.bind(this);
    this.handlelogoutClick=this.handlelogoutClick.bind(this);
    this.state={isLoggidIn:false};
  }
  handleLoginClick(){
    this.setState({isLoggidIn:true});
  }
  handlelogoutClick(){
    this.setState({isLoggidIn:false})
  }
  render() {
    const isLoggedIn=this.state.isLoggidIn;
    let button;
    if(isLoggedIn){
      button=<LogoutButton onClick={this.handlelogoutClick}/>
    }
    else{
      button=<LoginButton onClick={this.handleLoginClick}/>
    }

    return (
      <div>
          <Greeitng isLoggidIn={isLoggedIn}/>
          {button}
      </div>
    )
  }
}

function LoginButton(props){
  return(
    <button onClick={props.onClick} >Login</button>
  );
}
function LogoutButton(props){
  return(
    <button onClick={props.onClick}>Logout</button>
  )
}
function UserGreeting(props){
  return <h2>Welcome back!</h2>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.hhhh</h1>;
}
function Greeitng(props) {
  const isLoggidIn=props.isLoggidIn;
  if(isLoggidIn){
    return<UserGreeting/>
    
  }
  return <GuestGreeting/>
}
