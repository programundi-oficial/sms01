// JavaScript Document

$(document).ready(function() {

    $('#calendar').fullCalendar({
  defaultView: 'agendaWeek',
		editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: 'PROVA - PORTUGUÊS',
		  url: 'http://google.com/',
          start: '2018-10-10T07:20:00',
		  end: '2018-10-10T09:20:00',
			
        },
        
        {
          title: 'PROVA - GEOGRAFIA',
          url: 'http://google.com/',
          start: '2018-10-10T09:20:00',
		  end: '2018-10-10T11:20:00'
        }
      ]
});

  });