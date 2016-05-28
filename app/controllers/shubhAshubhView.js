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
	var data = '[{"transId":"1","sDate":"8","sMonth":"4","sYear":"2016","name":"Madhyama"},{"transId":"2","sDate":"9","sMonth":"4","sYear":"2016","name":"Ashubha"},{"transId":"3","sDate":"10","sMonth":"4","sYear":"2016","name":"Ashubha"},{"transId":"4","sDate":"11","sMonth":"4","sYear":"2016","name":"Uttama"},{"transId":"5","sDate":"12","sMonth":"4","sYear":"2016","name":"Shubha"},{"transId":"6","sDate":"13","sMonth":"4","sYear":"2016","name":"Ashubha"},{"transId":"7","sDate":"14","sMonth":"4","sYear":"2016","name":"After 9:42 am Shubha"},{"transId":"8","sDate":"15","sMonth":"4","sYear":"2016","name":"Uttama"},{"transId":"9","sDate":"16","sMonth":"4","sYear":"2016","name":"Ashubha"},{"transId":"10","sDate":"17","sMonth":"4","sYear":"2016","name":"Madhyama"},{"transId":"11","sDate":"18","sMonth":"4","sYear":"2016","name":"Ashubha"},{"transId":"12","sDate":"19","sMonth":"4","sYear":"2016","name":"Uttama"},{"transId":"13","sDate":"20","sMonth":"4","sYear":"2016","name":"Shubha"},{"transId":"14","sDate":"21","sMonth":"4","sYear":"2016","name":"Shubha"},{"transId":"15","sDate":"22","sMonth":"4","sYear":"2016","name":"Shubha"},{"transId":"16","sDate":"23","sMonth":"4","sYear":"2016","name":"After 10:18am  Ashubha"},{"transId":"17","sDate":"24","sMonth":"4","sYear":"2016","name":"Ashubha"},{"transId":"18","sDate":"25","sMonth":"4","sYear":"2016","name":"Shubha"},{"transId":"19","sDate":"26","sMonth":"4","sYear":"2016","name":"Ashubha"},{"transId":"20","sDate":"27","sMonth":"4","sYear":"2016","name":"Madhyama"},{"transId":"21","sDate":"28","sMonth":"4","sYear":"2016","name":"Ashubha"},{"transId":"22","sDate":"29","sMonth":"4","sYear":"2016","name":"After 9:00am Uttama"},{"transId":"23","sDate":"30","sMonth":"4","sYear":"2016","name":"Shubha"},{"transId":"24","sDate":"1","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"25","sDate":"2","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"26","sDate":"3","sMonth":"5","sYear":"2016","name":"Varjya"},{"transId":"27","sDate":"4","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"28","sDate":"5","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"29","sDate":"6","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"30","sDate":"7","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"31","sDate":"8","sMonth":"5","sYear":"2016","name":"Uttama"},{"transId":"32","sDate":"9","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"33","sDate":"10","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"34","sDate":"11","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"35","sDate":"12","sMonth":"5","sYear":"2016","name":"Uttama"},{"transId":"36","sDate":"13","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"37","sDate":"14","sMonth":"5","sYear":"2016","name":"Madhyama"},{"transId":"38","sDate":"15","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"39","sDate":"16","sMonth":"5","sYear":"2016","name":"Uttama"},{"transId":"40","sDate":"17","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"41","sDate":"18","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"42","sDate":"19","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"43","sDate":"20","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"44","sDate":"21","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"45","sDate":"22","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"46","sDate":"23","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"47","sDate":"24","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"48","sDate":"25","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"49","sDate":"26","sMonth":"5","sYear":"2016","name":"Uttama"},{"transId":"50","sDate":"27","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"51","sDate":"28","sMonth":"5","sYear":"2016","name":"Shubha"},{"transId":"52","sDate":"29","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"53","sDate":"30","sMonth":"5","sYear":"2016","name":"Ashubha"},{"transId":"54","sDate":"31","sMonth":"5","sYear":"2016","name":"Uttama"},{"transId":"55","sDate":"1","sMonth":"6","sYear":"2016","name":"Shubha"},{"transId":"56","sDate":"2","sMonth":"6","sYear":"2016","name":"Shubha"},{"transId":"57","sDate":"3","sMonth":"6","sYear":"2016","name":"Madhyama"},{"transId":"58","sDate":"4","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"59","sDate":"5","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"60","sDate":"6","sMonth":"6","sYear":"2016","name":"Varjya"},{"transId":"61","sDate":"7","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"62","sDate":"8","sMonth":"6","sYear":"2016","name":"After 8:50am Shubha"},{"transId":"63","sDate":"9","sMonth":"6","sYear":"2016","name":"After 7:33am  Ashubha"},{"transId":"64","sDate":"10","sMonth":"6","sYear":"2016","name":"Up to 8:09am  Ashubha"},{"transId":"65","sDate":"11","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"66","sDate":"12","sMonth":"6","sYear":"2016","name":"After 13:47 Uttama"},{"transId":"67","sDate":"13","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"68","sDate":"14","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"69","sDate":"15","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"70","sDate":"16","sMonth":"6","sYear":"2016","name":"After 9:55am Shubha"},{"transId":"71","sDate":"17","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"72","sDate":"18","sMonth":"6","sYear":"2016","name":"Shubha"},{"transId":"73","sDate":"19","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"74","sDate":"20","sMonth":"6","sYear":"2016","name":"Madhyama"},{"transId":"75","sDate":"21","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"76","sDate":"22","sMonth":"6","sYear":"2016","name":"After 8:31am Uttama"},{"transId":"77","sDate":"23","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"78","sDate":"24","sMonth":"6","sYear":"2016","name":"Shubha"},{"transId":"79","sDate":"25","sMonth":"6","sYear":"2016","name":"Shubha"},{"transId":"80","sDate":"26","sMonth":"6","sYear":"2016","name":"After 8:55am Ashubha"},{"transId":"81","sDate":"27","sMonth":"6","sYear":"2016","name":"After 8:10am Uttama"},{"transId":"82","sDate":"28","sMonth":"6","sYear":"2016","name":"Shubha"},{"transId":"83","sDate":"29","sMonth":"6","sYear":"2016","name":"Shubha"},{"transId":"84","sDate":"30","sMonth":"6","sYear":"2016","name":"Ashubha"},{"transId":"85","sDate":"1","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"86","sDate":"2","sMonth":"7","sYear":"2016","name":"Uttama"},{"transId":"87","sDate":"3","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"88","sDate":"4","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"89","sDate":"5","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"90","sDate":"6","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"91","sDate":"7","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"92","sDate":"8","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"93","sDate":"9","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"94","sDate":"10","sMonth":"7","sYear":"2016","name":"Uttama"},{"transId":"95","sDate":"11","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"96","sDate":"12","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"97","sDate":"13","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"98","sDate":"14","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"99","sDate":"15","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"100","sDate":"16","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"101","sDate":"17","sMonth":"7","sYear":"2016","name":"Varjya"},{"transId":"102","sDate":"18","sMonth":"7","sYear":"2016","name":"Madhyama"},{"transId":"103","sDate":"19","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"104","sDate":"20","sMonth":"7","sYear":"2016","name":"Uttama"},{"transId":"105","sDate":"21","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"106","sDate":"22","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"107","sDate":"23","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"108","sDate":"24","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"109","sDate":"25","sMonth":"7","sYear":"2016","name":"Uttama"},{"transId":"110","sDate":"26","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"111","sDate":"27","sMonth":"7","sYear":"2016","name":"Madhyama"},{"transId":"112","sDate":"28","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"113","sDate":"29","sMonth":"7","sYear":"2016","name":"After 10:49am Uttama"},{"transId":"114","sDate":"30","sMonth":"7","sYear":"2016","name":"Shubha"},{"transId":"115","sDate":"31","sMonth":"7","sYear":"2016","name":"Ashubha"},{"transId":"116","sDate":"1","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"117","sDate":"2","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"118","sDate":"3","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"119","sDate":"4","sMonth":"8","sYear":"2016","name":"Madhyama"},{"transId":"120","sDate":"5","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"121","sDate":"6","sMonth":"8","sYear":"2016","name":"Uttama"},{"transId":"122","sDate":"7","sMonth":"8","sYear":"2016","name":"Shubha"},{"transId":"123","sDate":"8","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"124","sDate":"9","sMonth":"8","sYear":"2016","name":"Shubha"},{"transId":"125","sDate":"10","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"126","sDate":"11","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"127","sDate":"12","sMonth":"8","sYear":"2016","name":"Shubha"},{"transId":"128","sDate":"13","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"129","sDate":"14","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"130","sDate":"15","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"131","sDate":"16","sMonth":"8","sYear":"2016","name":"Uttama"},{"transId":"132","sDate":"17","sMonth":"8","sYear":"2016","name":"Shubha"},{"transId":"133","sDate":"18","sMonth":"8","sYear":"2016","name":"Shubha"},{"transId":"134","sDate":"19","sMonth":"8","sYear":"2016","name":"Shubha"},{"transId":"135","sDate":"20","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"136","sDate":"21","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"137","sDate":"22","sMonth":"8","sYear":"2016","name":"Shubha"},{"transId":"138","sDate":"23","sMonth":"8","sYear":"2016","name":"Uttama"},{"transId":"139","sDate":"24","sMonth":"8","sYear":"2016","name":"Shubha"},{"transId":"140","sDate":"25","sMonth":"8","sYear":"2016","name":"12.9 pa. aShubha"},{"transId":"141","sDate":"26","sMonth":"8","sYear":"2016","name":"Uttama"},{"transId":"142","sDate":"27","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"143","sDate":"28","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"144","sDate":"29","sMonth":"8","sYear":"2016","name":"11.7 naM. Shubha"},{"transId":"145","sDate":"30","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"146","sDate":"31","sMonth":"8","sYear":"2016","name":"Ashubha"},{"transId":"147","sDate":"1","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"148","sDate":"2","sMonth":"9","sYear":"2016","name":"After 12:30noon Uttama"},{"transId":"149","sDate":"3","sMonth":"9","sYear":"2016","name":"Uttama"},{"transId":"150","sDate":"4","sMonth":"9","sYear":"2016","name":"Uttama"},{"transId":"151","sDate":"5","sMonth":"9","sYear":"2016","name":"Shubha"},{"transId":"152","sDate":"6","sMonth":"9","sYear":"2016","name":"Shubha"},{"transId":"153","sDate":"7","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"154","sDate":"8","sMonth":"9","sYear":"2016","name":"After 11:13am Shubha"},{"transId":"155","sDate":"9","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"156","sDate":"10","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"157","sDate":"11","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"158","sDate":"12","sMonth":"9","sYear":"2016","name":"After 9:55am Uttama"},{"transId":"159","sDate":"13","sMonth":"9","sYear":"2016","name":"Shubha"},{"transId":"160","sDate":"14","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"161","sDate":"15","sMonth":"9","sYear":"2016","name":"Shubha"},{"transId":"162","sDate":"16","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"163","sDate":"17","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"164","sDate":"18","sMonth":"9","sYear":"2016","name":"Shubha"},{"transId":"165","sDate":"19","sMonth":"9","sYear":"2016","name":"Shubha"},{"transId":"166","sDate":"20","sMonth":"9","sYear":"2016","name":"Madhyama"},{"transId":"167","sDate":"21","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"168","sDate":"22","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"169","sDate":"23","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"170","sDate":"24","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"171","sDate":"25","sMonth":"9","sYear":"2016","name":"Shubha"},{"transId":"172","sDate":"26","sMonth":"9","sYear":"2016","name":"Shubha"},{"transId":"173","sDate":"27","sMonth":"9","sYear":"2016","name":"Upto 15:09 Shubha"},{"transId":"174","sDate":"28","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"175","sDate":"29","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"176","sDate":"30","sMonth":"9","sYear":"2016","name":"Ashubha"},{"transId":"177","sDate":"1","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"178","sDate":"2","sMonth":"10","sYear":"2016","name":"After 15:37 Ashubha"},{"transId":"179","sDate":"3","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"180","sDate":"4","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"181","sDate":"5","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"182","sDate":"6","sMonth":"10","sYear":"2016","name":"Upto 11:41am Shubha"},{"transId":"183","sDate":"7","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"184","sDate":"8","sMonth":"10","sYear":"2016","name":"Madhyama"},{"transId":"185","sDate":"9","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"186","sDate":"10","sMonth":"10","sYear":"2016","name":"Uttama"},{"transId":"187","sDate":"11","sMonth":"10","sYear":"2016","name":"Uttama"},{"transId":"188","sDate":"12","sMonth":"10","sYear":"2016","name":"Shubha"},{"transId":"189","sDate":"13","sMonth":"10","sYear":"2016","name":"Shubha"},{"transId":"190","sDate":"14","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"191","sDate":"15","sMonth":"10","sYear":"2016","name":"Madhyama"},{"transId":"192","sDate":"16","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"193","sDate":"17","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"194","sDate":"18","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"195","sDate":"19","sMonth":"10","sYear":"2016","name":"After 9:52am Uttama"},{"transId":"196","sDate":"20","sMonth":"10","sYear":"2016","name":"Shubha"},{"transId":"197","sDate":"21","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"198","sDate":"22","sMonth":"10","sYear":"2016","name":"Shubha"},{"transId":"199","sDate":"23","sMonth":"10","sYear":"2016","name":"Shubha"},{"transId":"200","sDate":"24","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"201","sDate":"25","sMonth":"10","sYear":"2016","name":"Madhyama"},{"transId":"202","sDate":"26","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"203","sDate":"27","sMonth":"10","sYear":"2016","name":"Uttama"},{"transId":"204","sDate":"28","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"205","sDate":"29","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"206","sDate":"30","sMonth":"10","sYear":"2016","name":"Ashubha"},{"transId":"207","sDate":"31","sMonth":"10","sYear":"2016","name":"Uttama"},{"transId":"208","sDate":"1","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"209","sDate":"2","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"210","sDate":"3","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"211","sDate":"4","sMonth":"11","sYear":"2016","name":"Madhyama"},{"transId":"212","sDate":"5","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"213","sDate":"6","sMonth":"11","sYear":"2016","name":"Uttama"},{"transId":"214","sDate":"7","sMonth":"11","sYear":"2016","name":"After 13:06 Ashubha"},{"transId":"215","sDate":"8","sMonth":"11","sYear":"2016","name":"Shubha"},{"transId":"216","sDate":"9","sMonth":"11","sYear":"2016","name":"Shubha"},{"transId":"217","sDate":"10","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"218","sDate":"11","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"219","sDate":"12","sMonth":"11","sYear":"2016","name":"Shubha"},{"transId":"220","sDate":"13","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"221","sDate":"14","sMonth":"11","sYear":"2016","name":"Madhyama"},{"transId":"222","sDate":"15","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"223","sDate":"16","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"224","sDate":"17","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"225","sDate":"18","sMonth":"11","sYear":"2016","name":"Shubha"},{"transId":"226","sDate":"19","sMonth":"11","sYear":"2016","name":"Shubha"},{"transId":"227","sDate":"20","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"228","sDate":"21","sMonth":"11","sYear":"2016","name":"Madhyama"},{"transId":"229","sDate":"22","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"230","sDate":"23","sMonth":"11","sYear":"2016","name":"Upto 16:35 Uttama"},{"transId":"231","sDate":"24","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"232","sDate":"25","sMonth":"11","sYear":"2016","name":"Shubha"},{"transId":"233","sDate":"26","sMonth":"11","sYear":"2016","name":"Shubha"},{"transId":"234","sDate":"27","sMonth":"11","sYear":"2016","name":"Shubha"},{"transId":"235","sDate":"28","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"236","sDate":"29","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"237","sDate":"30","sMonth":"11","sYear":"2016","name":"Ashubha"},{"transId":"238","sDate":"1","sMonth":"12","sYear":"2016","name":"Madhyama"},{"transId":"239","sDate":"2","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"240","sDate":"3","sMonth":"12","sYear":"2016","name":"Upto 12:40noon Uttama"},{"transId":"241","sDate":"4","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"242","sDate":"5","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"243","sDate":"6","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"244","sDate":"7","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"245","sDate":"8","sMonth":"12","sYear":"2016","name":"After 11:13am Uttama"},{"transId":"246","sDate":"9","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"247","sDate":"10","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"248","sDate":"11","sMonth":"12","sYear":"2016","name":"Madhyama"},{"transId":"249","sDate":"12","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"250","sDate":"13","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"251","sDate":"14","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"252","sDate":"15","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"253","sDate":"16","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"254","sDate":"17","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"255","sDate":"18","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"256","sDate":"19","sMonth":"12","sYear":"2016","name":"Upto 13:10 Shubha"},{"transId":"257","sDate":"20","sMonth":"12","sYear":"2016","name":"After 14:22 Uttama"},{"transId":"258","sDate":"21","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"259","sDate":"22","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"260","sDate":"23","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"261","sDate":"24","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"262","sDate":"25","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"263","sDate":"26","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"264","sDate":"27","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"265","sDate":"28","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"266","sDate":"29","sMonth":"12","sYear":"2016","name":"Ashubha"},{"transId":"267","sDate":"30","sMonth":"12","sYear":"2016","name":"After 13:17 Uttama"},{"transId":"268","sDate":"31","sMonth":"12","sYear":"2016","name":"Shubha"},{"transId":"269","sDate":"1","sMonth":"1","sYear":"2017","name":"Shubha"},{"transId":"270","sDate":"2","sMonth":"1","sYear":"2017","name":"Madhyama"},{"transId":"271","sDate":"3","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"272","sDate":"4","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"273","sDate":"5","sMonth":"1","sYear":"2017","name":"After 13:59 Ashubha"},{"transId":"274","sDate":"6","sMonth":"1","sYear":"2017","name":"Shubha"},{"transId":"275","sDate":"7","sMonth":"1","sYear":"2017","name":"Shubha"},{"transId":"276","sDate":"8","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"277","sDate":"9","sMonth":"1","sYear":"2017","name":"After 10:18am Uttama"},{"transId":"278","sDate":"10","sMonth":"1","sYear":"2017","name":"Shubha"},{"transId":"279","sDate":"11","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"280","sDate":"12","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"281","sDate":"13","sMonth":"1","sYear":"2017","name":"Shubha"},{"transId":"282","sDate":"14","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"283","sDate":"15","sMonth":"1","sYear":"2017","name":"Varjya"},{"transId":"284","sDate":"16","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"285","sDate":"17","sMonth":"1","sYear":"2017","name":"Uttama"},{"transId":"286","sDate":"18","sMonth":"1","sYear":"2017","name":"After 12:54noon Ashubha"},{"transId":"287","sDate":"19","sMonth":"1","sYear":"2017","name":"Shubha"},{"transId":"288","sDate":"20","sMonth":"1","sYear":"2017","name":"Shubha"},{"transId":"289","sDate":"21","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"290","sDate":"22","sMonth":"1","sYear":"2017","name":"After 11:05am Shubha"},{"transId":"291","sDate":"23","sMonth":"1","sYear":"2017","name":"Upto 13:56 Shubha"},{"transId":"292","sDate":"24","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"293","sDate":"25","sMonth":"1","sYear":"2017","name":"Madhyama"},{"transId":"294","sDate":"26","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"295","sDate":"27","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"296","sDate":"28","sMonth":"1","sYear":"2017","name":"Samanya"},{"transId":"297","sDate":"29","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"298","sDate":"30","sMonth":"1","sYear":"2017","name":"Shubha"},{"transId":"299","sDate":"31","sMonth":"1","sYear":"2017","name":"Ashubha"},{"transId":"300","sDate":"1","sMonth":"2","sYear":"2017","name":"Uttama"},{"transId":"301","sDate":"2","sMonth":"2","sYear":"2017","name":"Shubha"},{"transId":"302","sDate":"3","sMonth":"2","sYear":"2017","name":"Shubha"},{"transId":"303","sDate":"4","sMonth":"2","sYear":"2017","name":"Madhyama"},{"transId":"304","sDate":"5","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"305","sDate":"6","sMonth":"2","sYear":"2017","name":"After 14:55 Ashubha"},{"transId":"306","sDate":"7","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"307","sDate":"8","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"308","sDate":"9","sMonth":"2","sYear":"2017","name":"Uttama"},{"transId":"309","sDate":"10","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"310","sDate":"11","sMonth":"2","sYear":"2017","name":"Madhyama"},{"transId":"311","sDate":"12","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"312","sDate":"13","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"313","sDate":"14","sMonth":"2","sYear":"2017","name":"Shubha"},{"transId":"314","sDate":"15","sMonth":"2","sYear":"2017","name":"Shubha"},{"transId":"315","sDate":"16","sMonth":"2","sYear":"2017","name":"Shubha"},{"transId":"316","sDate":"17","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"317","sDate":"18","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"318","sDate":"19","sMonth":"2","sYear":"2017","name":"Shubha"},{"transId":"319","sDate":"20","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"320","sDate":"21","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"321","sDate":"22","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"322","sDate":"23","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"323","sDate":"24","sMonth":"2","sYear":"2017","name":"Shubha"},{"transId":"324","sDate":"25","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"325","sDate":"26","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"326","sDate":"27","sMonth":"2","sYear":"2017","name":"Ashubha"},{"transId":"327","sDate":"28","sMonth":"2","sYear":"2017","name":"Uttama"},{"transId":"328","sDate":"1","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"329","sDate":"2","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"330","sDate":"3","sMonth":"3","sYear":"2017","name":"Madhyama"},{"transId":"331","sDate":"4","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"332","sDate":"5","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"333","sDate":"6","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"334","sDate":"7","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"335","sDate":"8","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"336","sDate":"9","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"337","sDate":"10","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"338","sDate":"11","sMonth":"3","sYear":"2017","name":"Madhyama"},{"transId":"339","sDate":"12","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"340","sDate":"13","sMonth":"3","sYear":"2017","name":"Varjya"},{"transId":"341","sDate":"14","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"342","sDate":"15","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"343","sDate":"16","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"344","sDate":"17","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"345","sDate":"18","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"346","sDate":"19","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"347","sDate":"20","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"348","sDate":"21","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"349","sDate":"22","sMonth":"3","sYear":"2017","name":"After 14:01 Uttama"},{"transId":"350","sDate":"23","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"351","sDate":"24","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"352","sDate":"25","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"353","sDate":"26","sMonth":"3","sYear":"2017","name":"Shubha"},{"transId":"354","sDate":"27","sMonth":"3","sYear":"2017","name":"Ashubha"},{"transId":"355","sDate":"28","sMonth":"3","sYear":"2017","name":"Ashubha"}]';
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

function closeWin()
{
	Alloy.Globals.window.leftWindow = Alloy.Globals.leftWindow;
}
