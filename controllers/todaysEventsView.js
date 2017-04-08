var args = arguments[0] || {};
var listItems = [];


function loadList(e)
{
	var events = args.events;
	
	for (var i = 0; i < events.length; i++) 
	{
		listItems.push({				
						lblType: {text: events[i].type},
						lblName: {text: events[i].name},
						properties: { 
							height: Ti.UI.SIZE,
							searchableText: events[i].name,
							eventDate: events[i].eventDate,
							eventMonth: events[i].eventMonth,
							eventlat: events[i].lat,
							eventlng: events[i].lng,
							eventYear: events[i].eventYear,
							eventType: events[i].type
						}					
				});	
	}
	
	var section = Ti.UI.createListSection();
	section.items = listItems;
	$.eventlist.sections = [section];
	
	var title = args.titleLabel;
	$.winTodaysEvent.title = title;
}

function itemClickHandler(e)
{
	selectedItem = $.eventlist.sections[e.sectionIndex].items[e.itemIndex];
	if($.eventlist.sections[e.sectionIndex].items[e.itemIndex].properties.eventType == "Aradhane")
	{
		$.dialogAradhane.title = $.eventlist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.eventDate + "/" + selectedItem.properties.eventMonth + "/" + selectedItem.properties.eventYear + ")";
		$.dialogAradhane.selectedIndex = -1;
		$.dialogAradhane.show();
	}
	else
	{
		$.dialog.title = $.eventlist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.eventDate + "/" + selectedItem.properties.eventMonth + "/" + selectedItem.properties.eventYear + ")";
		$.dialog.selectedIndex = -1;
		$.dialog.show();
	}
}

function onOptionSelect(e)
{
	if(e.index == 0)
		addEventToCalecdar();
	if(e.index == 1)
		getDirections();
}

function getDirections()
{
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
	    if (e.error)
	    {
	        var dialog = Ti.UI.createAlertDialog({
			    message: 'Please turn on the GPS on your device',
			    ok: 'Ok',
			    title: 'Warning'
			  });
			 dialog.show();
	        return;
	    }
	 
	    var longitude = e.coords.longitude;
	    var latitude = e.coords.latitude;
	    var altitude = e.coords.altitude;
	    var heading = e.coords.heading;
	    var accuracy = e.coords.accuracy;
	    var speed = e.coords.speed;
	    var timestamp = e.coords.timestamp;
	    var altitudeAccuracy = e.coords.altitudeAccuracy;
	    
	    var address = "saddr=" + latitude + "," + longitude + "&daddr=" + selectedItem.properties.eventlat + "," + selectedItem.properties.eventlng;
	    var navigationURL = 'http://maps.google.com/maps?' + address;
	    Titanium.Platform.openURL(navigationURL);
	});
}

function addEventToCalecdar()
{
	var selectableCalendars = Ti.Calendar.allCalendars;
	var CALENDAR_TO_USE = selectableCalendars[0].id;
	var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);
	
	var eventYear = parseInt(selectedItem.properties.eventYear);
	var eventMonth = parseInt(selectedItem.properties.eventMonth)-1;
	var eventDate = parseInt(selectedItem.properties.eventDate);
	var existingEvents = calendar.getEventsInDate( eventYear, eventMonth, eventDate );
	
	var doEventExist = false;
	for(var i = 0;  i < existingEvents.length; i++)
	{
		if( existingEvents[i].description ==  selectedItem.properties.searchableText)
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
		    title: 'UM Panchanga Event',
		    description: selectedItem.properties.searchableText,
		    begin: eventBegins,
		    end: eventEnds
		};
	
		var event = calendar.createEvent(details);
	}
	
	showToast();
}

function showToast()
{
	var toast = Ti.UI.createNotification({
	    message:"Event added to calendar",
	    duration: Ti.UI.NOTIFICATION_DURATION_LONG
	});
	toast.show();
}

function closeWindow()
{
	$.winTodaysEvent.close();
}
