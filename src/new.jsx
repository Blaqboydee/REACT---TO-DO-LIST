import React from 'react'
import { useState } from 'react'

const New = () => {

    const [inputval, setinputval] = useState('')
    const [color, setcolor] = useState(false)
    const [passwordtype, setpasswordtype] = useState(false)


    const check = () =>{
        console.log(inputval) 
        setcolor(prev => !prev)
    }

    const showPassword = () => {
         setpasswordtype(prev => !prev)
    }

  return (
    <div>
    <div className= {color? "text-danger" : "text-primary"}>new</div>
    <input type="text" onChange={(e) => {setinputval(e.target.value)}} />
    <button onClick={check}>Check Val</button>
    <br />
    <input type= {passwordtype? "text" : "password"} />
   <button onClick={showPassword}>Show Password</button>
    </div>
  )
}


export default New