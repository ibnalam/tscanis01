import React from 'react'
import { useState } from 'react'

const Newuser = () => {
    const [userName, setuserName] = useState("")
    const handleuserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setuserName(event.target.value)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(userName);
        
    }

  return (
    <div>
        <h2>Create New User</h2>
        <input type="text" placeholder='Enter User name' value={userName} onChange={handleuserNameChange}/>
        <button onClick={handleClick}>
          ShowName
        </button>
        
    </div>
  )
}

export default Newuser