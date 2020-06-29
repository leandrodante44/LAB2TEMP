
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
    setKPI("kpiTTEN", data.TTEN, data.TTEN_R, "");
    setKPI("kpiENNM", data.ENNM, data.ENNM_R, "");
    setKPI("kpiENCR", data.ENCR, data.ENCR_R, "");
    setKPI("kpiIDSP", data.IDSP, data.IDSP_R, "%");
}

setKPI = (kpiId, data, data_r, unit) => {
    $("#" + kpiId).text(" " + data + unit);
    var kpi_r = $("#" + kpiId + "_R")
    
    kpi_r.text(" " + data_r + "%");
    
    if(data_r < 0 ){
        kpi_r.addClass("text-danger fa-arrow-down");
    }else{
        kpi_r.addClass("text-success fa-arrow-up");
    }
}

initLCAS_CHART = (data) => {
    $.each(data, function(index, value){
        /*console.log(value);*/
        debugger
    var htmlTable = '<tr>'+
                    '<th scope="row">'+
                    value.NAME+
                    '</th>'+
                    '<td>'+
                    value.HOUR+
                    '</td>'+
                    '<td>'+
                    '<div class="d-flex align-items-center">'+
                        '<span class="mr-2 font-weight-bold text-'+ getColorTemp( value.TEMP ) +'">' + value.TEMP + 'ºC</span>'+
                        '<div>'+
                        '<div class="progress">'+
                            '<div class="progress-bar bg-gradient-'+ getColorTemp( value.TEMP ) +'-inverted" role="progressbar" aria-valuenow='+ value.TEMP +' aria-valuemin="0" aria-valuemax="50" style="width: '+ value.TEMP / 0.5 +'%;"></div>'+
                        '</div>'+
                        '</div>'+
                    '</div>'+
                    '</td>'+
                '</tr>';
    
    $("#table-LCAS").append(htmlTable);
    });
}

getColorTemp = (temp) => {
    if(temp <= 35){
        return "info";
    }
    
    if(temp <= 37.5){
        return "success";
    }
    
    if(temp <= 39.5){
        return "warning";
    }
    
    return "danger";
}