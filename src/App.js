import React, {useState} from 'react';
import './App.css';
import Start from './components/Start';
import Countdown from './components/Countdown';
import Quiz from './components/QuizMain';

function App() {
  const [start, setStart] = useState(false);

  return (
    
    <div className="App">

      { start ? <Quiz /> : <Start props={setStart} />} 
      
    
    <Countdown /></div>
  );
}

export default App;
