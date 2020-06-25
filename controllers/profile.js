var jsonData = "";
var fileInput = document.getElementById("csv"),

readFile = function () {
    var reader = new FileReader();
    reader.onload = function () {
        // document.getElementById('out').innerHTML = csvJSON(reader.result);
        jsonData = csvJSON(reader.result);
    };
    // start reading the file. When it is done, calls the onload event defined above.
    if(fileInput.files.length > 0){
        reader.readAsBinaryString(fileInput.files[0]);
    }
    else{
        jsonData = ""; 
    }
};

fileInput.addEventListener('change', readFile);

fileInput.addEventListener('change', function(){
    if(!fileInput.files[0]) {
        document.getElementById("csvName").innerHTML = "Nenhum arquivo selecionado";
        return;
    }
    document.getElementById("csvName").innerHTML = fileInput.files[0].name;
});

function sendFile(){
    if(!jsonData) {
        swal("", "Nenhum arquivo selecionado", "error");
        return;
    }

    $.ajax({
        type: "POST",
        url: LEROTH + "post/customermass.php",
        dataType: "json",
        data: { data: jsonData },
        headers: {
          Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
        },
        success: function (data) {
            swal("", "", "error");
            swal("Registros enviados com sucesso" , "", "success");
            $("#sendData").html("Enviar");
        },
        error: function (xhr) {
          // if error occured
          swal("Ops!", "Falha ao enviar os registros", "error");
          $("#sendData").html("Enviar");
        },
        beforeSend: function () {
          $("#sendData").html("Enviando...");
        },
    });
}


//convert csv  to json
function csvJSON(csv){

    var lines=csv.replace(/\n/g, '');
    
    lines = lines.split("\r");
    var result = [];
    var headers=lines[0].split(",");
    headers.push("date_created");

    for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");
        var date = new Date();
        currentline.push(JSON.stringify(date));
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
    }
    
    return result; //JavaScript object
    //return JSON.stringify(result); //JSON
  }