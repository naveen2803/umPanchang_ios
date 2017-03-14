var args = arguments[0] || {};

var sData;
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
	var data = '[{"transId":1,"sYear":2017,"sMonth":3,"sDate":29,"name":"Till 14:44 Shubha"},{"transId":2,"sYear":2017,"sMonth":3,"sDate":30,"name":"Ashubha"},{"transId":3,"sYear":2017,"sMonth":3,"sDate":31,"name":"Ashubha"},{"transId":4,"sYear":2017,"sMonth":4,"sDate":1,"name":"Uttama"},{"transId":5,"sYear":2017,"sMonth":4,"sDate":2,"name":"Shubha"},{"transId":6,"sYear":2017,"sMonth":4,"sDate":3,"name":"Ashubha"},{"transId":7,"sYear":2017,"sMonth":4,"sDate":4,"name":"Madhyama"},{"transId":8,"sYear":2017,"sMonth":4,"sDate":5,"name":"Shubha"},{"transId":9,"sYear":2017,"sMonth":4,"sDate":6,"name":"Ashubha"},{"transId":10,"sYear":2017,"sMonth":4,"sDate":7,"name":"Madhyama"},{"transId":11,"sYear":2017,"sMonth":4,"sDate":8,"name":"Ashubha"},{"transId":12,"sYear":2017,"sMonth":4,"sDate":9,"name":"Uttama"},{"transId":13,"sYear":2017,"sMonth":4,"sDate":10,"name":"Shubha"},{"transId":14,"sYear":2017,"sMonth":4,"sDate":11,"name":"Madhyama"},{"transId":15,"sYear":2017,"sMonth":4,"sDate":12,"name":"Shubha"},{"transId":16,"sYear":2017,"sMonth":4,"sDate":13,"name":"Ashubha"},{"transId":17,"sYear":2017,"sMonth":4,"sDate":14,"name":"Varjya"},{"transId":18,"sYear":2017,"sMonth":4,"sDate":15,"name":"Ashubha"},{"transId":19,"sYear":2017,"sMonth":4,"sDate":16,"name":"Ashubha"},{"transId":20,"sYear":2017,"sMonth":4,"sDate":17,"name":"Madhyama"},{"transId":21,"sYear":2017,"sMonth":4,"sDate":18,"name":"Ashubha"},{"transId":22,"sYear":2017,"sMonth":4,"sDate":19,"name":"Shubha"},{"transId":23,"sYear":2017,"sMonth":4,"sDate":20,"name":"Shubha"},{"transId":24,"sYear":2017,"sMonth":4,"sDate":21,"name":"Shubha"},{"transId":25,"sYear":2017,"sMonth":4,"sDate":22,"name":"Shubha"},{"transId":26,"sYear":2017,"sMonth":4,"sDate":23,"name":"Ashubha"},{"transId":27,"sYear":2017,"sMonth":4,"sDate":24,"name":"Varjya"},{"transId":28,"sYear":2017,"sMonth":4,"sDate":25,"name":"Madhyama"},{"transId":29,"sYear":2017,"sMonth":4,"sDate":26,"name":"Varjya"},{"transId":30,"sYear":2017,"sMonth":4,"sDate":27,"name":"Ashubha"},{"transId":31,"sYear":2017,"sMonth":4,"sDate":28,"name":"Ashubha"},{"transId":32,"sYear":2017,"sMonth":4,"sDate":29,"name":"Shubha"},{"transId":33,"sYear":2017,"sMonth":4,"sDate":30,"name":"Ashubha"},{"transId":34,"sYear":2017,"sMonth":5,"sDate":1,"name":"Shubha"},{"transId":35,"sYear":2017,"sMonth":5,"sDate":2,"name":"Shubha"},{"transId":36,"sYear":2017,"sMonth":5,"sDate":3,"name":"Ashubha"},{"transId":37,"sYear":2017,"sMonth":5,"sDate":4,"name":"Madhyama"},{"transId":38,"sYear":2017,"sMonth":5,"sDate":5,"name":"Ashubha"},{"transId":39,"sYear":2017,"sMonth":5,"sDate":6,"name":"Uttama"},{"transId":40,"sYear":2017,"sMonth":5,"sDate":7,"name":"Shubha"},{"transId":41,"sYear":2017,"sMonth":5,"sDate":8,"name":"Shubha"},{"transId":42,"sYear":2017,"sMonth":5,"sDate":9,"name":"Till 15:35 Madhyama"},{"transId":43,"sYear":2017,"sMonth":5,"sDate":10,"name":"Varjya"},{"transId":44,"sYear":2017,"sMonth":5,"sDate":11,"name":"Ashubha"},{"transId":45,"sYear":2017,"sMonth":5,"sDate":12,"name":"Madhyama"},{"transId":46,"sYear":2017,"sMonth":5,"sDate":13,"name":"Ashubha"},{"transId":47,"sYear":2017,"sMonth":5,"sDate":14,"name":"Madhyama"},{"transId":48,"sYear":2017,"sMonth":5,"sDate":15,"name":"Ashubha"},{"transId":49,"sYear":2017,"sMonth":5,"sDate":16,"name":"Shubha"},{"transId":50,"sYear":2017,"sMonth":5,"sDate":17,"name":"Shubha"},{"transId":51,"sYear":2017,"sMonth":5,"sDate":18,"name":"Shubha"},{"transId":52,"sYear":2017,"sMonth":5,"sDate":19,"name":"Shubha"},{"transId":53,"sYear":2017,"sMonth":5,"sDate":20,"name":"Varjya"},{"transId":54,"sYear":2017,"sMonth":5,"sDate":21,"name":"After 11:07 Shubha"},{"transId":55,"sYear":2017,"sMonth":5,"sDate":22,"name":"Shubha"},{"transId":56,"sYear":2017,"sMonth":5,"sDate":23,"name":"Uttama"},{"transId":57,"sYear":2017,"sMonth":5,"sDate":24,"name":"Varjya"},{"transId":58,"sYear":2017,"sMonth":5,"sDate":25,"name":"Varjya"},{"transId":59,"sYear":2017,"sMonth":5,"sDate":26,"name":"Varjya"},{"transId":60,"sYear":2017,"sMonth":5,"sDate":27,"name":"Shubha"},{"transId":61,"sYear":2017,"sMonth":5,"sDate":28,"name":"Ashubha"},{"transId":62,"sYear":2017,"sMonth":5,"sDate":29,"name":"Madhyama"},{"transId":63,"sYear":2017,"sMonth":5,"sDate":30,"name":"Till 12:03 Madhyama"},{"transId":64,"sYear":2017,"sMonth":5,"sDate":31,"name":"Ashubha"},{"transId":65,"sYear":2017,"sMonth":6,"sDate":1,"name":"Ashubha"},{"transId":66,"sYear":2017,"sMonth":6,"sDate":2,"name":"After 12:06 Uttama"},{"transId":67,"sYear":2017,"sMonth":6,"sDate":3,"name":"Shubha"},{"transId":68,"sYear":2017,"sMonth":6,"sDate":4,"name":"Varjya"},{"transId":69,"sYear":2017,"sMonth":6,"sDate":5,"name":"After 9:46 Shubha"},{"transId":70,"sYear":2017,"sMonth":6,"sDate":6,"name":"Madhyama"},{"transId":71,"sYear":2017,"sMonth":6,"sDate":7,"name":"Ashubha"},{"transId":72,"sYear":2017,"sMonth":6,"sDate":8,"name":"Shubha"},{"transId":73,"sYear":2017,"sMonth":6,"sDate":9,"name":"Ashubha"},{"transId":74,"sYear":2017,"sMonth":6,"sDate":10,"name":"Madhyama"},{"transId":75,"sYear":2017,"sMonth":6,"sDate":11,"name":"Ashubha"},{"transId":76,"sYear":2017,"sMonth":6,"sDate":12,"name":"Ashubha"},{"transId":77,"sYear":2017,"sMonth":6,"sDate":13,"name":"Madhyama"},{"transId":78,"sYear":2017,"sMonth":6,"sDate":14,"name":"Varjya"},{"transId":79,"sYear":2017,"sMonth":6,"sDate":15,"name":"Ashubha"},{"transId":80,"sYear":2017,"sMonth":6,"sDate":16,"name":"Shubha"},{"transId":81,"sYear":2017,"sMonth":6,"sDate":17,"name":"Ashubha"},{"transId":82,"sYear":2017,"sMonth":6,"sDate":18,"name":"Uttama"},{"transId":83,"sYear":2017,"sMonth":6,"sDate":19,"name":"Shubha"},{"transId":84,"sYear":2017,"sMonth":6,"sDate":20,"name":"Uttama"},{"transId":85,"sYear":2017,"sMonth":6,"sDate":21,"name":"Ashubha"},{"transId":86,"sYear":2017,"sMonth":6,"sDate":22,"name":"Ashubha"},{"transId":87,"sYear":2017,"sMonth":6,"sDate":23,"name":"Varjya"},{"transId":88,"sYear":2017,"sMonth":6,"sDate":24,"name":"Varjya"},{"transId":89,"sYear":2017,"sMonth":6,"sDate":25,"name":"Shubha"},{"transId":90,"sYear":2017,"sMonth":6,"sDate":26,"name":"Shubha"},{"transId":91,"sYear":2017,"sMonth":6,"sDate":27,"name":"Ashubha"},{"transId":92,"sYear":2017,"sMonth":6,"sDate":28,"name":"Madhyama"},{"transId":93,"sYear":2017,"sMonth":6,"sDate":29,"name":"Varjya"},{"transId":94,"sYear":2017,"sMonth":6,"sDate":30,"name":"Uttama"},{"transId":95,"sYear":2017,"sMonth":7,"sDate":1,"name":"Shubha"},{"transId":96,"sYear":2017,"sMonth":7,"sDate":2,"name":"Shubha"},{"transId":97,"sYear":2017,"sMonth":7,"sDate":3,"name":"Shubha"},{"transId":98,"sYear":2017,"sMonth":7,"sDate":4,"name":"Ashubha"},{"transId":99,"sYear":2017,"sMonth":7,"sDate":5,"name":"Uttama"},{"transId":100,"sYear":2017,"sMonth":7,"sDate":6,"name":"Ashubha"},{"transId":101,"sYear":2017,"sMonth":7,"sDate":7,"name":"Ashubha"},{"transId":102,"sYear":2017,"sMonth":7,"sDate":8,"name":"Ashubha"},{"transId":103,"sYear":2017,"sMonth":7,"sDate":9,"name":"Ashubha"},{"transId":104,"sYear":2017,"sMonth":7,"sDate":10,"name":"After 11:31 Uttama"},{"transId":105,"sYear":2017,"sMonth":7,"sDate":11,"name":"Madhyama"},{"transId":106,"sYear":2017,"sMonth":7,"sDate":12,"name":"After 14:01 Shubha"},{"transId":107,"sYear":2017,"sMonth":7,"sDate":13,"name":"Shubha"},{"transId":108,"sYear":2017,"sMonth":7,"sDate":14,"name":"Ashubha"},{"transId":109,"sYear":2017,"sMonth":7,"sDate":15,"name":"Uttama"},{"transId":110,"sYear":2017,"sMonth":7,"sDate":16,"name":"Ashubha"},{"transId":111,"sYear":2017,"sMonth":7,"sDate":17,"name":"Varjya"},{"transId":112,"sYear":2017,"sMonth":7,"sDate":18,"name":"Ashubha"},{"transId":113,"sYear":2017,"sMonth":7,"sDate":19,"name":"Ashubha"},{"transId":114,"sYear":2017,"sMonth":7,"sDate":20,"name":"Uttama"},{"transId":115,"sYear":2017,"sMonth":7,"sDate":21,"name":"Shubha"},{"transId":116,"sYear":2017,"sMonth":7,"sDate":22,"name":"Varjya"},{"transId":117,"sYear":2017,"sMonth":7,"sDate":23,"name":"Varjya"},{"transId":118,"sYear":2017,"sMonth":7,"sDate":24,"name":"Ashubha"},{"transId":119,"sYear":2017,"sMonth":7,"sDate":25,"name":"Varjya"},{"transId":120,"sYear":2017,"sMonth":7,"sDate":26,"name":"Ashubha"},{"transId":121,"sYear":2017,"sMonth":7,"sDate":27,"name":"Shubha"},{"transId":122,"sYear":2017,"sMonth":7,"sDate":28,"name":"Shubha"},{"transId":123,"sYear":2017,"sMonth":7,"sDate":29,"name":"Shubha"},{"transId":124,"sYear":2017,"sMonth":7,"sDate":30,"name":"Ashubha"},{"transId":125,"sYear":2017,"sMonth":7,"sDate":31,"name":"Ashubha"},{"transId":126,"sYear":2017,"sMonth":8,"sDate":1,"name":"After 12:25 Shubha"},{"transId":127,"sYear":2017,"sMonth":8,"sDate":2,"name":"Till 15:15 Uttama"},{"transId":128,"sYear":2017,"sMonth":8,"sDate":3,"name":"Ashubha"},{"transId":129,"sYear":2017,"sMonth":8,"sDate":4,"name":"Varjya"},{"transId":130,"sYear":2017,"sMonth":8,"sDate":5,"name":"Ashubha"},{"transId":131,"sYear":2017,"sMonth":8,"sDate":6,"name":"Uttama"},{"transId":132,"sYear":2017,"sMonth":8,"sDate":7,"name":"Varjya"},{"transId":133,"sYear":2017,"sMonth":8,"sDate":8,"name":"Varjya"},{"transId":134,"sYear":2017,"sMonth":8,"sDate":9,"name":"Shubha"},{"transId":135,"sYear":2017,"sMonth":8,"sDate":10,"name":"Ashubha"},{"transId":136,"sYear":2017,"sMonth":8,"sDate":11,"name":"Shubha"},{"transId":137,"sYear":2017,"sMonth":8,"sDate":12,"name":"Shubha"},{"transId":138,"sYear":2017,"sMonth":8,"sDate":13,"name":"Shubha"},{"transId":139,"sYear":2017,"sMonth":8,"sDate":14,"name":"Ashubha"},{"transId":140,"sYear":2017,"sMonth":8,"sDate":15,"name":"Ashubha"},{"transId":141,"sYear":2017,"sMonth":8,"sDate":16,"name":"Uttama"},{"transId":142,"sYear":2017,"sMonth":8,"sDate":17,"name":"Ashubha"},{"transId":143,"sYear":2017,"sMonth":8,"sDate":18,"name":"Ashubha"},{"transId":144,"sYear":2017,"sMonth":8,"sDate":19,"name":"Ashubha"},{"transId":145,"sYear":2017,"sMonth":8,"sDate":20,"name":"Varjya"},{"transId":146,"sYear":2017,"sMonth":8,"sDate":21,"name":"Varjya"},{"transId":147,"sYear":2017,"sMonth":8,"sDate":22,"name":"Madhyama"},{"transId":148,"sYear":2017,"sMonth":8,"sDate":23,"name":"After 14:10 Uttama"},{"transId":149,"sYear":2017,"sMonth":8,"sDate":24,"name":"Uttama"},{"transId":150,"sYear":2017,"sMonth":8,"sDate":25,"name":"Ashubha"},{"transId":151,"sYear":2017,"sMonth":8,"sDate":26,"name":"Shubha"},{"transId":152,"sYear":2017,"sMonth":8,"sDate":27,"name":"Shubha"},{"transId":153,"sYear":2017,"sMonth":8,"sDate":28,"name":"Ashubha"},{"transId":154,"sYear":2017,"sMonth":8,"sDate":29,"name":"Varjya"},{"transId":155,"sYear":2017,"sMonth":8,"sDate":30,"name":"Ashubha"},{"transId":156,"sYear":2017,"sMonth":8,"sDate":31,"name":"Madhyama"},{"transId":157,"sYear":2017,"sMonth":9,"sDate":1,"name":"Ashubha"},{"transId":158,"sYear":2017,"sMonth":9,"sDate":2,"name":"After 09:40 Uttama"},{"transId":159,"sYear":2017,"sMonth":9,"sDate":3,"name":"Shubha"},{"transId":160,"sYear":2017,"sMonth":9,"sDate":4,"name":"Shubha"},{"transId":161,"sYear":2017,"sMonth":9,"sDate":5,"name":"Madhyama"},{"transId":162,"sYear":2017,"sMonth":9,"sDate":6,"name":"Shubha"},{"transId":163,"sYear":2017,"sMonth":9,"sDate":7,"name":"Ashubha"},{"transId":164,"sYear":2017,"sMonth":9,"sDate":8,"name":"Uttama"},{"transId":165,"sYear":2017,"sMonth":9,"sDate":9,"name":"Shubha"},{"transId":166,"sYear":2017,"sMonth":9,"sDate":10,"name":"Ashubha"},{"transId":167,"sYear":2017,"sMonth":9,"sDate":11,"name":"Ashubha"},{"transId":168,"sYear":2017,"sMonth":9,"sDate":12,"name":"After 14:10 Uttama"},{"transId":169,"sYear":2017,"sMonth":9,"sDate":13,"name":"Shubha"},{"transId":170,"sYear":2017,"sMonth":9,"sDate":14,"name":"Varjya"},{"transId":171,"sYear":2017,"sMonth":9,"sDate":15,"name":"Shubha"},{"transId":172,"sYear":2017,"sMonth":9,"sDate":16,"name":"Shubha"},{"transId":173,"sYear":2017,"sMonth":9,"sDate":17,"name":"Ashubha"},{"transId":174,"sYear":2017,"sMonth":9,"sDate":18,"name":"Varjya"},{"transId":175,"sYear":2017,"sMonth":9,"sDate":19,"name":"Varjya"},{"transId":176,"sYear":2017,"sMonth":9,"sDate":20,"name":"Varjya"},{"transId":177,"sYear":2017,"sMonth":9,"sDate":21,"name":"Shubha"},{"transId":178,"sYear":2017,"sMonth":9,"sDate":22,"name":"Shubha"},{"transId":179,"sYear":2017,"sMonth":9,"sDate":23,"name":"Varjya"},{"transId":180,"sYear":2017,"sMonth":9,"sDate":24,"name":"Ashubha"},{"transId":181,"sYear":2017,"sMonth":9,"sDate":25,"name":"Shubha"},{"transId":182,"sYear":2017,"sMonth":9,"sDate":26,"name":"Ashubha"},{"transId":183,"sYear":2017,"sMonth":9,"sDate":27,"name":"Madhyama"},{"transId":184,"sYear":2017,"sMonth":9,"sDate":28,"name":"Ashubha"},{"transId":185,"sYear":2017,"sMonth":9,"sDate":29,"name":"After 15:50 Uttama"},{"transId":186,"sYear":2017,"sMonth":9,"sDate":30,"name":"Uttama"},{"transId":187,"sYear":2017,"sMonth":10,"sDate":1,"name":"Till 14:00 Shubha"},{"transId":188,"sYear":2017,"sMonth":10,"sDate":2,"name":"Shubha"},{"transId":189,"sYear":2017,"sMonth":10,"sDate":3,"name":"Shubha"},{"transId":190,"sYear":2017,"sMonth":10,"sDate":4,"name":"Ashubha"},{"transId":191,"sYear":2017,"sMonth":10,"sDate":5,"name":"After 12:57 Uttama"},{"transId":192,"sYear":2017,"sMonth":10,"sDate":6,"name":"Uttama"},{"transId":193,"sYear":2017,"sMonth":10,"sDate":7,"name":"Shubha"},{"transId":194,"sYear":2017,"sMonth":10,"sDate":8,"name":"Ashubha"},{"transId":195,"sYear":2017,"sMonth":10,"sDate":9,"name":"After 14:05 Uttama"},{"transId":196,"sYear":2017,"sMonth":10,"sDate":10,"name":"After 12:39 Shubha"},{"transId":197,"sYear":2017,"sMonth":10,"sDate":11,"name":"Ashubha"},{"transId":198,"sYear":2017,"sMonth":10,"sDate":12,"name":"Ashubha"},{"transId":199,"sYear":2017,"sMonth":10,"sDate":13,"name":"Shubha"},{"transId":200,"sYear":2017,"sMonth":10,"sDate":14,"name":"Ashubha"},{"transId":201,"sYear":2017,"sMonth":10,"sDate":15,"name":"Madhyama"},{"transId":202,"sYear":2017,"sMonth":10,"sDate":16,"name":"Ashubha"},{"transId":203,"sYear":2017,"sMonth":10,"sDate":17,"name":"Shubha"},{"transId":204,"sYear":2017,"sMonth":10,"sDate":18,"name":"Varjya"},{"transId":205,"sYear":2017,"sMonth":10,"sDate":19,"name":"Varjya"},{"transId":206,"sYear":2017,"sMonth":10,"sDate":20,"name":"Uttama"},{"transId":207,"sYear":2017,"sMonth":10,"sDate":21,"name":"Till 10:20 Shubha"},{"transId":208,"sYear":2017,"sMonth":10,"sDate":22,"name":"After 12:27 Shubha"},{"transId":209,"sYear":2017,"sMonth":10,"sDate":23,"name":"Ashubha"},{"transId":210,"sYear":2017,"sMonth":10,"sDate":24,"name":"Ashubha"},{"transId":211,"sYear":2017,"sMonth":10,"sDate":25,"name":"Madhyama"},{"transId":212,"sYear":2017,"sMonth":10,"sDate":26,"name":"Ashubha"},{"transId":213,"sYear":2017,"sMonth":10,"sDate":27,"name":"Till 14:44 Uttama"},{"transId":214,"sYear":2017,"sMonth":10,"sDate":28,"name":"Uttama"},{"transId":215,"sYear":2017,"sMonth":10,"sDate":29,"name":"Shubha"},{"transId":216,"sYear":2017,"sMonth":10,"sDate":30,"name":"Shubha"},{"transId":217,"sYear":2017,"sMonth":10,"sDate":31,"name":"Ashubha"},{"transId":218,"sYear":2017,"sMonth":11,"sDate":1,"name":"After 07:40 Uttama"},{"transId":219,"sYear":2017,"sMonth":11,"sDate":2,"name":"Shubha"},{"transId":220,"sYear":2017,"sMonth":11,"sDate":3,"name":"Shubha"},{"transId":221,"sYear":2017,"sMonth":11,"sDate":4,"name":"Varjya"},{"transId":222,"sYear":2017,"sMonth":11,"sDate":5,"name":"Varjya"},{"transId":223,"sYear":2017,"sMonth":11,"sDate":6,"name":"Madhyama"},{"transId":224,"sYear":2017,"sMonth":11,"sDate":7,"name":"Madhyama"},{"transId":225,"sYear":2017,"sMonth":11,"sDate":8,"name":"Ashubha"},{"transId":226,"sYear":2017,"sMonth":11,"sDate":9,"name":"After 13:45 Uttama"},{"transId":227,"sYear":2017,"sMonth":11,"sDate":10,"name":"Till 12:31 Shubha"},{"transId":228,"sYear":2017,"sMonth":11,"sDate":11,"name":"Ashubha"},{"transId":229,"sYear":2017,"sMonth":11,"sDate":12,"name":"After 11:37 Ashubha"},{"transId":230,"sYear":2017,"sMonth":11,"sDate":13,"name":"Varjya"},{"transId":231,"sYear":2017,"sMonth":11,"sDate":14,"name":"Shubha"},{"transId":232,"sYear":2017,"sMonth":11,"sDate":15,"name":"Shubha"},{"transId":233,"sYear":2017,"sMonth":11,"sDate":16,"name":"Ashubha"},{"transId":234,"sYear":2017,"sMonth":11,"sDate":17,"name":"Varjya"},{"transId":235,"sYear":2017,"sMonth":11,"sDate":18,"name":"Varjya"},{"transId":236,"sYear":2017,"sMonth":11,"sDate":19,"name":"Shubha"},{"transId":237,"sYear":2017,"sMonth":11,"sDate":20,"name":"Ashubha"},{"transId":238,"sYear":2017,"sMonth":11,"sDate":21,"name":"Madhyama"},{"transId":239,"sYear":2017,"sMonth":11,"sDate":22,"name":"Ashubha"},{"transId":240,"sYear":2017,"sMonth":11,"sDate":23,"name":"Uttama"},{"transId":241,"sYear":2017,"sMonth":11,"sDate":24,"name":"Shubha"},{"transId":242,"sYear":2017,"sMonth":11,"sDate":25,"name":"Uttama"},{"transId":243,"sYear":2017,"sMonth":11,"sDate":26,"name":"Ashubha"},{"transId":244,"sYear":2017,"sMonth":11,"sDate":27,"name":"Shubha"},{"transId":245,"sYear":2017,"sMonth":11,"sDate":28,"name":"Ashubha"},{"transId":246,"sYear":2017,"sMonth":11,"sDate":29,"name":"Uttama"},{"transId":247,"sYear":2017,"sMonth":11,"sDate":30,"name":"Varjya"},{"transId":248,"sYear":2017,"sMonth":12,"sDate":1,"name":"Ashubha"},{"transId":249,"sYear":2017,"sMonth":12,"sDate":2,"name":"Ashubha"},{"transId":250,"sYear":2017,"sMonth":12,"sDate":3,"name":"After 11:22 Uttama"},{"transId":251,"sYear":2017,"sMonth":12,"sDate":4,"name":"Shubha"},{"transId":252,"sYear":2017,"sMonth":12,"sDate":5,"name":"Ashubha"},{"transId":253,"sYear":2017,"sMonth":12,"sDate":6,"name":"Shubha"},{"transId":254,"sYear":2017,"sMonth":12,"sDate":7,"name":"Ashubha"},{"transId":255,"sYear":2017,"sMonth":12,"sDate":8,"name":"Varjya"},{"transId":256,"sYear":2017,"sMonth":12,"sDate":9,"name":"Ashubha"},{"transId":257,"sYear":2017,"sMonth":12,"sDate":10,"name":"Ashubha"},{"transId":258,"sYear":2017,"sMonth":12,"sDate":11,"name":"Uttama"},{"transId":259,"sYear":2017,"sMonth":12,"sDate":12,"name":"Madhyama"},{"transId":260,"sYear":2017,"sMonth":12,"sDate":13,"name":"Shubha"},{"transId":261,"sYear":2017,"sMonth":12,"sDate":14,"name":"Ashubha"},{"transId":262,"sYear":2017,"sMonth":12,"sDate":15,"name":"Ashubha"},{"transId":263,"sYear":2017,"sMonth":12,"sDate":16,"name":"Ashubha"},{"transId":264,"sYear":2017,"sMonth":12,"sDate":17,"name":"Varjya"},{"transId":265,"sYear":2017,"sMonth":12,"sDate":18,"name":"Varjya"},{"transId":266,"sYear":2017,"sMonth":12,"sDate":19,"name":"Ashubha"},{"transId":267,"sYear":2017,"sMonth":12,"sDate":20,"name":"After 13:20 Uttama"},{"transId":268,"sYear":2017,"sMonth":12,"sDate":21,"name":"Uttama"},{"transId":269,"sYear":2017,"sMonth":12,"sDate":22,"name":"Ashubha"},{"transId":270,"sYear":2017,"sMonth":12,"sDate":23,"name":"Shubha"},{"transId":271,"sYear":2017,"sMonth":12,"sDate":24,"name":"Shubha"},{"transId":272,"sYear":2017,"sMonth":12,"sDate":25,"name":"Varjya"},{"transId":273,"sYear":2017,"sMonth":12,"sDate":26,"name":"Till 14:41 Ashubha"},{"transId":274,"sYear":2017,"sMonth":12,"sDate":27,"name":"Shubha"},{"transId":275,"sYear":2017,"sMonth":12,"sDate":28,"name":"Shubha"},{"transId":276,"sYear":2017,"sMonth":12,"sDate":29,"name":"Ashubha"},{"transId":277,"sYear":2017,"sMonth":12,"sDate":30,"name":"Ashubha"},{"transId":278,"sYear":2017,"sMonth":12,"sDate":31,"name":"Uttama"},{"transId":279,"sYear":2018,"sMonth":1,"sDate":1,"name":"Shubha"},{"transId":280,"sYear":2018,"sMonth":1,"sDate":2,"name":"Ashubha"},{"transId":281,"sYear":2018,"sMonth":1,"sDate":3,"name":"Varjya"},{"transId":282,"sYear":2018,"sMonth":1,"sDate":4,"name":"Ashubha"},{"transId":283,"sYear":2018,"sMonth":1,"sDate":5,"name":"Madhyama"},{"transId":284,"sYear":2018,"sMonth":1,"sDate":6,"name":"Ashubha"},{"transId":285,"sYear":2018,"sMonth":1,"sDate":7,"name":"Till 16:14 Uttama"},{"transId":286,"sYear":2018,"sMonth":1,"sDate":8,"name":"Shubha"},{"transId":287,"sYear":2018,"sMonth":1,"sDate":9,"name":"Shubha"},{"transId":288,"sYear":2018,"sMonth":1,"sDate":10,"name":"Shubha"},{"transId":289,"sYear":2018,"sMonth":1,"sDate":11,"name":"Ashubha"},{"transId":290,"sYear":2018,"sMonth":1,"sDate":12,"name":"Shubha"},{"transId":291,"sYear":2018,"sMonth":1,"sDate":13,"name":"Ashubha"},{"transId":292,"sYear":2018,"sMonth":1,"sDate":14,"name":"Ashubha"},{"transId":293,"sYear":2018,"sMonth":1,"sDate":15,"name":"Varjya"},{"transId":294,"sYear":2018,"sMonth":1,"sDate":16,"name":"Varjya"},{"transId":295,"sYear":2018,"sMonth":1,"sDate":17,"name":"After 07:50 Shubha"},{"transId":296,"sYear":2018,"sMonth":1,"sDate":18,"name":"Shubha"},{"transId":297,"sYear":2018,"sMonth":1,"sDate":19,"name":"After 11:02 Varjya"},{"transId":298,"sYear":2018,"sMonth":1,"sDate":20,"name":"After 11:09 Varjya"},{"transId":299,"sYear":2018,"sMonth":1,"sDate":21,"name":"Ashubha"},{"transId":300,"sYear":2018,"sMonth":1,"sDate":22,"name":"Uttama"},{"transId":301,"sYear":2018,"sMonth":1,"sDate":23,"name":"Shubha"},{"transId":302,"sYear":2018,"sMonth":1,"sDate":24,"name":"Shubha"},{"transId":303,"sYear":2018,"sMonth":1,"sDate":25,"name":"Ashubha"},{"transId":304,"sYear":2018,"sMonth":1,"sDate":26,"name":"Ashubha"},{"transId":305,"sYear":2018,"sMonth":1,"sDate":27,"name":"Uttama"},{"transId":306,"sYear":2018,"sMonth":1,"sDate":28,"name":"Ashubha"},{"transId":307,"sYear":2018,"sMonth":1,"sDate":29,"name":"Varjya"},{"transId":308,"sYear":2018,"sMonth":1,"sDate":30,"name":"Shubha"},{"transId":309,"sYear":2018,"sMonth":1,"sDate":31,"name":"Varjya"},{"transId":310,"sYear":2018,"sMonth":2,"sDate":1,"name":"Varjya"},{"transId":311,"sYear":2018,"sMonth":2,"sDate":2,"name":"Madhyama"},{"transId":312,"sYear":2018,"sMonth":2,"sDate":3,"name":"After 11:30 Shubha"},{"transId":313,"sYear":2018,"sMonth":2,"sDate":4,"name":"Uttama"},{"transId":314,"sYear":2018,"sMonth":2,"sDate":5,"name":"Shubha"},{"transId":315,"sYear":2018,"sMonth":2,"sDate":6,"name":"Shubha"},{"transId":316,"sYear":2018,"sMonth":2,"sDate":7,"name":"Till 12:22 Shubha"},{"transId":317,"sYear":2018,"sMonth":2,"sDate":8,"name":"Ashubha"},{"transId":318,"sYear":2018,"sMonth":2,"sDate":9,"name":"Till 16:00 Shubha"},{"transId":319,"sYear":2018,"sMonth":2,"sDate":10,"name":"Ashubha"},{"transId":320,"sYear":2018,"sMonth":2,"sDate":11,"name":"Madhyama"},{"transId":321,"sYear":2018,"sMonth":2,"sDate":12,"name":"Ashubha"},{"transId":322,"sYear":2018,"sMonth":2,"sDate":13,"name":"Shubha"},{"transId":323,"sYear":2018,"sMonth":2,"sDate":14,"name":"Varjya"},{"transId":324,"sYear":2018,"sMonth":2,"sDate":15,"name":"Varjya"},{"transId":325,"sYear":2018,"sMonth":2,"sDate":16,"name":"Shubha"},{"transId":326,"sYear":2018,"sMonth":2,"sDate":17,"name":"Till 11:26 Shubha"},{"transId":327,"sYear":2018,"sMonth":2,"sDate":18,"name":"After 12:45 Uttama"},{"transId":328,"sYear":2018,"sMonth":2,"sDate":19,"name":"Ashubha"},{"transId":329,"sYear":2018,"sMonth":2,"sDate":20,"name":"Shubha"},{"transId":330,"sYear":2018,"sMonth":2,"sDate":21,"name":"Shubha"},{"transId":331,"sYear":2018,"sMonth":2,"sDate":22,"name":"Ashubha"},{"transId":332,"sYear":2018,"sMonth":2,"sDate":23,"name":"Varjya"},{"transId":333,"sYear":2018,"sMonth":2,"sDate":24,"name":"Uttama"},{"transId":334,"sYear":2018,"sMonth":2,"sDate":25,"name":"Ashubha"},{"transId":335,"sYear":2018,"sMonth":2,"sDate":26,"name":"Shubha"},{"transId":336,"sYear":2018,"sMonth":2,"sDate":27,"name":"Shubha"},{"transId":337,"sYear":2018,"sMonth":2,"sDate":28,"name":"Ashubha"},{"transId":338,"sYear":2018,"sMonth":3,"sDate":1,"name":"Ashubha"},{"transId":339,"sYear":2018,"sMonth":3,"sDate":2,"name":"Varjya"},{"transId":340,"sYear":2018,"sMonth":3,"sDate":3,"name":"Uttama"},{"transId":341,"sYear":2018,"sMonth":3,"sDate":4,"name":"Shubha"},{"transId":342,"sYear":2018,"sMonth":3,"sDate":5,"name":"Shubha"},{"transId":343,"sYear":2018,"sMonth":3,"sDate":6,"name":"Shubha"},{"transId":344,"sYear":2018,"sMonth":3,"sDate":7,"name":"Ashubha"},{"transId":345,"sYear":2018,"sMonth":3,"sDate":8,"name":"Shubha"},{"transId":346,"sYear":2018,"sMonth":3,"sDate":9,"name":"Ashubha"},{"transId":347,"sYear":2018,"sMonth":3,"sDate":10,"name":"Madhyama"},{"transId":348,"sYear":2018,"sMonth":3,"sDate":11,"name":"Varjya"},{"transId":349,"sYear":2018,"sMonth":3,"sDate":12,"name":"Uttama"},{"transId":350,"sYear":2018,"sMonth":3,"sDate":13,"name":"Shubha"},{"transId":351,"sYear":2018,"sMonth":3,"sDate":14,"name":"Ashubha"},{"transId":352,"sYear":2018,"sMonth":3,"sDate":15,"name":"Shubha"},{"transId":353,"sYear":2018,"sMonth":3,"sDate":16,"name":"Varjya"},{"transId":354,"sYear":2018,"sMonth":3,"sDate":17,"name":"Varjya"}]';
	sData = JSON.parse(data);
	loadList();
})();

