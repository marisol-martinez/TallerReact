import { connect } from "react-redux";
import { Pie } from '@reactchartjs/react-chart.js'

const GraficaMinutosEntr = (props) => {

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

    const data = {
        labels: etiquetas().map(e => e.nombre),
        datasets: [
            {
                data: etiquetas().map(e => e.minutos),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
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