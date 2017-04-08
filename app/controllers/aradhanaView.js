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
	var data = '[{"transId":"1","aDate":"29","aMonth":"3","aYear":"2017","lat":"16.332008","lng":"77.540592","Masa":"Chaitra","Paksha":"ShuklapakSha","Tithi":"Dvitiya","name":"Vedavyasa teertha pu. (Penagundi), Satyaprajna teertha pu. (Atkur)","contact":"0"},{"transId":"2","aDate":"4","aMonth":"4","aYear":"2017","lat":"17.672687","lng":"75.30761","Masa":"Chaitra","Paksha":"ShuklapakSha","Tithi":"Ashtami","name":"Satyadhyana teertha pu. (Pandharapur)","contact":"0"},{"transId":"3","aDate":"5","aMonth":"4","aYear":"2017","lat":"15.353142","lng":"76.501292","Masa":"Chaitra","Paksha":"ShuklapakSha","Tithi":"NavamI","name":"Kaveendra teertha pu. (Nava Brindavana)","contact":"0"},{"transId":"4","aDate":"9","aMonth":"4","aYear":"2017","lat":"9.689047","lng":"78.459077","Masa":"Chaitra","Paksha":"ShuklapakSha","Tithi":"TrayodashI","name":"Satyapriya teertha pu. (Manamadhurai)","contact":"0"},{"transId":"5","aDate":"14","aMonth":"4","aYear":"2017","lat":"15.353142","lng":"76.501292","Masa":"Chaitra","Paksha":"Krishnapaksha","Tithi":"Tritiya","name":"Vageesha teertha pu. (Nava Brindavana)","contact":"0"},{"transId":"6","aDate":"22","aMonth":"4","aYear":"2017","lat":"12.675307","lng":"79.317266","Masa":"Chaitra","Paksha":"Krishnapaksha","Tithi":"NavamI","name":"Satyavijaya teertha pu. (Satyavijayanagar)","contact":"0"},{"transId":"7","aDate":"27","aMonth":"4","aYear":"2017","lat":"17.200859","lng":"77.157856","Masa":"Vaishakha","Paksha":"ShuklapakSha","Tithi":"Pratipat","name":"Satyananda teertha pu. (Malkhed)","contact":"0"},{"transId":"8","aDate":"29","aMonth":"4","aYear":"2017","lat":"16.764987","lng":"77.1405","Masa":"Vaishakha","Paksha":"ShuklapakSha","Tithi":"Tritiya","name":"Vidyadhiraja teertha pu. (Jagannath Puri), Vijayadhwaja teertha pu. (Kanvateerth)","contact":"0"},{"transId":"9","aDate":"1","aMonth":"5","aYear":"2017","lat":"16.764987","lng":"77.1405","Masa":"Vaishakha","Paksha":"ShuklapakSha","Tithi":"Shasthi","name":"Ramachandra teertha Pu. (Yaragola)","contact":"0"},{"transId":"10","aDate":"3","aMonth":"5","aYear":"2017","lat":"0","lng":"0","Masa":"vaishAkha","Paksha":"ShuklapakSha","Tithi":"Ashtami","name":"Sheshadasara Pu. (Modalkal)","contact":"0"},{"transId":"11","aDate":"22","aMonth":"5","aYear":"2017","lat":"12.70","lng":"77.17","Masa":"Vaishakha","Paksha":"Krishnapaksha","Tithi":"ekAdashI","name":"Brahmanyateertha punya tithi ( Abburu)","contact":"0"},{"transId":"12","aDate":"27","aMonth":"5","aYear":"2017","lat":"13.69","lng":"75.34","Masa":"jyeShTha","Paksha":"shuklapakSha","Tithi":"pratipat","name":"Satyasandhatirtha pu.(Mahishi)","contact":"0"},{"transId":"13","aDate":"31","aMonth":"5","aYear":"2017","lat":"15.2239","lng":"77.3226","Masa":"jyeShTha","Paksha":"shuklapakSha","Tithi":"saptamI","name":"Mohanadasara pu.(Chippagiri)","contact":"0"},{"transId":"14","aDate":"8","aMonth":"6","aYear":"2017","lat":"13.1747","lng":"78.4096","Masa":"jyeShTha","Paksha":"shuklapakSha","Tithi":"chaturdashI","name":"Satyabhinavatirtha pu. (NacharKoil) ShriPadarajara pu. (Mulabagil)","contact":"0"},{"transId":"15","aDate":"9","aMonth":"6","aYear":"2017","lat":"0","lng":"0","Masa":"jyeShTha","Paksha":"shuklapakSha","Tithi":"paurNimA","name":"Krishnadvaipayanatirtha pu.(kusamurti)","contact":"0"},{"transId":"16","aDate":"11","aMonth":"6","aYear":"2017","lat":"16.3826","lng":"77.4821","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Tithi":"dvitIyA","name":"Satyapurnatirtha pu.(kolapura)","contact":"0"},{"transId":"17","aDate":"12","aMonth":"6","aYear":"2017","lat":"15.3531","lng":"76.3013","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Tithi":"tRRitIyA","name":"Raghuvaryatirtha pu.(Navabrindavana)","contact":"0"},{"transId":"18","aDate":"18","aMonth":"6","aYear":"2017","lat":"16.332","lng":"77.5406","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Tithi":"aShTamI","name":"Satyadheeratirtha pu.(Aatkoor)","contact":"0"},{"transId":"19","aDate":"20","aMonth":"6","aYear":"2017","lat":"12.9218","lng":"79.1323","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Tithi":"dvAdashI","name":"Vidyapatitirtha pu.(Rayaveloor)","contact":"0"},{"transId":"20","aDate":"22","aMonth":"6","aYear":"2017","lat":"10.9647","lng":"79.3678","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Tithi":"trayodashI","name":"Vijayeendratirtha pu.(Kumbakonam)","contact":"0"},{"transId":"21","aDate":"2","aMonth":"7","aYear":"2017","lat":"0","lng":"0","Masa":"AShADha","Paksha":"shuklapakSha","Tithi":"navamI","name":"Satyadhirajatirtha pu.(Veluru)","contact":"0"},{"transId":"22","aDate":"9","aMonth":"7","aYear":"2017","lat":"12.2957","lng":"76.6439","Masa":"AShADha","Paksha":"shuklapakSha","Tithi":"paurNimA","name":"Satyasankalpatirtha pu.(Mysore)","contact":"0"},{"transId":"23","aDate":"14","aMonth":"7","aYear":"2017","lat":"17.2009","lng":"77.1579","Masa":"AShADha","Paksha":"kRRiShNapakSha","Tithi":"paMchamI","name":"Shrimajjayatirthara pu.(MalaKheda)","contact":"0"},{"transId":"24","aDate":"23","aMonth":"7","aYear":"2017","lat":"17.0009","lng":"81.8053","Masa":"AShADha","Paksha":"kRRiShNapakSha","Tithi":"amAvAsyA","name":"Satyadhishatirtha pu. (Rajamahendri)","contact":"0"},{"transId":"25","aDate":"30","aMonth":"7","aYear":"2017","lat":"13.7264","lng":"77.4769","Masa":"Shravana","Paksha":"ShuklapakSha","Tithi":"Sapthami","name":"Satyavara teertha pu.(Santebidanooru)","contact":"0"},{"transId":"26","aDate":"9","aMonth":"8","aYear":"2017","lat":"15.9518","lng":"77.4257","Masa":"Shravana","Paksha":"Krishnapaksha","Tithi":"Dvitiya","name":"Raghavendra swamigala pu.(Mantralaya)","contact":"0"},{"transId":"27","aDate":"19","aMonth":"8","aYear":"2017","lat":"13.965","lng":"75.6878","Masa":"Shravana","Paksha":"Krishnapaksha","Tithi":"TrayodashI","name":"Satyadharma teertha pu.(Holehonnuru)","contact":"0"},{"transId":"28","aDate":"30","aMonth":"8","aYear":"2017","lat":"0","lng":"0","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Tithi":"NavamI","name":"Jagannatha dasara pu. (Maanvi)","contact":"0"},{"transId":"29","aDate":"2","aMonth":"9","aYear":"2017","lat":"15.920043","lng":"75.680029","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Tithi":"Dwadashi","name":"Satyeshtatirtha pu.(Atakur)","contact":"0"},{"transId":"30","aDate":"3","aMonth":"9","aYear":"2017","lat":"15.920043","lng":"75.680029","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Tithi":"TrayodashI","name":"Prasanna Venkaaadasara pu.(Badami)","contact":"0"},{"transId":"31","aDate":"6","aMonth":"9","aYear":"2017","lat":"0","lng":"0","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Tithi":"Purnime","name":"Yadavarya pu. (Munavalli)","contact":"0"},{"transId":"32","aDate":"8","aMonth":"9","aYear":"2017","lat":"0","lng":"0","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Tithi":"Dwitiya","name":"Shrinivasa teertha pu.(Honnali)","contact":"0"},{"transId":"33","aDate":"20","aMonth":"9","aYear":"2017","lat":"17.302587","lng":"76.101439","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Tithi":"Amavasya","name":"Madhava teertharu pu.","contact":"0"},{"transId":"34","aDate":"27","aMonth":"9","aYear":"2017","lat":"13.726431","lng":"77.476875","Masa":"Ashvin","Paksha":"shuklapakSha","Tithi":"saptamI","name":"Satyaparayana Teertha Pu. (Santebidanur)","contact":"0"},{"transId":"35","aDate":"28","aMonth":"9","aYear":"2017","lat":"16.741428","lng":"76.307602","Masa":"Ashvin","Paksha":"shuklapakSha","Tithi":"aShTamI","name":"Satyaparakrama Teeratha Pu. (Chittapur)","contact":"0"},{"transId":"36","aDate":"22","aMonth":"10","aYear":"2017","lat":"11.977009","lng":"79.206507","Masa":"kArtik","Paksha":"shuklapakSha","Tithi":"tRRitIyA","name":"Satyapramoda Teertha Pu. (Tirukoilur), Mahasamaradhana at Uttaradi Math","contact":"0"},{"transId":"37","aDate":"26","aMonth":"10","aYear":"2017","lat":"17.302587","lng":"76.101439","Masa":"kArtik","Paksha":"shuklapakSha","Tithi":"ShaShThI","name":"Vedesha Teertha Pu. (Manoor)","contact":"0"},{"transId":"38","aDate":"30","aMonth":"10","aYear":"2017","lat":"0","lng":"0","Masa":"kArtik","Paksha":"shuklapakSha","Tithi":"navamI","name":"Satyaveera Teertha Pu. (Korlahalli), Vijaya Dasara Pu. (Chippagiri)","contact":"0"},{"transId":"39","aDate":"31","aMonth":"10","aYear":"2017","lat":"17.672687","lng":"75.30761","Masa":"kArtik","Paksha":"shuklapakSha","Tithi":"dvAdashI","name":"Vedanidhi Teertha Pu. (Pandarapur)","contact":"0"},{"transId":"40","aDate":"7","aMonth":"11","aYear":"2017","lat":"15.353142","lng":"76.501292","Masa":"kArtik","Paksha":"kRRiShNapakSha","Tithi":"chaturthI","name":"Vidyanidhi Teertha Pu. (Yaragola)","contact":"0"},{"transId":"41","aDate":"17","aMonth":"11","aYear":"2017","lat":"15.353142","lng":"76.501292","Masa":"kArtik","Paksha":"kRRiShNapakSha","Tithi":"chaturdashI","name":"Padmanabha Teertha Pu. (Nava Brindavana)","contact":"0"},{"transId":"42","aDate":"18","aMonth":"11","aYear":"2017","lat":"0","lng":"0","Masa":"kArtik","Paksha":"kRRiShNapakSha","Tithi":"amAvAsyA","name":"Mahipati Dasara pu(Kakhandaki)","contact":"0"},{"transId":"43","aDate":"21","aMonth":"11","aYear":"2017","lat":"0","lng":"0","Masa":"mArgashIrSh","Paksha":"shuklapakSha","Tithi":"tRRitIyA","name":"Raghuveeratirtha pu.(Kudali).","contact":"0"},{"transId":"44","aDate":"23","aMonth":"11","aYear":"2017","lat":"0","lng":"0","Masa":"mArgashIrSh","Paksha":"shuklapakSha","Tithi":"paMchamI","name":"Sankarshanavadeyara pu.(Karamapundi)","contact":"0"},{"transId":"45","aDate":"28","aMonth":"11","aYear":"2017","lat":"15.828278","lng":"78.035511","Masa":"mArgashIrSh","Paksha":"shuklapakSha","Tithi":"dashamI","name":"Satyanidhitirtha pu.(Karnulu).","contact":"0"},{"transId":"46","aDate":"30","aMonth":"11","aYear":"2017","lat":"11.943346","lng":"79.294397","Masa":"mArgashIrSh","Paksha":"shuklapakSha","Tithi":"ekAdashI","name":"Sarveshamekadashi(Mokshada),  Satyanathatirtha pu. (Viracholapura).","contact":"0"},{"transId":"47","aDate":"4","aMonth":"12","aYear":"2017","lat":"17.200859","lng":"77.157856","Masa":"mArgashIrSh","Paksha":"kRRiShNapakSha","Tithi":"pratipat","name":"Raghunathatirtha pu.(Malakheda) ishti.","contact":"0"},{"transId":"48","aDate":"8","aMonth":"12","aYear":"2017","lat":"17.200859","lng":"77.157856","Masa":"mArgashIrSh","Paksha":"kRRiShNapakSha","Tithi":"paMchamI","name":"Akshobhyatirtha pu. (Malakheda).","contact":"0"},{"transId":"49","aDate":"18","aMonth":"12","aYear":"2017","lat":"16.743687","lng":"77.129774","Masa":"mArgashIrSh","Paksha":"kRRiShNapakSha","Tithi":"amAvAsyA","name":"Jitamitratirtha pu. (Krrishnagaddi)","contact":"0"},{"transId":"50","aDate":"29","aMonth":"12","aYear":"2017","lat":"11.977009","lng":"79.206507","Masa":"pauSha","Paksha":"shuklapakSha","Tithi":"ekAdashI","name":"Raghuttamatirtha pu. (Tirukoyalura) Manvadi.","contact":"0"},{"transId":"51","aDate":"31","aMonth":"12","aYear":"2017","lat":"0","lng":"0","Masa":"pauSha","Paksha":"shuklapakSha","Tithi":"trayodashI","name":"Raghupriyatirtha pu. (Kudali).","contact":"0"},{"transId":"52","aDate":"7","aMonth":"1","aYear":"2018","lat":"16.332008","lng":"77.540592","Masa":"pauSha","Paksha":"kRRiShNapakSha","Tithi":"chaturthI","name":"Satyakamatirthara pu. (Atakura)","contact":"0"},{"transId":"53","aDate":"8","aMonth":"1","aYear":"2018","lat":"15.333209","lng":"76.466495","Masa":"pauSha","Paksha":"kRRiShNapakSha","Tithi":"saptamI","name":"Naraharitirtha pu.(Hampi)","contact":"0"},{"transId":"54","aDate":"9","aMonth":"1","aYear":"2018","lat":"14.616625","lng":"75.61942","Masa":"pauSha","Paksha":"kRRiShNapakSha","Tithi":"aShTamI","name":"Satyabhijnatirtha pu.(Ranebennura), Gopaladasara pu. (Uttanura).","contact":"0"},{"transId":"55","aDate":"15","aMonth":"1","aYear":"2018","lat":"14.616625","lng":"75.61942","Masa":"pauSha","Paksha":"kRRiShNapakSha","Tithi":"chaturdashI","name":"VidyAdhishatirtha pu.(Ekachakranagara) Ranebennuru.","contact":"0"},{"transId":"56","aDate":"16","aMonth":"1","aYear":"2018","lat":"15.333209","lng":"76.466495","Masa":"pauSha","Paksha":"kRRiShNapakSha","Tithi":"amAvAsyA","name":"Purandaradasara pu. (Hampi)","contact":"0"},{"transId":"57","aDate":"28","aMonth":"1","aYear":"2018","lat":"17.000924","lng":"81.805328","Masa":"mAgha","Paksha":"shuklapakSha","Tithi":"ekAdashI","name":"SatyajnanaTeertha pu. (Rajamahendri)","contact":"0"},{"transId":"58","aDate":"13","aMonth":"2","aYear":"2018","lat":"0","lng":"0","Masa":"mAgha","Paksha":"kRRiShNapakSha","Tithi":"trayodashI","name":"Vishnuteertha pu.(Madanura)","contact":"0"},{"transId":"59","aDate":"21","aMonth":"2","aYear":"2018","lat":"16.866193","lng":"74.564874","Masa":"phAlguNa","Paksha":"shuklapakSha","Tithi":"ShaShThI","name":"Satyavrata teertha pu.(Sangali).","contact":"0"},{"transId":"60","aDate":"2","aMonth":"3","aYear":"2018","lat":"14.970905","lng":"75.340215","Masa":"phAlguNa","Paksha":"kRRiShNapakSha","Tithi":"pratipat","name":"Satyabodha teeIrtha pu.(Savanuru)","contact":"0"},{"transId":"61","aDate":"4","aMonth":"3","aYear":"2018","lat":"14.734513","lng":"74.778254","Masa":"phAlguNa","Paksha":"kRRiShNapakSha","Tithi":"tRRitIyA","name":"Vadirajateertha pu.(Sode)","contact":"0"},{"transId":"62","aDate":"5","aMonth":"3","aYear":"2018","lat":"15.353142","lng":"76.501292","Masa":"phAlguNa","Paksha":"kRRiShNapakSha","Tithi":"chaturthI","name":"Vyasarajateertha pu.(Navavrindavana).","contact":"0"},{"transId":"63","aDate":"17","aMonth":"3","aYear":"2018","lat":"12.295719","lng":"76.64393","Masa":"phAlguNa","Paksha":"kRRiShNapakSha","Tithi":"amAvAsyA","name":"Satyasantushta teertha pu. (Mysore)","contact":"0"}]';
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