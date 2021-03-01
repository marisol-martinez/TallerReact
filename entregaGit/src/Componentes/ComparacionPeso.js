import { Bar } from '@reactchartjs/react-chart.js'
import { connect } from "react-redux";

const ComparacionPeso = (props) => {

    const data = {
        labels: ["comparación"],
        datasets: [
            {
                label: 'Peso anterior',
                labelBackgroundColor: '#7541cc',
                data: props.listaDeEntrenamientos.length > 1 ? [props.listaDeEntrenamientos[1].weight] : [],
                backgroundColor: '#7541cc',
            },
            {
                label: 'Peso actual',
                labelBackgroundColor: '#349eeb',
                data: props.listaDeEntrenamientos.length > 0 ? [props.listaDeEntrenamientos[0].weight] : [],
                backgroundColor: '#349eeb',
            },
        ],
    }
    const options = {
        scales: {
            yAxes: [
                {
                    stacked: true,
                    gridLines: {
                        display: false,
                    },
                    display: false
                },
            ],
            xAxes: [
                {
                    stacked: true,
                },
            ],
        },
        scaleLineColor: 'transparent',
    }

    return (
        <div id="peso">
            <p>Comparación de peso</p>
            <Bar data={data} options={options} />
        </div>
    );
}


const mapStateToProps = (state) => ({
    listaDeEntrenamientos: state.listaDeEntrenamientos,
});

export default connect(mapStateToProps)(ComparacionPeso)