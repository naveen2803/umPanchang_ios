var args = arguments[0] || {};

var tData;
var listItems1 = [];
var listItems2 = [];
var listItems3 = [];
var listItems4 = [];
var listItems5 = [];
var listItems6 = [];
var listItems7 = [];
var listItems8 = [];
var listItems9 = [];
var listItems10 = [];
var listItems11 = [];
var listItems12 = [];

(function() {
	var data = '[{"transId":1,"tDate":26,"tMonth":4,"tYear":2017,"Masa":"Chaitra","Paksha":"Krishna Paksha","tDay":"Wed","tithi":"Amavasya","description":"Darsha"},{"transId":2,"tDate":25,"tMonth":5,"tYear":2017,"Masa":"Vaishakha","Paksha":"Krishna Paksha","tDay":"Thu","tithi":"Amavasya","description":"Darsha"},{"transId":3,"tDate":23,"tMonth":6,"tYear":2017,"Masa":"Jestha","Paksha":"Krishna Paksha","tDay":"Fri","tithi":"Chaturdashi","description":"Darsha"},{"transId":4,"tDate":16,"tMonth":7,"tYear":2017,"Masa":"Ashada","Paksha":"Shukla Paksha","tDay":"Sun","tithi":"Saptami","description":"Dakshinayana Parva Kala"},{"transId":5,"tDate":23,"tMonth":7,"tYear":2017,"Masa":"Ashada","Paksha":"Krishna Paksha","tDay":"Sun","tithi":"Amavasya","description":"Darsha"},{"transId":6,"tDate":21,"tMonth":8,"tYear":2017,"Masa":"Shravana","Paksha":"Krishna Paksha","tDay":"Mon","tithi":"Chaturdashi","description":"Darsha"},{"transId":7,"tDate":6,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Wed","tithi":"Pratipada","description":"Paksha Masa Tarpana"},{"transId":8,"tDate":7,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Thu","tithi":"Dvitiya","description":"Paksha Masa Tarpana"},{"transId":9,"tDate":8,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Fri","tithi":"Tritiya","description":"Paksha Masa Tarpana"},{"transId":10,"tDate":9,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Sat","tithi":"Chaturthi","description":"Paksha Masa Tarpana"},{"transId":11,"tDate":10,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Sun","tithi":"Panchami","description":"Paksha Masa Tarpana"},{"transId":12,"tDate":11,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Mon","tithi":"Shashthi","description":"Paksha Masa Tarpana"},{"transId":13,"tDate":12,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Tue","tithi":"Saptami","description":"Paksha Masa Tarpana"},{"transId":14,"tDate":13,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Wed","tithi":"Ashtami","description":"Paksha Masa Tarpana"},{"transId":15,"tDate":14,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Thu","tithi":"Navami","description":"Paksha Masa Tarpana"},{"transId":16,"tDate":15,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Fri","tithi":"Dashami","description":"Paksha Masa Tarpana"},{"transId":17,"tDate":17,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Sun","tithi":"Dwadashi","description":"Paksha Masa Tarpana"},{"transId":18,"tDate":18,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Mon","tithi":"Triyodashi","description":"Paksha Masa Tarpana"},{"transId":19,"tDate":19,"tMonth":9,"tYear":2017,"Masa":"Bhadrapada","Paksha":"Krishna Paksha","tDay":"Tue","tithi":"Amavasya","description":"Paksha Masa Tarpana"},{"transId":20,"tDate":19,"tMonth":10,"tYear":2017,"Masa":"Ashwin","Paksha":"Krishna Paksha","tDay":"Thu","tithi":"Amavasya","description":"Darsha"},{"transId":21,"tDate":18,"tMonth":11,"tYear":2017,"Masa":"Kartik","Paksha":"Krishna Paksha","tDay":"Sat","tithi":"Amavasya","description":"Darsha"},{"transId":22,"tDate":17,"tMonth":12,"tYear":2017,"Masa":"Margasheesha","Paksha":"Krishna Paksha","tDay":"Sun","tithi":"Chaturdashi","description":"Darsha"},{"transId":23,"tDate":15,"tMonth":1,"tYear":2018,"Masa":"Poushya","Paksha":"Krishna Paksha","tDay":"Mon","tithi":"Dvitiya","description":"Uttarayana Parva Kala"},{"transId":24,"tDate":16,"tMonth":1,"tYear":2018,"Masa":"Poushya","Paksha":"Krishna Paksha","tDay":"Tue","tithi":"Amavasya","description":"Darsha"},{"transId":25,"tDate":15,"tMonth":2,"tYear":2018,"Masa":"Magha","Paksha":"Krishna Paksha","tDay":"Thu","tithi":"Amavasya","description":"Darsha"},{"transId":26,"tDate":17,"tMonth":3,"tYear":2018,"Masa":"Phalguna","Paksha":"Krishna Paksha","tDay":"Sat","tithi":"Chaturdashi","description":"Darsha"}]';
	tData = JSON.parse(data);
	loadList();
})();

