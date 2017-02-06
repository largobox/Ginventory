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

		$('.bottle').css({
			'top': '-50px',
			'height': '100%',
		})

		$('.branch_1').css({
			'top': '-50px',
			'left': 'calc(50% - 470px)'
		})

		$('.branch_2').css({
			'top': '200px',
			'left': 'calc(50% + 20px)'
		})	

		$('.branch_3').css({
			'top': '0px',
			'left': 'calc(50% - 260px)'
		})

		$('.branch_4').css({
			'top': '-510px',
			'left': 'calc(50% - 0px)'
		})

		$('.leaf_1').css({
			'top': '550px',
			'left': 'calc(50% - 480px)'
		})

		$('.leaf_2').css({
			'top': '560px',
			'left': 'calc(50% + 100px)'
		})		

	})
}

function state1(){
	$('#state_1').click(function(){
		$('.top').css('transform', 'translate(0px, 0px)')
		$('.bot').css('transform', 'translate(0px, 0px)')
	 	$('.left').css('transform', 'translate(0px, 0px)')
		$('.right').css('transform', 'translate(0px, 0px)')

		$('.bottle').css({
			'top': '0px',
			'height': 'calc(100% - 110px)'
		})

		$('.branch_1').css({
			'top': '-30px',
			'left': 'calc(50% - 450px)'
		})
		
		$('.branch_2').css({
			'top': '190px',
			'left': 'calc(50% - 0px)'
		})

		$('.branch_3').css({
			'top': '-10px',
			'left': 'calc(50% - 240px)'
		})

		$('.branch_4').css({
			'top': '-500px',
			'left': 'calc(50% - 20px)'
		})

		$('.leaf_1').css({
			'top': '530px',
			'left': 'calc(50% - 420px)'
		})

		$('.leaf_2').css({
			'top': '540px',
			'left': 'calc(50% + 60px)'
		})				

	})
}