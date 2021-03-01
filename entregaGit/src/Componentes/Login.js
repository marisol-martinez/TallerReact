import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import logo from './../logo.png';

let Login = () => {
  const mail = useRef(null);
  const contrasena = useRef(null);
  let history = useHistory();

  const [incorrecto, setIncorrecto] = useState("");

  let loguearse = (e) => {
    e.preventDefault();
    setIncorrecto("");
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
        let datoJson = JSON.parse(datos);
        if (datoJson.status != null && datoJson.status == 404) {
          setIncorrecto(datoJson.message);
        } else {
          localStorage.setItem('usuarioLogueado', datos);
          history.push("/dashboard");
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  return (
    <div id="registro">
      <div id="contenedorForm">
        <img src={logo} alt="" />
        <h1>Inicio de sesión</h1>
        <form onSubmit={loguearse}>
          <div>
            <input type="text" id="nombre" autoComplete="off" required ref={mail} />
            <label htmlFor="nombre">Usuario</label>

          </div>
          <div>
            <input type="password" id="pass" autoComplete="off" required ref={contrasena} />
            <label htmlFor="pass">Contraseña</label>

          </div>
          <p className="advertencia">{incorrecto}</p><br />
          <input type="submit" value="Iniciar sesión" />
          <Link to="/Registro">Registrarse</Link>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Login)