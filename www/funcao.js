

var token_user 	= localStorage.getItem("token_user");

function valida_logado(){
	

	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "2",
		token: token_user
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		//$("#bhloasdf").html("");
		for (var i = 0; i < json.length; i++) {             
        	if(json[i].result == "true"){
		   		$("#tela-preta").css("display", "none");	
				//$("#bhloasdf").append("<tr><td>"+json[i].nome+"</td><td>"+json[i].nome+"</td></tr>");
			}
			else{
				location.href="login.html";
				return false;
			}
		}
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro ao logar");
		localStorage.removeItem("token_user");
	}
  });
}
valida_logado();

function logout(){
	
	
  		token  = localStorage.removeItem("token_user");
		if(!localStorage.getItem('token_user')){
			localStorage.clear();
			location.href="login.html";
			return false;
		}
		
	
	
}

function lista_boletim(){
	
	p1 = $("#opcaoano option:selected").val();

	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "1",
		token: token_user,
		p1: p1
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#corpo-tabela").html("");
		for (var i = 0; i < json.length; i++) {             
        			   			
			$("#corpo-tabela").append("<tr>"+
									  "<td>"+json[i].ds_disciplina+"</td><td>"+json[i].u1n1+"</td><td>"+json[i].u1n2+"</td><td>"+json[i].u1n3+"</td><td>"+json[i].u1n4+"</td><td>"+json[i].u1n5+"</td><td>"+json[i].media_parcial1+"</td><td>"+json[i].rec1+"</td><td>"+json[i].media1+"</td><td>"+json[i].u2n1+"</td><td>"+json[i].u2n2+"</td><td>"+json[i].u2n3+"</td><td>"+json[i].u2n4+"</td><td>"+json[i].u2n5+"</td><td>"+json[i].media_parcial2+"</td><td>"+json[i].rec2+"</td><td>"+json[i].media2+"</td><td>"+json[i].semestre1_geral+"</td><td>"+json[i].u3n1+"</td><td>"+json[i].u3n2+"</td><td>"+json[i].u3n3+"</td><td>"+json[i].u3n4+"</td><td>"+json[i].u3n5+"</td><td>"+json[i].media_parcial3+"</td><td>"+json[i].rec3+"</td><td>"+json[i].media3+"</td><td>"+json[i].u4n1+"</td><td>"+json[i].u4n2+"</td><td>"+json[i].u4n3+"</td><td>"+json[i].u4n4+"</td><td>"+json[i].u4n5+"</td><td>"+json[i].media_parcial4+"</td><td>"+json[i].rec4+"</td><td>"+json[i].media4+"</td><td>"+json[i].semestre2_geral+"</td><td>"+json[i].media_final+"</td><td>"+json[i].nota_recuperacao+"</td><td>"+json[i].media_recuperacao+"</td><td>''</td><td>"+json[i].resultado+"</td>"+"</tr>");
			
		}
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
	
}

function lista_ficha_financeira(){
	
	p1 = $("#opcaoano option:selected").val();
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "4",
		token: token_user,
		p1: p1
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#corpo-tabela").html("");
		for (var i = 0; i < json.length; i++) {             
        			   			
			$("#corpo-tabela").append("<tr><td>"+json[i].ds_tipo_titulo+"</td><td>"+json[i].mes+"</td><td >"+convert_banco_data(json[i].data_vencimento)+"</td><td >"+convert_banco_data(json[i].data_pagamento)+"</td><td>"+json[i].ds_situacao_pagamento+"</td><td>"+json[i].valor+"</td><td>"+json[i].dias_atraso+"</td><td>"+json[i].multa+"</td><td>"+json[i].juros+"</td><td>"+json[i].descontos+"</td><td>"+json[i].valorpago+"</td></tr>");
			
		}
		
		
		
				
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
	
}

function convert_banco_data(data){     
	if(data == "" || data == null){
		return "";
	}
	else{       
		var newdate = data.split("-").reverse().join("/");
		return newdate;
	}

}

function ano_letivo(){
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "5",
		token: token_user
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		for (var i = 0; i < json.length; i++){
			$("#opcaoano").append("<option value='"+json[i].ds_anoletivo+"'>"+json[i].ds_anoletivo+"</option>");
		}
		
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
}

