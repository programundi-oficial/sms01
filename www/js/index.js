var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function teste_rodando(){
	alert("antes rodar");
	teste = cordova.plugins.backgroundMode.isActive();
	alert("rodando "+teste);	
}
function teste_ativar(){
	alert("antes ativado");
	cordova.plugins.backgroundMode.setEnabled(true);
	alert("ativado");	
}
function data_atual(){
    data = new Date();
	
	segu = data.getSeconds();
	minu = data.getMinutes();
	hora = data.getHours();
    dia = data.getDate();
    mes = data.getMonth();
    ano = data.getFullYear();
    mes = mes + 1;
    if(dia <= 9){dia = "0"+dia;}
    if(mes <= 9){mes = "0"+mes;}    
    return dia+"/"+mes+"/"+ano+" "+hora+":"+minu+":"+segu;
}
function add_lista(){
	$("#lista_teste").append("<tr><td>rodando</td><td>"+data_atual()+"</td></tr>");
	setTimeout(add_lista,5000);
}
app.initialize();