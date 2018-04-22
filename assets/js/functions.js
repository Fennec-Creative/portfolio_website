$('.image').removeClass("show");

$( document ).ready(function() {
  workBelt();
  workload();
  acusites();
  afterButtons();
});

function acusites(){

	$('.web_projects').hide(350);

	$('.project').click(function(e){
		e.preventDefault();
		var x = $(this).attr('id');
		$('.web_projects').hide();
		$('.projectdrop_' + x).slideDown(500);

		$("html, body").animate({scrollTop: $('#projects_top').offset().top 
	}, 500);

	});

	$('.return-to-top').click(function(){
		$('.web_projects').hide(350);

		$("html, body").animate({scrollTop: $('#top_div').offset().top
	}, 500);
	});
}

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

function afterButtons() {
	$(".wk-hvrButton1").click(function(){
		$(".bf_rfc").toggleClass("bf_rfc_after");
	}
	)

	$(".hvrButton1").click(function(){
		$(".modelpic").toggleClass("mTwo");
	}
	)

	$(".hvrButton2").click(function(){
		$(".ringspic").toggleClass("rTwo");
	}
	)
}

function workload() {
	$.ajaxSetup ({ cache: true});

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
