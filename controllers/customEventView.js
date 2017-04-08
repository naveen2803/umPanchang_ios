var args = arguments[0] || {};
var d = new Date(args.date);

$.lblSelectedDate.text = d.getDate() + " " + getMonthName(d.getMonth()) + ", " + d.getFullYear() ;

function onAddToCalendar()
{
	addEventToCalecdar(d);
}

function getMonthName(monthNumber)
{
	switch(monthNumber)
	{
		case 0:
			return "January";
		case 1:
			return "February";
		case 2:
			return "March";
		case 3:
			return "April";
		case 4:
			return "May";
		case 5:
			return "June";
		case 6:
			return "July";
		case 7:
			return "August";
		case 8:
			return "September";
		case 9:
			return "October";	
		case 10:
			return "November";
		case 11:
			return "December";		
										
	}
}

function addEventToCalecdar(d)
{
	if($.taCustomEvent.value != "")
	{
		var selectableCalendars = Ti.Calendar.allCalendars;
		var CALENDAR_TO_USE = selectableCalendars[0].id;
		var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);
		
		var eventYear = parseInt(d.getFullYear());
		var eventMonth = parseInt(d.getMonth());
		var eventDate = parseInt(d.getDate());
		var existingEvents = calendar.getEventsInDate( eventYear, eventMonth, eventDate );
		
		var doEventExist = false;
		for(var i = 0;  i < existingEvents.length; i++)
		{
			if( existingEvents[i].description ==  $.taCustomEvent.value)
			{
				doEventExist = true;
				break;
			}
		}
		
		if(!doEventExist)
		{
			// Create the event
			var eventBegins = new Date(eventYear, eventMonth, eventDate, 10, 0, 0);
			var eventEnds = new Date(eventYear, eventMonth, eventDate, 14, 0, 0);
			var details = {
			    title: 'UM Panchanga',
			    description: $.taCustomEvent.value,
			    begin: eventBegins,
			    end: eventEnds
			};
		
			var event = calendar.createEvent(details);
		}
		
		showToast("Event added to calendar");
		closeWindow();
	}
	else
	{
		showToast("Please enter description");
	}
}

function showToast(toastMessage)
{
	var toast = Ti.UI.createNotification({
	    message: toastMessage,
	    duration: Ti.UI.NOTIFICATION_DURATION_LONG
	});
	toast.show();
}

function closeWindow()
{
	$.winCustomEvent.close();
}
