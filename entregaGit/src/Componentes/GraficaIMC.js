const GraficaIMC= () => { 

    /* var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['18/02', '26/02', '02/03', '10/03', '17/03', '15/02'],
        datasets: [{
            label: 'Índice de masa corporal',
            backgroundColor: 'rgb(52, 158, 235)',
            borderColor: 'rgb(5, 117, 197)',
            data: [22, 18, 35, 21, 24, 50]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        }
    }
}); */

    return (
        <div id="imc">
            <p>Índice de masa corporal</p>
            <canvas id="myChart"></canvas>
        </div>
    );
}

export default GraficaIMC