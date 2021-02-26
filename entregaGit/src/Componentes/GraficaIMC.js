import { connect } from "react-redux";
import { Bar } from '@reactchartjs/react-chart.js'

const GraficaIMC = (props) => {

   const imc = (peso) =>{
        let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
        let alturaMetrosAlCuadrado = (usuario.height / 10) * (usuario.height / 10)
        return peso / alturaMetrosAlCuadrado;
    }

    const data = {
        labels: props.listaDeEntrenamientos.map(e => `${e.weight}kg` ),
        datasets: [
            {
                data: props.listaDeEntrenamientos.map(e => imc(e.weight)*100),
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

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }


    return (
        <div id="imc">
            <p>Índice de masa corporal</p>
            <Bar data={data} options={options} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
});

export default connect(mapStateToProps)(GraficaIMC)