function disciplina(){
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "9",
		token: token_user
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		for (var i = 0; i < json.length; i++){
			$("#opcaodisciplina").append("<option value='"+json[i].id_disciplina+"'>"+json[i].ds_disciplina+"</option>");
		}
		
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
}

function frequencia(){
	
	p1 = $("#opcaoano option:selected").val();
	p2 = $("#opcaomes option:selected").val();
	p3 = $("#opcaodisciplina option:selected").val();
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "6",
		token: token_user,
		p1: p1,
		p2: p2,
		p3: p3
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		$("#corpo-tabela").html("");
		for (var i = 0; i < json.length; i++) {             

			$("#corpo-tabela").append("<tr><td>Situação</td><td>"+json[i]._01+"</td><td>"+json[i]._02+"</td><td>"+json[i]._03+"</td><td>"+json[i]._04+"</td><td>"+json[i]._05+"</td><td>"+json[i]._06+"</td><td>"+json[i]._07+"</td><td>"+json[i]._08+"</td><td>"+json[i]._09+"</td><td>"+json[i]._10+"</td><td>"+json[i]._11+"</td><td>"+json[i]._12+"</td><td>"+json[i]._13+"</td><td>"+json[i]._14+"</td><td>"+json[i]._15+"</td><td>"+json[i]._16+"</td><td>"+json[i]._17+"</td><td>"+json[i]._18+"</td><td>"+json[i]._19+"</td><td>"+json[i]._20+"</td><td>"+json[i]._21+"</td><td>"+json[i]._22+"</td><td>"+json[i]._23+"</td><td>"+json[i]._24+"</td><td>"+json[i]._25+"</td><td>"+json[i]._26+"</td><td>"+json[i]._27+"</td><td>"+json[i]._28+"</td><td>"+json[i]._29+"</td><td>"+json[i]._30+"</td><td>"+json[i]._31+"</td></tr>");
			
		}
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
}

function comunicado(){
	
	var p2 = $("#opcaoano option:selected").val();
	$("#corpo-tabela").html("BUSCANDO");
	

	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "7",
		token: token_user,
		p1: "-1",
		p2: p2
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#corpo-tabela").html("");
		for (var i = 0; i < json.length; i++) {             
			$("#corpo-tabela").append("<tr onClick='abrir_comunicado("+json[i].id_comunicado+", "+json[i].ano+")'><td><span class='float-right font-weight-bold'>"+convert_banco_data(json[i].data_comunicado)+"</span>"+json[i].ds_comunicado+"</td></tr>");		
		}
		if(json.length == ""){
			$("#if").append("<p align='center'>Não possui</p>");
			//$("form").css("display", "none");
		}
		
				
		
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}

function abrir_comunicado(id_comunicado, ano){
	location.href="comunicado-aberto.html?id_comunicado="+id_comunicado+"&ano="+ano;
}

function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}

function get_comunicado(){
	var p1 = GetURLParameter("id_comunicado");
	var p2 = GetURLParameter("ano");
	$.ajax({            
		url: xurlq,
		data: {					
		s: "7",
		token: token_user,
		p1: p1,
		p2: p2
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {

		
		for (var i = 0; i < json.length; i++) {			$(".data_hora_comuinicado").html(convert_banco_data(json[i].data_comunicado));
			$(".titulo_comunicado").html(json[i].ds_comunicado);
			$(".conteudo_comunicado").html(json[i].ds_comunicado);		
					
		}	
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);	
	}
  });
}

