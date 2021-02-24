const EliminarEntrenamiento = ({id}) => {
    const eliminarEntr = (e) => {
        console.log();

        var myHeaders = new Headers();
        let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
        let idEliminar = id;
        myHeaders.append("Authorization", usuario.token);

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`https://trainning-rest-api.herokuapp.com/v1/users/${usuario.id}/trainings/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      }

    return (
        <td>
            <button onClick={eliminarEntr}>
                <i data-feather="trash-2">borrar</i>
            </button>
        </td>
)
}

export default EliminarEntrenamiento