var id_user, id_company;
function getSession(){
    id_user = $('#hdnIdUser').val();
    id_company = $('#hdnIdComp').val();
}
function sendInvite(){

}
function carregarComboUni() {

  $.ajax({
    type: "POST",
    url: LEROTH + "data/unity.php",
    dataType: "json",
    data: {'fk_company': id_company},
    headers: {
      Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
    },
    success: function (data) {
      var oData = data;
      var sUni = $("#slcUni");
      $.each(oData, function (index, value) {
        sUni.append(
          '<option value="' +
            oData[index].id +
            '">' +
            oData[index].name +
            "</option>"
        );
      });
    },
    error: function (xhr) {
      // if error occured
      swal("Ops!", "Erro carregar a lista de Unidades!", "error");
    },
    beforeSend: function () {
      $("#slcUni").html('<option value="">Selecione a Unidade...</option>');
    },
  });
}
function onInit() {
    getSession();
    carregarComboUni();
}
$(document).ready(function () {
  onInit();
});
