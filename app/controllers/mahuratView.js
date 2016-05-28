var mData;
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

var arrMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

(function() {
	var data = '[{"transId":"1","mDate":"11","mMonth":"4","mYear":"2016","tithi":"Panchami","mDay":"Mon","nakshtra":"rohiNI","lagna":"vRRiShabha","amsha":"vRRiShabha","mHour":"9","mMinute":"20","am_pm":"AM","rashi":"vRRiShabha","type":"upanayanamuhUrta"},{"transId":"2","mDate":"12","mMonth":"4","mYear":"2016","tithi":"Shasthi","mDay":"Tue","nakshtra":"mRRiga","lagna":"vRRiShabha","amsha":"vRRiShabha","mHour":"9","mMinute":"5","am_pm":"AM","rashi":"mithuna","type":"upanayanamuhUrta"},{"transId":"3","mDate":"27","mMonth":"4","mYear":"2016","tithi":"Panchami","mDay":"Wed","nakshtra":"mUla","lagna":"mithuna","amsha":"tulA","mHour":"9","mMinute":"10","am_pm":"AM","rashi":"dhanu","type":"upanayanamuhUrta"},{"transId":"4","mDate":"30","mMonth":"1","mYear":"2017","tithi":"Tritiya","mDay":"Mon","nakshtra":"shatatArA","lagna":"kuMbha","amsha":"vRRiShabha","mHour":"9","mMinute":"15","am_pm":"AM","rashi":"kuMbha","type":"upanayanamuhUrta"},{"transId":"5","mDate":"1","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Wed","nakshtra":"ubhA","lagna":"kuMbha","amsha":"vRRiShabha","mHour":"9","mMinute":"10","am_pm":"AM","rashi":"mIna","type":"upanayanamuhUrta"},{"transId":"6","mDate":"2","mMonth":"2","mYear":"2017","tithi":"Shasthi","mDay":"Thu","nakshtra":"revatI","lagna":"kuMbha","amsha":"vRRiShabha","mHour":"9","mMinute":"5","am_pm":"AM","rashi":"mIna","type":"upanayanamuhUrta"},{"transId":"7","mDate":"6","mMonth":"2","mYear":"2017","tithi":"Dashami","mDay":"Mon","nakshtra":"rohiNI","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"30","am_pm":"AM","rashi":"vRRiShabha","type":"upanayanamuhUrta"},{"transId":"8","mDate":"16","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Thu","nakshtra":"chitrA","lagna":"kuMbha","amsha":"vRRiShabha","mHour":"8","mMinute":"20","am_pm":"AM","rashi":"tulA","type":"upanayanamuhUrta"},{"transId":"9","mDate":"19","mMonth":"4","mYear":"2016","tithi":"Trayodashi","mDay":"Tue","nakshtra":"uphA","lagna":"mithuna","amsha":"mithuna","mHour":"11","mMinute":"5","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"10","mDate":"23","mMonth":"4","mYear":"2016","tithi":"Pratipad","mDay":"Sat","nakshtra":"svAtI","lagna":"vRRiShabha","amsha":"mithuna","mHour":"8","mMinute":"35","am_pm":"AM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"11","mDate":"23","mMonth":"4","mYear":"2016","tithi":"Pratipad","mDay":"Sat","nakshtra":"svAtI","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"21","am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"12","mDate":"2","mMonth":"4","mYear":"2016","tithi":"Panchami","mDay":"Wed","nakshtra":"mUla","lagna":"mithuna","amsha":"makara","mHour":"9","mMinute":"15","am_pm":"AM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":"13","mDate":"2","mMonth":"4","mYear":"2016","tithi":"Panchami","mDay":"Wed","nakshtra":"mUla","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"21","am_pm":"PM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":"14","mDate":"29","mMonth":"4","mYear":"2016","tithi":"Saptami","mDay":"Fri","nakshtra":"uShA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"21","am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":"15","mDate":"30","mMonth":"4","mYear":"2016","tithi":"Astami","mDay":"Sat","nakshtra":"shravaNA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"21","am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":"16","mDate":"1","mMonth":"5","mYear":"2016","tithi":"Navami","mDay":"Sun","nakshtra":"dhaniShThA","lagna":"mithuna","amsha":"vRRiShabha","mHour":"10","mMinute":"55","am_pm":"AM","rashi":"kuMbha","type":"vivAhamuhUrtAH"},{"transId":"17","mDate":"1","mMonth":"5","mYear":"2016","tithi":"Navami","mDay":"Sun","nakshtra":"dhaniShThA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"20","am_pm":"PM","rashi":"kuMbha","type":"vivAhamuhUrtAH"},{"transId":"18","mDate":"10","mMonth":"7","mYear":"2016","tithi":"Shasti","mDay":"Sun","nakshtra":"uphA","lagna":"karka","amsha":"tulA","mHour":"7","mMinute":"26","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"19","mDate":"10","mMonth":"7","mYear":"2016","tithi":"Shasti","mDay":"Sun","nakshtra":"uphA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"26","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"20","mDate":"10","mMonth":"7","mYear":"2016","tithi":"Shasti","mDay":"Sun","nakshtra":"uphA","lagna":"siMha","amsha":"kanyA","mHour":"10","mMinute":"0","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"21","mDate":"11","mMonth":"7","mYear":"2016","tithi":"Saptami","mDay":"Mon","nakshtra":"hastA","lagna":"siMha","amsha":"kanyA","mHour":"10","mMinute":"0","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"22","mDate":"11","mMonth":"7","mYear":"2016","tithi":"Saptami","mDay":"Mon","nakshtra":"hastA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"27","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"23","mDate":"12","mMonth":"7","mYear":"2016","tithi":"Astami","mDay":"Tue","nakshtra":"chitrA","lagna":"siMha","amsha":"kanyA","mHour":"9","mMinute":"55","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"24","mDate":"12","mMonth":"7","mYear":"2016","tithi":"Astami","mDay":"Tue","nakshtra":"chitrA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"27","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"25","mDate":"23","mMonth":"7","mYear":"2016","tithi":"Navami","mDay":"Wed","nakshtra":"svAtI","lagna":"siMha","amsha":"kanyA","mHour":"9","mMinute":"55","am_pm":"AM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"26","mDate":"23","mMonth":"7","mYear":"2016","tithi":"Navami","mDay":"Wed","nakshtra":"svAtI","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"27","am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"27","mDate":"21","mMonth":"11","mYear":"2016","tithi":"Astami","mDay":"Mon","nakshtra":"maghA","lagna":"dhanu","amsha":"kanyA","mHour":"9","mMinute":"45","am_pm":"AM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"28","mDate":"21","mMonth":"11","mYear":"2016","tithi":"Astami","mDay":"Mon","nakshtra":"maghA","lagna":"dhanu","amsha":"dhanu","mHour":"10","mMinute":"25","am_pm":"AM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"29","mDate":"21","mMonth":"11","mYear":"2016","tithi":"Astami","mDay":"Mon","nakshtra":"maghA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"8","am_pm":"PM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"30","mDate":"23","mMonth":"11","mYear":"2016","tithi":"Dashami","mDay":"Wed","nakshtra":"uphA","lagna":"dhanu","amsha":"kanyA","mHour":"9","mMinute":"40","am_pm":"AM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"31","mDate":"23","mMonth":"11","mYear":"2016","tithi":"Dashami","mDay":"Wed","nakshtra":"uphA","lagna":"dhanu","amsha":"dhanu","mHour":"10","mMinute":"15","am_pm":"AM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"32","mDate":"23","mMonth":"11","mYear":"2016","tithi":"Dashami","mDay":"Wed","nakshtra":"uphA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"10","am_pm":"PM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"33","mDate":"1","mMonth":"12","mYear":"2016","tithi":"Dwitiya","mDay":"Thu","nakshtra":"mUla","lagna":"dhanu","amsha":"kanyA","mHour":"9","mMinute":"5","am_pm":"AM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":"34","mDate":"1","mMonth":"12","mYear":"2016","tithi":"Dwitiya","mDay":"Thu","nakshtra":"mUla","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"13","am_pm":"PM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":"35","mDate":"3","mMonth":"12","mYear":"2016","tithi":"Chaturthi","mDay":"Sat","nakshtra":"u-ShA","lagna":"dhanu","amsha":"kanyA","mHour":"8","mMinute":"55","am_pm":"AM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":"36","mDate":"3","mMonth":"12","mYear":"2016","tithi":"Chaturthi","mDay":"Sat","nakshtra":"u-ShA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"15","am_pm":"PM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":"37","mDate":"4","mMonth":"12","mYear":"2016","tithi":"Panchami","mDay":"Sun","nakshtra":"shravaNa","lagna":"dhanu","amsha":"kanyA","mHour":"8","mMinute":"50","am_pm":"AM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":"38","mDate":"4","mMonth":"12","mYear":"2016","tithi":"Panchami","mDay":"Sun","nakshtra":"shravaNa","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"15","am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":"39","mDate":"5","mMonth":"12","mYear":"2016","tithi":"Shasti","mDay":"Mon","nakshtra":"shravaNa","lagna":"dhanu ","amsha":"kanyA","mHour":"8","mMinute":"50","am_pm":"AM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":"40","mDate":"5","mMonth":"12","mYear":"2016","tithi":"Shasti","mDay":"Mon","nakshtra":"shravaNa","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"16","am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":"41","mDate":"8","mMonth":"12","mYear":"2016","tithi":"Navami","mDay":"Thu","nakshtra":"ubhA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"16","am_pm":"PM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"42","mDate":"14","mMonth":"12","mYear":"2016","tithi":"Pratipad","mDay":"Wed","nakshtra":"mRRigashirA","lagna":"dhanu","amsha":"dhanu","mHour":"9","mMinute":"0","am_pm":"AM","rashi":"mithuna","type":"vivAhamuhUrtAH"},{"transId":"43","mDate":"14","mMonth":"12","mYear":"2016","tithi":"Pratipad","mDay":"Wed","nakshtra":"mRRigashirA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"20","am_pm":"PM","rashi":"mithuna","type":"vivAhamuhUrtAH"},{"transId":"44","mDate":"19","mMonth":"12","mYear":"2016","tithi":"Shasti","mDay":"Mon","nakshtra":"maghA","lagna":"makara","amsha":"mIna","mHour":"9","mMinute":"15","am_pm":"AM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"45","mDate":"19","mMonth":"12","mYear":"2016","tithi":"Shasti","mDay":"Mon","nakshtra":"maghA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"22","am_pm":"PM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"46","mDate":"21","mMonth":"12","mYear":"2016","tithi":"Astami","mDay":"Wed","nakshtra":"uphA","lagna":"makara","amsha":"mIna","mHour":"9","mMinute":"10","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"47","mDate":"21","mMonth":"12","mYear":"2016","tithi":"Astami","mDay":"Wed","nakshtra":"uphA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"24","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"48","mDate":"22","mMonth":"12","mYear":"2016","tithi":"Navami","mDay":"Thu","nakshtra":"hastA","lagna":"makara","amsha":"mIna","mHour":"9","mMinute":"5","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"49","mDate":"22","mMonth":"12","mYear":"2016","tithi":"Navami","mDay":"Thu","nakshtra":"hastA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"24","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"50","mDate":"23","mMonth":"12","mYear":"2016","tithi":"Dashami","mDay":"Fri","nakshtra":"chitrA","lagna":"makara","amsha":"mIna","mHour":"9","mMinute":"0","am_pm":"AM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"51","mDate":"23","mMonth":"12","mYear":"2016","tithi":"Dashami","mDay":"Fri","nakshtra":"chitrA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"24","am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"52","mDate":"17","mMonth":"1","mYear":"2017","tithi":"Panchami","mDay":"Tue","nakshtra":"uphA","lagna":"makara","amsha":"mithuna","mHour":"8","mMinute":"0","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"53","mDate":"17","mMonth":"1","mYear":"2017","tithi":"Panchami","mDay":"Tue","nakshtra":"uphA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"34","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"54","mDate":"18","mMonth":"1","mYear":"2017","tithi":"Shasti","mDay":"Wed","nakshtra":"hastA","lagna":"makara","amsha":"mithuna","mHour":"8","mMinute":"10","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"55","mDate":"18","mMonth":"1","mYear":"2017","tithi":"Shasti","mDay":"Wed","nakshtra":"hastA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"34","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"56","mDate":"19","mMonth":"1","mYear":"2017","tithi":"Saptami","mDay":"Thu","nakshtra":"chitrA","lagna":"makara","amsha":"mithuna","mHour":"7","mMinute":"55","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"57","mDate":"19","mMonth":"1","mYear":"2017","tithi":"Saptami","mDay":"Thu","nakshtra":"chitrA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"35","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"58","mDate":"20","mMonth":"1","mYear":"2017","tithi":"Astami","mDay":"Fri","nakshtra":"svAti","lagna":"makara","amsha":"mithuna","mHour":"7","mMinute":"45","am_pm":"AM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"59","mDate":"20","mMonth":"1","mYear":"2017","tithi":"Astami","mDay":"Fri","nakshtra":"svAti","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"35","am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"60","mDate":"31","mMonth":"1","mYear":"2017","tithi":"Tritiya","mDay":"Mon","nakshtra":"shatatArA","lagna":"mIna","amsha":"kanyA","mHour":"10","mMinute":"0","am_pm":"AM","rashi":"kuMbha","type":"vivAhamuhUrtAH"},{"transId":"61","mDate":"31","mMonth":"1","mYear":"2017","tithi":"Tritiya","mDay":"Mon","nakshtra":"shatatArA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"30","am_pm":"PM","rashi":"kuMbha","type":"vivAhamuhUrtAH"},{"transId":"62","mDate":"1","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Wed","nakshtra":"ubhA","lagna":"mIna ","amsha":"kanyA","mHour":"10","mMinute":"0","am_pm":"AM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"63","mDate":"1","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Wed","nakshtra":"ubhA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"37","am_pm":"PM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"64","mDate":"2","mMonth":"2","mYear":"2017","tithi":"Shasti","mDay":"Thu","nakshtra":"revatI","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"50","am_pm":"AM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"65","mDate":"2","mMonth":"2","mYear":"2017","tithi":"Shasti","mDay":"Thu","nakshtra":"revatI","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"37","am_pm":"PM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"66","mDate":"3","mMonth":"2","mYear":"2017","tithi":"Saptami","mDay":"Fri","nakshtra":"ashvinI","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"40","am_pm":"AM","rashi":"meSha","type":"vivAhamuhUrtAH"},{"transId":"67","mDate":"3","mMonth":"2","mYear":"2017","tithi":"Saptami","mDay":"Fri","nakshtra":"ashvinI","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"37","am_pm":"PM","rashi":"meSha","type":"vivAhamuhUrtAH"},{"transId":"68","mDate":"6","mMonth":"2","mYear":"2017","tithi":"Dashami","mDay":"Mon","nakshtra":"rohiNI","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"40","am_pm":"AM","rashi":"vRRiShabha","type":"vivAhamuhUrtAH"},{"transId":"69","mDate":"6","mMonth":"2","mYear":"2017","tithi":"Dashami","mDay":"Mon","nakshtra":"rohiNI","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"37","am_pm":"PM","rashi":"vRRiShabha","type":"vivAhamuhUrtAH"},{"transId":"70","mDate":"13","mMonth":"2","mYear":"2017","tithi":"Tritiya","mDay":"Mon","nakshtra":"uphA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"37","am_pm":"PM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":"71","mDate":"14","mMonth":"2","mYear":"2017","tithi":"Chaturthi","mDay":"Tue","nakshtra":"hastA","lagna":"mIna","amsha":"dhanu","mHour":"9","mMinute":"25","am_pm":"AM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"72","mDate":"14","mMonth":"2","mYear":"2017","tithi":"Chaturthi","mDay":"Tue","nakshtra":"hastA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"37","am_pm":"PM","rashi":"kanyA","type":"vivAhamuhUrtAH"},{"transId":"73","mDate":"16","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Thu","nakshtra":"chitrA","lagna":"mIna","amsha":"dhanu","mHour":"9","mMinute":"20","am_pm":"AM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"74","mDate":"16","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Thu","nakshtra":"chitrA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"37","am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"75","mDate":"17","mMonth":"2","mYear":"2017","tithi":"Shasti","mDay":"Fri","nakshtra":"svAtI","lagna":"mIna","amsha":"dhanu","mHour":"9","mMinute":"20","am_pm":"AM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"76","mDate":"17","mMonth":"2","mYear":"2017","tithi":"Shasti","mDay":"Fri","nakshtra":"svAtI","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"37","am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":"77","mDate":"28","mMonth":"2","mYear":"2017","tithi":"Dwitiya","mDay":"Tue","nakshtra":"ubhA","lagna":"mIna","amsha":"dhanu","mHour":"8","mMinute":"35","am_pm":"AM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"78","mDate":"28","mMonth":"2","mYear":"2017","tithi":"Dwitiya","mDay":"Tue","nakshtra":"ubhA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"36","am_pm":"PM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"79","mDate":"1","mMonth":"3","mYear":"2017","tithi":"Tritiya","mDay":"Wed","nakshtra":"revatI","lagna":"mIna","amsha":"kanyA","mHour":"8","mMinute":"0","am_pm":"AM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"80","mDate":"1","mMonth":"3","mYear":"2017","tithi":"Tritiya","mDay":"Wed","nakshtra":"revatI","lagna":"mIna","amsha":"dhanu","mHour":"8","mMinute":"35","am_pm":"AM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"81","mDate":"1","mMonth":"3","mYear":"2017","tithi":"Tritiya","mDay":"Wed","nakshtra":"revatI","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"38","am_pm":"PM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":"82","mDate":"6","mMonth":"3","mYear":"2017","tithi":"Navami","mDay":"Mon","nakshtra":"mRRigashirA","lagna":"mIna","amsha":"dhanu","mHour":"8","mMinute":"15","am_pm":"AM","rashi":"vRRiShabha","type":"vivAhamuhUrtAH"},{"transId":"83","mDate":"6","mMonth":"3","mYear":"2017","tithi":"Navami","mDay":"Mon","nakshtra":"mRRigashirA","lagna":"Abhijit","amsha":"","mHour":"12","mMinute":"28","am_pm":"PM","rashi":"vRRiShabha","type":"vivAhamuhUrtAH"},{"transId":"84","mDate":"1","mMonth":"12","mYear":"2016","tithi":"Dwitiya","mDay":"Thu","nakshtra":"mUla","lagna":"dhanu","amsha":"kanyA","mHour":"9","mMinute":"10","am_pm":"AM","rashi":"dhanu","type":"grahapraveshamuhUrta"},{"transId":"85","mDate":"5","mMonth":"12","mYear":"2016","tithi":"Shasti","mDay":"Mon","nakshtra":"shravaNa","lagna":"dhanu","amsha":"kanyA","mHour":"8","mMinute":"55","am_pm":"AM","rashi":"makara","type":"grahapraveshamuhUrta"},{"transId":"86","mDate":"14","mMonth":"12","mYear":"2016","tithi":"Pratipad","mDay":"Wed","nakshtra":"mRRiga","lagna":"dhanu","amsha":"dhanu","mHour":"9","mMinute":"0","am_pm":"AM","rashi":"vRRiShabha","type":"grahapraveshamuhUrta"},{"transId":"87","mDate":"21","mMonth":"12","mYear":"2016","tithi":"Astami","mDay":"Wed","nakshtra":"uphA","lagna":"dhanu","amsha":"dhanu","mHour":"8","mMinute":"35","am_pm":"AM","rashi":"kanyA","type":"grahapraveshamuhUrta"},{"transId":"88","mDate":"23","mMonth":"12","mYear":"2016","tithi":"Dashami","mDay":"Fri","nakshtra":"chitrA","lagna":"dhanu","amsha":"dhanu","mHour":"8","mMinute":"25","am_pm":"AM","rashi":"tulA","type":"grahapraveshamuhUrta"},{"transId":"89","mDate":"30","mMonth":"1","mYear":"2017","tithi":"Tritiya","mDay":"Mon","nakshtra":"shata","lagna":"kuMbha","amsha":"mIna","mHour":"9","mMinute":"0","am_pm":"AM","rashi":"kuMbha","type":"grahapraveshamuhUrta"},{"transId":"90","mDate":"30","mMonth":"1","mYear":"2017","tithi":"Tritiya","mDay":"Mon","nakshtra":"shata","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"55","am_pm":"AM","rashi":"kuMbha","type":"grahapraveshamuhUrta"},{"transId":"91","mDate":"1","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Wed","nakshtra":"ubhA","lagna":"kuMbha","amsha":"mIna","mHour":"8","mMinute":"45","am_pm":"AM","rashi":"mIna","type":"grahapraveshamuhUrta"},{"transId":"92","mDate":"1","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Wed","nakshtra":"ubhA","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"50","am_pm":"AM","rashi":"mIna","type":"grahapraveshamuhUrta"},{"transId":"93","mDate":"2","mMonth":"2","mYear":"2017","tithi":"Shasti","mDay":"Thu","nakshtra":"revatI","lagna":"kuMbha","amsha":"mIna","mHour":"8","mMinute":"45","am_pm":"AM","rashi":"mIna","type":"grahapraveshamuhUrta"},{"transId":"94","mDate":"2","mMonth":"2","mYear":"2017","tithi":"Shasti","mDay":"Thu","nakshtra":"revatI","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"45","am_pm":"AM","rashi":"mIna","type":"grahapraveshamuhUrta"},{"transId":"95","mDate":"3","mMonth":"2","mYear":"2017","tithi":"Saptami","mDay":"Fri","nakshtra":"ashvinI","lagna":"kuMbha","amsha":"mIna","mHour":"8","mMinute":"40","am_pm":"AM","rashi":"meSha","type":"grahapraveshamuhUrta"},{"transId":"96","mDate":"3","mMonth":"2","mYear":"2017","tithi":"Saptami","mDay":"Fri","nakshtra":"ashvinI","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"40","am_pm":"AM","rashi":"meSha","type":"grahapraveshamuhUrta"},{"transId":"97","mDate":"6","mMonth":"2","mYear":"2017","tithi":"Dashami","mDay":"Mon","nakshtra":"rohiNI","lagna":"kuMbha","amsha":"mIna","mHour":"8","mMinute":"25","am_pm":"AM","rashi":"vRRiShabha","type":"grahapraveshamuhUrta"},{"transId":"98","mDate":"9","mMonth":"2","mYear":"2017","tithi":"Trayodashi","mDay":"Thu","nakshtra":"puna","lagna":"kuMbha","amsha":"mIna","mHour":"8","mMinute":"15","am_pm":"AM","rashi":"karka","type":"grahapraveshamuhUrta"},{"transId":"99","mDate":"9","mMonth":"2","mYear":"2017","tithi":"Trayodashi","mDay":"Thu","nakshtra":"puna","lagna":"mIna","amsha":"kanyA","mHour":"9","mMinute":"15","am_pm":"AM","rashi":"karka","type":"grahapraveshamuhUrta"},{"transId":"100","mDate":"13","mMonth":"2","mYear":"2017","tithi":"Tritiya","mDay":"Mon","nakshtra":"uphA","lagna":"vRRiShabha","amsha":"vRRiShabha","mHour":"12","mMinute":"50","am_pm":"PM","rashi":"siMha","type":"grahapraveshamuhUrta"},{"transId":"101","mDate":"16","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Thu","nakshtra":"chitrA","lagna":"kuMbha","amsha":"vRRiShabha","mHour":"8","mMinute":"10","am_pm":"AM","rashi":"tulA","type":"grahapraveshamuhUrta"},{"transId":"102","mDate":"16","mMonth":"2","mYear":"2017","tithi":"Panchami","mDay":"Thu","nakshtra":"chitrA","lagna":"mIna","amsha":"kanyA","mHour":"8","mMinute":"50","am_pm":"AM","rashi":"tulA","type":"grahapraveshamuhUrta"},{"transId":"103","mDate":"17","mMonth":"2","mYear":"2017","tithi":"Shasti","mDay":"Fri","nakshtra":"svAtI","lagna":"kuMbha","amsha":"vRRiShabha","mHour":"8","mMinute":"5","am_pm":"AM","rashi":"tulA","type":"grahapraveshamuhUrta"},{"transId":"104","mDate":"1","mMonth":"3","mYear":"2017","tithi":"Tritiya","mDay":"Wed","nakshtra":"revatI","lagna":"kuMbha","amsha":"kuMbha","mHour":"7","mMinute":"20","am_pm":"AM","rashi":"makara","type":"grahapraveshamuhUrta"}]';
	mData = JSON.parse(data);
	loadList();
})();

