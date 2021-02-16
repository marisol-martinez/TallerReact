const ComparacionPeso= () => { 
    var graficaPeso = document.getElementById('myChartPeso').getContext('2d');
    /* var chart = new Chart(graficaPeso, {
        type: 'bar',
        // The data for our dataset
        data: {
            labels: ['Antes', 'Ahora'],
            datasets: [{
                label: 'Peso',
                backgroundColor: ['rgb(150, 255, 0)', 'rgb(250,250,160)'],
                borderColor: 'rgb(5, 117, 197)',
                data: [22, 18]
            }]
        },
        options: {}
    }); */

    return (
        <div id="peso">
            <p>85kg</p>
            <p>87kg</p>
            <canvas id="myChartPeso"></canvas>
        </div>
    );
}

export default ComparacionPeso