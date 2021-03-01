import { Bar } from '@reactchartjs/react-chart.js'
import { connect } from "react-redux";

const ComparacionPeso = (props) => {

    const data = {
        labels: ["comparación"],
        datasets: [
            {
                label: 'Peso anterior',
                data: props.listaDeEntrenamientos.length > 1 ? [props.listaDeEntrenamientos[1].weight] :  [],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Peso actual',
                data: props.listaDeEntrenamientos.length > 0 ? [props.listaDeEntrenamientos[0].weight] : [],
                backgroundColor: 'rgb(54, 162, 235)',
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