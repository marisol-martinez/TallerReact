import { connect } from "react-redux";
import { Bar } from '@reactchartjs/react-chart.js'

const GraficaIMC = (props) => {

    const imc = (peso) => {
        let usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
        let alturaMetrosAlCuadrado = (usuario.height / 100) * (usuario.height / 100)
        return peso / alturaMetrosAlCuadrado;
    }

    const data = {
        labels: props.listaDeEntrenamientos.map(e => `${e.weight}kg`),
        datasets: [
            {
                data: props.listaDeEntrenamientos.map(e => imc(e.weight).toFixed(2)),
                backgroundColor: [
                    '#7541cc',
                    '#8ee388',
                    '#349eeb',
                    '#7541cc',
                    '#8ee388',
                    '#349eeb',
                    '#7541cc',
                    '#8ee388',
                    '#349eeb',
                    '#7541cc',
                    '#8ee388',
                    '#349eeb',
                    '#7541cc',
                    '#8ee388',
                    '#349eeb',
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
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        }
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