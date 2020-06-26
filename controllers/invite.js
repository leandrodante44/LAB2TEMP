var from_user, id_company;

function getSession(){
  id_user = $('#hdnIdUser').val();
  id_company = $('#hdnIdComp').val();
}

function sendInvite(){
  var email = $("#email").val();
  var fk_uni = $('#slcUni').val()
  var level_access = $("#slcAccess").val();
  var date =  JSON.stringify(new Date());

  $.ajax({
    type: "POST",
    url: LEROTH + "post/invite.php",
    dataType: "json",
    data: { 
      email: email,
      from_user: id_user,
      fk_uni: fk_uni,
      fk_company: id_company,
      level_access: level_access,
      status: 1,
      date_created: date
     },

    headers: {
      Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
    },
    success: function (data) {
      swal("", "Convite enviado para: " + email, "success");
      window.open(
        "../views/sendMail.php?e=" + email,
        "_self"
      );
    },
    error: function (xhr) {
      // if error occured
      swal("Ops!", "Não foi possível enviar o convite", "error");
      $("#btnSendInvite").html("Enviar Convite!");
    },
    beforeSend: function () {
      $("#btnSendInvite").html("Enviando...");
    },
  });
};


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
