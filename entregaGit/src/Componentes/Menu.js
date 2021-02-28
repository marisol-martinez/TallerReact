import { NavLink, Link, useHistory, useLocation } from "react-router-dom";
import { connect } from 'react-redux'

const Menu = ({ dispatch }) => {
  let history = useHistory();
  const cerrarSesion = (e) => {
    localStorage.clear();
    history.push("/login");
  };

  let location = useLocation();

  return (
    <nav>
      <div>
        <ul>
          <li>
          <img src="../logo.png" alt="" />
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
        <input type="button" onClick={cerrarSesion} value="Cerrar sesión"/>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Menu)