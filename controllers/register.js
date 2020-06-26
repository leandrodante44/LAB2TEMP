function sendRegister(){
    if(!validatePass()){
        return
    };

  var username = $("#name").val();
  var email = $("#email").val();
  var password = $('#pass').val()
  var phone = $("#tel").val();
  var date =  JSON.stringify(new Date());

  $.ajax({
    type: "POST",
    url: LEROTH + "post/register.php",
    dataType: "json",
    data: { 
        username: username,
        email: email,
        password: password,
        phone: phone,
        date: date
     },

    headers: {
      Authorization: "Basic " + btoa(MOSEBE + ":" + PASELE),
    },

    success: function (data) {
        if(data.STATUS == "EMAIL_INVALID" || data.STATUS == "INVALID_INVITE"){
            swal("Ops!", "Não foi possível registar", "error");
            return false;
        }

        swal({
            title: "",
            text: "Registrado com sucesso!",
            icon: "success",
            button: "OK"
          })
          .then(() => {
            window.open(
                "dashboard.php",
                "_self"
              );
          });
    },
    error: function (xhr) {
      // if error occured
      swal("Ops!", "Não foi possível registar", "error");
      $("#btnSendInvite").html("Registrar");
    },
    beforeSend: function () {
      $("#btnSendInvite").html("Enviando...");
    },
  });
};

function onInit() {
    $('.phone_with_ddd').mask('(00) 00000-0000');
}

$(document).ready(function () {
  onInit();
});


function validatePass() {

    var $nonempty = $('.form-control').filter(function() {
        return this.value == ''
    });

    if ($nonempty.length != 0) {
        swal("Ops!", "Campos incompletos, favor prencher todos os campos.", "error");
        return false;
    }

    var pass = $("#pass");
    var pass2 = $("#pass2");
    if (pass.val() != pass2.val()) {
        swal("Ops!", "Confirmação da Senha não correnponde a Senha.", "error");
        return false;
    }
   
    return true;
}
