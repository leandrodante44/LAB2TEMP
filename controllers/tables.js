initLCAS_CHART = (data) => {
    $.each(data, function(index, item){

        var template = $("template")[0];
        var clone = template.content.cloneNode(true);

        clone.getElementById("name").innerHTML = item.NAME;
        clone.getElementById("status").innerHTML = getStatus(item.STATUS);
         
        var tempList = clone.getElementById("temp");
        
        //mock até ter os dados na estrutura correta
        var t = [
            {
                "VALUE":38,
                "DATE":'2000-01-01 16:00:00'
            },
            {
                "VALUE":35,
                "DATE":'2000-01-01 13:30:00'
            },
            {
                "VALUE":37,
                "DATE":'2000-01-01 11:00:00'
            },
            {
                "VALUE":40,
                "DATE":'2000-01-01 12:02:00'
            }];

        var lastTemp = t[t.length - 1];

        clone.getElementById("hour").innerHTML = lastTemp.DATE.split(" ")[1].slice(0, 5);


        $.each(t, function(index, temp){
            var listTempHtml =
                '<a href="#" class="avatar avatar-sm rounded-circle bg-'+ getColorTemp(temp.VALUE) +'" data-toggle="tooltip" data-trigger="hover" title="'+ temp.DATE +'">'+ 
                   '<span class="text-white"><b>'+ temp.VALUE +'</b></span>'+
                '</a>';
            tempList.innerHTML += listTempHtml;
        });

        clone.getElementById("progressCell").innerHTML =
            '<span class="completion mr-2 font-weight-bold text-'+ getColorTemp( lastTemp.VALUE ) +'">' + lastTemp.VALUE + 'ºC</span>'+
            '<div>'+
                '<div class="progress">'+
                    '<div class="progress-bar bg-gradient-'+ getColorTemp( lastTemp.VALUE ) +'-inverted" role="progressbar" aria-valuenow='+ lastTemp.VALUE +' aria-valuemin="0" aria-valuemax="50" style="width: '+ lastTemp.VALUE / 0.5 +'%;"></div>'+
                '</div>'+
            '</div>';

        $("#tblLCAS").append(clone);

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    });
}

getStatus = (status) => {
    switch(status){
        case 0:
            return "Em análise";
        case 1:
            return "Resolvido";
        case 2:
            return "Afastado";
        default:
            return "Normal";
     }
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

function getLCAS_TABLE(){
    
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
  
function onInit() {
    getLCAS_TABLE();
}

$(document).ready(function () {
  onInit();
});

