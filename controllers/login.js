login = () => {
  var user = $("#email").val();
  var pass = $("#pass").val();
  var comp = $("#comp").val();
  $.ajax({
    type: "POST",
    url: LEROTH + "api/getLogin.php",
    dataType: "json",
    data: { user: user, pass: pass, comp: comp },
    headers: {
      Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
    },
    success: function (data) {
      if (data.length > 0) {
        var id_user = data[0].id;
        var fk_comp = data[0].fk_company;
        var name = data[0].username;
        var mail = data[0].email;
        var level = data[0].level_access;
        window.open(
          "../utils/session.php?option=set&newsessionid=" +
            id_user +
            "&newsessioncomp=" +
            fk_comp +
            "&newsessionname=" +
            name +
            "&newsessionmail=" +
            mail +
            "&newsessionlevel=" +
            level,
          "_self"
        );
      } else {
        swal("Ops!", "Usuário/Senha não correspondem!", "error");
        $("#btnLogin").html("ENTRAR");
      }
    },
    error: function (xhr) {
      // if error occured
      swal("Ops!", "Usuário/Senha não correspondem!", "error");
      $("#btnLogin").html("ENTRAR");
    },
    beforeSend: function () {
      $("#btnLogin").html("ENTRANDO...");
    },
  });
};

function onInit() {
  $("#btnLogin").on("click", function () {
    login();
  });
}
$(document).ready(function () {
  onInit();
});