function horario(){
	p1 = $("#opcaoano option:selected").val();
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "8",
		token: token_user,
		p1: p1
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {

		$("#corpo-tabela1").html("");
		$("#corpo-tabela2").html("");
		$("#corpo-tabela3").html("");
		$("#corpo-tabela4").html("");
		$("#corpo-tabela5").html("");
		for (var i = 0; i < json.length; i++) {             
			if(json[i].ds_dias_semana == "SEGUNDA FEIRA"){
				$("#corpo-tabela1").append("<tr><td>"+json[i].nome+"</td><td>"+json[i].ds_disciplina+"</td><td>"+json[i].hora_inicial+"</td><td>"+json[i].hora_final+"</td></tr>");
			}
			
			if(json[i].ds_dias_semana == "TERÇA FEIRA"){
				$("#corpo-tabela2").append("<tr><td>"+json[i].nome+"</td><td>"+json[i].ds_disciplina+"</td><td>"+json[i].hora_inicial+"</td><td>"+json[i].hora_final+"</td></tr>");
			}
			
			if(json[i].ds_dias_semana == "QUARTA FEIRA"){
				$("#corpo-tabela3").append("<tr><td>"+json[i].nome+"</td><td>"+json[i].ds_disciplina+"</td><td>"+json[i].hora_inicial+"</td><td>"+json[i].hora_final+"</td></tr>");
			}
			
			if(json[i].ds_dias_semana == "QUINTA FEIRA"){
				$("#corpo-tabela4").append("<tr><td>"+json[i].nome+"</td><td>"+json[i].ds_disciplina+"</td><td>"+json[i].hora_inicial+"</td><td>"+json[i].hora_final+"</td></tr>");
			}
			
			if(json[i].ds_dias_semana == "SEXTA FEIRA"){
				$("#corpo-tabela5").append("<tr><td>"+json[i].nome+"</td><td>"+json[i].ds_disciplina+"</td><td>"+json[i].hora_inicial+"</td><td>"+json[i].hora_final+"</td></tr>");
			}
			
		}
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}

function mensagemEmail(){
	
	var p1 = $("#p1 option:selected").val();
	var p2 = $("#p2").val();
	var p3 = $("#p3").val();
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "10",
		token: token_user,
		p1: p1,
		p2: p2,
		p3: p3
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		for (var i = 0; i < json.length; i++) {             
			if(json[i].result == "true"){
				alert(json[i].p1);
				$("#modal").modal("hide");
			}	
			else{
				alert(json[i].p1);
			}
		}
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
		alert("Erro" + errorThrown);
	}
  });
	
	  
}

function saudeAluno(){
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "11",
		token: token_user
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#corpo-tabela").html("");
		for(var i = 0; i < json.length; i++){
			$("#corpo-tabela").append("<tr class='titulo'><td colspan='2'>Plano</td></tr><tr><td>Numero do Plano</td><td>Medico</td></tr><tr><td>"+json[i].plano_saude+"</td><td>"+json[i].medico+"</td></tr><tr class='titulo'><td colspan='2'>Alergia</td></tr><tr><td colspan='2'>Medicamento</td></tr><tr><td colspan='2'>"+json[i].ale_medicamento+"</td></tr><tr><td colspan='2'>Alimento</td></tr><tr><td colspan='2'>"+json[i].ale_alimento+"</td></tr><tr><td colspan='2'>Outro</td></tr><tr><td colspan='2'>"+json[i].ale_outros+"</td></tr><tr><td colspan='2'>Outras Substancias</td></tr><tr><td colspan='2'>"+json[i].ale_substancia+"</td></tr><tr class='titulo'><td colspan='2'>Em caso de febre</td></tr><tr><td colspan='2'>Medicamento</td></tr><tr><td colspan='2'>"+json[i].feb_medicamento+"</td></tr><tr><td colspan='2'>Dosagem</td></tr><tr><td colspan='2'>"+json[i].dosagem+"</td></tr><tr class='titulo'><td colspan='2'>Mais informações</td></tr><tr><td colspan='2'>Possui doença congenita ?</td></tr><tr><td colspan='2'>"+json[i].doenca_congenita+"</td></tr><tr><td colspan='2'>Qual doença contagiosa ja possuiu ?</td></tr><tr><td colspan='2'>"+json[i].doenca_contagiosa+"</td></tr><tr><td colspan='2'>Possui alguma nescessidade especial ?</td></tr><tr><td colspan='2'>"+json[i].nec_especial+"</td></tr><tr><td colspan='2'>Faz algum tipo de tratamento ?</td></tr><tr><td colspan='2'>"+json[i].tratamento+"</td></tr><tr><td colspan='2'>Em caso de emergência levar para qual hospital ?</td></tr><tr><td colspan='2'>"+json[i].hospital+"</td></tr><tr class='titulo'><td colspan='2'>Contato de Emergencia</td></tr><tr><td>Nome 1</td><td>Parentesco 1</td></tr><tr><td>"+json[i].emenome1+"</td><td>"+json[i].emeparente1+"</td></tr><tr><td colspan='2'>Telefone 1</td></tr><tr><td colspan='2'>"+json[i].telefone1+"</td></tr><tr><td>Nome 2</td><td>Parentesco 2</td></tr><tr><td>"+json[i].emenome2+"</td><td>"+json[i].emeparente2+"</td></tr><tr><td colspan='2'>Telefone 2</td></tr><tr><td colspan='2'>"+json[i].emetelefone2+"</td></tr>");
		}
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
	
}

