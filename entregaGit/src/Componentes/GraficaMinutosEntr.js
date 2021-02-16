const GraficaMinutosEntr= () => { 
    /* var ctx = document.getElementById('graficaMin').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Ejercicio1', 'Ejercicio2', 'Ejercicio3', 'Ejercicio4'],
        datasets: [{
            label: 'Índice de masa corporal',
            backgroundColor: 'rgb(117, 65, 204)',
            borderColor: 'rgb(72, 22, 156)',
            data: [80, 43, 56, 21]
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
        <div id="graficaminEntrenamientos">
            <p>Minutos por entrenamiento</p>
            <canvas id="graficaMin"></canvas>
        </div>
    );
}

export default GraficaMinutosEntr