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
	var data = '[{"transId":1,"fDate":29,"fMonth":3,"fYear":2017,"name":"Samvatsara arambha, Abhyanga, Nimbapushpa bhakshana, Panchanga poojana shravana, Ram Navaratra arambha, Shwetavarahakalpadi, Dhwajarohana, Ishti,  Vedavyasa teertha pu. (Penagundi), Satyaprajna teertha pu. (Atkur)Chandradarshana, Matsya Jayanti"},{"transId":2,"fDate":30,"fMonth":3,"fYear":2017,"name":"Gauri Tritiya, Uttama Manvadi"},{"transId":3,"fDate":1,"fMonth":4,"fYear":2017,"name":"Udan Kalpadi"},{"transId":4,"fDate":4,"fMonth":4,"fYear":2017,"name":"Navali Bhogapuresha Rathotsava, Bhavani Jayanti"},{"transId":5,"fDate":5,"fMonth":4,"fYear":2017,"name":"Shri Rama Navami, Mahabhishekotsava in Uttaradi Math,  Kaveendra teertha pu. (Nava Brindavana)"},{"transId":6,"fDate":6,"fMonth":4,"fYear":2017,"name":"Korwar Pranadeva Rathotsava, Pushyarkayoga"},{"transId":7,"fDate":7,"fMonth":4,"fYear":2017,"name":"Sarvesham Ekadashi (Kaamada)"},{"transId":8,"fDate":8,"fMonth":4,"fYear":2017,"name":"Pradosha"},{"transId":9,"fDate":9,"fMonth":4,"fYear":2017,"name":"Satyapriya teertha pu. (Manamadhurai)"},{"transId":10,"fDate":10,"fMonth":4,"fYear":2017,"name":"Anvadhana"},{"transId":11,"fDate":11,"fMonth":4,"fYear":2017,"name":"Hanuma Jayanti, Vaishaka Snana arambha, Devasavarni Manvadi, Davanada Hunnime, Vishnu Panchaka, Ishti"},{"transId":12,"fDate":14,"fMonth":4,"fYear":2017,"name":"Vageesha teertha pu. (Nava Brindavana), Vishavit Punya kaal till 12:24"},{"transId":13,"fDate":16,"fMonth":4,"fYear":2017,"name":"Chandrala Parameshwari Rathotsava Sannati"},{"transId":14,"fDate":19,"fMonth":4,"fYear":2017,"name":"Kalashtami"},{"transId":15,"fDate":20,"fMonth":4,"fYear":2017,"name":"Vishnu Panchaka"},{"transId":16,"fDate":22,"fMonth":4,"fYear":2017,"name":"Sarvesham Ekadashi, Satyavijaya teertha pu. (Satyavijayanagar)"},{"transId":17,"fDate":23,"fMonth":4,"fYear":2017,"name":"Harivasara till 05:40am"},{"transId":18,"fDate":24,"fMonth":4,"fYear":2017,"name":"Pradosha, Maasa Shivaratri"},{"transId":19,"fDate":26,"fMonth":4,"fYear":2017,"name":"Darsha, Anvadhana, Vishnu Panchaka, Akshaya Tritiya Amavasya"},{"transId":20,"fDate":27,"fMonth":4,"fYear":2017,"name":"Chandradarshana, Proshtapadi prarambha, Ishti, Satyananda teertha pu. (Malkhed)"},{"transId":21,"fDate":29,"fMonth":4,"fYear":2017,"name":"Parashurama Jayanti, Akshaya Tritiya, Treta Ugadi, Jalakumbhadaana, Kalpadi, Vidyadhiraja teertha pu. (Jagannath Puri), Vijayadhwaja teertha pu. (Kanvateerth)"},{"transId":22,"fDate":1,"fMonth":5,"fYear":2017,"name":"Shri Satyatma Teertha Sripadangalavara 22nd Peetharohana Mahotsava, Ramachandra teertha Pu. (Yaragola)"},{"transId":23,"fDate":2,"fMonth":5,"fYear":2017,"name":"Gangotpatti, Gangapoojana"},{"transId":24,"fDate":3,"fMonth":5,"fYear":2017,"name":"Durgashtami, Sheshadasara Pu. (Modalkal)"},{"transId":25,"fDate":6,"fMonth":5,"fYear":2017,"name":"Sarvesham Ekadashi"},{"transId":26,"fDate":8,"fMonth":5,"fYear":2017,"name":"Pradosha, Vedavyasa Jayanti"},{"transId":27,"fDate":9,"fMonth":5,"fYear":2017,"name":"Narasimha Jayanti"},{"transId":28,"fDate":10,"fMonth":5,"fYear":2017,"name":"Aagihunnive, Anvadhana, Koppara Kshetradalli Narasimha Jayanti, Vishnu Panchaka, Vyasa Pooja, Vaishaka snana samapti, Koorma Jayanti, Torvi, Shoorpali, Muttagi, Mu.Kha.Hubli, NeeraNarasimha kshetragalalli Shri Lakshmi Narasimha Rathotsava"},{"transId":29,"fDate":11,"fMonth":5,"fYear":2017,"name":"Ishti"},{"transId":30,"fDate":15,"fMonth":5,"fYear":2017,"name":"Vishnupada Parva Punya Kaala till 12:18 PM+D47"},{"transId":31,"fDate":17,"fMonth":5,"fYear":2017,"name":"Vishnupanchaka"},{"transId":32,"fDate":18,"fMonth":5,"fYear":2017,"name":"Kalashtami, Dhanisthanavkarambha"},{"transId":33,"fDate":22,"fMonth":5,"fYear":2017,"name":"Sarveshama Ekadashi, Brahmanyateertha punya tithi ( Abburu)"},{"transId":34,"fDate":23,"fMonth":5,"fYear":2017,"name":"Pradosha"},{"transId":35,"fDate":24,"fMonth":5,"fYear":2017,"name":"Maasa Shivaratri, Banashankari Kuladharma"},{"transId":36,"fDate":25,"fMonth":5,"fYear":2017,"name":"Vishnu Panchaka, Bhavuka Amavasya, Shanishwara Jayanti,"},{"transId":37,"fDate":26,"fMonth":5,"fYear":2017,"name":"Ishti, Dhanishtanavaka samapti, Dashahara vrata Arambha, bhavuka karidina"},{"transId":38,"fDate":27,"fMonth":5,"fYear":2017,"name":"chandradarshana, Satyasandhatirtha pu.(Mahishi)"},{"transId":39,"fDate":31,"fMonth":5,"fYear":2017,"name":"Mohanadasara pu.(Chippagiri)"},{"transId":40,"fDate":2,"fMonth":6,"fYear":2017,"name":"Durgashtami"},{"transId":41,"fDate":4,"fMonth":6,"fYear":2017,"name":"Dashaharavrata samapti, bhagirathijayantI, Shadashiti parvapunyakala madhyahna 15.35 paryanta,"},{"transId":42,"fDate":5,"fMonth":6,"fYear":2017,"name":"Sarvesham Ekadashi"},{"transId":43,"fDate":6,"fMonth":6,"fYear":2017,"name":"Pradosha"},{"transId":44,"fDate":8,"fMonth":6,"fYear":2017,"name":"Mrugapravesha afternoon 12:01,                          Satyabhinavatirtha pu. (NacharKoil) \nShriPadarajara pu. (Mulabagil)"},{"transId":45,"fDate":9,"fMonth":6,"fYear":2017,"name":"AnadvahapaurnimA (Karahunnime), anvadhana, Krishnadvaipayanatirtha pu.(kusamurti)), vishnupanchaka, Indrasavarnimanvadi, Vatasavitri puja,"},{"transId":46,"fDate":10,"fMonth":6,"fYear":2017,"name":"Ishti"},{"transId":47,"fDate":11,"fMonth":6,"fYear":2017,"name":"Satyapurnatirtha pu.(kolapura)"},{"transId":48,"fDate":12,"fMonth":6,"fYear":2017,"name":"Raghuvaryatirtha pu.(Navabrindavana)"},{"transId":49,"fDate":14,"fMonth":6,"fYear":2017,"name":"Vishnupanchaka"},{"transId":50,"fDate":15,"fMonth":6,"fYear":2017,"name":"Mithun Sankramana, Shadasheeti parva punya kaal after 12:21pm"},{"transId":51,"fDate":17,"fMonth":6,"fYear":2017,"name":"Kalastamai"},{"transId":52,"fDate":18,"fMonth":6,"fYear":2017,"name":"Satyadheeratirtha pu.(Aatkoor)"},{"transId":53,"fDate":20,"fMonth":6,"fYear":2017,"name":"Sarvesham Ekadashi"},{"transId":54,"fDate":21,"fMonth":6,"fYear":2017,"name":"Pradosha."},{"transId":55,"fDate":22,"fMonth":6,"fYear":2017,"name":"Masa Shivaratri, Vijayeendratirtha pu.(Kumbakonam)"},{"transId":56,"fDate":23,"fMonth":6,"fYear":2017,"name":"Darsha, Anvadhana"},{"transId":57,"fDate":24,"fMonth":6,"fYear":2017,"name":" Vishnupanchaka, Isti,   MrittikavrishabhapujA, Mannettinaamavasya,  vishnupanchaka"},{"transId":58,"fDate":25,"fMonth":6,"fYear":2017,"name":"Chandradarshan"},{"transId":59,"fDate":2,"fMonth":7,"fYear":2017,"name":"Satyadhirajatirtha pu.(Veluru)"},{"transId":60,"fDate":3,"fMonth":7,"fYear":2017,"name":"Chaturmasya Vrata Arambha, Chakshusha Manvadi"},{"transId":61,"fDate":4,"fMonth":7,"fYear":2017,"name":"Sarveshama Ekadashi, Tapta Mudradharane, Shakavrata Arambha, Dharana Parana Vrata Arambha"},{"transId":62,"fDate":5,"fMonth":7,"fYear":2017,"name":"Harivasara till 07:18 am"},{"transId":63,"fDate":6,"fMonth":7,"fYear":2017,"name":"Pradosha"},{"transId":64,"fDate":8,"fMonth":7,"fYear":2017,"name":"Anvadhana"},{"transId":65,"fDate":9,"fMonth":7,"fYear":2017,"name":"Vyasa Pooja,  Gauri Hunnime, Dharmasavarni Manvaadi,   Isti, Satyasankalpatirtha pu.(Mysore)"},{"transId":66,"fDate":10,"fMonth":7,"fYear":2017,"name":"Ashoonya Shayanaya Vrata, Chandradoya 07:53pm"},{"transId":67,"fDate":11,"fMonth":7,"fYear":2017,"name":"Vishnu Panchaka"},{"transId":68,"fDate":14,"fMonth":7,"fYear":2017,"name":"Shrimajjayatirthara pu.(MalaKheda)"},{"transId":69,"fDate":16,"fMonth":7,"fYear":2017,"name":"Dakshinayana Parva Punya Kaal after 03:56 pm"},{"transId":70,"fDate":17,"fMonth":7,"fYear":2017,"name":"Karidina."},{"transId":71,"fDate":18,"fMonth":7,"fYear":2017,"name":"Deshabedhena Dashami, Please refer to 3 of Panchanga"},{"transId":72,"fDate":19,"fMonth":7,"fYear":2017,"name":"Smartana Ekadashi, Harivasara till 08:10pm"},{"transId":73,"fDate":20,"fMonth":7,"fYear":2017,"name":"Bhagavatana Ekadashi"},{"transId":74,"fDate":21,"fMonth":7,"fYear":2017,"name":"Pradosha, Masa Shivaratri"},{"transId":75,"fDate":23,"fMonth":7,"fYear":2017,"name":"Darsha, Vishnu Panchaka, Anvadhana, Deepasthambha Gauri Vrata, Nagara Amavasya, Satyadhishatirtha pu. (Rajamahendri)"},{"transId":76,"fDate":24,"fMonth":7,"fYear":2017,"name":"Isti, Chandrandarshana"},{"transId":77,"fDate":25,"fMonth":7,"fYear":2017,"name":"Mangala Gauri Vrata"},{"transId":78,"fDate":26,"fMonth":7,"fYear":2017,"name":"Naga Chaturthi"},{"transId":79,"fDate":28,"fMonth":7,"fYear":2017,"name":"Masa Mahalakshmi Kalasa Sthapana, Naga Panchani, Rugveda nitya-nootan Upakarma, refer page 3"},{"transId":80,"fDate":29,"fMonth":7,"fYear":2017,"name":"Kalki Jayanti"},{"transId":81,"fDate":30,"fMonth":7,"fYear":2017,"name":"Satyavara teertha pu.(Santebidanooru)"},{"transId":82,"fDate":31,"fMonth":7,"fYear":2017,"name":"Durgastami"},{"transId":83,"fDate":1,"fMonth":8,"fYear":2017,"name":"Mangala Gauri Vrata"},{"transId":84,"fDate":3,"fMonth":8,"fYear":2017,"name":"Sarvesham Ekadashi, Dadhivrat Arambha ,Vishno pavitraropana"},{"transId":85,"fDate":4,"fMonth":8,"fYear":2017,"name":"Vara Mahalakshmi Vrata, Pradosha"},{"transId":86,"fDate":7,"fMonth":8,"fYear":2017,"name":"Vishnu Panchaka, Hayagreeva Jayanti, Noola Hunnive, Raksha Bandhana, Anvadhana, Khandagrasa Chandragrahane sparsha 10:52pm, Refer page 3"},{"transId":87,"fDate":8,"fMonth":8,"fYear":2017,"name":"Isti, Mangalagourivrata, Karidina"},{"transId":88,"fDate":9,"fMonth":8,"fYear":2017,"name":"Raghavendra swamigala pu.(Mantralaya), Ashoonya shayanaya vrata, Chandrodaya 07:45pm"},{"transId":89,"fDate":14,"fMonth":8,"fYear":2017,"name":"Shree Krishnastami, Chandrodaya 11:48pm, Suryasavarni Manvadi"},{"transId":90,"fDate":15,"fMonth":8,"fYear":2017,"name":"Mangalagauri Vrata, Tithyante Paranam 03:44pm"},{"transId":91,"fDate":17,"fMonth":8,"fYear":2017,"name":"Vishnipada Parva Punya Kaal after 08:56am"},{"transId":92,"fDate":18,"fMonth":8,"fYear":2017,"name":"Sarvesham Ekadashi"},{"transId":93,"fDate":19,"fMonth":8,"fYear":2017,"name":"Pradosha, Satyadharma teertha pu.(Holehonnuru)"},{"transId":94,"fDate":20,"fMonth":8,"fYear":2017,"name":"Masa Shivaratri"},{"transId":95,"fDate":21,"fMonth":8,"fYear":2017,"name":"Anvadhana, Vishnupamchaka, Benakana amavasya, Kusha grahana, Darsha"},{"transId":96,"fDate":22,"fMonth":8,"fYear":2017,"name":"Proshtapadi prarambha, Ishti"},{"transId":97,"fDate":23,"fMonth":8,"fYear":2017,"name":"Balarama jayanti, Dhanvantari jayanti , Chandradarshan"},{"transId":98,"fDate":24,"fMonth":8,"fYear":2017,"name":"Varaha jayanti, Swarnagauri vrata,Taapasa manvadi,"},{"transId":99,"fDate":25,"fMonth":8,"fYear":2017,"name":"Ganesha chaturthi, Saamavedigala upakarma"},{"transId":100,"fDate":26,"fMonth":8,"fYear":2017,"name":"Rishi panchami vrata, Vratagrahana, Udyapana madabahudu"},{"transId":101,"fDate":27,"fMonth":8,"fYear":2017,"name":"Suya Shashti, Prathah Snanadinda ashvamedh phala"},{"transId":102,"fDate":29,"fMonth":8,"fYear":2017,"name":"Jyeshtha devyavahana after 10:09am"},{"transId":103,"fDate":30,"fMonth":8,"fYear":2017,"name":"Jyeshtha gauri puja, Jagannatha dasara pu. (Maanvi)"},{"transId":104,"fDate":31,"fMonth":8,"fYear":2017,"name":"Jyeshthadevi visarjana, Darakattikolluvadu,  Maasa mahalakshmi kalashavisarjana,"},{"transId":105,"fDate":1,"fMonth":9,"fYear":2017,"name":"Harivasara after night 12:00"},{"transId":106,"fDate":2,"fMonth":9,"fYear":2017,"name":"Sarvesham Ekadashi (Parivartini), Ksheera vrat aarambha , Satyeshtatirtha pu.(Atakur)"},{"transId":107,"fDate":3,"fMonth":9,"fYear":2017,"name":"Vamana jayati, Prasanna Venkaaadasara pu.(Badami),Pradosha"},{"transId":108,"fDate":4,"fMonth":9,"fYear":2017,"name":"Vishnupanchaka illa"},{"transId":109,"fDate":5,"fMonth":9,"fYear":2017,"name":"Anant Vrata,Proshthapadi shraddha, AnvAdhAna,Ananta Vrata,"},{"transId":110,"fDate":6,"fMonth":9,"fYear":2017,"name":"Yajurvedi Nitya & Nootan Upakarma refer Page 3, Mahalaya Arambha, Shadasheeti parvapunyakala after 09:26am,  Yadavarya pu. (Munavalli),Uma maheshvara vrata, Vishnupanchaka"},{"transId":111,"fDate":7,"fMonth":9,"fYear":2017,"name":"Ashoonyashayana vrata -chandrodaya 08:11pm"},{"transId":112,"fDate":8,"fMonth":9,"fYear":2017,"name":"Shrinivasa teertha pu.(Honnali)"},{"transId":113,"fDate":9,"fMonth":9,"fYear":2017,"name":"Brihad gauri vrata"},{"transId":114,"fDate":10,"fMonth":9,"fYear":2017,"name":"Mahabharani shraddha"},{"transId":115,"fDate":12,"fMonth":9,"fYear":2017,"name":"Poorvedyu shraddha"},{"transId":116,"fDate":13,"fMonth":9,"fYear":2017,"name":"Madhyashtami shraddha, Ashtaka shraddha"},{"transId":117,"fDate":14,"fMonth":9,"fYear":2017,"name":"Avidhava navami shraddha, Anwashtaka shraddha"},{"transId":118,"fDate":16,"fMonth":9,"fYear":2017,"name":"Sarvesham Ekadashi (Indira)"},{"transId":119,"fDate":17,"fMonth":9,"fYear":2017,"name":"Sanyasigala mahalaya, Pradosha, Kaliyugadi, Kanya Sankramana, Shadasheeti Parva Punya Kaal"},{"transId":120,"fDate":18,"fMonth":9,"fYear":2017,"name":"Masa Shivaratri, Ghata Chaturdashi shraddha"},{"transId":121,"fDate":19,"fMonth":9,"fYear":2017,"name":"Darsha, Sarvapitra Amavasya,Anvadhana, Madhava teethara pu.,Vishnupanchaka"},{"transId":122,"fDate":20,"fMonth":9,"fYear":2017,"name":"Madhava teertharu pu.( Mannur), Matamahashradha, Vishnu Panchaka, Isti"},{"transId":123,"fDate":21,"fMonth":9,"fYear":2017,"name":"Navarathri begins, Kalasha sthapana,  Chandra Darshana"},{"transId":124,"fDate":23,"fMonth":9,"fYear":2017,"name":"Saptharatrotsava begins"},{"transId":125,"fDate":25,"fMonth":9,"fYear":2017,"name":"Pancharatrotsava begins"},{"transId":126,"fDate":27,"fMonth":9,"fYear":2017,"name":"Triratrotsava begins, Saraswati Avahana after 09:05 AM, Gajagauri Ahavana after 08:48 PM, Satyaparayana Teertha Pu. (Santebidanur)"},{"transId":127,"fDate":28,"fMonth":9,"fYear":2017,"name":"Durgashtami, Satyaparakrama Teeratha Pu. (Chittapur)"},{"transId":128,"fDate":29,"fMonth":9,"fYear":2017,"name":"Saraswavati Pooja, Mahanavami, ,  Swaarochisha Manvaadi"},{"transId":129,"fDate":30,"fMonth":9,"fYear":2017,"name":"Saraswati balidana, Vijaya Dashami,  Budha Jayanti, Shri Madhwa Jayanti"},{"transId":130,"fDate":1,"fMonth":10,"fYear":2017,"name":"Sarvesham Ekadashi,Saraswati visarjana, Dvidala Vratha begins"},{"transId":131,"fDate":2,"fMonth":10,"fYear":2017,"name":"Harivasara till 05:16 AM"},{"transId":132,"fDate":3,"fMonth":10,"fYear":2017,"name":"Pradosha"},{"transId":133,"fDate":5,"fMonth":10,"fYear":2017,"name":"Kojaagara Vratha"},{"transId":134,"fDate":6,"fMonth":10,"fYear":2017,"name":"Isti"},{"transId":135,"fDate":7,"fMonth":10,"fYear":2017,"name":"Ashoonya Shayana vrata, Chandrodya at 7:47 PM"},{"transId":136,"fDate":12,"fMonth":10,"fYear":2017,"name":"Kalashtami, Guru Asta"},{"transId":137,"fDate":15,"fMonth":10,"fYear":2017,"name":"Sarvesham Ekadashi"},{"transId":138,"fDate":16,"fMonth":10,"fYear":2017,"name":"Govatsa Dwadashi, Harivasara till 07:05AM"},{"transId":139,"fDate":17,"fMonth":10,"fYear":2017,"name":"Pradosha, Dhana Thrayodashi, Jala Poorna Thrayodashi, Yama Deepa daana, Masa Shivaratri"},{"transId":140,"fDate":18,"fMonth":10,"fYear":2017,"name":"Naraka Chaturdashi, Chandrodaya at 5:16 AM, Abhyanga, Yama Tarpana, Tula Sankramana, Vishavat Parva Punya Kaal till 12:09PM, Mahalaya Gouna Kaal begins"},{"transId":141,"fDate":19,"fMonth":10,"fYear":2017,"name":"Darsha, Vishnu Panchaka, Mahalakshmi Pooja, Deepavali Amavaya, Anvaadhaana"},{"transId":142,"fDate":20,"fMonth":10,"fYear":2017,"name":"Bali Pratipada, Abhyanga, Maha Abhisheka at Uttaradi Math, Vikrama Samvatsara 2074, Ishti, Govaradhan Pooja"},{"transId":143,"fDate":21,"fMonth":10,"fYear":2017,"name":"Yama Dwitiya (Bhagini hastena bhojana), Chandra darshana"},{"transId":144,"fDate":22,"fMonth":10,"fYear":2017,"name":"Bhagini Tritiya, Satyapramoda Teertha Pu. (Tirukoilur), Mahasamaradhana at Uttaradi Math"},{"transId":145,"fDate":26,"fMonth":10,"fYear":2017,"name":"Vedesha Teertha Pu. (Mannur)"},{"transId":146,"fDate":27,"fMonth":10,"fYear":2017,"name":"Kalpaadi"},{"transId":147,"fDate":28,"fMonth":10,"fYear":2017,"name":"Vishnu Panchaka Kalpaadi,  Durgashtami"},{"transId":148,"fDate":29,"fMonth":10,"fYear":2017,"name":"Krutha Yugadi"},{"transId":149,"fDate":30,"fMonth":10,"fYear":2017,"name":"Satyaveera Teertha Pu. (Korlahalli), Vijaya Dasara Pu. (Chippagiri)"},{"transId":150,"fDate":31,"fMonth":10,"fYear":2017,"name":"Sarvesham Ekadashi (Prabhodhini), Chaturmasya ends, Vedanidhi Teertha Pu. (Pandarapur), Dvidala Vratha ends, Bheeshma Panchaka begins"},{"transId":151,"fDate":1,"fMonth":11,"fYear":2017,"name":"Utthana Dwadashi, Tulasi Vivaha, Evening pooja of Sri Moola Rama Devaru at Uttaradi Math, Manvaadi"},{"transId":152,"fDate":2,"fMonth":11,"fYear":2017,"name":"Vaikunta Chaturdashi, Dhaatri Pooja"},{"transId":153,"fDate":3,"fMonth":11,"fYear":2017,"name":", Anvaadhaana"},{"transId":154,"fDate":4,"fMonth":11,"fYear":2017,"name":"Ishti, Vyasa Pooja, Kartika Snana ends, Gauri Hunnime, Dakshasaavarni Manvaadi, Bheeshma Panchaka ends, Vishnu Panchaka"},{"transId":155,"fDate":7,"fMonth":11,"fYear":2017,"name":"Vidyanidhi Teertha Pu. (Yaragola)"},{"transId":156,"fDate":10,"fMonth":11,"fYear":2017,"name":"Kaalashtami, Kaala Bhairavi Jayanthi"},{"transId":157,"fDate":14,"fMonth":11,"fYear":2017,"name":"Sarvesham Ekadashi"},{"transId":158,"fDate":15,"fMonth":11,"fYear":2017,"name":"Pradosha"},{"transId":159,"fDate":16,"fMonth":11,"fYear":2017,"name":"Mahalaya Gaun Kaal Samapti, Masa Shivaratri, Vrschika Sankramana, Vishnupadaparva Punya Kaal after 12:08PM"},{"transId":160,"fDate":17,"fMonth":11,"fYear":2017,"name":"Padmanabha Teertha Pu. (Nava Brindavana)"},{"transId":161,"fDate":18,"fMonth":11,"fYear":2017,"name":"Darsha, Vishnu Panchaka, Mahipathi Dasara Pu. (Kakhandaki), Chattee Amavasya, Anvaadhaana"},{"transId":162,"fDate":19,"fMonth":11,"fYear":2017,"name":"Ishti, Malhari shadratrotsavarambha, Chandradarshana"},{"transId":163,"fDate":21,"fMonth":11,"fYear":2017,"name":"Raghuveeratirtha pu.(Kudali)."},{"transId":164,"fDate":23,"fMonth":11,"fYear":2017,"name":"Sankarshanavadeyara pu.(Karamapundi),"},{"transId":165,"fDate":24,"fMonth":11,"fYear":2017,"name":"Vishnupanchaka illa skandhashashthi, Malharishadratrotsava samapti, Champashashthi."},{"transId":166,"fDate":25,"fMonth":11,"fYear":2017,"name":"No Vishnu Panchaka"},{"transId":167,"fDate":26,"fMonth":11,"fYear":2017,"name":"Durgashtami, Bhimajayanti."},{"transId":168,"fDate":28,"fMonth":11,"fYear":2017,"name":"Satyanidhitirtha pu.(Karnoolu)."},{"transId":169,"fDate":29,"fMonth":11,"fYear":2017,"name":"Smarthanam Ekadashi, Harivasara after 11:00PM"},{"transId":170,"fDate":30,"fMonth":11,"fYear":2017,"name":"Bhagavatanam Ekadashi, Geeta Jayanti, Satyanathatirtha pu. (Viracholapura)."},{"transId":171,"fDate":1,"fMonth":12,"fYear":2017,"name":"Pradosha, Hanumadvrata, Satenahalli shantesha kartikotsava."},{"transId":172,"fDate":3,"fMonth":12,"fYear":2017,"name":"Dattajayanti, Vishnupanchaka illa, Mannur Chennakeshavotsava, Shrimathadalli sahasrashankhabhisheka, Motampalli Bhimasenarathotsava, Anvadhana, Hostiluhunnime."},{"transId":173,"fDate":4,"fMonth":12,"fYear":2017,"name":"Raghunathatirtha pu.(Malakheda) ishti."},{"transId":174,"fDate":8,"fMonth":12,"fYear":2017,"name":"Akshobhyatirtha pu. (Malakheda)."},{"transId":175,"fDate":9,"fMonth":12,"fYear":2017,"name":"Poorvedyu shraddha"},{"transId":176,"fDate":10,"fMonth":12,"fYear":2017,"name":"Kalashtami, Astaka Shradha"},{"transId":177,"fDate":11,"fMonth":12,"fYear":2017,"name":"Anvashtakashraddha."},{"transId":178,"fDate":13,"fMonth":12,"fYear":2017,"name":"Smartanam Ekadashi harivasara after 10:50PM, Shukrast"},{"transId":179,"fDate":14,"fMonth":12,"fYear":2017,"name":"Bhagavatanam Ekadashi"},{"transId":180,"fDate":15,"fMonth":12,"fYear":2017,"name":"Pradosha"},{"transId":181,"fDate":16,"fMonth":12,"fYear":2017,"name":"Dhanu Sankramana, Shadasheevat Punya Kaal after 12:20PM, Masa Shivaratri"},{"transId":182,"fDate":17,"fMonth":12,"fYear":2017,"name":"Darsha, Dhanurmasa Arambha, Anvadhama"},{"transId":183,"fDate":18,"fMonth":12,"fYear":2017,"name":"Vishnu Panchaka, Ella Amavasya, Jitamitratirtha pu. (Krrishnagaddi)"},{"transId":184,"fDate":19,"fMonth":12,"fYear":2017,"name":"Chandra Darshan"},{"transId":185,"fDate":22,"fMonth":12,"fYear":2017,"name":"Vishnu Panchaka"},{"transId":186,"fDate":26,"fMonth":12,"fYear":2017,"name":"Banadashtami, Banashankariutsava arambha."},{"transId":187,"fDate":29,"fMonth":12,"fYear":2017,"name":"Sarvesham Ekadashi, Vaikuntha Ekadashi, Raghuttamatirtha pu. (Tirukoyalura) Manvadi"},{"transId":188,"fDate":30,"fMonth":12,"fYear":2017,"name":"Mukkotidvadashi, pradosha"},{"transId":189,"fDate":31,"fMonth":12,"fYear":2017,"name":"Raghupriyatirtha pu. (Kudali)"},{"transId":190,"fDate":1,"fMonth":1,"fYear":2018,"name":"Devi sarvashakanivedana, (palledahabba)"},{"transId":191,"fDate":2,"fMonth":1,"fYear":2018,"name":"Banashankari utsavasamapti, Maghasnanarambha, Banadahunnime, No Vishnupanchaka"},{"transId":192,"fDate":7,"fMonth":1,"fYear":2018,"name":"Satyakamatirthara pu. (Atakura)"},{"transId":193,"fDate":8,"fMonth":1,"fYear":2018,"name":"Naraharitirtha pu.(Hampi) purvedyu shraddha."},{"transId":194,"fDate":9,"fMonth":1,"fYear":2018,"name":"Satyabhijnatirtha pu.(Ranebennura), Ashtakashraddha Gopaladasara pu. (Uttanura)."},{"transId":195,"fDate":10,"fMonth":1,"fYear":2018,"name":"Anvashtakashraddha."},{"transId":196,"fDate":12,"fMonth":1,"fYear":2018,"name":"Sarveshamekadashi"},{"transId":197,"fDate":14,"fMonth":1,"fYear":2018,"name":"Pradosha,  Dhanurmasa Samapti, Bhogi"},{"transId":198,"fDate":15,"fMonth":1,"fYear":2018,"name":"Makara Sankramana, Uttarayana Parva Punya Kaal till 08:00AM, Karidina, Masa Shivaratri, VidyAdhishatirtha pu.(Ekachakranagara) Ranebennuru."},{"transId":199,"fDate":16,"fMonth":1,"fYear":2018,"name":"Darsha, ViShnupanchaka, Anvadhana, Purandaradasara pu. (Hampi) Avaratri amavasya."},{"transId":200,"fDate":17,"fMonth":1,"fYear":2018,"name":"Ishti"},{"transId":201,"fDate":18,"fMonth":1,"fYear":2018,"name":"Chandra Darshana,Vishnupamchaka"},{"transId":202,"fDate":22,"fMonth":1,"fYear":2018,"name":"Vasanta Panchami"},{"transId":203,"fDate":23,"fMonth":1,"fYear":2018,"name":"Bhogi"},{"transId":204,"fDate":24,"fMonth":1,"fYear":2018,"name":"Rathasaptami, Vaivasvatamanvadi, Akaparne Snana, Kooshmandaan,"},{"transId":205,"fDate":25,"fMonth":1,"fYear":2018,"name":"Bheeshmashtami, Bheeshma Tarpana"},{"transId":206,"fDate":26,"fMonth":1,"fYear":2018,"name":"Shri MadhvanavamI, Shrimadanandateerthara Badarikashramapravesha"},{"transId":207,"fDate":27,"fMonth":1,"fYear":2018,"name":"Smartanam Ekadashi harivasara after 11:03PM"},{"transId":208,"fDate":28,"fMonth":1,"fYear":2018,"name":"Sarvesham EkadashI(jaya), Satyajnana teertha pu. (Rajamahendri)."},{"transId":209,"fDate":29,"fMonth":1,"fYear":2018,"name":"Bheema dwadashi, pradoSha, Kalpadi,"},{"transId":210,"fDate":31,"fMonth":1,"fYear":2018,"name":"Maghasnana samapti, Vyasapuja, Dwaparayugadi, No Vishnupanchaka, Bharatahunnime, Kuladharma, anvAdhAna, Chandra Grahana - refer page 3"},{"transId":211,"fDate":1,"fMonth":2,"fYear":2018,"name":"Karidina, Isti"},{"transId":212,"fDate":3,"fMonth":2,"fYear":2018,"name":"Yalagur Kshetra - Prana devara Kartikotsava"},{"transId":213,"fDate":6,"fMonth":2,"fYear":2018,"name":"Purvedyushraddha."},{"transId":214,"fDate":7,"fMonth":2,"fYear":2018,"name":"Kalaahtami, Ashtakashraddha."},{"transId":215,"fDate":8,"fMonth":2,"fYear":2018,"name":"Sita Jayanti, Anvaahtakashraddha."},{"transId":216,"fDate":11,"fMonth":2,"fYear":2018,"name":"Sarveaham Ekadashi"},{"transId":217,"fDate":12,"fMonth":2,"fYear":2018,"name":"Kumbha Sankramana"},{"transId":218,"fDate":13,"fMonth":2,"fYear":2018,"name":"Vishnuteertha pu.(Madanoor) Mahashivaratri, Vishnu Pada Parva Punya Kaal till 12:41PM, Pradosha"},{"transId":219,"fDate":14,"fMonth":2,"fYear":2018,"name":"No Vishnu Panchaka"},{"transId":220,"fDate":15,"fMonth":2,"fYear":2018,"name":"Anvadhana, Darsha, Vishnu Panchaka, Shivaratri Amavasya"},{"transId":221,"fDate":16,"fMonth":2,"fYear":2018,"name":"Payovratarambha, Ishti."},{"transId":222,"fDate":17,"fMonth":2,"fYear":2018,"name":"Chandradarshan"},{"transId":223,"fDate":21,"fMonth":2,"fYear":2018,"name":"Satyavrata teertha pu.(Sangali)."},{"transId":224,"fDate":23,"fMonth":2,"fYear":2018,"name":"Durgastami"},{"transId":225,"fDate":26,"fMonth":2,"fYear":2018,"name":"Sarvesham Ekadashi"},{"transId":226,"fDate":27,"fMonth":2,"fYear":2018,"name":"Pradosha"},{"transId":227,"fDate":28,"fMonth":2,"fYear":2018,"name":"PradoSha, payovrataparana."},{"transId":228,"fDate":1,"fMonth":3,"fYear":2018,"name":"Kamadahana, Holihunnime, Brahmasavarnimanvadi, Vishnupanchaka, Anvadhana."},{"transId":229,"fDate":2,"fMonth":3,"fYear":2018,"name":"Satyabodhateertha pu.(Savanur), Karidina, Dhulivandana, Vasantotsava, Amrakusumaprashana, Ishti , Abhyanga."},{"transId":230,"fDate":4,"fMonth":3,"fYear":2018,"name":"Vadirajateertha pu.(Sode), Kalpadi."},{"transId":231,"fDate":5,"fMonth":3,"fYear":2018,"name":"Vyasarajateertha pu.(Navavrundavana)."},{"transId":232,"fDate":6,"fMonth":3,"fYear":2018,"name":"Rangapanchami"},{"transId":233,"fDate":8,"fMonth":3,"fYear":2018,"name":"Purvedyu shraddha ."},{"transId":234,"fDate":9,"fMonth":3,"fYear":2018,"name":"Ashtakashraddha, Kalashtami"},{"transId":235,"fDate":10,"fMonth":3,"fYear":2018,"name":"Anvashtakashraddha."},{"transId":236,"fDate":13,"fMonth":3,"fYear":2018,"name":"Sarvesham Ekadashi"},{"transId":237,"fDate":14,"fMonth":3,"fYear":2018,"name":"Sharvana Dwadashi Upavasa, Meena Sankramana, Pradosha"},{"transId":238,"fDate":15,"fMonth":3,"fYear":2018,"name":"Shadasheeti Parva Punya Kaaal, Tarpana before parane, Masa Shivaratri"},{"transId":239,"fDate":17,"fMonth":3,"fYear":2018,"name":"Darsha, Anvadhana. Rudrasavarnimanvadi, Vishnupanchaka, Satyasantushtateetha pu. (Mysuru) Anvadhana, Ugadiamavasya."}]';
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

function addKeyboard(e)
{
	$.sBar.softKeyboardOnFocus = Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	$.sBar.focus();
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
		addEventToCalecdar();
}

function addEventToCalecdar()
{
	var selectableCalendars = Ti.Calendar.allCalendars;
	var CALENDAR_TO_USE = selectableCalendars[0].id;
	var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);

	var eventYear = parseInt(selectedItem.properties.fYear);
	var eventMonth = parseInt(selectedItem.properties.fMonth)-1;
	var eventDate = parseInt(selectedItem.properties.fDate);
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
		    title: 'UM Panchanga Aradhana',
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
	$.winFestivals.close();
}
