$(function() {
	// someFunctionName()
	state0()
	state1()
});

function state0(){
	$('#state_0').click(function(){
		$('.top').css('transform', 'translate(0px, -40px)')
		$('.bot').css('transform', 'translate(0px, 40px)')
	 	$('.left').css('transform', 'translate(-40px, 0px)')
		$('.right').css('transform', 'translate(40px, 0px)')

		$('.content_cnt').css({
			'top': '15px',
			'left': '15px',
			'width': 'calc(100% - 30px)',
			'height': 'calc(100% - 30px)'
		})

		$('.bottle').css({
			'top': '-50px',
			'height': '100%',
		})

		$('.branch_1').css({
			'top': '-50px',
			'left': 'calc(50% - 470px)'
		})

		$('.branch_2').css({
			'top': '160px',
			'left': 'calc(50% - 30px)'
		})	

		$('.branch_3').css({
			'top': '0px',
			'left': 'calc(50% - 160px)'
		})

		$('.branch_4').css({
			'top': '-550px',
			'left': 'calc(50% + 40px)'
		})

		$('.leaf_1').css({
			'top': '550px',
			'left': 'calc(50% - 380px)'
		})

		$('.leaf_2').css({
			'top': '560px',
			'left': 'calc(50% + 100px)'
		})		

		$('.main_capton h1').css({
			'letter-spacing': '40px'
		})	

	})
}

function state1(){
	$('#state_1').click(function(){
		$('.top').css('transform', 'translate(0px, 0px)')
		$('.bot').css('transform', 'translate(0px, 0px)')
	 	$('.left').css('transform', 'translate(0px, 0px)')
		$('.right').css('transform', 'translate(0px, 0px)')

		$('.content_cnt').css({
			'top': '55px',
			'left': '55px',
			'width': 'calc(100% - 110px)',
			'height': 'calc(100% - 110px)'
		})

		$('.bottle').css({
			'top': '0px',
			'height': 'calc(100% - 110px)'
		})

		$('.branch_1').css({
			'top': '-30px',
			'left': 'calc(50% - 450px)'
		})
		
		$('.branch_2').css({
			'top': '150px',
			'left': 'calc(50% - 50px)'
		})

		$('.branch_3').css({
			'top': '-10px',
			'left': 'calc(50% - 140px)'
		})

		$('.branch_4').css({
			'top': '-540px',
			'left': 'calc(50% + 20px)'
		})

		$('.leaf_1').css({
			'top': '530px',
			'left': 'calc(50% - 320px)'
		})

		$('.leaf_2').css({
			'top': '540px',
			'left': 'calc(50% + 60px)'
		})

		$('.main_capton h1').css({
			'letter-spacing': '50px'
		})		

	})
}