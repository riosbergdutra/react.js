import './App.css';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <h1>Olá</h1>
      <Welcome nome = "ivo" sobrenome = "soares"/>
      <Welcome nome = "maria"/>
      <Welcome nome = "joão" sobrenome='santos'/>
      <Welcome/>
    </div>
  );
}

export default App;
