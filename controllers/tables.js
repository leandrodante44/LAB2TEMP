initLCAS_CHART = (data) => {
    $.each(data, function(index, item){

        var template = $("template")[0];
        var clone = template.content.cloneNode(true);

        clone.getElementById("name").innerHTML = item.NAME;
        
        clone.getElementById("status").innerHTML = 
            '<i class="bg-'+ getStatusColor(item.STATUS) +'"></i>'+
            '<span class="status" >'+ getStatus(item.STATUS) +'</span>';
         
        var tempList = clone.getElementById("temp");

        item.TEMP = item.TEMP.reverse();

        var lastTemp = item.TEMP[item.TEMP.length - 1];

        clone.getElementById("hour").innerHTML = lastTemp.DATE.split(" ")[1].slice(0, 5);


        $.each(item.TEMP, function(index, temp){
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

        switch(item.STATUS){
            case 0:
                clone.getElementById("action").innerHTML =  '<a class="dropdown-item" href="#" onClick="setAction()">Resolvido</a>' + 
                                                            '<a class="dropdown-item" href="#">Afastado</a>';
                break;
            case 1:
                clone.getElementById("action").innerHTML = '<a class="dropdown-item" href="#" onClick="setAction()">Afastado</a>';
                
                break;
            case 2:
                clone.getElementById("action").innerHTML = '<a class="dropdown-item" href="#">Resolvido</a>';
                break;
            default:
                clone.getElementById("action").innerHTML =  '<a class="dropdown-item" href="#">Colocar em análise</a>';
                break;
            }
         
        $("#tblLCAS").append(clone);

        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    });
}

setAction = (item) => {
debugger
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

getStatusColor = (status) => {
    switch(status){
        case 0:
            return "warning";
        case 1:
            return "info";
        case 2:
            return "danger";
        default:
            return "success";
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
      url: LEROTH + "api/dashboard/OCOR_TABLE.php",
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

function filterTable() {
    var input, filter, table, tr, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("tblLCAS");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      val = tr[i].getElementsByClassName("name")[0];
      if (val) {
        txtValue = val.textContent || val.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }