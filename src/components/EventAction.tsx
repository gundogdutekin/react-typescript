import React, { useState } from 'react'

function EventAction() {
    const [value,setValue]=useState<string>("")
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>,id:number):void => {
        console.log(event)
        console.log(id)
    }
    const handleChanged=(event: React.ChangeEvent<HTMLInputElement>):void=>{
       console.log(event.target.value)
         setValue(event.target.value)
    }
    const handleSubmit=(event: React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault()
        console.log("Form Gönderildi")
    }
    let id:number=4;
  return (

    <div>
        <form onSubmit={(event)=>handleSubmit(event)} >
            <input value={value} type="text" onChange={(event)=>handleChanged(event)}/> 
            <button onClick={(event)=>{handleClick(event,id)}}>Ekle</button>
        </form>
    </div>
  )
}

export default EventAction