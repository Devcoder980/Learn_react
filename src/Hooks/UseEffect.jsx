import  {useEffect,useState} from 'react'


const UseEffect = () => {
    const  [count, setCount] = useState(0);
    const [empty, setEmpty] = useState(0);
    const [calculation,setCalculation]=useState(0);

    useEffect(()=>{
        console.log("runalways");
        setCalculation(()=>count*2);
    },[count]);

    // useEffect(()=>{
    //     // 1. No dependency passed:
    //     //Runs on every render
    //     setTimeout(()=>{
    //          setCount((count)=>count+1);
    //     },1000);
    // });
    
    // useEffect(() => {
    //     // 2. An empty array:
    //     //Runs only on the first render
    //     setTimeout(()=>{
    //         setEmpty((empty)=>empty+1);
    //     },1000)
    //   }, []);

    // useEffect(()=>{
    //     let  timer=setTimeout(()=>{
    //         setCount(()=>count+1);
    //     },1000)
    //     return ()=>clearTimeout(timer);
    // },[]);

  return (
    <>
        <p>Count:{count}</p>
        <button onClick={(()=>setCount((c)=>c+1))}>+</button>
        <p>Calculation:{calculation}</p>
    
    </>
  )
}

export default UseEffect