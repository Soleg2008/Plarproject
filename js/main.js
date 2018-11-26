$(function(){
	  $('.thumb_block2').hide(); // прячем выпадающий список
 $('.more_btn').click(function(){
    $('.thumb_block2').toggle("slow");  // настраиваем выпадающий список
 });
$('#email').blur(function() { //blur работает когда мы убираем
				if($(this).val() != '') {
					var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if(pattern.test($(this).val())){
						$(this).css({'border' : '1px solid #569b44'});
					} else {
						$(this).css({'border' : '1px solid #ff0000'});
						$('#valid').text('Не верный email');
					}
				} else {
					$(this).css({'border' : '1px solid #ff0000'});
					$('#valid').text('Поле email не должно быть пустым');
				}
			});
});