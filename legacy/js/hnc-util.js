/*************************************************************************************
* 프 로 그 램 명  : 하나캐피탕 공용 펑션
* 파    일    명  : webapp/resources/cm/js/hnc.fnc.js
* 설          명  : ajax, popup같은 기능들을 공통화 시켜서 사용한다.
* 작    성    자  : 이용수
* 작    성    일  : 2016.03.22
*************************************************************************************/

/**
* HNCUtil Class 선언
* @param
* @return boolean
* @create 2016.03.22
*/
var HNCUtil = function(){};

/**
* Null 체크 
* @param
* @return boolean : null이면 true, 아니면 false
* @create 2016.03.22
*/
HNCUtil.prototype.isEmpty = function(arg) {
	var rtn = false;
	if((arg == undefined) || (arg == "")) rtn = true;
	return rtn;
/*   if ( typeof(oValue) == "undefined" || oValue == null ) {
       return true ;
   }
   else {
       if ( typeof(oValue) == "string" || typeof(oValue) == "number" ) {
           var str = oValue + "";
           if ( str.trim().length == 0 ) {
               return true;
           }
       }
   }
   return false;*/	
};


/**
* Object Null 체크 
* @param
* @return boolean : undefined 이면 true, 아니면 false
* @create 2016.03.22
*/
HNCUtil.prototype.isObjEmpty = function(obj) {
	var rtn = true;
	if(obj.length>0) rtn = false;
	return rtn;	
};

/**
* Null 체크 하여 대체값 리턴
* @param str: null체크값, refVal: 대체값
* @return boolean : null이면 true, 아니면 false
* @create 2016.03.22
*/
HNCUtil.prototype.nvl = function(str, refVal) {

	if( this.isEmpty(refVal) ) refVal = "";
	if( this.isEmpty(str) ) str = refVal;
	return str;
	
};

/**
* String형을 숫자로 형변환 한다. (*1은 트릭)
* @param
* @return boolean
* @create 2016.03.30
*/
HNCUtil.prototype.parseNum = function(str) {

	return ((this.nvl(str, 0)) * 1);
};

/**
* 3자리마다 콤마를 추가 하는 로직 (넘어온 데이터에 콤마가 있는경우 콤마를 제거해준다.)
* 금액 형태로 전환
* @param
* @return String
* @create 2016.05.14
*/
HNCUtil.prototype.setComma = function(amt) {
	//HNCFnc.log("[HNCUtil.setComma]amt="+amt);
  	var val = amt;
  	var minYN = "N";
  	var objRegExpMin = new RegExp("(-[-0-9]+)([-0-9]{3})");
	var objRegExpPls = new RegExp("(-?[-0-9]+)([-0-9]{3})");
		
  	if ((val != null) && (val != "") && (val != "0")) {
  		if(objRegExpMin.test(val) == true){
  			minYN = "Y";
  			val = String(amt).replace("-","");
  		}
  		
  		//3자리마다 콤마넣기
  		val = "" + val;
  		if(objRegExpPls.test(val) == true)
  		while(objRegExpPls.test(val) == true) {
  			val = val.replace(objRegExpPls, "$1,$2");
  	    }
  		
  		if(minYN == "Y"){
  			val = "-" + val;
  		}
  	}
  	return val;
};


/**
* 문자열을 원하는 날짜포멧으로 변환한다. (yyyymmdd 형의 파라미터만 처리하며, 그외의 포멧은 지원하지 않는다.)
* @param  str : 날짜, del : 구분자("-", ".", "/" 등이 온다. 기본값은 "-")
* @return String
* @create 2016.05.14
*/
HNCUtil.prototype.fmtDate = function(str, del) {
	//HNCFnc.log("[HNCUtil.setComma]amt="+amt);
	var date = "";
	var fmt = "";
	
	//포멧정의
	del = HNCUtil.nvl(del, "-");
	fmt = "yy"+del+"mm"+del+"dd";
	
	//올바른 날짜인지 체크
	if( !HNCValid.date(str) ) return str;
	
	try {
		date = $.datepicker.formatDate(fmt, $.datepicker.parseDate("yymmdd", this.replaceAll(str, "-")));
		
		return date;
	} catch (e) {
		HNCFnc.log(e.message);
		return str;
	}
};


