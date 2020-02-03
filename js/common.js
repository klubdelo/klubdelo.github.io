$(function() {

	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				autoplay:false,
				responsive:{
						0:{
								items:1,
								nav:false,
						},
						600:{
								items:1
						},
						1000:{
								items:1
						}
				}
		});

	});

	$('.togglefaq2').on('click', function (e) {
		$('.single-acordion2').removeClass('display-block');
		e.preventDefault();
		var notthis = $('.active-item').not(this);
		notthis.find('.fa-angle-down').addClass('fa-angle-right').removeClass('fa-angle-down');
		notthis.toggleClass('active-item').next('.faqanswer2').slideToggle(300);
		$(this).toggleClass('active-item').next().slideToggle("fast");
		$(this).children('i').toggleClass('fa-angle-right fa-angle-down');
	});

	$('.btn-callback').on('click', function(e) {
		e.preventDefault();
		$.sweetModal({
			title: 'Подать заявку',
			content: '<p>В ответном письме мы попросим вас рассказать о себе и выбрать предпочтительное время встреч</p><form class="callback"><input type="hidden" name="project_name" value="Клуб Дело"><input type="hidden" name="admin_email" value="example@gmail.com"><input type="hidden" name="form_subject" value="Заявка с сайта Клуб Дело"><input type="text" placeholder="Имя" name="name"><input type="text" placeholder="Фамилия" name="lastName"><input type="email" placeholder="Email" name="email" required><input type="text" placeholder="Телефон" name="phone" required><button type="submit" class="button blueB">Отправить</button></form>',
			width: '40%'
		})
	})

	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		});
		return false;
	});

});
