
initDonutChart = (data) => {
    var $chart = $("#chart-donut");
    var donutChart = new Chart($chart, {
        type: "doughnut",
        options: {
        responsive: true,
        legend: {
            position: "top",
        },
        animation: {
            animateScale: true,
            animateRotate: true,
    },
    circumference: Math.PI,
    rotation: -Math.PI,
    weight: 200
        },
        data: {
        datasets: [
            {
        data: data,
        backgroundColor: [
        '#2dce89',
        '#f5365c'
        ],
        borderWidth: [
        1,
        1
        ],
        label: 'Dataset 1'
            },
        ],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Casos Normais", "Casos Criticos"],
        },
    });
    // Save to jQuery object
    $chart.data("chart", donutChart);
}
  
initBarsChart = (data) => {
    var $chart = $("#chart-bars");
    var ordersChart = new Chart($chart, {
        type: "bar",
        data: {
        labels: data.label,
        datasets: [
            {
            label: "Quantidade",
            data: data.data,
            },
        ],
        },
    });
    // Save to jQuery object
    $chart.data("chart", ordersChart);
}
  
initSalesChart = (data) => {
    var $chart = $("#chart-sales-dark");

    var salesChart = new Chart($chart, {
    type: "line",
    options: {
        scales: {
        yAxes: [
            {
            gridLines: {
                lineWidth: 1,
                color: Charts.colors.gray[900],
                zeroLineColor: Charts.colors.gray[900],
            },
            ticks: {
                callback: function (value) {
                if (!(value % 10)) {
                    return value + "%";
                }
                },
            },
            },
        ],
        },
        tooltips: {
        callbacks: {
            label: function (item, data) {
            var label = data.datasets[item.datasetIndex].label || "";
            var yLabel = item.yLabel;
            var content = "";

            content += yLabel + "%";
            return content;
            },
        },
        },
    },
    data: {
        labels: data.label,
        datasets: [
        {
            label: "Porcentagem",
            data: data.data,
        }
        ],
    },
    });

    // Save to jQuery object

    $chart.data("chart", salesChart);
}

initKPI = (data) => {
    $("#kpiTTEN").text(" " + data.TTEN);
    var kpiTTEN_R = $("#kpiTTEN_R")
    
    kpiTTEN_R.text(" " + data.TTEN_R + "%");
    
    if(data.TTEN_R < 0 ){
        kpiTTEN_R.addClass("text-danger fa-arrow-down");
    }else{
        kpiTTEN_R.addClass("text-success fa-arrow-up");
    }

}