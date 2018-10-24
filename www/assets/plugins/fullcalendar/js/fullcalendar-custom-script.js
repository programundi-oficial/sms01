$(document).ready(function() {

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2018-10-23',
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
          title: 'TREINO PERNA',
		  url: '?treino=1',
          start: '2018-10-23T14:00:00',
		  end: '2018-10-23T15:00:00'
        },
        {
          title: 'TREINO BRAÇO',
		  url: '?treino=2',
          start: '2018-10-24T14:00:00',
		  end: '2018-10-24T15:00:00'
        }, 
		{
          title: 'TREINO TAL',
		  url: '?treino=4',
          start: '2018-10-25T14:00:00',
		  end: '2018-10-25T15:00:00'
        }, 
		{
          title: 'TREINO TAL',
		  url: '?treino=4',
          start: '2018-10-26T14:00:00',
		  end: '2018-10-26T15:00:00'
        }
      ]
    });

  });