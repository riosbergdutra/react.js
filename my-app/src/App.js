import './App.css';
import Welcome from './components/welcome';
import Reverse from './components/Reverse/reverse';
import Todolist from './components/todolist/todolist';

function App() {
  return (
    <div className="App">
      <Welcome nome = "ivo" sobrenome = "soares"/>
      <div className='reverse'>
      <p className='app-text'>Os textos abaixo são criados pelo componente reverse</p>
      <Reverse>
        meu texto
      </Reverse>

      <Reverse>
        meu texto que deve ser invertido
      </Reverse>
      </div>
      <Todolist/>
    </div>
  );
}

export default App;
