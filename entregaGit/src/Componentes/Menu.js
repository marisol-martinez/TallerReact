import AgregarEntrenamiento from "./AgregarEntrenamiento"

const Menu = () => {
  const abrirDialogo = (e) => {

  };

  const cerrarSesion = (e) => {

  };
    return (
      <div className="menu">
        <h2>Menu</h2>
        {/* LOGO */}
        <button id="agregar" onClick={abrirDialogo}>Agregar Entrenamiento</button>
        <button id="cerrarSesion" onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>
    );
  };
  
  export default Menu;