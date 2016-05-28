var args = arguments[0] || {};
var fData;

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
	var data = '[{"transId":"1","fDate":"8","fMonth":"4","fYear":"2016","name":"Samvatsara arambha, Abhyanga, Nimbapushpa bhakshana, Panchanga poojana shravana, Ram Navaratra arambha, Shwetavarahakalpadi, Dhwajarohana, Ishti, Chandradarshana"},{"transId":"2","fDate":"10","fMonth":"4","fYear":"2016","name":"Gauri Tritiya, Uttama Manvadi"},{"transId":"3","fDate":"11","fMonth":"4","fYear":"2016","name":"Kalpadi"},{"transId":"4","fDate":"13","fMonth":"4","fYear":"2016","name":"Vishuvat Parvapunyakaala 12.24 pm onwards"},{"transId":"5","fDate":"14","fMonth":"4","fYear":"2016","name":"Navali Bhogapuresha Rathotsava, Bhavani Jayanti"},{"transId":"6","fDate":"15","fMonth":"4","fYear":"2016","name":"Shri Rama Navami, Mahabhishekotsava in Uttaradi Math"},{"transId":"7","fDate":"16","fMonth":"4","fYear":"2016","name":"Korwar Pranadeva Rathotsava, Pushyarkayoga"},{"transId":"8","fDate":"17","fMonth":"4","fYear":"2016","name":"Sarvesham Ekadashi (Kaamada)"},{"transId":"9","fDate":"18","fMonth":"4","fYear":"2016","name":"Harivaasara (till 8.45 am), Pradosha"},{"transId":"10","fDate":"19","fMonth":"4","fYear":"2016","name":"Satyapriya teertha pu. (Manamadhurai)"},{"transId":"11","fDate":"21","fMonth":"4","fYear":"2016","name":"Anvadhana"},{"transId":"12","fDate":"22","fMonth":"4","fYear":"2016","name":"Hanuma Jayanti, Vaishaka Snana arambha, Devasavarni Manvadi, Davanada Hunnime, Vishnu Panchaka illa, Ishti"},{"transId":"13","fDate":"27","fMonth":"4","fYear":"2016","name":"Chandrala Parameshwari Rathotsava Sannati"},{"transId":"14","fDate":"29","fMonth":"4","fYear":"2016","name":"Kalashtami"},{"transId":"15","fDate":"30","fMonth":"4","fYear":"2016","name":"Vishnu Panchaka"},{"transId":"16","fDate":"4","fMonth":"5","fYear":"2016","name":"Pradosha"},{"transId":"17","fDate":"5","fMonth":"5","fYear":"2016","name":"Maasa Shivaratri"},{"transId":"18","fDate":"6","fMonth":"5","fYear":"2016","name":"Darsha, Anvadhana, Vishnu Panchaka, Akshaya Tritiya Amavasya"},{"transId":"19","fDate":"8","fMonth":"5","fYear":"2016","name":"Chandradarshana"},{"transId":"20","fDate":"9","fMonth":"5","fYear":"2016","name":"Parashurama Jayanti, Akshaya Tritiya, Treta Ugadi, Jalakumbhadaana, Kalpadi"},{"transId":"21","fDate":"12","fMonth":"5","fYear":"2016","name":"Shri Satyatma Teertha Sripadangalavara 21st Peetharohana Mahotsava"},{"transId":"22","fDate":"13","fMonth":"5","fYear":"2016","name":"Gangotpatti, Gangapoojana"},{"transId":"23","fDate":"14","fMonth":"5","fYear":"2016","name":"Durgashtami, Vishnupad Parvapunyakaala after 12.18 pm"},{"transId":"24","fDate":"19","fMonth":"5","fYear":"2016","name":"Pradosha, Vedavyasa Jayanti"},{"transId":"25","fDate":"20","fMonth":"5","fYear":"2016","name":"Narasimha Jayanti"},{"transId":"26","fDate":"21","fMonth":"5","fYear":"2016","name":"Anvadhana, Koppara Kshetradalli Narasimha Jayanti, Vishnu Panchaka, Vyasa Pooja, Vaishaka snana samapti, Koorma Jayanti, Torvi, Shoorpali, Muttagi, Mu.Kha.Hubli, NeeraNarasimha kshetragalalli Shri Lakshmi Narasimha Rathotsava"},{"transId":"27","fDate":"22","fMonth":"5","fYear":"2016","name":"Ishti"},{"transId":"28","fDate":"27","fMonth":"5","fYear":"2016","name":"Vishnu Panchaka"},{"transId":"29","fDate":"28","fMonth":"5","fYear":"2016","name":"Dhanishtanavaka arambha"},{"transId":"30","fDate":"29","fMonth":"5","fYear":"2016","name":"Kalashtami"},{"transId":"31","fDate":"2","fMonth":"6","fYear":"2016","name":"Pradosha"},{"transId":"32","fDate":"3","fMonth":"6","fYear":"2016","name":"Maasa Shivaratri"},{"transId":"33","fDate":"4","fMonth":"6","fYear":"2016","name":"Banashankari Kuladharma, Anvadhana,Darsha"},{"transId":"34","fDate":"5","fMonth":"6","fYear":"2016","name":"Vishnu Panchaka,Bhavuka Amavasya,Shanishwara Jayanti,Ishti,Dhanishtanavaka samapti"},{"transId":"35","fDate":"6","fMonth":"6","fYear":"2016","name":"Dashahara vrata Arambha,bhavuka karidina,chandradarshana. "},{"transId":"36","fDate":"9","fMonth":"6","fYear":"2016","name":"Guru Pushyamrita yoga. "},{"transId":"37","fDate":"11","fMonth":"6","fYear":"2016","name":"Mohanadasara pu.(Chippagiri)"},{"transId":"38","fDate":"12","fMonth":"6","fYear":"2016","name":"Durgashtami"},{"transId":"39","fDate":"15","fMonth":"6","fYear":"2016","name":"Dashaharavrata samapti,bhagirathijayantI,Shadashiti parvapunyakala madhyahna 15.35 paryanta"},{"transId":"40","fDate":"19","fMonth":"6","fYear":"2016","name":"Vatasavitri puja"},{"transId":"41","fDate":"20","fMonth":"6","fYear":"2016","name":"AnadvahapaurnimA (Karahunnime),anvadhana,Krishnadvaipayanatirtha pu.(kusamurti)),vishnupanchaka,Indrasavarnimanvadi."},{"transId":"42","fDate":"21","fMonth":"6","fYear":"2016","name":"Ishti"},{"transId":"43","fDate":"24","fMonth":"6","fYear":"2016","name":"No Vishnupanchaka "},{"transId":"44","fDate":"27","fMonth":"6","fYear":"2016","name":"Kalashtami"},{"transId":"45","fDate":"2","fMonth":"7","fYear":"2016","name":"MasaShivaratri,pradosha."},{"transId":"46","fDate":"4","fMonth":"7","fYear":"2016","name":"MrittikavrishabhapujA, Mannettinaamavasya,somavatI amavasya.,vishnupanchaka,anvadhana, darsha."},{"transId":"47","fDate":"5","fMonth":"7","fYear":"2016","name":"Ishti,chandradarshana."},{"transId":"48","fDate":"14","fMonth":"7","fYear":"2016","name":"Chaturmasyavratarambha,chakshushamanvadi."},{"transId":"49","fDate":"15","fMonth":"7","fYear":"2016","name":"Sarvesham Ekadashi (shayani) Taptamudradharana,shakavratarambha,Dharanaparanavratarambha"},{"transId":"50","fDate":"16","fMonth":"7","fYear":"2016","name":"Harivasara 07:00am,Dakshinayana parvapunyakala,Can offer Hastodaka "},{"transId":"51","fDate":"17","fMonth":"7","fYear":"2016","name":"Karidina,pradosha."},{"transId":"52","fDate":"19","fMonth":"7","fYear":"2016","name":"Vyasapuja,Gurupaunima,Dharmasavarni manvadi  Vishnupanchaka,anvadhAna."},{"transId":"53","fDate":"20","fMonth":"7","fYear":"2016","name":"Isti"},{"transId":"54","fDate":"21","fMonth":"7","fYear":"2016","name":"Vishnupanchaka,Ashunya shayanavrata,VChandrodaya 8:38pm"},{"transId":"55","fDate":"1","fMonth":"8","fYear":"2016","name":"MasaShivaratri."},{"transId":"56","fDate":"2","fMonth":"8","fYear":"2016","name":"Darsha, Vishnupanchaka,anvadhAna, Deepastambha Gauri Vrata,Nagaraamavasya."},{"transId":"57","fDate":"3","fMonth":"8","fYear":"2016","name":"Ishti"},{"transId":"58","fDate":"4","fMonth":"8","fYear":"2016","name":"Chandradarshana"},{"transId":"59","fDate":"5","fMonth":"8","fYear":"2016","name":"Maasa Mahalakshmi Kalasha sthapanam"},{"transId":"60","fDate":"6","fMonth":"8","fYear":"2016","name":"Naaga chaturthi"},{"transId":"61","fDate":"7","fMonth":"8","fYear":"2016","name":"Naaga panchamI,Rigvedinaam nootana Upaakarma"},{"transId":"62","fDate":"8","fMonth":"8","fYear":"2016","name":"Kalki jayanti"},{"transId":"63","fDate":"9","fMonth":"8","fYear":"2016","name":"Mangalagauri Vrata"},{"transId":"64","fDate":"11","fMonth":"8","fYear":"2016","name":"Durga Ashtaami,Kanya Raashiyalli gurupravesha,Krishna nadiyalli Ganga sannidhana varshaparyanta"},{"transId":"65","fDate":"12","fMonth":"8","fYear":"2016","name":"Vara Mahalakshmi"},{"transId":"66","fDate":"14","fMonth":"8","fYear":"2016","name":"Dadhivrat Arambha, Vishnoho pavitraropana "},{"transId":"67","fDate":"15","fMonth":"8","fYear":"2016","name":"Pradosha"},{"transId":"68","fDate":"16","fMonth":"8","fYear":"2016","name":"Mangalagauri Vrata"},{"transId":"69","fDate":"17","fMonth":"8","fYear":"2016","name":"Rigvedigala nityopakarma,Vishnupada parvapunyakala up to 09:07am,Vishnupanchaka"},{"transId":"70","fDate":"18","fMonth":"8","fYear":"2016","name":"Yajurvedigala nootanaihi Sahanityaupakarma, Vishnupanchaka,Hayagriva jayanti, Noola hunnive,Rakshabandhana, Anvadhana"},{"transId":"71","fDate":"19","fMonth":"8","fYear":"2016","name":"Ishti,Ashoonyashayanavratam,Chandrodaya 07:38pm"},{"transId":"72","fDate":"23","fMonth":"8","fYear":"2016","name":"Mangalagauri Vrata"},{"transId":"73","fDate":"25","fMonth":"8","fYear":"2016","name":"Shri Krishna Jayanti,Chandrodaya  12:32am "},{"transId":"74","fDate":"26","fMonth":"8","fYear":"2016","name":"Nakshatra ante paraNam Afternoon 01:57pm (13:57),Sooryasavarnimanvadi"},{"transId":"75","fDate":"29","fMonth":"8","fYear":"2016","name":"Mangalagauri,Pradosha"},{"transId":"76","fDate":"31","fMonth":"8","fYear":"2016","name":"Darsha"},{"transId":"77","fDate":"1","fMonth":"9","fYear":"2016","name":"Anvadhana,Vishnupamchaka,Benakana amavasya,Kusha grahana"},{"transId":"78","fDate":"2","fMonth":"9","fYear":"2016","name":"Chandradarshana,Proshtapadi prarambha,Ishti"},{"transId":"79","fDate":"3","fMonth":"9","fYear":"2016","name":"Balarama jayanti,Dhanvantari jayanti "},{"transId":"80","fDate":"4","fMonth":"9","fYear":"2016","name":"Varaha jayanti,Swarnagauri vrata,Taapasa manvadi,Saamavedigala upakarma"},{"transId":"81","fDate":"5","fMonth":"9","fYear":"2016","name":"Ganesha chaturthi"},{"transId":"82","fDate":"6","fMonth":"9","fYear":"2016","name":"Rishi panchami vrata,Vratagrahana,Udyapana madabahudu "},{"transId":"83","fDate":"7","fMonth":"9","fYear":"2016","name":"Suya Shashti,Prathah Snanadinda ashvamedh phala "},{"transId":"84","fDate":"8","fMonth":"9","fYear":"2016","name":"Jyeshtha devyavahana after 10:09am"},{"transId":"85","fDate":"9","fMonth":"9","fYear":"2016","name":"Jyeshtha gauri puja"},{"transId":"86","fDate":"10","fMonth":"9","fYear":"2016","name":"Jyeshthadevi visarjana,Darakattikolluvadu, Maasa mahalakshmi kalashavisarjana,Jagannatha dasara pu. (Maanvi)"},{"transId":"87","fDate":"12","fMonth":"9","fYear":"2016","name":"Smartanam Ekadashi Harivasara 10:32pm "},{"transId":"88","fDate":"13","fMonth":"9","fYear":"2016","name":"Bhagavata Ekadashi (Parivartini),Ksheera vrat aarambha "},{"transId":"89","fDate":"14","fMonth":"9","fYear":"2016","name":"Vamana jayati,Prasanna Venkaaadasara pu.(Badami),Vishnupanchaka illa,Pradosha"},{"transId":"90","fDate":"15","fMonth":"9","fYear":"2016","name":"Ananta vrata "},{"transId":"91","fDate":"16","fMonth":"9","fYear":"2016","name":"Proshthapadi shraddha,AnvAdhAna,Ananta hunnime,Yadavarya pu. (Munavalli),Uma maheshvara vrata,Vishnupanchaka"},{"transId":"92","fDate":"17","fMonth":"9","fYear":"2016","name":"Mahalaya Arambha,Shadasheeti parvapunyakala after 09:26am"},{"transId":"93","fDate":"18","fMonth":"9","fYear":"2016","name":"Shrinivasa teertha pu.(Honnali),Ashoonyashayana vrata -chandrodaya 07:52pm"},{"transId":"94","fDate":"19","fMonth":"9","fYear":"2016","name":"Brihad gauri vrata"},{"transId":"95","fDate":"20","fMonth":"9","fYear":"2016","name":"Mahabharani shraddha   "},{"transId":"96","fDate":"22","fMonth":"9","fYear":"2016","name":"Poorvedyu shraddha"},{"transId":"97","fDate":"23","fMonth":"9","fYear":"2016","name":"Madhyashtami shraddha,Ashtaka shraddha"},{"transId":"98","fDate":"24","fMonth":"9","fYear":"2016","name":"Avidhava navami shraddha,Anwashtaka shraddha"},{"transId":"99","fDate":"25","fMonth":"9","fYear":"2016","name":"Deshabedhena ekadashI"},{"transId":"100","fDate":"26","fMonth":"9","fYear":"2016","name":"Smartanam Ekadashi Harivasara 09.00pm"},{"transId":"101","fDate":"27","fMonth":"9","fYear":"2016","name":"Bhagavata Ekadashi (Indira) "},{"transId":"102","fDate":"28","fMonth":"9","fYear":"2016","name":"Sanyasigala mahalaya,Pradosha,Kaliyugadi"},{"transId":"103","fDate":"29","fMonth":"9","fYear":"2016","name":"Masa Shivaratri,Ghata Chaturdashi shraddha"},{"transId":"104","fDate":"30","fMonth":"9","fYear":"2016","name":"Darsha,Sarvapitra Amavasya,Anvadhana,Madhava teethara pu.,Vishnupanchaka"},{"transId":"105","fDate":"1","fMonth":"10","fYear":"2016","name":"Navarathri begins,Kalasha sthapana,ishti,Maathamaha shraaddha"},{"transId":"106","fDate":"2","fMonth":"10","fYear":"2016","name":"Chandra Darshana"},{"transId":"107","fDate":"4","fMonth":"10","fYear":"2016","name":"Saptharatrotsava begins"},{"transId":"108","fDate":"6","fMonth":"10","fYear":"2016","name":"Pancharatrotsava begins"},{"transId":"109","fDate":"7","fMonth":"10","fYear":"2016","name":"Triratrotsava begins,Saraswati Avahana after 11:16 AM"},{"transId":"110","fDate":"8","fMonth":"10","fYear":"2016","name":"Satyaparayana Teertha Pu. (Santebidanur)"},{"transId":"111","fDate":"9","fMonth":"10","fYear":"2016","name":"Saraswavati Pooja,Duragashtami,Satyaparakrama Teeratha Pu. (Chittapur)"},{"transId":"112","fDate":"10","fMonth":"10","fYear":"2016","name":"Mahanavami,Saraswati balidana, Swaarochisha Manvaadi"},{"transId":"113","fDate":"11","fMonth":"10","fYear":"2016","name":"Vijaya Dashami,Saraswati visarjana after 10:06 AM,Budha Jayanti,Shri Madhwa Jayanti,No Vishnu Panchaka"},{"transId":"114","fDate":"12","fMonth":"10","fYear":"2016","name":"Bhagavata Ekadshi (Paashankusha),Dvidala Vratha begins"},{"transId":"115","fDate":"13","fMonth":"10","fYear":"2016","name":"Pradosha"},{"transId":"116","fDate":"15","fMonth":"10","fYear":"2016","name":"Kojaagara Vratha,Anvaadhaana"},{"transId":"117","fDate":"16","fMonth":"10","fYear":"2016","name":"Kartika Snana begins,Nakshatra Deepa begins,Vishnu Panchaka,Sheege Hunnime,Ishtiya"},{"transId":"118","fDate":"17","fMonth":"10","fYear":"2016","name":"Tula Sankramana,Vishnuvat Parva punya kala after 12:09 PM,Ashoonya Shayana vrata,Chandrodya at 7:40 PM"},{"transId":"119","fDate":"18","fMonth":"10","fYear":"2016","name":"Mahaalaya Gouna Kaala begins"},{"transId":"120","fDate":"23","fMonth":"10","fYear":"2016","name":"Kaalaashtami,Pushya Yoga"},{"transId":"121","fDate":"26","fMonth":"10","fYear":"2016","name":"Sarvesham Ekadshi (Rama)"},{"transId":"122","fDate":"27","fMonth":"10","fYear":"2016","name":"Govatsa Dwadashi,Pradosha,Dhana Thrayodashi"},{"transId":"123","fDate":"28","fMonth":"10","fYear":"2016","name":"Jala Poorna Thrayodashi,Yama Deepa daana,Masa Shivaratri"},{"transId":"124","fDate":"29","fMonth":"10","fYear":"2016","name":"Naraka Chaturdashi,Chandrodaya at 5:09 PM,Abhyanga,Yama Tarpana"},{"transId":"125","fDate":"30","fMonth":"10","fYear":"2016","name":"Darsha,Vishnu Panchaka,Mahalakshmi Pooja,Deepavali Amavaya,Anvaadhaana"},{"transId":"126","fDate":"31","fMonth":"10","fYear":"2016","name":"Bali Pratipada,Abhyanga,Maha Abhisheka at Uttaradi Math,Vikrama Samvatsara 2073,Ishti,Govaradhan Pooja"},{"transId":"127","fDate":"1","fMonth":"11","fYear":"2016","name":"Yama Dwitiya (Bhagini hastena bhojana),Chandra darshana"},{"transId":"128","fDate":"2","fMonth":"11","fYear":"2016","name":"Bhagini Tritiya,Satyapramoda Teertha Pu. (Tirukoilur),Mahasamaradhana at Uttaradi Math"},{"transId":"129","fDate":"7","fMonth":"11","fYear":"2016","name":"Kalpaadi,Vishnu Panchaka Kalpaadi"},{"transId":"130","fDate":"8","fMonth":"11","fYear":"2016","name":"Go Sapthami,Durgashtami"},{"transId":"131","fDate":"9","fMonth":"11","fYear":"2016","name":"Krutha Yugadi,Satyaveera Teertha Pu. (Korlahalli),Vijaya Dasara Pu. (Chippagiri)"},{"transId":"132","fDate":"10","fMonth":"11","fYear":"2016","name":"Smartha Ekadashi,Harivasara 10:52 PM"},{"transId":"133","fDate":"11","fMonth":"11","fYear":"2016","name":"Bhagavatha Ekadashi (Prabhodhini),Chaturmasya ends,Vedanidhi Teertha Pu. (Pandarapur),Dvidala Vratha ends,Bheeshma Panchaka begins"},{"transId":"134","fDate":"12","fMonth":"11","fYear":"2016","name":"Utthana Dwadashi,Tulasi Vivaha,Evening pooja of Sri Moola Rama Devaru at Uttaradi Math,Manvaadi"},{"transId":"135","fDate":"13","fMonth":"11","fYear":"2016","name":"Vaikunta Chaturdashi,Dhaatri Pooja"},{"transId":"136","fDate":"14","fMonth":"11","fYear":"2016","name":"Vyasa Pooja,Kartika Snana ends,Gauri Hunnime,Dakshasaavarni Manvaadi,Bheeshma Panchaka ends,Vishnu Panchaka,Anvaadhaana"},{"transId":"137","fDate":"15","fMonth":"11","fYear":"2016","name":"Ishti,Mahalaya Gauna Kaala ends"},{"transId":"138","fDate":"16","fMonth":"11","fYear":"2016","name":"Vishnupada Parva Punya Kaala after 10:53 AM"},{"transId":"139","fDate":"18","fMonth":"11","fYear":"2016","name":"Vidyanidhi Teertha Pu. (Yaragola)"},{"transId":"140","fDate":"20","fMonth":"11","fYear":"2016","name":"Pushyarka Yoga"},{"transId":"141","fDate":"21","fMonth":"11","fYear":"2016","name":"Kaalashtami,Kaala Bhairavi Jayanthi"},{"transId":"142","fDate":"25","fMonth":"11","fYear":"2016","name":"Sarvesham Ekadashi (Utpatti)"},{"transId":"143","fDate":"26","fMonth":"11","fYear":"2016","name":"Pradosha"},{"transId":"144","fDate":"27","fMonth":"11","fYear":"2016","name":"Masa Shivarathri"},{"transId":"145","fDate":"28","fMonth":"11","fYear":"2016","name":"Padmanabha Teertha Pu. (Nava Brindavana)"},{"transId":"146","fDate":"29","fMonth":"11","fYear":"2016","name":"Darsha,Vishnu Panchaka,Mahipathi Dasara Pu. (Kakhandaki),Chattee Amavasya,Anvaadhaana"},{"transId":"147","fDate":"30","fMonth":"11","fYear":"2016","name":"Ishti malhari shadratrotsavarambha,"},{"transId":"148","fDate":"1","fMonth":"12","fYear":"2016","name":"Chandradarshana."},{"transId":"149","fDate":"2","fMonth":"12","fYear":"2016","name":"Raghuveeratirtha pu.(Kudali)."},{"transId":"150","fDate":"4","fMonth":"12","fYear":"2016","name":"Sankarshanavadeyara pu.(Karamapundi),"},{"transId":"151","fDate":"5","fMonth":"12","fYear":"2016","name":"Vishnupanchaka illa skandhashashthi,Malharishadratrotsava samapti,Champashashthi."},{"transId":"152","fDate":"7","fMonth":"12","fYear":"2016","name":"Durgashtami,Bhimajayanti."},{"transId":"153","fDate":"8","fMonth":"12","fYear":"2016","name":"Kalpadi."},{"transId":"154","fDate":"9","fMonth":"12","fYear":"2016","name":"Satyanidhitirtha pu.(Karnulu)."},{"transId":"155","fDate":"10","fMonth":"12","fYear":"2016","name":"Sarveshamekadashi(Mokshada) Gitajayanti,Satyanathatirtha pu. (Viracholapura)."},{"transId":"156","fDate":"11","fMonth":"12","fYear":"2016","name":"Pradosha,"},{"transId":"157","fDate":"12","fMonth":"12","fYear":"2016","name":"Hanumadvrata,Satenahalli shantesha kartikotsava."},{"transId":"158","fDate":"13","fMonth":"12","fYear":"2016","name":"Dattajayanti,Vishnupanchaka illa,Mannura Chennakeshavotsava,Shrimathadalli sahasrashankhabhisheka,Motampalli Bhimasenarathotsava,Anvadhana,Hostiluhunnime."},{"transId":"159","fDate":"14","fMonth":"12","fYear":"2016","name":"Raghunathatirtha pu.(Malakheda) ishti."},{"transId":"160","fDate":"15","fMonth":"12","fYear":"2016","name":"Chandradarshana"},{"transId":"161","fDate":"16","fMonth":"12","fYear":"2016","name":"Shadashitiparvapunyakala 12.20 nantara.Dhanurmasa arambha "},{"transId":"162","fDate":"18","fMonth":"12","fYear":"2016","name":"Akshobhyatirtha pu. (Malakheda)."},{"transId":"163","fDate":"20","fMonth":"12","fYear":"2016","name":"Kalashtami,purvedyu shraddha."},{"transId":"164","fDate":"21","fMonth":"12","fYear":"2016","name":"Ashtakashraddha."},{"transId":"165","fDate":"22","fMonth":"12","fYear":"2016","name":"Anvashtakashraddha."},{"transId":"166","fDate":"24","fMonth":"12","fYear":"2016","name":"Sarveshamekadashi(sala)."},{"transId":"167","fDate":"25","fMonth":"12","fYear":"2016","name":"Atirikta ekadashi uposhana."},{"transId":"168","fDate":"26","fMonth":"12","fYear":"2016","name":"PradoSha. Kalamatrasadhani."},{"transId":"169","fDate":"27","fMonth":"12","fYear":"2016","name":"MasaShivaratri."},{"transId":"170","fDate":"28","fMonth":"12","fYear":"2016","name":"Darsha,"},{"transId":"171","fDate":"29","fMonth":"12","fYear":"2016","name":"Anvadhana. ViShnupanchaka,anvadhana,Yellamavasya,Jitamitratirtha pu. (Krrishnagaddi)"},{"transId":"172","fDate":"30","fMonth":"12","fYear":"2016","name":"Ishti.,Chandradarshana."},{"transId":"173","fDate":"1","fMonth":"1","fYear":"2017","name":"Vishnupanchaka."},{"transId":"174","fDate":"6","fMonth":"1","fYear":"2017","name":"Banadashtami,Banashankariutsava arambha."},{"transId":"175","fDate":"7","fMonth":"1","fYear":"2017","name":"Dashami deshabheda putanodi 3"},{"transId":"176","fDate":"8","fMonth":"1","fYear":"2017","name":"Smartanam Ekadashi harivasara 08:53pm"},{"transId":"177","fDate":"9","fMonth":"1","fYear":"2017","name":"Bhagavata ekadashi (putrada) Vainkutha ekadashi Raghuttamatirtha pu. (Tirukoyalura) Manvadi."},{"transId":"178","fDate":"10","fMonth":"1","fYear":"2017","name":"Mukkotidvadashi,pradosha. Raghupriyatirtha pu. (Kudali)."},{"transId":"179","fDate":"11","fMonth":"1","fYear":"2017","name":"Devyai sarvashakanivedana,(palledahabba) "},{"transId":"180","fDate":"12","fMonth":"1","fYear":"2017","name":"Banashankari utsavasamapti,Maghasnanarambha,Banadahunnime,Vishnupanchaka ,Anvadhana."},{"transId":"181","fDate":"13","fMonth":"1","fYear":"2017","name":"Ishti dhanurmasasamapti.,Bhogi"},{"transId":"182","fDate":"14","fMonth":"1","fYear":"2017","name":"Makarasankramana uttarayanaparvapunyakala madhyahna 01.10 "},{"transId":"183","fDate":"15","fMonth":"1","fYear":"2017","name":"Karidina."},{"transId":"184","fDate":"16","fMonth":"1","fYear":"2017","name":"Satyakamatirthara pu. (Atakura)"},{"transId":"185","fDate":"19","fMonth":"1","fYear":"2017","name":"Naraharitirtha pu.(Hampi) purvedyu shraddha."},{"transId":"186","fDate":"20","fMonth":"1","fYear":"2017","name":"Satyabhijnatirtha pu.(Ranebennura),Ashtakashraddha Gopaladasara pu. (Uttanura)."},{"transId":"187","fDate":"21","fMonth":"1","fYear":"2017","name":"Anvashtakashraddha."},{"transId":"188","fDate":"23","fMonth":"1","fYear":"2017","name":"Sarveshamekadashi(Shat?tila)."},{"transId":"189","fDate":"25","fMonth":"1","fYear":"2017","name":"Pradosha,"},{"transId":"190","fDate":"26","fMonth":"1","fYear":"2017","name":"MasaShivaratri.VidyAdhishatirtha pu.(Ekachakranagara) Ranebennuru."},{"transId":"191","fDate":"27","fMonth":"1","fYear":"2017","name":"Darsha,ViShnupanchaka,Anvadhana,Purandaradasara pu. (Hampi) Avaratri amavasya."},{"transId":"192","fDate":"28","fMonth":"1","fYear":"2017","name":"Ishti,Vishnupamchaka."},{"transId":"193","fDate":"29","fMonth":"1","fYear":"2017","name":"Chandradarshana."},{"transId":"194","fDate":"1","fMonth":"2","fYear":"2017","name":"Vasanta Panchami"},{"transId":"195","fDate":"2","fMonth":"2","fYear":"2017","name":"Bhogi"},{"transId":"196","fDate":"3","fMonth":"2","fYear":"2017","name":"Rathasaptami,Vaivasvatamanvadi"},{"transId":"197","fDate":"4","fMonth":"2","fYear":"2017","name":"Bheeshmashtami,Bheeshma Tarpana"},{"transId":"198","fDate":"5","fMonth":"2","fYear":"2017","name":"Shri MadhvanavamI,Shrimadanandateerthara Badarikashramapravesha"},{"transId":"199","fDate":"7","fMonth":"2","fYear":"2017","name":"Sarvesham EkadashI(jaya),Satyajnana teertha pu. (Rajamahendri)."},{"transId":"200","fDate":"8","fMonth":"2","fYear":"2017","name":"Bheema dwadashi,pradoSha."},{"transId":"201","fDate":"9","fMonth":"2","fYear":"2017","name":"Kalpadi,Guru Pushya  Amruta yoga"},{"transId":"202","fDate":"10","fMonth":"2","fYear":"2017","name":"Maghasnana samapti,Vyasapuja,Dwaparayugadi,No Vishnupanchaka,Bharatahunnime,Kuladharma,anvAdhAna."},{"transId":"203","fDate":"11","fMonth":"2","fYear":"2017","name":"Ishi,Yalagurakshetre Pranadevakartikotsava."},{"transId":"204","fDate":"12","fMonth":"2","fYear":"2017","name":"Vishnupadaparvapunyakala after 12:38noon"},{"transId":"205","fDate":"17","fMonth":"2","fYear":"2017","name":"Purvedyushraddha."},{"transId":"206","fDate":"18","fMonth":"2","fYear":"2017","name":"Kalaahtami,Ashtakashraddha."},{"transId":"207","fDate":"19","fMonth":"2","fYear":"2017","name":"Sita Jayanti,Anvaahtakashraddha."},{"transId":"208","fDate":"22","fMonth":"2","fYear":"2017","name":"Sarveaham Ekadashi(vijayA)."},{"transId":"209","fDate":"24","fMonth":"2","fYear":"2017","name":"Vishnuteertha pu.(Madanoor) Mahashivaratri. No Vishnupanchaka  pradoSha"},{"transId":"210","fDate":"26","fMonth":"2","fYear":"2017","name":"Anvadhana,Darsha. Vishnupamchaka,Ishti."},{"transId":"211","fDate":"27","fMonth":"2","fYear":"2017","name":"Payovratarambha,Ishti."},{"transId":"212","fDate":"28","fMonth":"2","fYear":"2017","name":"Chandradarshana"},{"transId":"213","fDate":"4","fMonth":"3","fYear":"2017","name":"Satyavratateertha pu.(Sangali)."},{"transId":"214","fDate":"5","fMonth":"3","fYear":"2017","name":"Durgashtami."},{"transId":"215","fDate":"8","fMonth":"3","fYear":"2017","name":"Sarvesham EkadashI (AmalakI)"},{"transId":"216","fDate":"9","fMonth":"3","fYear":"2017","name":"Guru Pushya Amrita Yoga"},{"transId":"217","fDate":"10","fMonth":"3","fYear":"2017","name":"PradoSha,payovrataparana."},{"transId":"218","fDate":"12","fMonth":"3","fYear":"2017","name":"Kamadahana,Holihunnime,Brahmasavarnimanvadi,Vishnupanchaka,Anvadhana."},{"transId":"219","fDate":"13","fMonth":"3","fYear":"2017","name":"Satyabodhateertha pu.(Savanur),Karidina,Dhulivandana,Vasantotsava,Amrakusumaprashana,Ishti ,Abhyanga."},{"transId":"220","fDate":"15","fMonth":"3","fYear":"2017","name":"Vadirajateertha pu.(Sode),Kalpadi."},{"transId":"221","fDate":"16","fMonth":"3","fYear":"2017","name":"Vyasarajateertha pu.(Navavrundavana)."},{"transId":"222","fDate":"17","fMonth":"3","fYear":"2017","name":"Rangapanchami"},{"transId":"223","fDate":"19","fMonth":"3","fYear":"2017","name":"Purvedyu shraddha ."},{"transId":"224","fDate":"20","fMonth":"3","fYear":"2017","name":"Ashtakashraddha ,Kalashtami"},{"transId":"225","fDate":"21","fMonth":"3","fYear":"2017","name":"Anvashtakashraddha."},{"transId":"226","fDate":"24","fMonth":"3","fYear":"2017","name":"Sarvesham Ekadashi (papamochani)."},{"transId":"227","fDate":"25","fMonth":"3","fYear":"2017","name":"Pradosha"},{"transId":"228","fDate":"26","fMonth":"3","fYear":"2017","name":"Masashivaratri."},{"transId":"229","fDate":"27","fMonth":"3","fYear":"2017","name":"Darsha, Anvadhana. "},{"transId":"230","fDate":"28","fMonth":"3","fYear":"2017","name":"Rudrasavarnimanvadi, Vishnupanchaka, Satyasantushtateetha pu. (Mysuru) Anvadhana, Ugadiamavasya."}]';
	fData = JSON.parse(data);
	loadList();	
})();

