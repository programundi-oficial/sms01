$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2018-03-12',
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
      events: [
        {
          title: 'SUPER AULÃO - PROF. SILVA',
		  url: 'http://google.com/',
          start: '2018-03-01T14:00:00',
		  end: '2018-03-01T17:00:00'
        },
        {
          title: 'PASSEIO ESCOLAR',
		  url: 'http://google.com/',
          start: '2018-03-07',
          end: '2018-03-07'
        },
        {
          title: 'PROVA - GEOGRAFIA',
          url: 'http://google.com/',
          start: '2018-03-28T10:00:00',
		  end: '2018-03-28T12:30:00'
        }
      ]
    });

  });