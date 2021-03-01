import { connect } from "react-redux";
import Entrenamiento from "./Entrenamiento"


//contenedor de lista de entrenamientos
const ListaEntrenamiento = (props) => {
    if(props.listaDeEntrenamientos.length > 0){
        return (
            <div id="listaEntrenamientos">
                <table>
                    <tbody>
                        <tr>
                            <th>Entrenamiento</th>
                            <th>Min.</th>
                            <th>Kcal. quemadas</th>
                            <th></th>
                        </tr>
                        {props.listaDeEntrenamientos.map(e => <Entrenamiento key={e.id} {...e} />)}
                    </tbody>
                </table>
            </div>
        )
    }else if(props.listaDeEntrenamientos.length < 1){
        return (
            <div id="listaEntrenamientos">
                <table>
                    <tbody>
                        <tr>
                            <th>Entrenamiento</th>
                            <th>Min.</th>
                            <th>Kcal. quemadas</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>No hay entrenamientos ingresados</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    
}

const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
    tiposEntrenamientos: state.tiposEntrenamientos,
});

export default connect(mapStateToProps)(ListaEntrenamiento)