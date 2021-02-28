import logo from './logo.svg';
import './App.css';
import './estilos.css';
import store from "./Store/store";
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Dashboard from './Componentes/Dashboard';
import AgregarEntrenamiento from './Componentes/AgregarEntrenamiento';
import Menu from './Componentes/Menu';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

function Links() {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/dashboard/agregar" component={AgregarEntrenamiento} /> */}
      </Switch>

      {background && <Route path="/dashboard/agregar" children={<AgregarEntrenamiento />} />}
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Links />
      </Router>
    </Provider>
  );
}

export default App;