/**
* 인자값1의 값중 인자값2를 인자값3로 치환시킨다.
* @param str1 : 인자값1, str2 : 인자값2, str3 : 인자값3
* @return String
* @create 2016.04.11
*/
HNCUtil.prototype.replaceAll = function(str1, str2, str3) {
	//dot 처리
	if( str2 == "." ) str2 = "\\"+str2;
	if( str3 == "." ) str3 = "\\"+str3;
	
	var regExp = new RegExp(str2,'g');
	return (typeof(str1) == "string")?str1.replace(regExp, str3):str1;
};

/**
* 오늘날짜 구하기
* @param 
* @return String - yyyymmdd
* @create 2016.05.02
*/
HNCUtil.prototype.getToday = function() {
	var today = new Date();
	var dd    = today.getDate();
	var mm    = today.getMonth()+1;
	var yyyy  = today.getFullYear();
	
	if( dd < 10 ) dd = '0'+dd;
	if( mm < 10 ) mm = '0'+mm;
	
	return yyyy + "" + mm + "" + dd;
};


/**
* select Tag value Set. (select 태그의 value값, 라벨값을 셋팅 한다.)
* @param TagID, val
* @return 
* @create 2016.05.11
*/
HNCUtil.prototype.setSelectVal = function(tagID, val) {
	//Set value
	$("#"+tagID).val(val);	//결제일자
	
	//Set Label
	$("#"+tagID).trigger("change");
};

/**
* ie 체크
* @param 
* @return true / false (ie면 true, 아니면 false)
* @create 2016.05.12
*/
HNCUtil.prototype.isIE = function() {
	//ie 11부터 체크
	var dectectIEregexp = /Trident.*rv[:]*(\d+\.\d+)/;
	
	//ie 10까지 체크
	if( navigator.userAgent.indexOf('MSIE') != -1) {
		//HNCFnc.log("ie true");
		return true;
	}
	
	//return dectectIEregexp.test(navigator.userAgent);
	if(!!navigator.userAgent.match(/Trident\/7\./)) {
		//HNCFnc.log("ie true");
		return true;
	}
	//HNCFnc.log("ie false");
	return false;
};

/**
* 주민번호 유효여부 체크
* @param 
* @return true / false
* @create 2016.05.12
*/
HNCUtil.prototype.isJuminNo = function(asValue) {
	
	var result = true;	
	var tmpValue = this.replaceAll(asValue.trim(),"-","");
	var arrJumin = new Array();
	var juminCnt = 0;
	var juMod = 0;
	
	//console.log("1. tmpValue>> " + tmpValue);
	//console.log("1. tmpValue>> " + tmpValue.length);
	
	for(var i=1; i <= tmpValue.length; i++){
		
	  console.log(i + "] tmpValue>> " + tmpValue.charAt(i-1));  				  
	  juMod = i%13;
	  console.log(i + "] juMod>> " + juMod);
	  
	  if(juMod == 0){
	      arrJumin[juminCnt] = tmpValue.substring(juminCnt*13,i);
	      console.log(juminCnt + "] arrJumin>> " + tmpValue.substring(juminCnt*13,i)); 
	      juminCnt++;	      
	    }
	}
	if(arrJumin.length == 0) return false;	
	var tmpJumin = "";
	for(i=0; i < arrJumin.length; i++){
		  tmpJumin = arrJumin[i];
		  console.log(i + "] tmpJumin>> " + tmpJumin);
		  console.log("IsValidRegNo>> "+ this.IsValidRegNo(tmpJumin));
		  if(!this.IsValidRegNo(tmpJumin)){
		  	  return false;
		  }
	}
	
	return result;
};
	
