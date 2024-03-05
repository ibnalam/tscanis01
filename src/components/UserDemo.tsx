import React from 'react'


type UserdemoProps = {
    users: {
        id: number,
        name: string,
        email: string,
        age: number
    }[]
}


const UserDemo = ({users}: UserdemoProps) => {

  return (
    <div>
        {users.map((user) => {
            const {id, name, age, email} = user  // distructure kore nilam
            return (
            <div key={id}>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{age}</p>
            </div>
            )
            
        })}
    </div>
  )
}

export default UserDemo