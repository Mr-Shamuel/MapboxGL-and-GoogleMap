
import { useState } from 'react';
import './App.css';
import Direction from './Components/Direction';
 

 
 

function App() {

  const [origin,setOrigin] =useState('');
  const [destination,setDestination] =useState('');
  return (
    <div className="App">
      <input type="text" placeholder="Start form" onBlur={e=>setOrigin(e.target.value)} />
      <input type="text" placeholder="Going to" onBlur={e=>setDestination(e.target.value)} />
    
<Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
