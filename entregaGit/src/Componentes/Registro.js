import { useRef, useState, useEffect } from "react";

let Registro = () => { 

    const email = useRef(null);
    const contrasena = useRef(null);
    const altura = useRef(null);
    const verifContrasena = useRef(null);

    useEffect(() => {
        fetch("https://trainning-rest-api.herokuapp.com/v1/users/register", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }, []);

  var raw = JSON.stringify({
    "username": "mm@m.com", 
    "password": "m",
    "height": 180
  });

  var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  const registro = (e) => {
    console.log(email.current.value);
    console.log(contrasena.current.value);
    console.log(altura.current.value);
  }

    return (
        <div id="registro">
            <div id="contenedorForm">
                <h1>Registro</h1>
                <form>
                    <div>
                        <input type="text" id="email" autocomplete="off" required ref={email}/>
                        <label for="email">Email</label>
                    </div>
                    <div>
                        <input type="number" id="altura" autocomplete="off" required ref={altura}/>
                        <label for="altura">Altura</label>
                    </div>
                    <div>
                        <input type="password" id="pass" autocomplete="off" required ref={contrasena}/>
                        <label for="pass">Contraseña</label>
                    </div>
                    <div>
                        <input type="password" id="confirmar" autocomplete="off" required ref={verifContrasena}/>
                        <label for="confirmar">Confirmar contraseña</label>
                    </div>
                    <input type="button" value="Registrarse" onClick={registro}/>
                    <a href="login.html">Volver al login</a>
                </form>
            </div>
        </div>
    );
}

export default Registro