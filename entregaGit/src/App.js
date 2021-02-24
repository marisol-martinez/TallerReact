import logo from './logo.svg';
import './App.css';
import './estilos.css';
import store from "./Store/store";
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Menu from './Componentes/Menu';
import Dashboard from './Componentes/Dashboard';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

store.dispatch({type: "PRUEBA"});

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Login/> */}
        {/* <Registro/> */}
        {/* <Menu/> */}
        {/* <Dashboard/> */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Registro} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