function ocorrencia(){
	
	var p2 = $("#opcaoano option:selected").val();
	$("#corpo-tabela").html("BUSCANDO");
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "13",
		token: token_user,
		p1: "-1",
		p2: p2
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#corpo-tabela").html("");
		for (var i = 0; i < json.length; i++) {             
			$("#corpo-tabela").append("<tr onClick='abrir_ocorrencia("+json[i].id_ocorrencias+", "+json[i].ano+")'><td><span class='float-right font-weight-bold'>"+convert_banco_data(json[i].data_corroencia)+"</span>"+json[i].titulo+"</td></tr>");		
		}
		if(json.length == ""){
			$("#if").append("<p align='center'>Não possui</p>");
		}
		
				
		
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}

function abrir_ocorrencia(id_ocorrencia, ano){
	location.href="ocorrencia-aberta.html?id_ocorrencia="+id_ocorrencia+"&ano="+ano;
}

function get_ocorrencia(){
	var p1 = GetURLParameter("id_ocorrencia");
	var p2 = GetURLParameter("ano");
	$.ajax({            
		url: xurlq,
		data: {					
		s: "13",
		token: token_user,
		p1: p1,
		p2: p2
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {

		
		for (var i = 0; i < json.length; i++) {			
			$(".data-ocorrencia").html(convert_banco_data(json[i].data_corroencia));
			$(".titulo-ocorrencia").html(json[i].titulo);
			$(".infracao-ocorrencia").html(json[i].tipo);
			$(".nivel-ocorrencia").html(json[i].nivel);
			$(".descricao-ocorrencia").html(json[i].ocorrencia);
			$(".arquivo-ocorrencia").html(json[i].arquivo_ocorrencia);
					
		}	
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);	
	}
  });
}

