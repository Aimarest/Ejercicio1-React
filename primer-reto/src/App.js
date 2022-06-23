import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContactComponent from './components/pure/contact';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
        <ContactComponent/>
      </header>
    </div>
  );
}

export default App;
