const EliminarEntrenamiento = () => {
     //Delete training
    //https://trainning-rest-api.herokuapp.com/v1/users/31/trainings/21
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "e0755d89bd8e0b787f7028c6e2ca1399");

    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://trainning-rest-api.herokuapp.com/v1/users/31/trainings/21", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    const eliminarEntr = (e) => {
        console.log();
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