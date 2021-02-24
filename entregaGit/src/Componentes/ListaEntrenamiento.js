import {connect} from "react-redux";
import Entrenamiento from "./Entrenamiento"

//contenedor de lista de entrenamientos
const ListaEntrenamiento = (props) => {
               //{props.entrenamientos.map(e => <Entrenamiento key={e.id} {...e}/>)}
        return (
        <div id="listaEntrenamientos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Entrenamiento</th>
                        <th>Minutos {props.idTareaActual}</th>
                        <th>Kcal quemadas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {props.entrenamientos.map(e => <Entrenamiento key={e.id} {...e}/>)}
                    {/* <tr>
                        <td>Correr</td>
                        <td>30</td>
                        <td>500</td>
                        <EliminarEntrenamiento/>
                    </tr>
                    <tr>
                        <td>Pesas</td>
                        <td>60</td>
                        <td>300</td>
                        <EliminarEntrenamiento/>
                    </tr>
                    <tr>
                        <td>Pesas</td>
                        <td>60</td>
                        <td>300</td>
                        <EliminarEntrenamiento/>
                    </tr>
                    <tr>
                        <td>Pesas</td>
                        <td>60</td>
                        <td>300</td>
                        <EliminarEntrenamiento/>
                    </tr>
                    <tr>
                        <td>Pesas</td>
                        <td>60</td>
                        <td>300</td>
                        <EliminarEntrenamiento/>
                    </tr>
                    <tr>
                        <td>Pesas</td>
                        <td>60</td>
                        <td>300</td>
                        <EliminarEntrenamiento/>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    //entrenamientos: state.entrenamientos;
    return {idTareaActual: state.idTareaActual};
}

export default connect(mapStateToProps)(ListaEntrenamiento)