var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
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
function teste_click(){
	alert("aquiiiii");
}
/*
var app = {
sendSms: function() {
	var number = document.getElementById('numberTxt').value.toString(); 
	var message = document.getElementById('messageTxt').value;
	console.log("number=" + number + ", message= " + message);

	//CONFIGURATION
	var options = {
		replaceLineBreaks: false, // true to replace \n by a new line, false by default
		android: {
			intent: 'INTENT'  // send SMS with the native android SMS messaging
			//intent: '' // send SMS without open any other app
		}
	};

	var success = function () { alert('Message sent successfully'); };
	var error = function (e) { alert('Message Failed:' + e); };
	sms.send(number, message, options, success, error);
}
};
*/
var app = {
    checkSMSPermission: function() {
        var success = function (hasPermission) { 
            if (hasPermission) {
                alert("aqui enviar");
            }
            else {
                // show a helpful message to explain why you need to require the permission to send a SMS
                // read http://developer.android.com/training/permissions/requesting.html#explain for more best practices
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    },
    requestSMSPermission: function() {
        var success = function (hasPermission) { 
            if (!hasPermission) {
                sms.requestPermission(function() {
                    alert('[OK] Permission accepted')
                }, function(error) {
                    alert('[WARN] Permission not accepted')
                    // Handle permission not accepted
                })
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    }
};

app.initialize();