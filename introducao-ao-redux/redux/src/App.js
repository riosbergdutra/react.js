import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Counter from './counter';

function App() {
  // Obtém o valor do contador do estado global
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      {/* Título */}
      <h2>{count}</h2>
      
      {/* Componente do contador */}
      <Counter />
    </div>
  );
}

export default App;