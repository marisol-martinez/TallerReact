import {connect} from "react-redux";
import EliminarEntrenamiento from "./EliminarEntrenamiento"

const Entrenamiento = ({id, trainning_type, minutes, tiposEntrenamientos}) => {
//console.log(tiposEntrenamientos);
    const caloriasQuemadas = (trainning_type) =>{
         let tipo = tiposEntrenamientos.find( tip => tip.id === trainning_type);
         if(tipo) return minutes * tipo.calories_per_minute;
    }
    const nombreEntrenamiento = (id) =>{
        for (let i = 0; i < tiposEntrenamientos.length; i++) {
            if(tiposEntrenamientos[i].id == id){
                return tiposEntrenamientos[i].name
            }
        }
    }
    
    return (
        <tr>
            <td>{nombreEntrenamiento(trainning_type)}</td>
            <td>{minutes}</td>
            <td>{caloriasQuemadas(trainning_type)}</td> 
            <EliminarEntrenamiento id={id}/>
        </tr>
    )
}

const mapStateToProps = (state) => ({
    tiposEntrenamientos: state.tiposEntrenamientos,
});

export default connect(mapStateToProps)(Entrenamiento);