import {connect} from "react-redux";
import { useRef} from "react";
import { useHistory } from "react-router-dom";

const AgregarEntrenamiento = (props) => {  
    const minutos = useRef(null);
    const pesoActual = useRef(null);
    const tipoEntr = useRef(null);
    let history = useHistory();
    
    
    const agregar = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
        myHeaders.append("Authorization", usuario.token);

        var raw = JSON.stringify({
            "minutes": Number(minutos.current.value),
            "trainning_type": Number(tipoEntr.current.value),
            "user_id": 31,
            "weight": Number(pesoActual.current.value)
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://trainning-rest-api.herokuapp.com/v1/trainings", requestOptions)
        .then(response => response.json())
        .then(result => {
            history.push("/dashboard");
        })
        .catch(error => console.log('error', error));
        };

    const cerrar = (e) => {
        history.push("/dashboard");
    };
  //
    return (
        <div id="formEntrenamiento" className="abrirForm">
        <div id="contenedorForm" className="bgBlanco">
            <h1>Agregar entrenamiento</h1>
            <form  onSubmit={agregar}>
                <div>
                    <input type="number" id="minutos" autoComplete="off" required ref={minutos}/>
                    <label className="txtNegro" htmlFor="minutos">Minutos</label>
                </div>
                <div>
                    <input type="number" id="txtPeso" autoComplete="off" required ref={pesoActual}/>
                    <label className="txtNegro" htmlFor="txtPeso">Peso actual</label>
                </div>
                <div>
                    <select id="tipo"  ref={tipoEntr}>
                        {props.tiposEntrenamientos.map(tipo => <option value={tipo.id} key={tipo.id}>{tipo.name}</option>)}
                    </select>
                </div>
                <div>
                    <button id="cancelar" onClick={cerrar}>Cancelar</button>
                    <input type="submit" value="Agregar"/>
                </div>
            </form>
        </div>
    </div>
    );
  };
  
  const mapStateToProps = (state) => ({
    tiposEntrenamientos: state.tiposEntrenamientos,
});

export default connect(mapStateToProps)(AgregarEntrenamiento)