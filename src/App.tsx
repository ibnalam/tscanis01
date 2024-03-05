import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import User from './components/User';
// import UserDemo from './components/UserDemo';
import DataFatch from './components/DataFatch';
import Button from './components/Button';
import Post from './components/Post';
import Styleprops from './components/Styleprops';

// const user1 = {  // create a objects
//   name:'ibn alam',
//   age: 23,
//   isRegistared: true,
//   lang: ["bangla", "english"],
// }




// const users = [
  
//   {
//     id: 1,
//     name: "ibnalam",
//     email: "ibnalam6@gmail.com",
//     age: 32,
    
//   },
  
//   {
//     id: 2,
//     name: "arafat",
//     email: "ibnalam6@gmail.com",
//     age: 33,
  
//   }

// ]




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

          {/* <UserDemo users={users}/> */}  

          {/* <DataFatch status="error"/> */}

        {/* <Button>Click me </Button> */}

        {/* <Post/> */}
        <Styleprops mystyle={{color: "red"}}/>







    </div>
  );
}

export default App;
