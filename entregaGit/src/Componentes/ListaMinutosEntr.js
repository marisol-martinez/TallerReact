import {connect} from "react-redux";
import TipoEntrenamiento from './TipoEntrenamiento';

const ListaMinutosEntr = (props) => { 

    let etiquetas = () => {
        let nombreEntrenamientos = [];
        for (let i = 0; i < props.tiposEntrenamientos.length; i++) {
            for (let j = 0; j < props.listaDeEntrenamientos.length; j++) {
                //si el usuario hizo el tipo de entrenamiento entra al if
                if (props.tiposEntrenamientos[i].id === props.listaDeEntrenamientos[j].trainning_type) {
                    let tiposEntrenamiento = nombreEntrenamientos.filter(n => n.id == props.tiposEntrenamientos[i].id)[0];
                    //si entra a este if es porque ya existe el tipo de entrenamiento en la lista de retorno
                    if (tiposEntrenamiento) {
                        tiposEntrenamiento.minutos += props.listaDeEntrenamientos[j].minutes;
                    }
                    //si entra al else no existe el tipo de entrenamiento en la lista
                    else {
                        nombreEntrenamientos.push({
                            id: props.tiposEntrenamientos[i].id,
                            nombre: props.tiposEntrenamientos[i].name,
                            minutos: props.listaDeEntrenamientos[j].minutes
                        });
                    }
                }
    
            }
        }
    
        return nombreEntrenamientos;
    }

    if(etiquetas().length > 0){
        return (
            <div id="listaMinEntrenamientos">
                 <table>
                    <tbody>
                        <tr>
                            <th>Ejercicio</th>
                            <th>Minutos</th>
                        </tr>
                        {etiquetas().map(e => <TipoEntrenamiento key={e.id} {...e} />)}
                    </tbody>
                </table>
            </div>
        );
    }else if(etiquetas().length < 1){
    return (
        <div id="listaMinEntrenamientos">
             <table>
                <tbody>
                    <tr>
                        <th>Ejercicio</th>
                        <th>Minutos</th>
                    </tr>
                    <tr>
                        <td>No hay entrenamientos ingresados</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );}
}

const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
    tiposEntrenamientos: state.tiposEntrenamientos
});

export default connect(mapStateToProps)(ListaMinutosEntr);