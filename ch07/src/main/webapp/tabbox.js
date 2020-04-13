// DOM Level 2 Event 처리 : 특정 Element의 Event의 Listener를 등록 하는 방식 
// 특정 이벤트 핸들러(Listener)를 여러개 등록할 수 있다.
var TabBox = {
	
	init: function(){
		$(this._init)
	},
	_init:function(){
		$('.tab-box li').click(TabBox._changeTab);
		TabBox._changeTab();
	},
	_changeTab: function(){
		$('.tab-box li.selected').removeClass('selected');
		
		var $liTab = (this == TabBox) ? $('.tab-box li:first-child') : $(this);
		
		$('.tab-box div').text($liTab.data('no') + "의 탭뷰 입니다.");
		
		$liTab.addClass('selected');
	}	
}

