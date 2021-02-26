import {connect} from "react-redux";

const TipoEntrenamiento = ({nombre, minutos}) => {
    return (
        <tr>
            <td>{nombre}</td>
            <td>{minutos}</td>
        </tr>
    )
}
const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
    tiposEntrenamientos: state.tiposEntrenamientos
});

export default connect(mapStateToProps)(TipoEntrenamiento);
