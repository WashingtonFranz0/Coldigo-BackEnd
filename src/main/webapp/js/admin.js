//Cria o objeto COLDIGO, que será usado como identificador do projerto
COLDIGO = new Object();

$(document).ready(function() {
	$("header").load("/ProjetoTrilhaWeb/pages/admin/general/header.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/admin/general/footer.html");

	//Função para carregament de páginas de conteúdo, que 
	//recebe como parâmetro o nome da pasta com a página a ser carregada
	COLDIGO.carregaPagina = function(pagename){
		//Limpa a tag section, excluindo todo o conteúdo de dentro dela
		$("section").empty();
		//Carrega a página solicitada dentro da tag section
		$("section").load(pagename+"/", function(response, status, info) {
			if (status == "error") {
				var msg = "Houve um erro ao encontrar a página" + info.status + " - " + info.statusText;
				$("section").html(msg);
			}
		});
	}

//Define  as configurações base de uma modal de aviso
	COLDIGO.exibirAviso = function(aviso){
		var modal = {
			title: "Mensagem",
			height: 250,
			width: 400,
			modal: true,
			buttons: {
				"OK": function(){
					$(this).dialog("close");
				}
			}
		};
		$("#modalAviso").html(aviso);
		$("#modalAviso").dialog(modal);
	}; 
	
});