/**
 * 주민등록번호 유효성 검증
 * 
 * @author  김영재
 * @since   2010.06.01
 * @version v1.0
 * 
 * @param asValue : string : 원본문자열
 * 
 * @return boolean : 전화번호 유무
 */
HNCUtil.prototype.IsValidRegNo = function(asValue) {
	
	var strAsValue = asValue;
	
	var arrRegNo = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
	var intSum = 0;
	var intMod = 0;
	var i = 0;
	var bValid = true;
	
	var strValue = strAsValue.replace(/-/g, "");
	
	//console.log("strAsValue>> " + strAsValue);

	for (i = 0; i < 13; i++) arrRegNo[i] = strValue.substr(i, 1);
	for (i = 0; i < 12; i++) intSum += arrRegNo[i] * ((i > 7) ? (i - 6) : (i + 2));

	intMod = 11 - intSum % 11;

	if (intMod >= 10) intMod -= 10;

	//console.log("intMod>> " + intMod);
	//console.log("arrRegNo>> " + arrRegNo[12]);
	//console.log("arrRegNo>> " + arrRegNo);
	
	if ( intMod != arrRegNo[12] ){
		bValid = false;
	}
	
	return bValid;
};

//법인 등록 번호 예외 검사 추가
HNCUtil.prototype.isCorNo = function(varCk){
	var isCorNo = false;
	HNCFnc.ajaxASync(
		'/common/selectXcpCorno.hnc'
		, {corno : varCk}
		, 'post'
		, 'json'
		, function(data, textStatus, jqXHR){
			if(data.xcpCorList && data.xcpCorList.length > 0){
				isCorNo = true;
			}else{
				isCorNo = HNCUtil.chkCorNo(varCk);
			}
		}
		, function(data, textStatus, jqXHR){
			isCorNo = HNCUtil.chkCorNo(varCk);
		}
		, false, true, false
	);
	
	return isCorNo;
};

//법인번호 검사 - 2014.09.03 박인철 추가
HNCUtil.prototype.chkCorNo = function(varCk){
	//법인 등록 번호 예외 검사 
	var checkNum = new Array("1","2","1","2","1","2","1","2","1","2","1","2");
	
	//등기관서별 분류번호, 법인종류별 분류번호 및 일련번호를 차례로 연결한 12자리
	//의 숫자를 만든다.
	var newNum = new Array();
	for(var i = 0; i < varCk.length -1; i++) {
		newNum[i] = varCk.charAt(i);
	}
		
	//각 숫자에 차례로 1과 2를 곱한 다.값을 모두 더하여 합을 구한다.
	var multiNum = new Array();
	for(var k = 0; k < newNum.length; k++) {
		multiNum[k] = checkNum[k] * newNum[k];
	}
		
	//alert("각 숫자에 차례로 1과 2를 곱한 다: "+ multiNum[11]);
	//곱한 값을 모두 더하여 합을 구한다.
	var addNum = 0;
	for(var y = 0; y < multiNum.length; y++) {
		addNum = addNum + parseInt(multiNum[y]);
	}
		
	//alert("곱한 값을 모두 더하여 합을 구한다: "+ addNum);
	//합을 10으로 나누어 몫과 나머지를 구한다.
	var remainder;
	remainder = parseInt(addNum) % 10;
	//10에서 나머지를 뺀 값을 오류검색번호로 한다. 다만, 10에서 나머지를 뺀 값이
	//10인 때에는 0을 오류검색번호로 한다.
	var failCheckNum;
	if( (10 - parseInt(remainder)) == 10 )
	{
		failCheckNum = 0;
	}
	else
	{
		failCheckNum = 10 - parseInt(remainder);
	}
	
	//console.log("오류검색번호: "+ failCheckNum);
	if(failCheckNum != varCk.charAt(12)) {
		return false;
	}
	
	return true;
};

var HNCUtil = new HNCUtil();