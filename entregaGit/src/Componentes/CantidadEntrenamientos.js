import {connect} from "react-redux";

//componente con cantidad de entrenamientos, componente chico
const CantidadEntrenamientos = (props) => { 
    return (
      <div id="cantEntrenamientos">
            <p>Cantidad de entrenamientos</p>
            <p>{props.listaDeEntrenamientos.length}</p>
        </div>  
    );
}

const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
});

export default connect(mapStateToProps)(CantidadEntrenamientos)