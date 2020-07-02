

var inTables = false;

function filterTable() {
    if(!inTables){
        return;
    }

    var input, filter, table, tr, i, txtValue;
    input = document.getElementById("searchInput");
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

function initSearchField(){

    var url = new URL(window.location.href);
    var value = url.href.search("tables.php");

    inTables = (value > 0);

    if(inTables){
        var url = new URL(window.location.href);
        var valueSearch = url.searchParams.get('search');
        // $('#searchInput').val(valueSearch);
        document.getElementById("searchInput").value = valueSearch;
        filterTable();
    }
}

function onSearch() {
    console.log("asdadsasdadsdds")
    if(!inTables){
        window.open(
        "tables.php?search=" + $('#searchInput').val(),
        "_self"
        );
    }
}

window.onload = function() {
    initSearchField();
};