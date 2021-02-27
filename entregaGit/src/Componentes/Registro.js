import { useRef, useState } from "react";
import {Link, useHistory} from "react-router-dom";

let Registro = ({dispatch}) => { 
    const email = useRef(null);
    const contrasena = useRef(null);
    const altura = useRef(null);
    const verifContrasena = useRef(null);
    const [usuarioRegistrado, setUsuarioRegistrado] = useState([]);
    let history = useHistory();
    let advertencia = "";

  let registro = (e) => {
    e.preventDefault();
    var raw = JSON.stringify({
        "username": email.current.value, 
        "password": contrasena.current.value,
        "height": Number(altura.current.value)
      });
    
    var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
    };

    if(contrasena.current.value != verifContrasena.current.value){
        advertencia = "Las contraseñas deben coincidir"
    }else{
        advertencia = "";
        fetch("https://trainning-rest-api.herokuapp.com/v1/users/register", requestOptions)
        .then(response => response.text())
        .then(datos => {
            setUsuarioRegistrado(datos.results);
            localStorage.setItem('usuarioLogueado', datos);
            history.push("/dashboard");
        })
        .catch(error => console.log('error', error));
    }
    
      
  }

    return (
        <div id="registro">
            <div id="contenedorForm">
                <h1>Registro</h1>
                <form onSubmit={registro}>
                    <div>
                        <input type="text" id="email" autoComplete="off" required ref={email}/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input type="number" id="altura" autoComplete="off" required ref={altura}/>
                        <label htmlFor="altura">Altura</label>
                    </div>
                    <div>
                        <input type="password" id="pass" autoComplete="off" required ref={contrasena}/>
                        <label htmlFor="pass">Contraseña</label>
                    </div>
                    <div>
                        <input type="password" id="confirmar" autoComplete="off" required ref={verifContrasena}/>
                        <label htmlFor="confirmar">Confirmar contraseña</label>
                    </div>
                    <p>{advertencia}</p>
                    <input type="submit" value="Registrarse" />
                    <Link to="/login">Volver al login</Link>
                </form>
            </div>
        </div>
    );
}

export default Registro