import {connect} from "react-redux";
import {useEffect } from "react";
import Menu from './Menu';
import AgregarEntrenamiento from './AgregarEntrenamiento';
import CantidadEntrenamientos from './CantidadEntrenamientos';
// import ComparacionPeso from './ComparacionPeso';
// import GraficaIMC from './GraficaIMC';
import InformacionPersonal from './InformacionPersonal';
import ListaEntrenamiento from './ListaEntrenamiento';
// import MinutosEntrenamiento from './MinutosEntrenamientos';

const Dashboard = (props) => { 
    useEffect(() => {
      obtenerEntrenamientos();
      obtenerTiposEntrenamientos();
  }, []);
  
 // "https://trainning-rest-api.herokuapp.com/v1/users/31/trainings", requestOptions)
  const obtenerEntrenamientos = () =>{
    var myHeaders = new Headers();
    let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
    myHeaders.append("Authorization", usuario.token);
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    // fetch(`https://trainning-rest-api.herokuapp.com/v1/users/${usuario.id}/trainings`, requestOptions)
    fetch(`https://trainning-rest-api.herokuapp.com/v1/users/31/trainings`, requestOptions)
        .then(response => response.json())
        .then(listado => {
            console.log("listado:");
            console.log(listado);
            //hay que entender como es la carga de datos
            props.dispatch({ type: "LISTADO_ENTRENAMIENTO", payload: listado });
        })
        .catch(error => console.log('error', error));
}

const obtenerTiposEntrenamientos = () =>{
  var myHeaders = new Headers();
  let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
  myHeaders.append("Authorization", usuario.token);
  
  var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
  };

      fetch("https://trainning-rest-api.herokuapp.com/v1/training-types", requestOptions)
  .then(response => response.json())
  .then(tipos => {
    console.log(tipos);
    //hay que entender como es la carga de datos
    props.dispatch({ type: "LISTADO_TIPOS", payload: tipos });
})
  .catch(error => console.log('error', error));
}
  //if (!props.logged) return <Redirect to="/" />;

    return (
      <main>
          <InformacionPersonal/>
          <CantidadEntrenamientos/>
          <ListaEntrenamiento/>
      </main>
    );
}

const mapStateToProps = (state) => ({
  listaDeEntrenamientos: state.listaDeEntrenamientos,
});

export default connect(mapStateToProps)(Dashboard)