function loadList()
{
	for (var i = 0; i < fData.length; i++) 
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");
			
		var fFullDate = fData[i].fDate + "/" + fData[i].fMonth + "/" + fData[i].fYear;
		var fName = "-- " + fData[i].name.replace(regex,"\n-- ");
		
						
		switch( fData[i].fMonth )
		{
			case  "1":
			{
				listItems1.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}					
				});				
				break;
			}
			case  "2":
			{
				listItems2.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}						
				});	
				break;
			}
			case  "3":
			{
				listItems3.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}						
				});	
				break;
			}
			case  "4":
			{
				listItems4.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "5":
			{
				listItems5.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}		
				});	
				break;
			}
			case  "6":
			{
				listItems6.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "7":
			{
				listItems7.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "8":
			{
				listItems8.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "9":
			{
				listItems9.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "10":
			{
				listItems10.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "11":
			{
				listItems11.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}		
				});	
				break;
			}
			case  "12":
			{
				listItems12.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
		}			
	}
	
	//Alloy.Collections.Festival.reset(listItems);
	
	
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
	$.flist.sections = [section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12];
	
	/**
	 * SET SECTION HEADERS
	 */
	$.flist.sections[0].headerTitle = "January";
	$.flist.sections[1].headerTitle = "February";
	$.flist.sections[2].headerTitle = "March";
	$.flist.sections[3].headerTitle = "April";
	$.flist.sections[4].headerTitle = "May";
	$.flist.sections[5].headerTitle = "June";
	$.flist.sections[6].headerTitle = "July";
	$.flist.sections[7].headerTitle = "August";
	$.flist.sections[8].headerTitle = "September";
	$.flist.sections[9].headerTitle = "October";
	$.flist.sections[10].headerTitle = "November";
	$.flist.sections[11].headerTitle = "December";
	
	var d = new Date();
	$.flist.scrollToItem(d.getMonth(), 1);
}

function itemClickHandler(e)
{
	selectedItem = $.flist.sections[e.sectionIndex].items[e.itemIndex];
	$.dialog.title = $.flist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.fDate + "/" + selectedItem.properties.fMonth + "/" + selectedItem.properties.fYear + ")" ;
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

function addEventToCalecdar()
{	
	var calendar = Ti.Calendar.defaultCalendar;
	
	// check for duplicate entry
	var eventYear = parseInt(selectedItem.properties.fYear);
	var eventMonth = parseInt(selectedItem.properties.fMonth);
	var eventDate = parseInt(selectedItem.properties.fDate);
	var existingEvents = calendar.getEventsInDate( eventYear, eventMonth, eventDate );
	var doEventExist = false;
	for(var i = 0;  i < existingEvents.length; i++)
	{
		if( existingEvents[i].notes ==  selectedItem.properties.searchableText
			&& existingEvents[i].title == "UM Panchanga - Festival")
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
		    title: 'UM Panchanga - Festival',
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