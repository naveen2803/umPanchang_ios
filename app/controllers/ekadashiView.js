var args = arguments[0] || {};
var eData;
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

var selectedItem;

(function() {
	var data = '[{"transId":1,"eDate":7,"eMonth":4,"eYear":2017,"name":"Kaamada"},{"transId":2,"eDate":22,"eMonth":4,"eYear":2017,"name":"Varoothini"},{"transId":3,"eDate":6,"eMonth":5,"eYear":2017,"name":"Mohini"},{"transId":4,"eDate":22,"eMonth":5,"eYear":2017,"name":"Apara"},{"transId":5,"eDate":5,"eMonth":6,"eYear":2017,"name":"Nirjala"},{"transId":6,"eDate":20,"eMonth":6,"eYear":2017,"name":"YoginI"},{"transId":7,"eDate":4,"eMonth":7,"eYear":2017,"name":"Shayani  TaptamudrAdhAraNa"},{"transId":8,"eDate":20,"eMonth":7,"eYear":2017,"name":"kAmikA"},{"transId":9,"eDate":3,"eMonth":8,"eYear":2017,"name":"Putrada"},{"transId":10,"eDate":18,"eMonth":8,"eYear":2017,"name":"Aja"},{"transId":11,"eDate":2,"eMonth":9,"eYear":2017,"name":"Parivarthini"},{"transId":12,"eDate":16,"eMonth":9,"eYear":2017,"name":"Indira"},{"transId":13,"eDate":1,"eMonth":10,"eYear":2017,"name":"Paashankusha"},{"transId":14,"eDate":15,"eMonth":10,"eYear":2017,"name":"Rama"},{"transId":15,"eDate":31,"eMonth":10,"eYear":2017,"name":"Prabhodhini"},{"transId":16,"eDate":14,"eMonth":11,"eYear":2017,"name":"Utpatti"},{"transId":17,"eDate":30,"eMonth":11,"eYear":2017,"name":"Mokshada"},{"transId":18,"eDate":14,"eMonth":12,"eYear":2017,"name":"Saphala"},{"transId":19,"eDate":29,"eMonth":12,"eYear":2017,"name":"Putrada - vainkutha ekadashi"},{"transId":20,"eDate":12,"eMonth":1,"eYear":2018,"name":"Shat‌tila"},{"transId":21,"eDate":28,"eMonth":1,"eYear":2018,"name":"jayA"},{"transId":22,"eDate":11,"eMonth":2,"eYear":2018,"name":"vijayA"},{"transId":23,"eDate":26,"eMonth":2,"eYear":2018,"name":"Amalaki"},{"transId":24,"eDate":13,"eMonth":3,"eYear":2018,"name":"pApamochanI"},{"transId":25,"eDate":14,"eMonth":3,"eYear":2018,"name":"Shravana Dwadashi - Upavasa"}]';
	eData = JSON.parse(data);
	loadList();
})();

function loadList()
{
	for (var i = 0; i < eData.length; i++)
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");

		var eFullDate = eData[i].eDate + "/" + eData[i].eMonth + "/" + eData[i].eYear;
		var eName = eData[i].name.replace(regex,"\n");

			switch( eData[i].eMonth )
			{
				case  "1":
				{
					listItems1.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "2":
				{
					listItems2.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "3":
				{
					listItems3.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "4":
				{
					listItems4.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "5":
				{
					listItems5.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "6":
				{
					listItems6.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "7":
				{
					listItems7.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "8":
				{
					listItems8.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "9":
				{
					listItems9.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "10":
				{
					listItems10.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "11":
				{
					listItems11.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
						}

					});
					break;
				}
				case  "12":
				{
					listItems12.push({
						lblDate: {
							text: eFullDate
						},
						lblName: {
							text: eName
						},
						properties: {
							searchableText: eName,
							eDate: eData[i].eDate,
							eMonth: eData[i].eMonth,
							eYear: eData[i].eYear
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
	$.elist.sections = [section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12];

	/**
	 * SET SECTION HEADERS
	 */
	$.elist.sections[0].headerTitle = "January";
	$.elist.sections[1].headerTitle = "February";
	$.elist.sections[2].headerTitle = "March";
	$.elist.sections[3].headerTitle = "April";
	$.elist.sections[4].headerTitle = "May";
	$.elist.sections[5].headerTitle = "June";
	$.elist.sections[6].headerTitle = "July";
	$.elist.sections[7].headerTitle = "August";
	$.elist.sections[8].headerTitle = "September";
	$.elist.sections[9].headerTitle = "October";
	$.elist.sections[10].headerTitle = "November";
	$.elist.sections[11].headerTitle = "December";

	/**
	 * SCROLL THE LIST TO CURRENT MONTH
	 */
	var d = new Date();
	$.elist.scrollToItem(d.getMonth(), 1);
}

function addKeyboard(e)
{
	$.sBar.softKeyboardOnFocus = Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	$.sBar.focus();
}

function itemClickHandler(e)
{
	selectedItem = $.elist.sections[e.sectionIndex].items[e.itemIndex];
	$.dialog.title = $.elist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.eDate + "/" + selectedItem.properties.eMonth + "/" + selectedItem.properties.eYear + ")";
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

	var eventYear = parseInt(selectedItem.properties.eYear);
	var eventMonth = parseInt(selectedItem.properties.eMonth)-1;
	var eventDate = parseInt(selectedItem.properties.eDate);
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
		    title: 'UM Panchanga Ekadashi',
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
	$.winEkadashi.close();
}
