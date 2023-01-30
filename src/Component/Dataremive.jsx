import React from 'react'

function Dataremive() {
  
  const [login, setlogin] = React.useState(false);


 
  
  const checkLogin=(e)=>{
    if(e.target.value.length>8)
    {
      setlogin(true);
    }
  }
  let a=false;
  return (
    <div>
      <div>
        <label htmlFor="name">UserNames</label>
        <input onFocus={true} type="text" className='border-2 ' />
        <label htmlFor="password">Password</label>
        <input type="password"  onChange={checkLogin} className='border-2' />
        <button  className='border-2' onClick={a=login}>Log in</button>
      </div>
      <Greeitng isLoggidIn={a}/>
    </div>
  )
}

function UserGreeting(props){
  return <h2>Welcome back!</h2>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeitng(props) {
  const isLoggidIn=props.isLoggidIn;
  if(isLoggidIn){
    return<UserGreeting/>
    
  }
  return <GuestGreeting/>
}
export default Dataremive