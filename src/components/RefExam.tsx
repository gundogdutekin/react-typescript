import React,{useRef,useEffect} from 'react'

type inputRefType = HTMLInputElement | null;

function RefExam() {
    const inputRef = useRef<inputRefType>(null);
   
    useEffect(() => {      
      //inputRef.current?.focus();  
      inputRef.current?.setAttribute("placeholder","Adınızı Giriniz")
    }, [])
  return (
    <div>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default RefExam