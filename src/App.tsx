import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
       <h2>User Manegement</h2>
        {/* <User name='ibn alam' age={23} isRegistared={true}/> */}


        <User  name='ibn alam' age={23} isRegistared={true} lang={["bangla", "english"]}/>
        <p></p>
    </div>
  );
}

export default App;
