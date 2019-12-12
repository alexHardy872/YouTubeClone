import React from 'react';
import logo from './logo.svg';
import './App.css';
import YouTubeApp from './Components/YouTubeApp.js';



function App() {
  // console.log(process.env.REACT_APP_YOUTUBE_KEY);
 

  return (
    <div className="App">
      <YouTubeApp/>
    </div>
  );
}

export default App;