function lista_atendimento(){
	
	//var p2 = $("#opcaoano option:selected").val();
	p1 = $("table tr").attr("value");
	$("#corpo-tabela").html("BUSCANDO");
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "15",
		token: token_user,
		p1: "-1"
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#corpo-tabela").html("");
		for (var i = 0; i < json.length; i++) {             
			$("#corpo-tabela").append("<tr data-toggle='modal' data-target='#modalMensagem"+json[i].id_atendimento+"'><td>"+json[i].atendimento+"</td></tr>");
			
			
			$("#modal-eviados").append("<div class='modal fade' id='modalMensagem"+json[i].id_atendimento+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'><div class='modal-dialog modal-dialog-centered' role='document'><div class='modal-content'><div class='modal-body'><div class='card mt-3'><div class='card-body'><div class='media mb-3'><div class='media-body'><span class='media-meta float-right'>DATA ENVIADA</span><small class='text-muted'>Para: "+json[i].setor+"</small></div></div> <p><b>"+json[i].tipo+"</b></p><p>"+json[i].assunto+"</p><button id='btn-fechar' type='button' class='btn btn-secundary waves-effect waves-light m-1' data-dismiss='modal' style='float: right;'><i class='fa fa-close'></i> Fechar</button></div></div></div></div></div></div>");
			
		}
		if(json.length == ""){
			$("#if").append("<p align='center'>Não possui</p>");
		}
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}

function lista_calendario_escolar(){
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "16",
		token: token_user
		
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		
		for (var i = 0; i < json.length; i++) { 
			$("#evntos_adicionados").append("<div class='card'><section class='cd-timeline js-cd-timeline p-3'><div class='cd-timeline__container'><div class='cd-timeline__block js-cd-block'><div class='cd-timeline__img cd-timeline__img--picture js-cd-img'><img src='assets/images/timeline/cd-icon-picture.svg' alt='Picture'></div> <div class='cd-timeline__content js-cd-content'><h5>"+json[i].texto+"</h5><p>"+json[i].texto+"</p></a><span class='cd-timeline__date'>"+convert_banco_data(json[i].start)+"</span></div></div></div></section> </div>");
			
		}
		//preencher_calendario_escolar();
		if(json.length == ""){
			//$("#if").append("<p align='center'>Não possui</p>");
		}
		
				
		
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}

function get_dados_calendario_escolar(){
	
	localStorage.setItem("dt_json_evt_calendario", "[]");
	localStorage.setItem("data_atual", "0")
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "14",
		token: token_user
		
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		
		for (var i = 0; i < json.length; i++) { 
			localStorage.setItem("dt_json_evt_calendario", JSON.stringify(json, null, 0));
			localStorage.setItem("data_atual", json[i].dt_atual)
			
		}
		preencher_calendario_escolar();
		if(json.length == ""){
			//$("#if").append("<p align='center'>Não possui</p>");
		}
		
				
		
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}

function disciplinaCheckBox(){
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "9",
		token: token_user
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		for (var i = 0; i < json.length; i++){
			$("#form-check").append("<div class='form-check'><input class='form-check-input' type='checkbox' value='"+json[i].id_disciplina+"' name='escolha-materia' id='"+json[i].id_disciplina+"'><label class='form-check-label' for='"+json[i].id_disciplina+"'>"+json[i].ds_disciplina+"</label></div>");
		}
		
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
}

function testeConhecimento(){
	listaidmat = "";
	virg_idmat = "";
	$("input[type=checkbox][name='escolha-materia']:checked").each(
		function(){
			if(listaidmat!==""){
			   virg_idmat = ",";
			}
			listaidmat = listaidmat+virg_idmat+$(this).val();

		}
	);  
	
	if(listaidmat == ""){
		alert("Selecione uma Materia");
		return false;
	}
	
	//console.log(listaidmat);
	var p2 = localStorage.getItem("perguntasFeitas");
	
	if(p2 == null){
		p2 = "-1";
	}
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "12",
		token: token_user,
		p1: listaidmat,
		p2: p2
		
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {

		$("#escolhas").hide();
		$("#perguntas").show();
		
		var count = 1;
		
		
		if(localStorage.getItem("acerto_erro_perguntasFeitas_tp_1") == null){
			$("#count_acertos").html("Acertos: 0");
		}else{
			$("#count_acertos").html("Acertos: "+localStorage.getItem("acerto_erro_perguntasFeitas_tp_1")+ "<i class='fa fa-check ml-2'></i>");
		}
		
		
		if(localStorage.getItem("acerto_erro_perguntasFeitas_tp_2") == null){
			$("#count_erros").html("Erros: 0");
		}else{
			$("#count_erros").html("Erros: "+localStorage.getItem("acerto_erro_perguntasFeitas_tp_2")+ "<i class='fa fa-times ml-2'></i>");
		}
		
		$("#card-pai").html("");
		for (var i = 0; i < json.length; i++) {

			$("#card-pai").append("<div class='card' id='materia'><div class='card-header'>"+json[i].ds_disciplina+"</div><div class='card-body'><div class='p-2'><p> <span class='id-questao'>Questão "+count+"</span><br><br>"+json[i].pergunta+"</p><br><div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios"+count+"' id='exampleRadios1"+count+"' value='1'><label class='form-check-label  lb_1' for='exampleRadios1"+count+"'>"+json[i].resposta1+"</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios"+count+"' id='exampleRadios2"+count+"' value='2'><label class='form-check-label lb_2' for='exampleRadios2"+count+"'>"+json[i].resposta2+"</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios"+count+"' id='exampleRadios3"+count+"' value='3'><label class='form-check-label lb_3' for='exampleRadios3"+count+"'>"+json[i].resposta3+"</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios"+count+"' id='exampleRadios4"+count+"' value='4'><label class='form-check-label lb_4' for='exampleRadios4"+count+"'>"+json[i].resposta4+"</label></div><div class='form-check'><input class='form-check-input' type='radio' name='exampleRadios"+count+"' id='exampleRadios5"+count+"' value='5'><label class='form-check-label lb_5' for='exampleRadios5"+count+"'>"+json[i].resposta5+"</label></div></div></div></div><div class='ml-3' id='corp'></div><div align='center'><button type='button' name='button' id='btn-valor' class='btn btn-primary mb-2' value="+json[i].respoesta_correta+" onClick='mostrar_acerto_erro();' >Concluir</button></div></div></div>");
	
			set_pegunta_feita(json[i].id_teste_conhecimento);
		
			
		
		}
		
		if(json.length == ""){
			$("#card-pai").append("<p align='center'>Não possui perguntas</p>");
			setTimeout(setaVoltar, 2000);
			
		}
	
			count++;

	
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}
				
function mostrar_acerto_erro() {
 var vMostrar = $('input:radio:checked').val();
 var botao = $('#btn-valor').val();

	if(vMostrar == botao){

		$("#corp").html("<div id='acerto' class='mt-3'><p>Acertou !</p></div>");
		$('.form-check .form-check-label').css('color', '#6b6b6b');		
		$('.lb_'+botao).css('color', 'green');
		set_qtd_acerto_erro("1");
		setTimeout(testeConhecimento, 5000);
		return false;


	}
	if(vMostrar !== botao){
		
		$('.form-check .form-check-label').css('color', '#6b6b6b');		
		$('.lb_'+$('input[type=radio]:checked').val()).css('color', 'red');
		set_qtd_acerto_erro("2");
		$('.lb_'+botao).addClass('lb_g');
		$('.lb_'+botao).css('color', 'green');
		setTimeout(testeConhecimento, 5000);
		return false;
	}

}

function set_qtd_acerto_erro(tpqtd){
	
		
	if(parseInt(tpqtd) == parseInt("1")){
		
		var listperguntas = localStorage.getItem("acerto_erro_perguntasFeitas_tp_1");
		
		if(listperguntas == null){
			localStorage.setItem("acerto_erro_perguntasFeitas_tp_1", "0");
			return set_qtd_acerto_erro(tpqtd);
		}
		
	   	localStorage.setItem("acerto_erro_perguntasFeitas_tp_1", 	parseInt(listperguntas)+1);
		$("#count_acertos").html("Acertos: "+localStorage.getItem("acerto_erro_perguntasFeitas_tp_1")+"<i class='fa fa-check ml-2'></i>");
		return false;
	}
	if(parseInt(tpqtd) == parseInt("2")){
		
		var listperguntas = localStorage.getItem("acerto_erro_perguntasFeitas_tp_2");
		
		if(listperguntas == null){
			localStorage.setItem("acerto_erro_perguntasFeitas_tp_2", "0");
			return set_qtd_acerto_erro(tpqtd);
		}
		
	   	localStorage.setItem("acerto_erro_perguntasFeitas_tp_2", parseInt(listperguntas)+1);
		$("#count_erros").html("Erros: "+localStorage.getItem("acerto_erro_perguntasFeitas_tp_2")+"<i class='fa fa-times' ml-2></i>");
		return false;
	}
	
}

function set_pegunta_feita(idperg){
	
	var listperguntas = localStorage.getItem("perguntasFeitas");
	
	var virg_perg = "";
	
	if(listperguntas == null){
	   	localStorage.setItem("perguntasFeitas", "");
		return set_pegunta_feita(idperg);
	}
	
	if(listperguntas !== ""){
	   virg_perg = ",";
	}
	
	localStorage.setItem("perguntasFeitas", listperguntas+virg_perg+idperg);
}

function setaVoltar(){
	$("#escolhas").show();
	$("#perguntas").hide();
	//$("#materia").empty();
}

function get_dados_grafico_financeiro(){
	
	p1 = $("#opcaoano option:selected").val();
			
	$.ajax({            
		url: xurlq,
		data: {					
		s: "17",
		token: token_user,
		p1: p1
		
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		var total_i = 0;
		
		for (var i = 0; i < json.length; i++) { 
			
			total_i = parseInt(json[i].aberto)+parseInt(json[i].pago);
			
			var p_pagto  = (parseInt(json[i].pago)*100)/total_i;
			var p_aberto = (parseInt(json[i].aberto)*100)/total_i;
						
			var c3DonutChart = c3.generate({
				bindto: '#c3-financeiro',
				data: {
				  columns:[
					  ['Pago', p_pagto],
					  ['Aberto', p_aberto],
				  ]
					,
					type:'donut'
				},
				color: {
					pattern: ['#15ca20','#fd3550']
				},
				padding: {
					top: 0,
					right:0,
					bottom:30,
					left: 0,
				},
				donut: {
				  title: "Financeiro"
				}
			  });
			
		}

		if(json.length == ""){
			$("#if").append("<p align='center'>Não possui</p>");
		}
		
				
		
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}

function lista_serie_disciplina(){
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "19",
		token: token_user
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		for (var i = 0; i < json.length; i++){
			$("#opcaoid").append("<option value='"+json[i].id_serie_disciplina+"'>"+json[i].ds_disciplina+"</option>");
		}
		
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
}

function arquivo(){
	p1 = $("#opcaoid option:selected").val();
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "18",
		token: token_user,
		p1: p1
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#table-biblioteca").append("");
		for (var i = 0; i < json.length; i++){
			$("#table-biblioteca").append("<tr><td>"+json[i].nome_arquivo+"</td></tr>");
		}
		if(json.length == ""){
			$("#if").append("<p align='center'>Não possui</p>");
		}
		
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
}

function setor_atendimento(){
	$.ajax({            
		url: xurlq,
		data: {					
		s: "20"
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {

		
		for (var i = 0; i < json.length; i++){
			$("#setor").append("<option value='"+json[i].id_atendimento_setor+"'>"+json[i].descricao+"</option>");
		}
		
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
}

function tipo_atendimento(){
	$.ajax({            
		url: xurlq,
		data: {					
		s: "21"
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		for (var i = 0; i < json.length; i++){
			$("#tipo").append("<option value='"+json[i].id_atendimento_tipo+"'>"+json[i].descricao+"</option>");
		}
		
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);

	}
  });
}


function inserir_atendimento(){
	
	p1 = $("#setor option:selected").val();
	p2 = $("#tipo option:selected").val();
	p3 = $("#assunto").val();
	p4 = $("#data").val();
	p5 = $("#descricao").val();
	p6 = " ";
	
	console.log(p1);
	console.log(p2);
	console.log(p3);
	console.log(p4);
	console.log(p5);
	console.log(p6);
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}
	
	$.ajax({            
		url: xurlq,
		data: {					
		s: "22",
		token: token_user,
		p1: p1,
		p2: p2,
		p3: p3,
		p4: p4,
		p5: p5,
		p6: p6
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#mensagem").modal();
		
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		//alert("Erro" + errorThrown);

	}
  });
}

function conteudo_programatico(){
	
	if(token_user+"" == "null"){
	  	location.href="login.html";
		return false;
	}

	$.ajax({            
		url: xurlq,
		data: {					
		s: "23",
		token: token_user
	},
	dataType: "json",
	type: "POST",
	timeout:  6000,
	success: function(json) {
		
		$("#conteudo").html("");
		for (var i = 0; i < json.length; i++) { 
			
			if(json[i].ds_disciplina == json[i].ds_disciplina){
				
				$("#conteudo").html("<div class='card'><div class='card-header' align='center'>"+json[i].ds_disciplina+"</div><div class='card-body' id='corpo'>");
				
				if(json[i].ds_trimestre == "1º UNIDADE"){
					$("#corpo").html("<h6>"+json[i].ds_trimestre+"</h6>")
					for(var i = 0; i < json.length; i++){
						$("#corpo").append("<ul><li>"+json[i].ds_ementa_disciplina+"</li></ul>");
					}
					
				}
				if(json[i].ds_trimestre == "2º UNIDADE"){
					$("#corpo").html("<h6>"+json[i].ds_trimestre+"</h6>")
					for(var i = 0; i < json.length; i++){
						$("#corpo").append("<ul><li>"+json[i].ds_ementa_disciplina+"</li></ul>");
					}
					
				}
				if(json[i].ds_trimestre == "3º UNIDADE"){
					$("#corpo").html("<h6>"+json[i].ds_trimestre+"</h6>")
					for(var i = 0; i < json.length; i++){
						$("#corpo").append("<ul><li>"+json[i].ds_ementa_disciplina+"</li></ul>");
					}
					
				}
				if(json[i].ds_trimestre == "4º UNIDADE"){
					$("#corpo").html("<h6>"+json[i].ds_trimestre+"</h6>")
					for(var i = 0; i < json.length; i++){
						$("#corpo").append("<ul><li>"+json[i].ds_ementa_disciplina+"</li></ul>");
					}
					
				}
			
				
			}
			
			
					
		}
		if(json.length == ""){
			$("#if").append("<p align='center'>Não possui</p>");
		}
		
				
		
			
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {

		alert("Erro" + errorThrown);
	}
  });
}










