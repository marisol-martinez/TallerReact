//btn con signo de mas para agregar un entrenamiento
const AgregarEntrenamiento = () => {  
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