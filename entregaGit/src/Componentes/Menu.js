import { NavLink, useHistory, useLocation } from "react-router-dom";
import { connect } from 'react-redux'
import logo from './../logo.png';

const Menu = (props) => {
  let history = useHistory();
  const cerrarSesion = (e) => {
    localStorage.clear();
    props.dispatch({ type: "LISTADO_TIPOS", payload: [] });
    props.dispatch({ type: "LISTADO_ENTRENAMIENTO", payload: [] });
    history.push("/login");
  };

  let location = useLocation();

  return (
    <nav>
      <div>
        <ul>
          <li>
          <img src={logo} alt=""/>
          </li>
          <li>
            <NavLink id="agregar" to={{
              pathname: `/dashboard/agregar`,
              state: { background: location }
            }} activeClassName="activa">Agregar entrenamiento</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <p id="cerrar" onClick={cerrarSesion}>Cerrar sesión</p>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Menu)