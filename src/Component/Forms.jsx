import React from 'react'

function Forms() {
    let content;
    let isLoggidIn=false;
    if(isLoggidIn){
        content=<h1>Hello Wrold</h1>;;
    }
    else{
        content=<h1>Welcome Dev</h1>;
    }
    
  return (
    <div>
        {content}
    <div>
    {
            isLoggidIn ? (
                content
            ):(
                content
            )
        }prabh
    </div>
        <p>
            {isLoggidIn && content}
        </p>
    </div>
  )
}

export default Forms