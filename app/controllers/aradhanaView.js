var args = arguments[0] || {};

var aData;
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
	var data = '[{"transId":"1","aDate":"9","aMonth":"4","aYear":"2016","name":"Vedavyasa teertha pu. (Penagundi), Satyaprajna teertha pu. (Atkur)","lat":"16.332008","lng":"77.540592","contact":"0;"},{"transId":"2","aDate":"14","aMonth":"4","aYear":"2016","name":"Satyadhyana teertha pu. (Pandharapur)","lat":"17.672687","lng":"75.30761","contact":"21862223700;"},{"transId":"3","aDate":"15","aMonth":"4","aYear":"2016","name":"Kaveendra teertha pu. (Nava Brindavana)","lat":"15.353142","lng":"76.501292","contact":"0;"},{"transId":"4","aDate":"19","aMonth":"4","aYear":"2016","name":"Satyapriya teertha pu. (Manamadhurai)","lat":"9.689047","lng":"78.459077","contact":"0;"},{"transId":"5","aDate":"25","aMonth":"4","aYear":"2016","name":"Vageesha teertha pu. (Nava Brindavana)","lat":"15.353142","lng":"76.501292","contact":"0;"},{"transId":"6","aDate":"1","aMonth":"5","aYear":"2016","name":"Satyavijaya teertha pu. (Satyavijayanagar)","lat":"12.675307","lng":"79.317266","contact":"0;"},{"transId":"7","aDate":"7","aMonth":"5","aYear":"2016","name":"Satyananda teertha pu. (Malkhed)","lat":"17.200859","lng":"77.157856","contact":"0;"},{"transId":"8","aDate":"9","aMonth":"5","aYear":"2016","name":"Vidyadhiraja teertha pu. (Jagannath Puri), Vijayadhwaja teertha pu. (Kanvateerth)","lat":"16.764987","lng":"77.1405","contact":"0;"},{"transId":"9","aDate":"12","aMonth":"5","aYear":"2016","name":"RamaMon teertha Pu. (Yaragola)","lat":"16.764987","lng":"77.1405","contact":"0;"},{"transId":"10","aDate":"14","aMonth":"5","aYear":"2016","name":"Sheshadasara Pu. (Modalkal)","lat":"0","lng":"0","contact":"0;"},{"transId":"11","aDate":"6","aMonth":"6","aYear":"2016","name":"Satyasandhatirtha pu.(Mahishi)","lat":"13.694176","lng":"75.340312","contact":"9449896874;"},{"transId":"12","aDate":"11","aMonth":"6","aYear":"2016","name":"Mohanadasara pu.(Chippagiri)","lat":"0","lng":"0","contact":"0;"},{"transId":"13","aDate":"19","aMonth":"6","aYear":"2016","name":"Satyabhinavatirtha pu. (NacharKoil) ShriPadarajara pu. (Mulabagil)","lat":"13.174671","lng":"78.409601","contact":"8159290839;"},{"transId":"14","aDate":"20","aMonth":"6","aYear":"2016","name":"Krishnadvaipayanatirtha pu.(kusamurti)","lat":"0","lng":"0","contact":"0;"},{"transId":"15","aDate":"22","aMonth":"6","aYear":"2016","name":"Satyapurnatirtha pu.(kolapura)","lat":"16.382567","lng":"77.482125","contact":"2312624400;"},{"transId":"16","aDate":"23","aMonth":"6","aYear":"2016","name":"Raghuvaryatirtha pu.(Navabrindavana)","lat":"15.353142","lng":"76.501292","contact":"0;"},{"transId":"17","aDate":"28","aMonth":"6","aYear":"2016","name":"Satyadhiratirtha pu.(Aatkoor)","lat":"16.332008","lng":"77.540592","contact":"0;"},{"transId":"18","aDate":"1","aMonth":"7","aYear":"2016","name":"Vidyapatitirtha pu.(Rayaveloor)","lat":"12.921822","lng":"79.132289","contact":"0;"},{"transId":"19","aDate":"2","aMonth":"7","aYear":"2016","name":"Vijayeendratirtha pu.(Kumbakonam)","lat":"10.964726","lng":"79.367758","contact":"9994298782;"},{"transId":"20","aDate":"13","aMonth":"7","aYear":"2016","name":"Satyadhirajatirtha pu.(Veluru)","lat":"0","lng":"0","contact":"0;"},{"transId":"21","aDate":"19","aMonth":"7","aYear":"2016","name":"Satyasankalpatirtha pu.(Mysore)","lat":"12.295719","lng":"76.64393","contact":"0;"},{"transId":"22","aDate":"24","aMonth":"7","aYear":"2016","name":"Shrimajjayatirthara pu.(MalaKheda)","lat":"17.200859","lng":"77.157856","contact":"0;"},{"transId":"23","aDate":"2","aMonth":"8","aYear":"2016","name":"Satyadhishatirtha pu. (Rajamahendri)","lat":"17.000924","lng":"81.805328","contact":"0;"},{"transId":"24","aDate":"10","aMonth":"8","aYear":"2016","name":"Satyavara teertha pu.(Santebidanooru)","lat":"13.726431","lng":"77.476875","contact":"0;"},{"transId":"25","aDate":"20","aMonth":"8","aYear":"2016","name":"Raghavendra swamigala pu.(Mantralaya)","lat":"15.951776","lng":"77.425732","contact":"8512279459;"},{"transId":"26","aDate":"30","aMonth":"8","aYear":"2016","name":"Satyadharma teertha pu.(Holehonnuru)","lat":"13.965005","lng":"75.687795","contact":"9900601608;"},{"transId":"27","aDate":"10","aMonth":"9","aYear":"2016","name":"Jagannatha dasara pu. (Maanvi)","lat":"0","lng":"0","contact":"0;"},{"transId":"28","aDate":"13","aMonth":"9","aYear":"2016","name":"Satyeshtatirtha pu.(Atakur)","lat":"16.332008","lng":"77.540592","contact":"0;"},{"transId":"29","aDate":"14","aMonth":"9","aYear":"2016","name":"Prasanna Venkaaadasara pu.(Badami)","lat":"15.920043","lng":"75.680029","contact":"0;"},{"transId":"30","aDate":"16","aMonth":"9","aYear":"2016","name":"Yadavarya pu. (Munavalli)","lat":"0","lng":"0","contact":"0;"},{"transId":"31","aDate":"18","aMonth":"9","aYear":"2016","name":"Shrinivasa teertha pu.(Honnali)","lat":"0","lng":"0","contact":"0;"},{"transId":"32","aDate":"30","aMonth":"9","aYear":"2016","name":"Madhava teertharu pu.","lat":"17.302587","lng":"76.101439","contact":"0;"},{"transId":"33","aDate":"8","aMonth":"10","aYear":"2016","name":"Satyaparayana Teertha Pu. (Santebidanur)","lat":"13.726431","lng":"77.476875","contact":"0;"},{"transId":"34","aDate":"9","aMonth":"10","aYear":"2016","name":"Satyaparakrama Teeratha Pu. (Chittapur)","lat":"16.741428","lng":"76.307602","contact":"0;"},{"transId":"35","aDate":"2","aMonth":"11","aYear":"2016","name":"Satyapramoda Teertha Pu. (Tirukoilur), Mahasamaradhana at Uttaradi Math","lat":"11.977009","lng":"79.206507","contact":"9442865395;"},{"transId":"36","aDate":"6","aMonth":"11","aYear":"2016","name":"Vedesha Teertha Pu. (Manoor)","lat":"17.302587","lng":"76.101439","contact":"0;"},{"transId":"37","aDate":"9","aMonth":"11","aYear":"2016","name":"Krutha Yugadi, Satyaveera Teertha Pu. (Korlahalli), Vijaya Dasara Pu. (Chippagiri)","lat":"0","lng":"0","contact":"0;"},{"transId":"38","aDate":"11","aMonth":"11","aYear":"2016","name":"Vedanidhi Teertha Pu. (Pandarapur)","lat":"17.672687","lng":"75.30761","contact":"21862223700;"},{"transId":"39","aDate":"18","aMonth":"11","aYear":"2016","name":"Vidyanidhi Teertha Pu. (Yaragola)","lat":"15.353142","lng":"76.501292","contact":"0;"},{"transId":"40","aDate":"28","aMonth":"11","aYear":"2016","name":"Padmanabha Teertha Pu. (Nava Brindavana)","lat":"15.353142","lng":"76.501292","contact":"0;"},{"transId":"41","aDate":"2","aMonth":"12","aYear":"2016","name":"Raghuveeratirtha pu.(Kudali).","lat":"0","lng":"0","contact":"0;"},{"transId":"42","aDate":"4","aMonth":"12","aYear":"2016","name":"Sankarshanavadeyara pu.(Karamapundi)","lat":"0","lng":"0","contact":"0;"},{"transId":"43","aDate":"9","aMonth":"12","aYear":"2016","name":"Satyanidhitirtha pu.(Karnulu).","lat":"15.828278","lng":"78.035511","contact":"0;"},{"transId":"44","aDate":"10","aMonth":"12","aYear":"2016","name":"Sarveshamekadashi(Mokshada) Gitajayanti, Satyanathatirtha pu. (Viracholapura).","lat":"11.943346","lng":"79.294397","contact":"0;"},{"transId":"45","aDate":"14","aMonth":"12","aYear":"2016","name":"Raghunathatirtha pu.(Malakheda) ishti.","lat":"17.200859","lng":"77.157856","contact":"0;"},{"transId":"46","aDate":"18","aMonth":"12","aYear":"2016","name":"Akshobhyatirtha pu. (Malakheda).","lat":"17.200859","lng":"77.157856","contact":"0;"},{"transId":"47","aDate":"29","aMonth":"12","aYear":"2016","name":"Anvadhana. ViShnupanchaka, anvadhana,Yellamavasya, Jitamitratirtha pu. (Krrishnagaddi)","lat":"16.743687","lng":"77.129774","contact":"8532592817;"},{"transId":"48","aDate":"9","aMonth":"1","aYear":"2017","name":"Bhagavata ekadashi (putrada)vainkutha ekadashi Raghuttamatirtha pu. (Tirukoyalura) Manvadi.","lat":"11.977009","lng":"79.206507","contact":"9442865395;"},{"transId":"49","aDate":"10","aMonth":"1","aYear":"2017","name":"Mukkotidvadashi, pradosha. Raghupriyatirtha pu. (Kudali).","lat":"0","lng":"0","contact":"0;"},{"transId":"50","aDate":"16","aMonth":"1","aYear":"2017","name":"Satyakamatirthara pu. (Atakura)","lat":"16.332008","lng":"77.540592","contact":"0;"},{"transId":"51","aDate":"19","aMonth":"1","aYear":"2017","name":"Naraharitirtha pu.(Hampi) purvedyu shraddha.","lat":"15.333209","lng":"76.466495","contact":"9449786478;"},{"transId":"52","aDate":"20","aMonth":"1","aYear":"2017","name":"Satyabhijnatirtha pu.(Ranebennura), Ashtakashraddha Gopaladasara pu. (Uttanura).","lat":"14.616625","lng":"75.61942","contact":"8373267572;"},{"transId":"53","aDate":"26","aMonth":"1","aYear":"2017","name":"Masashivaratri.VidyAdhishatirtha pu.(Ekachakranagara) Ranebennuru.","lat":"14.616625","lng":"75.61942","contact":"8373267572;"},{"transId":"54","aDate":"27","aMonth":"1","aYear":"2017","name":"Purandaradasara pu. (Hampi) Avaratri amavasya.","lat":"15.333209","lng":"76.466495","contact":"9449786478;"},{"transId":"55","aDate":"7","aMonth":"2","aYear":"2017","name":"SatyajnanaTeertha pu. (Rajamahendri)","lat":"17.000924","lng":"81.805328","contact":"0;"},{"transId":"56","aDate":"24","aMonth":"2","aYear":"2017","name":"Vishnuteertha pu.(Madanura)","lat":"0","lng":"0","contact":"0;"},{"transId":"57","aDate":"4","aMonth":"3","aYear":"2017","name":"Satyavrata teertha pu.(Sangali).","lat":"16.866193","lng":"74.564874","contact":"2332333525;"},{"transId":"58","aDate":"13","aMonth":"3","aYear":"2017","name":"Satyabodha teeIrtha pu.(Savanuru)","lat":"14.970905","lng":"75.340215","contact":"8378241544;"},{"transId":"59","aDate":"15","aMonth":"3","aYear":"2017","name":"Vadirajateertha pu.(Sode)","lat":"14.734513","lng":"74.778254","contact":"8384279685;"},{"transId":"60","aDate":"16","aMonth":"3","aYear":"2017","name":"Vyasarajateertha pu.(Navavrindavana).","lat":"15.353142","lng":"76.501292","contact":"8533267562;"},{"transId":"61","aDate":"28","aMonth":"3","aYear":"2017","name":"Satyasantushta teertha pu. (Mysore)","lat":"12.295719","lng":"76.64393","contact":"0;"}]';
	aData = JSON.parse(data);
	loadList();	
})();

