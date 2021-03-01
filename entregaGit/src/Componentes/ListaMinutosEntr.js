import {connect} from "react-redux";
import TipoEntrenamiento from './TipoEntrenamiento';

const ListaMinutosEntr = (props) => { 

    let etiquetas = () => {
        let nombreEntrenamientos = [];
        {props.tiposEntrenamientos.map(e => {
            {props.listaDeEntrenamientos.map(l => {
                //si el usuario hizo el tipo de entrenamiento entra al if
                if (e.id === l.trainning_type) {
                    let tiposEntrenamiento = nombreEntrenamientos.filter(n => n.id == e.id)[0];
                    //si entra a este if es porque ya existe el tipo de entrenamiento en la lista de retorno
                    if (tiposEntrenamiento) {
                        tiposEntrenamiento.minutos += l.minutes;
                    }
                    //si entra al else no existe el tipo de entrenamiento en la lista
                    else {
                        nombreEntrenamientos.push({
                            id: e.id,
                            nombre: e.name,
                            minutos: l.minutes
                        });
                    }
                }
            })}
        })}
    
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