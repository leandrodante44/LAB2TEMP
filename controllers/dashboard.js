function getKPI_INIT(){
    
    id_company = $('#hdnIdComp').val();
  
    $.ajax({
      type: "POST",
      url: LEROTH + "api/dashboard/KPI_INIT.php",
      dataType: "json",
      data: {
        comp: id_company,
       },
  
      headers: {
        Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
      },
      success: function (data) {
        initKPI(data);
      },
      error: function (xhr) {
          debugger
        // if error occured
        swal("Ops!", "Não foi possível receber os dados.", "error");
      }
    });
  };

function getCNCC_CHART(){
    
  id_company = $('#hdnIdComp').val();

  $.ajax({
    type: "POST",
    url: LEROTH + "api/dashboard/CNCC_CHART.php",
    dataType: "json",
    data: {
      comp: id_company,
     },

    headers: {
      Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
    },
    success: function (data) {
        initDonutChart(data.data);
    },
    error: function (xhr) {
        debugger
      // if error occured
      swal("Ops!", "Não foi possível receber os dados.", "error");
    }
  });
};

function getSUSP_CHART(){
    
  id_company = $('#hdnIdComp').val();

  $.ajax({
    type: "POST",
    url: LEROTH + "api/dashboard/SUSP_CHART.php",
    dataType: "json",
    data: {
      comp: id_company,
      type: "m"
    },

    headers: {
      Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
    },
    success: function (data) {
      initSalesChart(data);
    },
    error: function (xhr) {
        debugger
      // if error occured
      swal("Ops!", "Não foi possível receber os dados.", "error");
    }
  });
};

function getLCAS_CHART(){
    
  id_company = $('#hdnIdComp').val();

  $.ajax({
    type: "POST",
    url: LEROTH + "api/dashboard/LCAS_CHART.php",
    dataType: "json",
    data: {
      comp: id_company,
      },

    headers: {
      Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
    },
    success: function (data) {
      initLCAS_CHART(data.data);
    },
    error: function (xhr) {
        debugger
      // if error occured
      swal("Ops!", "Não foi possível receber os dados.", "error");
    }
  });
};

function getINFC_CHART(){
  
  id_company = $('#hdnIdComp').val();

  $.ajax({
    type: "POST",
    url: LEROTH + "api/dashboard/INFC_CHART.php",
    dataType: "json",
    data: {
      comp: id_company,
      type: "m"
      },

    headers: {
      Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
    },
    success: function (data) {
      initBarsChart(data);
    },
    error: function (xhr) {
        debugger
      // if error occured
      swal("Ops!", "Não foi possível receber os dados.", "error");
    }
  });
};
  
function onInit() {
    getKPI_INIT();
    getSUSP_CHART();
    getINFC_CHART();
    getLCAS_CHART();
    getCNCC_CHART();
}

$(document).ready(function () {
  onInit();
});

// onSearch = () =>{
//   window.open(
//     "tables.php",
//     "_self"
//   );
// }