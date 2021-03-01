import { connect } from "react-redux";
import { Pie } from '@reactchartjs/react-chart.js'

const GraficaMinutosEntr = (props) => {

    let etiquetas = () => {
        let nombreEntrenamientos = [];

        {
            props.tiposEntrenamientos.map(e => {
                {
                    props.listaDeEntrenamientos.map(l => {
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
                    })
                }
            })
        }

        return nombreEntrenamientos;
    }

    const data = {
        labels: etiquetas().map(e => e.nombre),
        datasets: [
            {
                data: etiquetas().map(e => e.minutos),
                backgroundColor: [
                    '#7541cc',
                    '#8ee388',
                    '#349eeb',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div id="graficaminEntrenamientos">
            <p>Minutos por entrenamiento</p>
            <Pie data={data} />
        </div>
    );
}


const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
    tiposEntrenamientos: state.tiposEntrenamientos
});

export default connect(mapStateToProps)(GraficaMinutosEntr)