function loadList()
{
	for (var i = 0; i < mData.length; i++) 
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");
			
		var mFullDate = mData[i].mDate + " " + arrMonthNames[mData[i].mMonth - 1] + " " + mData[i].mYear + ", " + mData[i].mDay;
		var min = mData[i].mMinute;
		if(parseInt(mData[i].mMinute) < 10)
			min = "0" + mData[i].mMinute;
			
		var mTime = mData[i].mHour + ":" + min + " " + mData[i].am_pm;		
		
		switch( mData[i].mMonth )
		{
			case  "1":
			{
				listItems1.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});				
				break;
			}
			case  "2":
			{
				listItems2.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});			
				break;
			}
			case  "3":
			{
				listItems3.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "4":
			{
				listItems4.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "5":
			{
				listItems5.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "6":
			{
				listItems6.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "7":
			{
				listItems7.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "8":
			{
				listItems8.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "9":
			{
				listItems9.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "10":
			{
				listItems10.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "11":
			{
				listItems11.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
					}
				});	
				break;
			}
			case  "12":
			{
				listItems12.push({				
					lblDate : {text: mFullDate},
					lblTime : {text: mTime},
					mType : {text: mData[i].type},
					mTithi : {text: mData[i].tithi},
					mLagna : {text: mData[i].lagna},
					mAmsha : {text: mData[i].amsha},
					mNakshtra : {text: mData[i].nakshtra},
					mRashi : {text: mData[i].rashi},
					properties: {
						searchableText: mData[i].type, 
						height: Ti.UI.SIZE,
						mDate: mData[i].mDate,
						mMonth: mData[i].mMonth,
						mYear: mData[i].mYear
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
	$.mlist.sections = [section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12];
	
	/**
	 * SET SECTION HEADERS
	 */
	$.mlist.sections[0].headerTitle = "January";
	$.mlist.sections[1].headerTitle = "February";
	$.mlist.sections[2].headerTitle = "March";
	$.mlist.sections[3].headerTitle = "April";
	$.mlist.sections[4].headerTitle = "May";
	$.mlist.sections[5].headerTitle = "June";
	$.mlist.sections[6].headerTitle = "July";
	$.mlist.sections[7].headerTitle = "August";
	$.mlist.sections[8].headerTitle = "September";
	$.mlist.sections[9].headerTitle = "October";
	$.mlist.sections[10].headerTitle = "November";
	$.mlist.sections[11].headerTitle = "December";
	
	var d = new Date();
	$.mlist.scrollToItem(d.getMonth(), 0);
}

function itemClickHandler(e)
{
	selectedItem = $.mlist.sections[e.sectionIndex].items[e.itemIndex];
	$.dialog.title = $.mlist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.mDate + "/" + selectedItem.properties.mMonth + "/" + selectedItem.properties.mYear + ")" ;
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
	var eventYear = parseInt(selectedItem.properties.mYear);
	var eventMonth = parseInt(selectedItem.properties.mMonth);
	var eventDate = parseInt(selectedItem.properties.mDate);
	var existingEvents = calendar.getEventsInDate( eventYear, eventMonth, eventDate );
	var doEventExist = false;
	for(var i = 0;  i < existingEvents.length; i++)
	{
		if( existingEvents[i].notes ==  selectedItem.properties.searchableText
			&& existingEvents[i].title == "UM Panchanga - Muhurat")
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
	    title: 'UM Panchanga - Muhurat',
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