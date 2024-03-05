import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import User from './components/User';
import UserDemo from './components/UserDemo';

// const user1 = {  // create a objects
//   name:'ibn alam',
//   age: 23,
//   isRegistared: true,
//   lang: ["bangla", "english"],
// }




const users = [
  
  {
    id: 1,
    name: "ibnalam",
    email: "ibnalam6@gmail.com",
    age: 32,
    
  },
  
  {
    id: 2,
    name: "arafat",
    email: "ibnalam6@gmail.com",
    age: 33,
  
  }

]




function App() {
  return (
    <div className="App">
       <h2>User Manegement</h2>
        {/* <User name='ibn alam' age={23} isRegistared={true}/> */}
    {/* <User user={user1}/> */}

        {/* <User  
        name='ibn alam' 
        age={23} 
        isRegistared={true} 
        lang={["bangla", "english"]}/>
        <p></p> */}

          <UserDemo users={users}/>



    </div>
  );
}

export default App;
