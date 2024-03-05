import React from 'react'


// string , number , void , null , boolean 
//  user defined types -->  object, array, enum, union, custom type



type UserProps = {
    name: string;
     age:number;
      isRegistared:boolean;
      lang: string[]
    }

const User = ({name, age, isRegistared, lang}: UserProps) =>  {
  return (
    <div>
         <h2>{name}</h2>
        <p>{age} years old</p>
        {
            isRegistared 
            ?
            <p>Registared User</p>
            :
            <p>Not Registared</p>
        }
        <p>
            speaks:
            {lang.map((language,index)=> {
                return <span key={index}>{language} </span>
            })}
        </p>
    </div>
  )
}

export default User