import { useRef, useState, useEffect } from "react";
import {Link,useHistory} from "react-router-dom";

let Login = ({logged, dispatch}) => { 
  const mail = useRef(null);
  const contrasena = useRef(null);
  const [usuario, setUsuario] = useState([]);

  // useEffect(() => {
    // }, []);

    let history = useHistory();
    
    let loguearse = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();

    var raw = JSON.stringify({
      "username": mail.current.value, 
      "password": contrasena.current.value
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
      fetch("https://trainning-rest-api.herokuapp.com/v1/users/login", requestOptions)
        .then(response => response.text())
        .then((datos) => {
          setUsuario(datos);
          //no funciona dispatch
          //dispatch({type:"LOGUEAR"});
          localStorage.setItem('usuarioLogueado', datos);
          history.push("/dashboard");
        })
        .catch(error => console.log('error', error));
  }

  return (
    <div id="registro">
      <div id="contenedorForm">
          <h1>Inicio de sesión</h1>
          <form onSubmit={loguearse}>
            <div>
              <input type="text" id="nombre" autoComplete="off" required ref={mail}/>
              <label htmlFor="nombre">Usuario</label>
              
            </div>
            <div>
              <input type="password" id="pass" autoComplete="off" required ref={contrasena}/>
              <label htmlFor="pass">Contraseña</label>
              
            </div>
            <input type="submit" value="Iniciar sesión"/>
            <Link to="/Registro">Registrarse</Link>
            <Link to="/Dashboard">Dashboard</Link>
          </form>
      </div>
    </div>
  );
}

export default Login