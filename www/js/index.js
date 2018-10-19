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

var id = 1, dialog;

callback = function () {
	cordova.plugins.notification.local.getIds(function (ids) {
		showToast('IDs: ' + ids.join(' ,'));
	});
};

showToast = function (text) {
	setTimeout(function () {
		if (device.platform != 'windows') {
			window.plugins.toast.showShortBottom(text);
		} else {
			showDialog(text);
		}
	}, 100);
};

showDialog = function (text) {
	if (dialog) {
		dialog.content = text;
		return;
	}

	dialog = new Windows.UI.Popups.MessageDialog(text);

	dialog.showAsync().done(function () {
		dialog = null;
	});
};

 hasPermission = function () {
cordova.plugins.notification.local.hasPermission(function (granted) {
	showToast(granted ? 'Yes' : 'No');
});
};

registerPermission = function () {
cordova.plugins.notification.local.registerPermission(function (granted) {
	showToast(granted ? 'Yes' : 'No');
});
};

schedule = function () {
cordova.plugins.notification.local.schedule({
	id: 1,
	text: 'Test Message 1',
	icon: 'http://3.bp.blogspot.com/-Qdsy-GpempY/UU_BN9LTqSI/AAAAAAAAAMA/LkwLW2yNBJ4/s1600/supersu.png',
	smallIcon: 'res://cordova',											
	badge: 1,
	data: { test: id }
});
};

scheduleMultiple = function () {
cordova.plugins.notification.local.schedule([{
	id: 1,
	text: 'Multi Message 1',
	icon: 'res://cordova'
}, {
	id: 2,
	text: 'Multi Message 2',
	icon: 'res://icon',
	smallIcon: 'ic_media_play'
}, {
	id: 3,
	text: 'Multi Message 3',
	icon: 'res://icon',
	smallIcon: 'ic_media_pause'
}]);
};

scheduleDelayed = function () {
var now = new Date().getTime(),
	_5_sec_from_now = new Date(now + 5 * 1000);

var sound = device.platform == 'Android' ? 'file://sound.mp3' : 'file://beep.caf';

cordova.plugins.notification.local.schedule({
	id: 1,
	title: 'Scheduled with delay',
	text: 'Test Message 1',
	at: _5_sec_from_now,
	sound: sound,
	badge: 12
});
};

scheduleMinutely = function () {
var sound = device.platform == 'Android' ? 'file://sound.mp3' : 'file://beep.caf';

cordova.plugins.notification.local.schedule({
	id: 1,
	text: 'Scheduled every minute',
	every: 'minute',
	sound: sound,
	icon: 'res://icon',
	smallIcon: 'res://ic_popup_sync'
});
};
app.initialize();