import logo from './logo.svg';
import './App.css';
//import './estilos.css';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login/> */}
        <Registro/>
      </header>
    </div>
  );
}

export default App;
