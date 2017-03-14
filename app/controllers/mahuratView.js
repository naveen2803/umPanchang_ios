var args = arguments[0] || {};
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
	var data = '[{"transId":1,"mDate":2,"mMonth":4,"mYear":2017,"tithi":"Shasthi","mDay":"ravi","nakshtra":"mRRiga","lagna":"mIna","amsha":"Dhanu","mHour":6,"mMinute":28,"am_pm":"AM","rashi":"vRRiShabha","type":"upanayanamuhUrta"},{"transId":2,"mDate":17,"mMonth":4,"mYear":2017,"tithi":"Shasthi","mDay":"soma","nakshtra":"mUla","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":25,"am_pm":"PM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":3,"mDate":19,"mMonth":4,"mYear":2017,"tithi":"Astami","mDay":"budha","nakshtra":"U. Sha","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":23,"am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":4,"mDate":20,"mMonth":4,"mYear":2017,"tithi":"Navami","mDay":"Guru","nakshtra":"Shravana","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":23,"am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":5,"mDate":21,"mMonth":4,"mYear":2017,"tithi":"Dashmi","mDay":"Shukra","nakshtra":"Dhanista","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":22,"am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":6,"mDate":4,"mMonth":5,"mYear":2017,"tithi":"Navami","mDay":"Guru","nakshtra":"Magha","lagna":"karka","amsha":"kanya","mHour":11,"mMinute":30,"am_pm":"AM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":7,"mDate":4,"mMonth":5,"mYear":2017,"tithi":"Navami","mDay":"Guru","nakshtra":"Magha","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":20,"am_pm":"PM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":8,"mDate":8,"mMonth":5,"mYear":2017,"tithi":"Triyodashi","mDay":"Soma","nakshtra":"hasta","lagna":"karka","amsha":"kanya","mHour":11,"mMinute":20,"am_pm":"AM","rashi":"kanya","type":"vivAhamuhUrtAH"},{"transId":9,"mDate":8,"mMonth":5,"mYear":2017,"tithi":"Triyodashi","mDay":"Soma","nakshtra":"hasta","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":20,"am_pm":"PM","rashi":"kanya","type":"vivAhamuhUrtAH"},{"transId":10,"mDate":9,"mMonth":5,"mYear":2017,"tithi":"Chaturdashi","mDay":"Mangala","nakshtra":"chitra","lagna":"karka","amsha":"kanya","mHour":11,"mMinute":10,"am_pm":"AM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":11,"mDate":9,"mMonth":5,"mYear":2017,"tithi":"Chaturdashi","mDay":"Mangala","nakshtra":"chitra","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":20,"am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":12,"mDate":16,"mMonth":5,"mYear":2017,"tithi":"Panchami","mDay":"Mangala","nakshtra":"U. Sha","lagna":"karka","amsha":"kanya","mHour":10,"mMinute":50,"am_pm":"AM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":13,"mDate":16,"mMonth":5,"mYear":2017,"tithi":"Panchami","mDay":"Mangala","nakshtra":"U. Sha","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":19,"am_pm":"PM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":14,"mDate":17,"mMonth":5,"mYear":2017,"tithi":"Shasthi","mDay":"budha","nakshtra":"U. Sha","lagna":"karka","amsha":"kanya","mHour":10,"mMinute":35,"am_pm":"AM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":15,"mDate":17,"mMonth":5,"mYear":2017,"tithi":"Shasthi","mDay":"budha","nakshtra":"U. Sha","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":18,"am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":16,"mDate":18,"mMonth":5,"mYear":2017,"tithi":"saptami","mDay":"Guru","nakshtra":"Shravana","lagna":"karka","amsha":"kanya","mHour":10,"mMinute":35,"am_pm":"AM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":17,"mDate":18,"mMonth":5,"mYear":2017,"tithi":"saptami","mDay":"Guru","nakshtra":"Shravana","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":19,"am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":18,"mDate":19,"mMonth":5,"mYear":2017,"tithi":"Astami","mDay":"Shukra","nakshtra":"dhanista","lagna":"karka","amsha":"kanya","mHour":10,"mMinute":30,"am_pm":"AM","rashi":"mithuna","type":"vivAhamuhUrtAH"},{"transId":19,"mDate":19,"mMonth":5,"mYear":2017,"tithi":"Astami","mDay":"Shukra","nakshtra":"dhanista","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":19,"am_pm":"PM","rashi":"mithuna","type":"vivAhamuhUrtAH"},{"transId":20,"mDate":27,"mMonth":5,"mYear":2017,"tithi":"dvititya","mDay":"shani","nakshtra":"mRRiga","lagna":"karka","amsha":"kanya","mHour":10,"mMinute":5,"am_pm":"AM","rashi":"mithuna","type":"vivAhamuhUrtAH"},{"transId":21,"mDate":27,"mMonth":5,"mYear":2017,"tithi":"dvititya","mDay":"shani","nakshtra":"mRRiga","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":9,"am_pm":"PM","rashi":"mithuna","type":"vivAhamuhUrtAH"},{"transId":22,"mDate":3,"mMonth":6,"mYear":2017,"tithi":"Navami","mDay":"shani","nakshtra":"U. Pha","lagna":"karka","amsha":"kanya","mHour":9,"mMinute":35,"am_pm":"AM","rashi":"kanya","type":"vivAhamuhUrtAH"},{"transId":23,"mDate":3,"mMonth":6,"mYear":2017,"tithi":"Navami","mDay":"shani","nakshtra":"U.Pha","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":19,"am_pm":"PM","rashi":"kanya","type":"vivAhamuhUrtAH"},{"transId":24,"mDate":8,"mMonth":6,"mYear":2017,"tithi":"Chaturdashi","mDay":"Guru","nakshtra":"Anuradha","lagna":"karka","amsha":"kanya","mHour":9,"mMinute":15,"am_pm":"AM","rashi":"vRishchika","type":"vivAhamuhUrtAH"},{"transId":25,"mDate":8,"mMonth":6,"mYear":2017,"tithi":"Chaturdashi","mDay":"Guru","nakshtra":"Anuradha","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":23,"am_pm":"PM","rashi":"vRishchika","type":"vivAhamuhUrtAH"},{"transId":26,"mDate":18,"mMonth":6,"mYear":2017,"tithi":"Navami","mDay":"ravi","nakshtra":"U.Bha","lagna":"karka","amsha":"kanya","mHour":8,"mMinute":40,"am_pm":"AM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":27,"mDate":18,"mMonth":6,"mYear":2017,"tithi":"Navami","mDay":"ravi","nakshtra":"U.Bha","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":22,"am_pm":"PM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":28,"mDate":19,"mMonth":6,"mYear":2017,"tithi":"Dashmi","mDay":"soma","nakshtra":"Revati","lagna":"karka","amsha":"kanya","mHour":8,"mMinute":35,"am_pm":"AM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":29,"mDate":19,"mMonth":6,"mYear":2017,"tithi":"Dashmi","mDay":"soma","nakshtra":"Revati","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":22,"am_pm":"PM","rashi":"mIna","type":"vivAhamuhUrtAH"},{"transId":30,"mDate":28,"mMonth":6,"mYear":2017,"tithi":"Panchami","mDay":"budha","nakshtra":"Magha","lagna":"karka","amsha":"kanya","mHour":8,"mMinute":0,"am_pm":"AM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":31,"mDate":28,"mMonth":6,"mYear":2017,"tithi":"Panchami","mDay":"budha","nakshtra":"Magha","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":25,"am_pm":"PM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":32,"mDate":30,"mMonth":6,"mYear":2017,"tithi":"saptami","mDay":"Shukra","nakshtra":"U.Pha","lagna":"karka","amsha":"kanya","mHour":7,"mMinute":50,"am_pm":"AM","rashi":"kanya","type":"vivAhamuhUrtAH"},{"transId":33,"mDate":30,"mMonth":6,"mYear":2017,"tithi":"saptami","mDay":"Shukra","nakshtra":"U.Pha","lagna":"Abhijit","amsha":"kanya","mHour":12,"mMinute":24,"am_pm":"PM","rashi":"kanya","type":"vivAhamuhUrtAH"},{"transId":34,"mDate":12,"mMonth":11,"mYear":2017,"tithi":"Navami","mDay":"ravi","nakshtra":"Magha","lagna":"Vrischika","amsha":"kanya","mHour":7,"mMinute":30,"am_pm":"AM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":35,"mDate":12,"mMonth":11,"mYear":2017,"tithi":"Navami","mDay":"ravi","nakshtra":"Magha","lagna":"Vrischika","amsha":"kanya","mHour":12,"mMinute":11,"am_pm":"PM","rashi":"siMha","type":"vivAhamuhUrtAH"},{"transId":36,"mDate":21,"mMonth":11,"mYear":2017,"tithi":"tritiya","mDay":"Mangala","nakshtra":"Moola","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":8,"am_pm":"PM","rashi":"dhanu","type":"vivAhamuhUrtAH"},{"transId":37,"mDate":23,"mMonth":11,"mYear":2017,"tithi":"Panchami","mDay":"Guru","nakshtra":"U.Sha","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":8,"am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":38,"mDate":24,"mMonth":11,"mYear":2017,"tithi":"Shasthi","mDay":"Shukra","nakshtra":"Shravana","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":10,"am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":39,"mDate":25,"mMonth":11,"mYear":2017,"tithi":"saptami","mDay":"shani","nakshtra":"Shravana","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":11,"am_pm":"PM","rashi":"makara","type":"vivAhamuhUrtAH"},{"transId":40,"mDate":3,"mMonth":12,"mYear":2017,"tithi":"Hunnive","mDay":"ravi","nakshtra":"Rohini","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":14,"am_pm":"PM","rashi":"Vrishabha","type":"vivAhamuhUrtAH"},{"transId":41,"mDate":4,"mMonth":12,"mYear":2017,"tithi":"pratipada","mDay":"soma","nakshtra":"mRRiga","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":15,"am_pm":"PM","rashi":"Vrishabha","type":"vivAhamuhUrtAH"},{"transId":42,"mDate":9,"mMonth":2,"mYear":2018,"tithi":"Navami","mDay":"Shukra","nakshtra":"Anuradha","lagna":"kumbha","amsha":"Vrushabh","mHour":8,"mMinute":40,"am_pm":"AM","rashi":"vRischika","type":"vivAhamuhUrtAH"},{"transId":43,"mDate":9,"mMonth":2,"mYear":2018,"tithi":"Navami","mDay":"Shukra","nakshtra":"Anuradha","lagna":"Abhijit","amsha":"Vrushabh","mHour":12,"mMinute":37,"am_pm":"PM","rashi":"vRischika","type":"vivAhamuhUrtAH"},{"transId":44,"mDate":19,"mMonth":2,"mYear":2018,"tithi":"Chaturthi","mDay":"soma","nakshtra":"U. Bha","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":36,"am_pm":"PM","rashi":"Meena","type":"vivAhamuhUrtAH"},{"transId":45,"mDate":20,"mMonth":2,"mYear":2018,"tithi":"Panchami","mDay":"Mangala","nakshtra":"Revati","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":37,"am_pm":"PM","rashi":"Meena","type":"vivAhamuhUrtAH"},{"transId":46,"mDate":21,"mMonth":2,"mYear":2018,"tithi":"Shasthi","mDay":"budha","nakshtra":"Ashvini","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":36,"am_pm":"PM","rashi":"meSha","type":"vivAhamuhUrtAH"},{"transId":47,"mDate":24,"mMonth":2,"mYear":2018,"tithi":"Navami","mDay":"shani","nakshtra":"Rohini","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":36,"am_pm":"PM","rashi":"vrishubha","type":"vivAhamuhUrtAH"},{"transId":48,"mDate":4,"mMonth":3,"mYear":2018,"tithi":"tritiya","mDay":"bhanu","nakshtra":"hasta","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":35,"am_pm":"PM","rashi":"kanya","type":"vivAhamuhUrtAH"},{"transId":49,"mDate":5,"mMonth":3,"mYear":2018,"tithi":"Chaturthi","mDay":"soma","nakshtra":"chitra","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":35,"am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":50,"mDate":6,"mMonth":3,"mYear":2018,"tithi":"Panchami","mDay":"Mangala","nakshtra":"Swati","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":34,"am_pm":"PM","rashi":"tulA","type":"vivAhamuhUrtAH"},{"transId":51,"mDate":8,"mMonth":3,"mYear":2018,"tithi":"saptami","mDay":"Guru","nakshtra":"Anuradha","lagna":"Abhijit","amsha":"","mHour":12,"mMinute":34,"am_pm":"PM","rashi":"vRischika","type":"vivAhamuhUrtAH"},{"transId":52,"mDate":30,"mMonth":4,"mYear":2017,"tithi":"Panchami","mDay":"bhanu","nakshtra":"mRRiga","lagna":"meena","amsha":"meena","mHour":5,"mMinute":0,"am_pm":"AM","rashi":"mithuna","type":"grahapraveshamuhUrta"},{"transId":53,"mDate":8,"mMonth":5,"mYear":2017,"tithi":"Triyodashi","mDay":"soma","nakshtra":"chitra","lagna":"mithuna","amsha":"Vrushabh","mHour":10,"mMinute":15,"am_pm":"AM","rashi":"kanya","type":"grahapraveshamuhUrta"},{"transId":54,"mDate":16,"mMonth":5,"mYear":2017,"tithi":"Panchami","mDay":"Mangala","nakshtra":"U.Sha","lagna":"mithuna","amsha":"tulA","mHour":8,"mMinute":5,"am_pm":"AM","rashi":"dhanu","type":"grahapraveshamuhUrta"},{"transId":55,"mDate":19,"mMonth":5,"mYear":2017,"tithi":"Astami","mDay":"Shukra","nakshtra":"Dhanista","lagna":"mithuna","amsha":"mithuna","mHour":9,"mMinute":50,"am_pm":"AM","rashi":"kuMbha","type":"grahapraveshamuhUrta"},{"transId":56,"mDate":23,"mMonth":11,"mYear":"","tithi":"Panchami","mDay":"U. Sha","nakshtra":"Kumbha","lagna":"tula","amsha":"","mHour":12,"mMinute":25,"am_pm":"PM","rashi":"dhanu","type":"grahapraveshamuhUrta"},{"transId":57,"mDate":24,"mMonth":11,"mYear":"","tithi":"Shasthi","mDay":"U. Sha","nakshtra":"Kumbha","lagna":"tula","amsha":"","mHour":12,"mMinute":20,"am_pm":"PM","rashi":"makara","type":"grahapraveshamuhUrta"},{"transId":58,"mDate":25,"mMonth":11,"mYear":"","tithi":"saptami","mDay":"Shravana","nakshtra":"Kumbha","lagna":"tula","amsha":"","mHour":12,"mMinute":15,"am_pm":"PM","rashi":"makara","type":"grahapraveshamuhUrta"},{"transId":59,"mDate":4,"mMonth":12,"mYear":"","tithi":"pratipada","mDay":"Mriga","nakshtra":"Kumbha","lagna":"tula","amsha":"","mHour":8,"mMinute":45,"am_pm":"AM","rashi":"Vrishabha","type":"grahapraveshamuhUrta"},{"transId":60,"mDate":7,"mMonth":2,"mYear":2018,"tithi":"saptami","mDay":"Swati","nakshtra":"Kumbha","lagna":"Vrishabha","amsha":"","mHour":8,"mMinute":45,"am_pm":"AM","rashi":"tulA","type":"grahapraveshamuhUrta"},{"transId":61,"mDate":17,"mMonth":2,"mYear":2018,"tithi":"dvititya","mDay":"shata","nakshtra":"Kumbha","lagna":"Vrishabha","amsha":"","mHour":8,"mMinute":5,"am_pm":"AM","rashi":"kuMbha","type":"grahapraveshamuhUrta"},{"transId":62,"mDate":19,"mMonth":2,"mYear":2018,"tithi":"Chaturthi","mDay":"U.Bha","nakshtra":"Kumbha","lagna":"Vrishabha","amsha":"","mHour":8,"mMinute":0,"am_pm":"AM","rashi":"Meena","type":"grahapraveshamuhUrta"},{"transId":63,"mDate":8,"mMonth":3,"mYear":2018,"tithi":"saptami","mDay":"Chitra","nakshtra":"Kumbha","lagna":"Vrishabha","amsha":"","mHour":6,"mMinute":50,"am_pm":"AM","rashi":"vRischika","type":"grahapraveshamuhUrta"}]';
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

function addKeyboard(e)
{
	$.sBar.softKeyboardOnFocus = Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	$.sBar.focus();
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
		addEventToCalecdar();
}

function addEventToCalecdar()
{
	var selectableCalendars = Ti.Calendar.allCalendars;
	var CALENDAR_TO_USE = selectableCalendars[0].id;
	var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);

	var eventYear = parseInt(selectedItem.properties.mYear);
	var eventMonth = parseInt(selectedItem.properties.mMonth)-1;
	var eventDate = parseInt(selectedItem.properties.mDate);
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
	$.winMuhurta.close();
}
