function preencher_calendario_escolar() {
	
	var eventos_json0 = localStorage.getItem("dt_json_evt_calendario");
	var eventos_json  = JSON.parse(eventos_json0);

	$('#calendar').fullCalendar({
	  header: {
		left: 'prev,next today',
		center: 'title',
		right: 'month,agendaWeek,agendaDay'
	  },
	  defaultDate: localStorage.getItem("data_atual"),
	  navLinks: true, // can click day/week names to navigate views
	  selectable: false,
	  selectHelper: true,
	  select: function(start, end) {
		var title = prompt('Event Title:');
		var eventData;
		if (title) {
		  eventData = {
			title: title,
			start: start,
			end: end
		  };
		  $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
		}
		$('#calendar').fullCalendar('unselect');
	  },
	  editable: false,
	  eventLimit: true, // allow "more" link when too many events
	  events: eventos_json
	});
};