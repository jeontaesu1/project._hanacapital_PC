$(function(){
	
	// [new] .gnb set
	$(".gnb li").on("mouseover", "a", function(){
		$("header").addClass("on");
	});

	$("header nav").on("mouseleave", function(){
		$("header").removeClass("on");
	});

	// [new] footer link btn
	if($(".slct-bx").length){
		$(".slct-bx").on("mouseover", ".btn-slct", function(){
			$(this).parent(".slct-bx").addClass("on");
		});

		$(".slct-bx").on("mouseleave", function(){
			$(this).removeClass("on");
		});
	}
	
	if(typeof $.fn.mCustomScrollbar == "function"){
		$(".slct-bx .slct-list").mCustomScrollbar({
			theme:"footer-scr"
		});
	}

	// footer 패밀리 사이트 새창 띄우기
	$("#familySiteLink").on("change", function(){
		$("footer .fs-slct").find("label").text($(this).children("option:selected").text());

		var link = $(this).children("option:selected").val();
		if(link) window.open(link);
	});
	
	// footer 관련 사이트 새창 띄우기
	$("#rltdSiteLink").on("change", function(){
		$("footer .rs-slct").find("label").text($(this).children("option:selected").text());

		var link = $(this).children("option:selected").val();
		if(link) window.open(link);
	});


	// rnb control
	if($(".rnb").length){
		/*2016-06-29 주석처리 최초 list로 돌아감.
		// 초기화
		$(".rnb > ul > li").each(function(){
			if(!$(this).find("ul").length){
				$(this).find("a").addClass("single");
			}

			if($(this).hasClass("on")){
				$(this).find(">ul").show();
			} else {
				$(this).find(">ul").hide();
			}
		});

		$(".rnb > ul > li").on("click", "a[class!=single]", function(){
			var $parentLi = $(this).closest("li");
			if(!$parentLi.hasClass("on")){
				$parentLi.addClass("on");
				$(this).next("ul").show();
			} else {
				$parentLi.removeClass("on");
				$(this).next("ul").hide();
			}
		});
		*/
		// 초기화
	

		$(".rnb > ul > li").on("click", "a", function(){
			var $parentLi = $(this).closest("li");
			if(!$parentLi.hasClass("on")){
				$parentLi.addClass("on");
				$(this).next("ul").show();
			} else {
				$parentLi.removeClass("on");
				$(this).next("ul").hide();
			}
		});
	}

	// custom select box 선택시 label 할당
	if($(".slct-ty1").length){
		$( ".slct-ty1 select").on({
			change:function(){
				if($(this).prop("disabled")){
					$(this).closest("div").addClass("disabled");
				} else {
					$(this).closest("div").removeClass("disabled");
				}

				$(this).prev().text($(this).find("option:selected").text());
			},
			focus:function(){
				$(this).closest(".slct-ty1").addClass("b1");
			},
			blur:function(){
				$(this).closest(".slct-ty1").removeClass("b1");
			}
		});

		// onload action
		$(".slct-ty1 select").trigger("change");
	}

	// 윈도우 팝업 (이탈방지)
	// window.open("http://www.google.com", "_blank", "width=600,height=380,scrollbars=no,location=no")

	// 팝업열기
	if($(".openPopup").length){
		$(".openPopup").on("click", function(e){
			e.preventDefault();
			if($(this).data("pop")){
				var popId = "#pop-"+$(this).data("pop");
				$(popId).find(".bg").width($(document).width());
				$(popId).find(".bg").height($(document).height());

				// 약관 관련 추가
				if($(popId).find(".body > .clause-txt").length){
					var bodyH = $(popId).find(".body").height();
					var titH = 66; // pop tit height
					var btnH = 56
					$(popId).find(".clause-txt").css("height", parseInt(bodyH - titH-btnH));
					$(popId).find(".clause-txt").css("overflow", "auto");
				}

				// 사이즈에 대한 마진값 설정
				var posX = parseInt($(popId+ " .body").width())/2;
				var posY = parseInt($(popId+ " .body").height())/2
				$(popId).find(" .body").css("margin-top", (-posY) + "px");
				$(popId).find(" .body").css("margin-left", (-posX) + "px");

				$("#allBg").show();
				$(popId).show();

				$("body").css("overflow", "hidden");
			}
			
		});
	}

	// 팝업닫기
	if($(".popup").length){
		$(".popup").on("click", ".close", function(e){
			e.preventDefault();
			$(this).closest(".popup").hide();
			$("body").css("overflow", "auto");
			
			$("#allBg").hide();
		});

		$(window).resize(function(){	
			$(".popup .bg").width($(document).width());
			$(".popup .bg").height($(document).height());
		}).scroll(function(){	
			$(".popup .bg").width($(document).width());
			$(".popup .bg").height($(document).height());
		});
	}

	// 주소검색팝업 탭 액션
	if($(".zip-srch").length){
		$(".zip-tab").on("click", ".pa", function(e){
			$(".ps-addr").show();
			$(".rd-addr").hide();
		});

		$(".zip-tab").on("click", ".ra", function(e){
			$(".rd-addr").show();
			$(".ps-addr").hide();
		});
	}

	// 년도가 있을 경우
	if($(".date-yy").length){

		// create Year plugin
		$.fn.extend({
			createYear : function(startYear){
				var maxYear = new Date().getFullYear();
				var minYear = startYear;

				var list = [];
				var optVal = "";
				var selected = "";
				for (var i=maxYear;i>=minYear;i--)
				{
					selected = ($(this).data("year") != i)?"":" selected='selected'";

					option = "<option value='"+i+"'"+selected+">"+i+"</option>";
					list.push(option);
				}
				var opt = list.join("\n");
				$(this).html(opt);
			}
		});
		
		// init
		$(".date-yy").createYear(1940);
		$("select").trigger("change");
	}

	if($(".btn-tool").length){
		if($(".tooltip").length){
			$(".btn-tool").on("click", function(e){
				e.preventDefault();
				$(".btn-tool + .tooltip").css("display","block");

				e.stopPropagation();
			});
			
			$(document).on("click", function(){
				$(".btn-tool + .tooltip").hide();
			});
		}
	}

	$("a[href=#none]").on("click", function(e){
		e.preventDefault();
	});
	
	// ul select box - 2016-12-06. lys
	$(".fs-slct .slct-list").on("click", "a", function(){
		var txt = $(this).text();
		var val = $(this).data("val"); // value 값
		var obj = $(this).closest(".fs-slct").find(".btn-slct");
		
		$(obj).text(txt);
		$(obj).data("val", val);
		$(obj).val(val);
	});

	// [new] 삭제 예정
	$(".fs-slct").on("click", ".btn-slct", function(e){
		e.stopPropagation();
		if(!$(this).hasClass("disabled")){
			$(".fs-slct").removeClass("on");

			var parent = $(this).parent(".fs-slct");
			parent.removeClass("on");

			if(parent.hasClass("on")){
				$(this).parent(".fs-slct").removeClass("on");
			} else {
				$(this).parent(".fs-slct").addClass("on");
			}
		}
	});

	if($(".fs-slct").length){
		$("body").on("click", function(){
			$(".fs-slct").removeClass("on");
		});
	}
});


function DateCalculation(){
	this._today = "";		// 오늘 날짜 객체
	this._todayTime = "";	// 오늘 날짜 Time()
	this._startTime = "";	// 시작일 Time()
	this._endTime = "";		// 종료일 Time()

	this.validation = function(obj, startFlag){
		
		if($(obj).val()){
			var targetTime = new Date($(obj).val());
			this._todayTime = new Date().getTime();

			if((targetTime > this._todayTime) || (targetTime < 0)){
				alert("오늘보다 이전날짜로 선택해주세요.");
				$(obj).focus();
				return 0;
			}

			return 1;

		} else {
			var txt = startFlag ? "시작일":"종료일";
			alert(txt + "을 입력해주세요.");
			$(obj).focus();
			return 0;
		}

	},
	
	// 일자 차이 구하기
	this.getDiffday = function($start, $end){

		if(this.validation($start, 1)){
			this._startTime = new Date($($start).val()).getTime();
		} else {
			return false;
		}

		if(this.validation($end)){
			this._endTime = new Date($($end).val()).getTime();
		} else {
			return false;
		}

		var gap = this._endTime - this._startTime;
		return gap / (1000 * 60 * 60 * 24);
	}

}