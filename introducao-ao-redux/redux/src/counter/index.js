import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../features/counter/counterslice';

// Componente funcional Counter
const Counter = () => {
  // Obtém o valor do contador do estado global
  const count = useSelector((state) => state.counter.value);

  // Inicializa o despachante para enviar ações ao Redux
  const dispatch = useDispatch();

  return (
    <div>
      {/* Título do componente */}
      <div>Counter</div>
      
      {/* Exibe o valor atual do contador */}
      <h4>{count}</h4>

      {/* Botões para despachar ações */}
      <div>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Incrementar em lote</button>
      </div>
    </div>
  );
}

export default Counter;