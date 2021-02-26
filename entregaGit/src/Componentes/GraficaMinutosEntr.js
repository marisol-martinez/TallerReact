import { connect } from "react-redux";
import { Pie } from '@reactchartjs/react-chart.js'

const GraficaMinutosEntr = (props) => {

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