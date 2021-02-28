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
            <img src="https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/03/0031_p_hard-core-gym-logo_18.png" alt="" />
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
        <button onClick={cerrarSesion}><i data-feather="log-out"></i>Cerrar sesión</button>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Menu)