login = () =>{
	var user = $("#email").val();
	var pass = $("#pass").val();
	$.ajax
	({
		type: "POST",
		url: LEROTH+"api/getLogin.php",
        dataType: 'json',
        data: {"user":user, "pass":pass},
		headers: {
			"Authorization": "Basic " + btoa(MOSEBE + ":" + PASELE)
		},
		success: function (data){
			if(data.length > 0){
				debugger
			}else{
				swal("Ops!", "Usuário/Senha não correspondem!", "error");
				$("#btnLogin").html('ENTRAR');
			}
		},
		error: function(xhr) { // if error occured
			swal("Ops!", "Usuário/Senha não correspondem!", "error");
			$("#btnLogin").html('ENTRAR');
			
		},
		beforeSend: function() {
			$("#btnLogin").html('ENTRANDO...');
		},
	});
}

function onInit(){
	$("#btnLogin").on("click", function(){ login(); });
}
$(document).ready(function() {
	onInit();
});