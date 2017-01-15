
$( document ).ready(function() {
  workBelt();
  workload();
});

function workBelt() {
	$('.thumb-unit').click(function() {
		$('.work-belt').css('left','-100%');
		$('.work-container').show();
	});

	$('.work-return').click(function() {
		$('.work-belt').css('left','0%');
		$('.work-container').hide(800);
	});
}


 $(window).scroll(function() {
	if($(this).scrollTop()>1){
		$('nav').addClass("sticky");
	}
	else{
		$('nav').removeClass("sticky");
	}


	if($(this).scrollTop()>300){
		$('.image').addClass("show");
		$('.black').addClass("show-black");
	}
	else{
		$('.image').removeClass("show");
		$('.black').removeClass("show-black");
	}
})

function workload() {
	$.ajaxSetup ({ cache: true });

	$("#largeCircle").click(function() {

		var spinner = '<div class="loader">Loading...</div>',
			newHTML = '/work/acusites.html';
		$('.project-load').html(spinner).load(newHTML);
	});

	$("#smallCircle").click(function() {

		var spinner = '<div class="loader">Loading...</div>',
			newHTML = '/work/design.html';
		$('.project-load').html(spinner).load(newHTML);

	});

	$("#smallCircle2").click(function() {

		var spinner = '<div class="loader">Loading...</div>',
			newHTML = '/work/development.html';
		$('.project-load').html(spinner).load(newHTML);

	});

}
