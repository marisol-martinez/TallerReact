import {connect} from "react-redux";
import Entrenamiento from "./Entrenamiento"
import {useEffect } from "react";

//contenedor de lista de entrenamientos
const ListaEntrenamiento = (props) => {
    useEffect(() => {
        obtenerEntrenamientos();
     }, []);
     
     // fetch(`https://trainning-rest-api.herokuapp.com/v1/users/${usuario.id}/trainings`, requestOptions)
      const obtenerEntrenamientos = () =>{
        //let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "c1265e839814d75f6bc8dc639d163b29");
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        
        fetch("https://trainning-rest-api.herokuapp.com/v1/users/31/trainings", requestOptions)
            .then(response => response.text())
            .then(listado => {
                console.log("listado:");
                console.log(listado);
                //hay que entender como es la carga de datos
                props.dispatch({ type: "LISTADO_ENTRENAMIENTO", payload: listado });
            })
            .catch(error => console.log('error', error));
    }
    {/* {props.listaDeEntrenamientos.map((e) => <Entrenamiento key={e.id} {...e}/>)} */}
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
                
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
});

export default connect(mapStateToProps)(ListaEntrenamiento)