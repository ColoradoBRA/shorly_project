jQuery(function($){
	/*Menu JS*/
	$('.header_icon').click(function(){
		$('.header_mega_right').addClass('open');
		$('.header_mega_menu_list').addClass('open');
		$('.header_mega').addClass('open');
	});
	$('.header_mega_exit').click(function(){
		$('.header_mega_right').removeClass('open');
		$('.header_mega_menu_list').removeClass('open');
		$('.header_mega').removeClass('open');
	});
});