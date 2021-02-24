import {connect} from "react-redux";
import Entrenamiento from "./Entrenamiento"


//contenedor de lista de entrenamientos
const ListaEntrenamiento = (props) => {

    return (
        <div id="listaEntrenamientos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Entrenamiento</th>
                        <th>Minutos</th>
                        <th>Kcal quemadas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {props.listaDeEntrenamientos.map(e => <Entrenamiento key={e.id} {...e}/>)}
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