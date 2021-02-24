import logo from './logo.svg';
import './App.css';
import './estilos.css';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Menu from './Componentes/Menu';
import Dashboard from './Componentes/Dashboard';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let initialState = {
  nombreAplicacion: "Tareas",
  idTareaActual: 3,
  tareas: [
    {id:1, nombre:"Tarea1"},
    {id:2, nombre:"Tarea2"}
  ]
}

let reducer = (state = initialState, action) => {
  console.log(state,action);
  switch(action.type){
    case "PRUEBA":
      return {...state, idTareaActual: state.idTareaActual +1};
    case "AgregarEntrenamiento":
      return state;
    case "EliminarEntrenamiento":
      return state;
    default: 
      return state;
  }
  
}

let store = createStore(reducer);

store.dispatch({type: "PRUEBA"});

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          {/* <Login/> */}
          <Registro/>
          {/* <Menu/> */}
          {/* <Dashboard/> */}
      </div>
    </Provider>
  );
}

export default App;
