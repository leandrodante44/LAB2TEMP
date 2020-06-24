var jsonfile = "";
var fileInput = document.getElementById("csv"),

readFile = function () {
    var reader = new FileReader();
    reader.onload = function () {
        // document.getElementById('out').innerHTML = csvJSON(reader.result);
        jsonfile = csvJSON(reader.result);
    };
    // start reading the file. When it is done, calls the onload event defined above.
    if(fileInput.files.length > 0){
        reader.readAsBinaryString(fileInput.files[0]);
    }
    else{
        jsonfile = ""; 
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
    if(!jsonfile) {
        alert("Nenhum arquivo selecionado");
        return;
    }

    alert(jsonfile);
}


//convert csv  to json
function csvJSON(csv){

    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].split(",");

    for(var i=1;i<lines.length;i++){

        var obj = {};
        var currentline=lines[i].split(",");
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
    }
    
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }