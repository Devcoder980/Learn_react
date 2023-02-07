import { useReducer } from "react";

const reducer=(state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return {count:state.count+2,showText:state.showText};
    case "toggleShowText":
      return{count:state.count,showText:!state.showText};
    default:
      return state;
  }
};

const defaultState={
  count:0,
  showText:true,
};

const UserReducer=()=>{
  const [state,dispatch]=useReducer(reducer,defaultState);


  return(
    <>
    <h1>Welcome</h1>
    <button
    onClick={()=>{
      dispatch({type:"INCREMENT"});
      dispatch({type:"toggleShowText"});
    }}
    >Click here</button>
    {state.showText && <h2>This is a text</h2>}
    </>
  )
}
export default UserReducer