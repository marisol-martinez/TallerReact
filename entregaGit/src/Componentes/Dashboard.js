import { connect } from "react-redux";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Menu from './Menu';
import CantidadEntrenamientos from './CantidadEntrenamientos';
import ComparacionPeso from './ComparacionPeso';
import GraficaIMC from './GraficaIMC';
import InformacionPersonal from './InformacionPersonal';
import ListaEntrenamiento from './ListaEntrenamiento';
import GraficaMinutosEntr from "./GraficaMinutosEntr";
import ListaMinutosEntr from "./ListaMinutosEntr";


const Dashboard = (props) => {

  useEffect(() => {
    if (localStorage.getItem('usuarioLogueado') != null) {
      obtenerEntrenamientos();
      obtenerTiposEntrenamientos();
    }
  }, []);

  const obtenerEntrenamientos = () => {
    var myHeaders = new Headers();
    let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
    myHeaders.append("Authorization", usuario.token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://trainning-rest-api.herokuapp.com/v1/users/${usuario.id}/trainings`, requestOptions)
      .then(response => response.json())
      .then(lista => {
        props.dispatch({ type: "LISTADO_ENTRENAMIENTO", payload: lista });
      })
      .catch(error => console.log('error', error));
  }

  const obtenerTiposEntrenamientos = () => {
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
        props.dispatch({ type: "LISTADO_TIPOS", payload: tipos });
      })
      .catch(error => console.log('error', error));
  }

  if (localStorage.getItem('usuarioLogueado') == null) { return <Redirect to="/" /> };
  if (localStorage.getItem('usuarioLogueado') != null) {
    return (
      <>
        <Menu />
        <main>
          <InformacionPersonal />
          <div id="componenteChico">
            <ComparacionPeso />
            <CantidadEntrenamientos />
          </div>
          <GraficaIMC />
          <ListaEntrenamiento />
          <ListaMinutosEntr />
          <GraficaMinutosEntr />
        </main>
      </>
    );
  };

}

const mapStateToProps = (state) => ({
  listaDeEntrenamientos: state.listaDeEntrenamientos,
});

export default connect(mapStateToProps)(Dashboard)