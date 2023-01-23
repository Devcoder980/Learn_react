import React,{useState} from 'react'
import { useEffect } from 'react'
function dates(){
    
    return(new Date().toLocaleTimeString())
}


// console.log(dates.Date())
function RevistionDay() {

    const [first, setfirst] = useState('')
    useEffect(() => {
        setInterval(() => {
            setfirst(dates())
        }, 1000);
    
})
  return (
    <div>
        <h1>Hello World</h1>
        {/* <h2>It is {new Date().toLocaleTimeString()}</h2> */}
        <p className="text-center bg-green-500 text-3xl">{first}</p>
        
    </div>
  )
}
// setInterval(RevistionDay(),1000);

export default RevistionDay