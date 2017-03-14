var args = arguments[0] || {};

var GET_VIDEOS_SERVICE = "http://www.pavamana.com/services/umPanchang/getVideos.php";
var selectedItem;
var webview;
var buttons;

function getVideos()
{
	showPageLoader();
	
	var xhr=Titanium.Network.createHTTPClient();    
	xhr.onerror = function(e) { 
		displayAlert("Error", "Bad Server, Please try again!");
		Ti.API.info(e);
		hidePageLoader();
	};
	 
	xhr.open("GET",GET_VIDEOS_SERVICE);
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send();
	xhr.onload = function() {
		hidePageLoader();
		Ti.API.info(this.responseText);
		if(this.status == '200') {
			if(this.readyState == 4) {
				alert(this.responseText);
	  			var response = JSON.parse(this.responseText);
	  			createListData(response);
	  			alert("hi");
			}
			else {
	  			displayAlert("Error", "Bad Server, Please try again!"); 
	  			Ti.API.info(this.responseText);
			}           
		}
		else {
			displayAlert("Error", "Bad Server, Please try again!");
			Ti.API.info(this.responseText);
		}              
	};
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

function createListData(result)
{
	var listData = [];
	for(var i = 0; i < result.length; i++)
	{
		var obj = result[i];
		var guidArray = obj.videoLink.split('?v=');
	    var guid = guidArray[1];
	    	guid = guid.split("&")[0];
	    	
		listData.push({	
						lblDesc: {
							text: obj.videoDesc
						},
						lblName: {
							text: obj.videoName
						},
						properties: {
							searchableText: obj.videoName,
							vYear: obj.availableDate.split('_')[2],
							vMonth: obj.availableDate.split('_')[1],
							vDate: obj.availableDate.split('_')[0],
							videoURL: obj.videoLink,
							videoId : guid,
							videoAvailable: obj.available
						}
					});	
					
	}
	var section1 = Ti.UI.createListSection();
	section1.items = listData;
	$.vlist.sections = [section1];
}

function itemClickHandler(e)
{
	selectedItem = $.vlist.sections[e.sectionIndex].items[e.itemIndex];
	if(selectedItem.properties.videoAvailable == "Y")
	{
		var videoPlayerWin = Alloy.createController('VideoPlayerView',{videoLink: selectedItem.properties.videoURL, videoId: selectedItem.properties.videoId}).getView();	
		videoPlayerWin.open({animated: true});
	}
	else
	{
		addToCalendar();
	}
}

function addToCalendar()
{
	if(Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED) 
	{
	    addEventToCalecdar();
	} 
	else 
	{
	    Ti.Calendar.requestEventsAuthorization(function(e)
	    {
            if (e.success) 
            {
                addEventToCalecdar();
            } 
            else 
            {
                displayAlert("Access to calendar is not allowed", "Need permission");
            }
        });
	}
}

function addEventToCalecdar()
{	
	var calendar = Ti.Calendar.defaultCalendar;
	
	// check for duplicate entry
	var eventYear = parseInt(selectedItem.properties.vYear);
	var eventMonth = parseInt(selectedItem.properties.vMonth);
	var eventDate = parseInt(selectedItem.properties.vDate);
	var existingEvents = calendar.getEventsInDate( eventYear, eventMonth, eventDate );
	var doEventExist = false;
	for(var i = 0;  i < existingEvents.length; i++)
	{
		if( existingEvents[i].notes ==  selectedItem.properties.searchableText
			&& existingEvents[i].title == "UM Panchanga - Videos")
		{
			doEventExist = true;
			break;
		}
	}	
	if(!doEventExist)
	{
	// Create the event
	var eventBegins = new Date(eventYear, eventMonth-1, eventDate);
	var eventEnds = new Date(eventYear, eventMonth-1, eventDate);
	var details = {
	    title: 'UM Panchanga - Videos',
	    notes: selectedItem.properties.searchableText,
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
}


/**
 * @AUTHOR			- NAVEEN MALHOTRA
 * @CREATED DATE	- 11 MAY, 2015
 * @DESCRIPTION		- DISPLAY PAGE LOADER
 */
function showPageLoader()
{
	$.actIndBack.visible = true;
	$.actInd.show();
}

/**
 * @AUTHOR			- NAVEEN MALHOTRA
 * @CREATED DATE	- 11 MAY, 2015
 * @DESCRIPTION		- HIDE PAGE LOADER
 */
function hidePageLoader()
{
	$.actIndBack.visible = false;
	$.actInd.hide();
}

function closeWin()
{
	$.winVideos.close();
}