function loadList()
{
	for (var i = 0; i < aData.length; i++) 
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");
			
		var aFullDate = aData[i].aDate + "/" + aData[i].aMonth + "/" + aData[i].aYear;
		var aName = aData[i].name.replace(regex,"\n");
		
		switch( aData[i].aMonth )
			{
				case  "1":
				{
					listItems1.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});				
					break;
				}
				case  "2":
				{
					listItems2.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "3":
				{
					listItems3.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "4":
				{
					listItems4.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "5":
				{
					listItems5.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "6":
				{
					listItems6.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "7":
				{
					listItems7.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "8":
				{
					listItems8.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "9":
				{
					listItems9.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "10":
				{
					listItems10.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "11":
				{
					listItems11.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "12":
				{
					listItems12.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
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
	$.alist.sections = [section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12];
	
	/**
	 * SET SECTION HEADERS
	 */
	$.alist.sections[0].headerTitle = "January";
	$.alist.sections[1].headerTitle = "February";
	$.alist.sections[2].headerTitle = "March";
	$.alist.sections[3].headerTitle = "April";
	$.alist.sections[4].headerTitle = "May";
	$.alist.sections[5].headerTitle = "June";
	$.alist.sections[6].headerTitle = "July";
	$.alist.sections[7].headerTitle = "August";
	$.alist.sections[8].headerTitle = "September";
	$.alist.sections[9].headerTitle = "October";
	$.alist.sections[10].headerTitle = "November";
	$.alist.sections[11].headerTitle = "December";
	
	var d = new Date();
	$.alist.scrollToItem(d.getMonth(), 1);
}

function itemClickHandler(e)
{
	selectedItem = $.alist.sections[e.sectionIndex].items[e.itemIndex];
	$.dialog.title = $.alist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.aDate + "/" + selectedItem.properties.aMonth + "/" + selectedItem.properties.aYear + ")" ;
	$.dialog.selectedIndex = -1;
	$.dialog.show();
}

function onOptionSelect(e)
{
	if(e.index == 0)
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
}

/**
 * for saving to calendar month index start from 0-11
 * while retreving the events month index starts from 1-12 (I dont know why, but only for iOS)
 */
function addEventToCalecdar()
{
	var calendar = Ti.Calendar.defaultCalendar;
	
	// check for duplicate entry
	var eventYear = parseInt(selectedItem.properties.aYear);
	var eventMonth = parseInt(selectedItem.properties.aMonth);
	var eventDate = parseInt(selectedItem.properties.aDate);
	var existingEvents = calendar.getEventsInDate( eventYear, eventMonth, eventDate );
	var doEventExist = false;
	for(var i = 0;  i < existingEvents.length; i++)
	{
		if( existingEvents[i].notes ==  selectedItem.properties.searchableText
			&& existingEvents[i].title == "UM Panchanga Aradhana")
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
		    title: 'UM Panchanga Aradhana',
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

function displayAlert(alertMessage, alertTitle)
{
	var dialog = Ti.UI.createAlertDialog({
	    message: alertMessage,
	    ok: 'OK',
	    title: alertTitle
	  });
	  dialog.show();
}

function closeWin()
{
	Alloy.Globals.window.leftWindow = Alloy.Globals.leftWindow;
}