import React from 'react'
import { useState,useEffect } from 'react'
const TextChang = () => {
    const text = ["Hi, I'm Subhankar Kanrar.Welcome to my Portfolio"];
    const [currText, setCurrText] = useState("");
    const [endValue, setEndValue] = useState(true);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
       const intervalId = setInterval(()=> {
        setCurrText(text[index].substring(0,endValue));
        if(isForward){
            setEndValue((prev)=>prev+1);
        }else{
            setEndValue((prev)=>prev-1);
        }
        if (endValue > text[index].length+10) {
            setIsForward(false);
        }
        if(endValue < 2.1){
            setIsForward(true)
            setIndex((prev)=>prev & text.length);
        }
       },100);
       return ()=>clearInterval(intervalId);
    }, [endValue,isForward,index,text]);
    
  return (
    <div className='transition ease duration-450'>
      <h3>{currText}</h3>
    </div>
  )
}

export default TextChang
