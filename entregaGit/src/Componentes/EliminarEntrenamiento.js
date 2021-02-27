import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const EliminarEntrenamiento = ({id}) => {
    
    let history = useHistory();

    const IrDashboar = () => {
        alert("borrado");
        history.push("/dashboard");
    }

    const EliminarEntr = (e) => {
        //e.preventDefault();
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
        .then(result => {
            window.location.reload(true);
            //history.push("/dashboard");
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

export default EliminarEntrenamiento