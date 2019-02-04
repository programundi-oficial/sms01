function login() { 

	var p1 = $("#p1").val();
	var p2 = $("#p2").val();
	var y  = $("#id_escola option:selected").val();
	
	if(p1.length == "") {
		alert("Por favor, preencha");
		$("#p1").focus();
		return false;
	}
	if(p2.length == "") {
		alert("Por favor, preencha");
		$("#p2").focus();
		return false;
	}

	$("#btn_login").attr("disabled", true);
	
		
	$.ajax({            
		url: xurlq,
		 data: {
			y: y,
			s: "0",
			p1: p1,
			p2: p2
		},
		//dataType: "json",
		type: "POST",
		timeout:  6000,
		success: function(json) {
			console.log(json);
			return false;
			$("#btn_login").attr("disabled", false);
			for (var i = 0; i < json.length; i++) {             
				if(json[i].result == "true"){
					localStorage.setItem("id_banco", y);
					localStorage.setItem("token_user", json[i].token);
					location.href="index.html";
					return false;
				}
				if(json[i].result !== "true"){
					alert(json[i].p1);
				}
			}					
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			$("#btn_login").attr("disabled", false);
			alert("Erro ao logar");
		}
   });
}