import React from 'react'


// string , number , void , null , boolean 
//  user defined types -->  object, array, enum, union, custom type



type UserProps = {
    user: {
        name: string;
        age: number;
        isRegistared: boolean;
        lang: string[];
    }

    }

const User = ({ user }: UserProps) =>  {
  return (
    <div>
         <h2>{user.name}</h2>
        <p>{user.age} years old</p>
        {
            user.isRegistared 
            ?
            <p>Registared User</p>
            :
            <p>Not Registared</p>   
        }
        <p>
            speaks:
            {user.lang.map((language,index)=> {
                return <span key={index}> {language} </span>
            })}
        </p>
    </div>
  )
}

export default User