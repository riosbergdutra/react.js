import './App.css';
import Welcome from './components/welcome';
import Reverse from './components/reverse';

function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
      <Welcome nome = "ivo" sobrenome = "soares"/>
      <Welcome nome = "maria"/>
      <Welcome nome = "joão" sobrenome='santos'/>
      <Welcome/>
      {/* <Reverse texto = "ola"/>
      <Reverse texto = "meu texto"/> */}

      <Reverse>
        meu texto
      </Reverse>
    </div>
  );
}

export default App;
