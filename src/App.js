import React from 'react';
import HolaMundo from './comp/holaMundo/HolaMundo';
import './App.css';
import Suma from './comp/suma/suma';

function App() {
  const handleOnSumar = resultado => console.log(resultado);
  return (
    <div className="App">
      {/*<HolaMundo nombre={ 'Gonzalo' } onButtonClick={ () => console.log('padre') } />*/}
      {/*<HolaMundo nombre={ 'Pepe' }  />*/}

      <Suma initialValue1={ 3 } onSumar={ handleOnSumar } />
    </div>
  );
}

export default App;
