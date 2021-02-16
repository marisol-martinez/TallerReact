import logo from './logo.svg';
import './App.css';
//import './estilos.css';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Menu from './Componentes/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login/>
        {/* <Registro/> */}
        {/* <Menu/> */}
      </header>
    </div>
  );
}

export default App;