function loadList()
{
	for (var i = 0; i < sData.length; i++)
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");

		var sFullDate = sData[i].sDate + "/" + sData[i].sMonth + "/" + sData[i].sYear;
		var sName = sData[i].name.replace(regex,"\n");

			switch( sData[i].sMonth )
			{
				case  "1":
				{
					listItems1.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "2":
				{
					listItems2.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "3":
				{
					listItems3.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "4":
				{
					listItems4.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "5":
				{
					listItems5.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "6":
				{
					listItems6.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "7":
				{
					listItems7.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "8":
				{
					listItems8.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "9":
				{
					listItems9.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "10":
				{
					listItems10.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "11":
				{
					listItems11.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
						}
					});
					break;
				}
				case  "12":
				{
					listItems12.push({
						lblDate: {
							text: sFullDate
						},
						lblName: {
							text: sName
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
	$.slist.sections = [section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12];

	/**
	 * SET SECTION HEADERS
	 */
	$.slist.sections[0].headerTitle = "January";
	$.slist.sections[1].headerTitle = "February";
	$.slist.sections[2].headerTitle = "March";
	$.slist.sections[3].headerTitle = "April";
	$.slist.sections[4].headerTitle = "May";
	$.slist.sections[5].headerTitle = "June";
	$.slist.sections[6].headerTitle = "July";
	$.slist.sections[7].headerTitle = "August";
	$.slist.sections[8].headerTitle = "September";
	$.slist.sections[9].headerTitle = "October";
	$.slist.sections[10].headerTitle = "November";
	$.slist.sections[11].headerTitle = "December";

	/**
	 * SCROLL THE LIST TO CURRENT MONTH
	 */
	var d = new Date();
	$.slist.scrollToItem(d.getMonth(), 1);
}

function closeWindow()
{
	$.winShubha.close();
}
