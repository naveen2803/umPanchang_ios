var args = arguments[0] || {};
var d = new Date(args.date);

$.lblSelectedDate.text = d.getDate() + " " + getMonthName(d.getMonth()) + ", " + d.getFullYear() ;

function onAddToCalendar()
{
	if(Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED) 
	{
	    addEventToCalecdar(d);
	} 
	else 
	{
	    Ti.Calendar.requestEventsAuthorization(function(e)
	    {
            if (e.success) 
            {
                addEventToCalecdar(d);
            } 
            else 
            {
                displayAlert("Access to calendar is not allowed", "Need permission");
            }
        });
	}
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
		var calendar = Ti.Calendar.defaultCalendar;
		
		var eventYear = parseInt(d.getFullYear());
		var eventMonth = parseInt(d.getMonth());
		var eventDate = parseInt(d.getDate());
		var existingEvents = calendar.getEventsInDate( eventYear, eventMonth + 1, eventDate );
		
		var doEventExist = false;
		for(var i = 0;  i < existingEvents.length; i++)
		{
			if( existingEvents[i].notes ==  $.taCustomEvent.value
				&& existingEvents[i].title == "UM Panchanga")
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
			    notes: $.taCustomEvent.value,
			    begin: eventBegins,
			    end: eventEnds,
			    allDay: true
			};
		
			var event = calendar.createEvent(details);
			event.save(Ti.Calendar.SPAN_THISEVENT);
			displayAlert("Event added to calendar", "Success");
		}
		else
			displayAlert("Event already exists", "Duplicate entry");
			
		closeWindow();
	}
	else
	{
		displayAlert("Please enter description", "Invalid data");
	}
}

function displayAlert(alertMessage, alertTitle)
{
	var dialog = Ti.UI.createAlertDialog({
	    message: alertMessage,
	    ok: 'OK',
	    title: alertTitle
	  });
	  dialog.show();
}

function closeWindow()
{
	$.winCustomEvent.close();
}
