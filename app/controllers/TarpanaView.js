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
	var data = '[{"transId": 1,"tDate": 6,"tMonth": 5,"tYear": 2016,"tDay": "Fri","description": "Darsha"}, {"transId": 2,"tDate": 4,"tMonth": 6,"tYear": 2016,"tDay": "Sat","description": "Darsha"}, {"transId": 3,"tDate": 4,"tMonth": 7,"tYear": 2016,"tDay": "Mon","description": "Darsha"}, {"transId": 4,"tDate": 16,"tMonth": 7,"tYear": 2016,"tDay": "Sat","description": "Dakshinayana Parva Kala"}, {"transId": 5,"tDate": 2,"tMonth": 8,"tYear": 2016,"tDay": "Tue","description": "Darsha"}, {"transId": 6,"tDate": 31,"tMonth": 8,"tYear": 2016,"tDay": "Wed","description": "Darsha"}, {"transId": 7,"tDate": 30,"tMonth": 9,"tYear": 2016,"tDay": "Fri","description": "Darsha"}, {"transId": 8,"tDate": 17,"tMonth": 9,"tYear": 2016,"tDay": "Sat","description": "Paksha Masa Tarpana"}, {"transId": 9,"tDate": 18,"tMonth": 9,"tYear": 2016,"tDay": "Sun","description": "Paksha Masa Tarpana"}, {"transId": 10,"tDate": 19,"tMonth": 9,"tYear": 2016,"tDay": "Mon","description": "Paksha Masa Tarpana"}, {"transId": 11,"tDate": 20,"tMonth": 9,"tYear": 2016,"tDay": "Tue","description": "Paksha Masa Tarpana"}, {"transId": 12,"tDate": 21,"tMonth": 9,"tYear": 2016,"tDay": "Wed","description": "Paksha Masa Tarpana"}, {"transId": 13,"tDate": 22,"tMonth": 9,"tYear": 2016,"tDay": "Thu","description": "Paksha Masa Tarpana"}, {"transId": 14,"tDate": 23,"tMonth": 9,"tYear": 2016,"tDay": "Fri","description": "Paksha Masa Tarpana"}, {"transId": 15,"tDate": 24,"tMonth": 9,"tYear": 2016,"tDay": "Sat","description": "Paksha Masa Tarpana"}, {"transId": 16,"tDate": 25,"tMonth": 9,"tYear": 2016,"tDay": "Sun","description": "Paksha Masa Tarpana"}, {"transId": 17,"tDate": 27,"tMonth": 9,"tYear": 2016,"tDay": "Tue","description": "Paksha Masa Tarpana"}, {"transId": 18,"tDate": 28,"tMonth": 9,"tYear": 2016,"tDay": "Wed","description": "Paksha Masa Tarpana"}, {"transId": 19,"tDate": 29,"tMonth": 9,"tYear": 2016,"tDay": "Thu","description": "Paksha Masa Tarpana"}, {"transId": 20,"tDate": 30,"tMonth": 9,"tYear": 2016,"tDay": "Fri","description": "Paksha Masa Tarpana"}, {"transId": 21,"tDate": 30,"tMonth": 10,"tYear": 2016,"tDay": "Sun","description": "Darsha"}, {"transId": 22,"tDate": 29,"tMonth": 11,"tYear": 2016,"tDay": "Tue","description": "Darsha"}, {"transId": 23,"tDate": 28,"tMonth": 12,"tYear": 2016,"tDay": "Wed","description": "Darsha"}, {"transId": 24,"tDate": 14,"tMonth": 1,"tYear": 2017,"tDay": "Sat","description": "Uttarayana Parva Kala"}, {"transId": 25,"tDate": 27,"tMonth": 1,"tYear": 2017,"tDay": "Fri","description": "Darsha"}, {"transId": 26,"tDate": 26,"tMonth": 2,"tYear": 2017,"tDay": "Sun","description": "Darsha"}, {"transId": 27,"tDate": 27,"tMonth": 3,"tYear": 2017,"tDay": "Mon","description": "Darsha"}]';
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
		var tName = tData[i].desc;
		
		switch( tData[i].tMonth )
			{
				case  "1":
				{
					listItems1.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});				
					break;
				}
				case  "2":
				{
					listItems2.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "3":
				{
					listItems3.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "4":
				{
					listItems4.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "5":
				{
					listItems5.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "6":
				{
					listItems6.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "7":
				{
					listItems7.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "8":
				{
					listItems8.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "9":
				{
					listItems9.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "10":
				{
					listItems10.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "11":
				{
					listItems11.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
						}
					});	
					break;
				}
				case  "12":
				{
					listItems12.push({				
						lblDate: {
							text: tFullDate
						},
						lblName: {
							text: tName
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

function closeWin()
{
	Alloy.Globals.window.leftWindow = Alloy.Globals.leftWindow;
}