function loadList()
{
	for (var i = 0; i < tData.length; i++)
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");

		var tFullDate = tData[i].tDate + "/" + tData[i].tMonth + "/" + tData[i].tYear;
		var tName = tData[i].description;

		switch( tData[i].tMonth )
			{
				case  1:
				{
					listItems1.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  2:
				{
					listItems2.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  3:
				{
					listItems3.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  4:
				{
					listItems4.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  5:
				{
					listItems5.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  6:
				{
					listItems6.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  7:
				{
					listItems7.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  8:
				{
					listItems8.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  9:
				{
					listItems9.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  10:
				{
					listItems10.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  11:
				{
					listItems11.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
				case  12:
				{
					listItems12.push({
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						},
						properties: {
							searchableText: tName,
							tDate: tData[i].tDate,
							tMonth: tData[i].tMonth,
							tYear: tData[i].tYear
						}
					});
					break;
				}
			}
	}


	/**
	 * CREATE SECTIONS
	 */
	var section1 = Ti.UI.createListSection();
	var section2 = Ti.UI.createListSection();
	var section3 = Ti.UI.createListSection();
	var section4 = Ti.UI.createListSection();
	var section5 = Ti.UI.createListSection();
	var section6 = Ti.UI.createListSection();
	var section7 = Ti.UI.createListSection();
	var section8 = Ti.UI.createListSection();
	var section9 = Ti.UI.createListSection();
	var section10 = Ti.UI.createListSection();
	var section11 = Ti.UI.createListSection();
	var section12 = Ti.UI.createListSection();

	/**
	 * ADD ITEMS TO SECTIONS
	 */
	section1.items = listItems1;
	section2.items = listItems2;
	section3.items = listItems3;
	section4.items = listItems4;
	section5.items = listItems5;
	section6.items = listItems6;
	section7.items = listItems7;
	section8.items = listItems8;
	section9.items = listItems9;
	section10.items = listItems10;
	section11.items = listItems11;
	section12.items = listItems12;

	/**
	 * ADD SECTIONS TO LIST
	 */
	$.tlist.sections = [section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12];

	/**
	 * SET SECTION HEADERS
	 */
	$.tlist.sections[0].headerTitle = "January";
	$.tlist.sections[1].headerTitle = "February";
	$.tlist.sections[2].headerTitle = "March";
	$.tlist.sections[3].headerTitle = "April";
	$.tlist.sections[4].headerTitle = "May";
	$.tlist.sections[5].headerTitle = "June";
	$.tlist.sections[6].headerTitle = "July";
	$.tlist.sections[7].headerTitle = "August";
	$.tlist.sections[8].headerTitle = "September";
	$.tlist.sections[9].headerTitle = "October";
	$.tlist.sections[10].headerTitle = "November";
	$.tlist.sections[11].headerTitle = "December";

	var d = new Date();
	$.tlist.scrollToItem(d.getMonth(), 0,{animated: false});
}

function itemClickHandler(e)
{
	selectedItem = $.tlist.sections[e.sectionIndex].items[e.itemIndex];
	$.dialog.title = $.tlist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.tDate + "/" + selectedItem.properties.tMonth + "/" + selectedItem.properties.tYear + ")";
	$.dialog.selectedIndex = -1;
	$.dialog.show();
}

function onOptionSelect(e)
{
	if(e.index == 0)
		addEventToCalecdar();
}

function addEventToCalecdar()
{
	var selectableCalendars = Ti.Calendar.allCalendars;
	var CALENDAR_TO_USE = selectableCalendars[0].id;
	var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);

	var eventYear = parseInt(selectedItem.properties.tYear);
	var eventMonth = parseInt(selectedItem.properties.tMonth)-1;
	var eventDate = parseInt(selectedItem.properties.tDate);
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
		    title: 'UM Panchanga Tarpana',
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
	$.winTarpana.close();
}
