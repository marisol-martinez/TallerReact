import { connect } from "react-redux";
import Entrenamiento from "./Entrenamiento"


//contenedor de lista de entrenamientos
const ListaEntrenamiento = (props) => {

    return (
        <div id="listaEntrenamientos">
            <table>
                <tbody>
                    <tr>
                        <th>Id</th>
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
}

const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
    tiposEntrenamientos: state.tiposEntrenamientos,
});

export default connect(mapStateToProps)(ListaEntrenamiento)