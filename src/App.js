import React from 'react';
import './App.css';
import Buscador from './componetes/Buscador'
import {ImagesContextProvider} from './context/ImagesContext';

function App() {
  return (
    <div className="App">
      <ImagesContextProvider>
          <Buscador/>
      </ImagesContextProvider>
    </div>
  );
}

export default App;
