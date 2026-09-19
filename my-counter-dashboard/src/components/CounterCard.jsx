import React,{useState} from 'react';

function CounterCard() {
    const[counter , setCounter]=useState(0);
    const[text,setText]=useState("");
    const[isVisible,setIsVisible]=useState(false);
    const[isLoggedIn,setIsLoggedIn]=useState(false);

    return (
<div>
    <h2>{counter}</h2>
        <button onClick={()=> setCounter(counter +1)} >Counter</button>

        <button onClick={()=> setIsVisible(!isVisible)}>
            {isVisible ? "Hide":"Show"}</button>
            <button onClick={()=> setCounter(counter-1)}>Decrease</button>
            <button onClick={()=>setCounter(0)}>Reset</button>


      <input value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="Enter text you wanna type "/>
         <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Reset</button>


</div>
    );


};
export default CounterCard;