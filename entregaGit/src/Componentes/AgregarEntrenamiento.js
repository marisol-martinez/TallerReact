//btn con signo de mas para agregar un entrenamiento
const AgregarEntrenamiento = () => {  
    
    //Save training
    //https://trainning-rest-api.herokuapp.com/v1/trainings
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "e0755d89bd8e0b787f7028c6e2ca1399");

    var raw = {
        "minutes": 15,
        "trainning_type": 1,
        "user_id": 31,
        "weight": 10
    };

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://trainning-rest-api.herokuapp.com/v1/trainings", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    const agregar = (e) => {

    };

    const cerrar = (e) => {

    };
  
    return (
      <div id="contenedorForm" class="bgBlanco">
            <h1>Agregar entrenamiento</h1>
            <form>
                <div>
                    <input type="text" id="minutos" autoComplete="off" required/>
                    <label class="txtNegro" htmlFor="minutos">Minutos</label>
                </div>
                <div>
                    <input type="text" id="txtPeso" autoComplete="off" required/>
                    <label class="txtNegro" htmlFor="txtPeso">Peso actual</label>
                </div>
                <div>
                    <select id="tipo">
                        <option>Entrenamiento 1</option>
                        <option>Entrenamiento 2</option>
                    </select>
                </div>
                <div>
                    <button id="cancelar" onClick={cerrar}>Cancelar</button>
                    <input type="submit" value="Agregar" onClick={agregar}/>
                </div>
            </form>
        </div>
    );
  };
  
  export default AgregarEntrenamiento;