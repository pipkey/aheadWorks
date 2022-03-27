import React, { useState } from 'react'

export default function Input({value,setValue}) {
 
    const [text, setText]=useState('')

    const ChangeVal=(e)=>{ 
        setValue(e.target.value);
        if(value){
            setText("add note...")
        }
    }

    return (

        <div>
            <p>{text}</p>
            <input
                placeholder='add text'
                onChange={ChangeVal}
            />
        </div>
  )
}
