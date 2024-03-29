import { connect } from "react-redux";

const EliminarEntrenamiento = ({ id, dispatch }) => {

    const EliminarEntr = (e) => {
        var myHeaders = new Headers();
        let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
        myHeaders.append("Authorization", usuario.token);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://trainning-rest-api.herokuapp.com/v1/users/${usuario.id}/trainings/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch({ type: "ELIMINAR_ENTRENAMIENTO", payload: id });
            })
            .catch(error => console.log('error', error));
    }

    return (
        <td>
            <button type="submit" onClick={EliminarEntr}>
                <i data-feather="trash-2">borrar</i>
            </button>
        </td>
    )
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(EliminarEntrenamiento)