import { useRef, useState, useEffect } from "react";

let Login = () => { 
  const mail = useRef(null);
  const contrasena = useRef(null);
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    fetch("https://trainning-rest-api.herokuapp.com/v1/users/login", requestOptions)
      .then(response => response.text())
      .then((datos) => setUsuario(datos.results))
      .catch(error => console.log('error', error));
  }, []);

  var myHeaders = new Headers();

  var raw = JSON.stringify({
    "username": "m@m.com", 
    "password": "m"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const loguearse = (e) => {
    e.preventDefault();
    console.log(mail.current.value);
    console.log(contrasena.current.value);
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
            <a href="registo.html">Registrarse</a>
          </form>
      </div>
    </div>
  );
}

export default Login