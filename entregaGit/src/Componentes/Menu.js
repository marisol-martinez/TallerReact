import AgregarEntrenamiento from "./AgregarEntrenamiento"
import { Link, useHistory } from "react-router-dom";
//import { useAlert } from "react-alert";

const Menu = () => {
  let history = useHistory();
  const abrirDialogo = (e) => {
    history.push("/agregar");
  };

  const cerrarSesion = (e) => {

  };

  //const alert = useAlert();
  /*  <button
         onClick={() => {
           alert.success("It's ok now!");
         }}
       >
         Success!
       </button> */

  return (
    <nav>
      <div>
        <ul>
          <li>
            <img src="https://www.logaster.com.es/blog/wp-content/uploads/sites/4/2019/03/0031_p_hard-core-gym-logo_18.png" alt="" />
          </li>
          <li>
            <Link to="/agregar">Agregar entrenamiento</Link>
            <button id="agregar" onClick={abrirDialogo}>Agregar entrenamiento</button>
          </li>
        </ul>
      </div>
      <div>
        <a href="login.html"><i data-feather="log-out" onClick={cerrarSesion}></i> Cerrar sesión</a>
      </div>
    </nav>
  );
};

export default Menu;