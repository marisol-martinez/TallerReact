import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from './../logo.png';

let Registro = () => {
    const email = useRef(null);
    const contrasena = useRef(null);
    const altura = useRef(null);
    const verifContrasena = useRef(null);
    let history = useHistory();

    const [advertencia, setAdvertencia] = useState("");

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

        if (contrasena.current.value != verifContrasena.current.value) {
            setAdvertencia("Las contraseñas deben coincidir");
        } else {
            setAdvertencia("");
            fetch("https://trainning-rest-api.herokuapp.com/v1/users/register", requestOptions)
                .then(response => response.text())
                .then(datos => {
                    let datoJson = JSON.parse(datos);
                    if (datoJson.status == 400) {
                        setAdvertencia(datoJson.message);
                    } else if (datoJson.status == 200) {
                        localStorage.setItem('usuarioLogueado', JSON.stringify(datoJson.user));
                        history.push("/dashboard");
                    }
                })
                .catch(error => console.log('error', error));
        }


    }

    return (
        <div id="registro">
            <div id="contenedorForm">
                <img src={logo} alt="" />
                <h1>Registro</h1>
                <form onSubmit={registro}>
                    <div>
                        <input type="text" id="email" autoComplete="off" required ref={email} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div>
                        <input type="number" id="altura" autoComplete="off" required ref={altura} />
                        <label htmlFor="altura">Altura</label>
                    </div>
                    <div>
                        <input type="password" id="pass" autoComplete="off" required ref={contrasena} />
                        <label htmlFor="pass">Contraseña</label>
                    </div>
                    <div>
                        <input type="password" id="confirmar" autoComplete="off" required ref={verifContrasena} />
                        <label htmlFor="confirmar">Confirmar contraseña</label>
                    </div>
                    <p className="advertencia">{advertencia}</p><br />
                    <input type="submit" value="Registrarse" />
                    <Link to="/login">Volver al login</Link>
                </form>
            </div>
        </div>
    );
}

export default Registro