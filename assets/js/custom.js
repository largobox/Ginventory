$(function() {
	nextState()
	prevState()
	mouseWhellHappened(0)
});

var swapper_front = $('.swapper_front'),
		swapper_desc  = $('.swapper_desc'),
		front_number  = $('.front_number'),
		swapper_bg    = $('.swapper_bg'),
		swapper_desc_h2 = $('.swapper_desc h2'),
		swapper_desc_p = $('.swapper_desc p'),
		arrStates = [0, 1, 2, 3, 4, 5],
		currentStateNumber = 0

function changeState(state){
	switch(state) {
    case 0:
				state0()
        break
    case 1:
				state1()
        break
    case 2:
				state2()
        break
    case 3:
				state3()
        break
    case 4:
				state4()
        break
    case 5:
				state5()
        break                                
	}
}

function borderNavDisable(){
	$('.border_nav').css({
		'pointer-events': 'none'
	})
	setTimeout(function(){
		$('.border_nav').css({
			'pointer-events': 'auto'
		})
	}, 3000)
}

function scrollTempDisable(){
	$(window).off('mousewheel DOMMouseScroll')
	mouseWhellHappened(3000)
}

function toggleState(step){
	if (step === -1 && currentStateNumber === 0){ return }
	if (step === 1 && currentStateNumber === 5){ return }

	if ( currentStateNumber >= 0 && currentStateNumber <= 5 ) {
		currentStateNumber += step
		changeState(currentStateNumber)
		borderNavDisable()
		scrollTempDisable()
	}
}

function mouseWhellHappened(delay){
	setTimeout(function(){

	$(window).on('mousewheel DOMMouseScroll', function(e){
		var currentST = e.originalEvent.wheelDelta/120
		if (currentST > 0) {
			toggleState(-1)
		}
		else {
			toggleState(1)
		}
	})

	}, delay)
}

function prevState(){
	$('.ar_prev').click(function(){
		toggleState(-1)
	})
}

function nextState(){
	$('.ar_next').click(function(){
		toggleState(1)
	})
}

function state0(){
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

		$('.quotes_cnt').css({
			'opacity': '1'
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

		$('.phone_cnt').css({
			'top': '100vh',
			'transform': 'rotate(-90deg)'
		})		

		swapper_bg.css({
			'transform': 'translate(0px, calc(50vh + 15px))'
		})

		swapper_front.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)'
		})	

		swapper_desc.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)'
		})		

		$('.state_1').css({
			'transform': 'translate(300px, 0px) rotate(400deg)'
		})

		$('.state_2').css({
			'transform': 'translate(400px, 0px) rotate(400deg)'
		})

		$('.state_3').css({
			'transform': 'translate(500px, 0px) rotate(400deg)'
		})

		$('.state_4').css({
			'transform': 'translate(600px, 0px) rotate(400deg)'
		})

		$('.state_5').css({
			'transform': 'translate(700px, 0px) rotate(400deg)'
		})

		$('.top_divider').css({
			'transform': 'translate(200px, 0px)'
		})

		$('.bot_divider').css({
			'transform': 'translate(800px, 0px)'
		})

		$('.ar_prev').css({
			'transform': 'translate(100px, 0px)'
		})

		$('.ar_next').css({
			'transform': 'translate(900px, 0px)'
		})
}

function state1(){
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

		$('.quotes_cnt').css({
			'opacity': '0'
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

		$('.phone_cnt').css({
			'top': '0px',
			'transform': 'rotate(0deg)'
		})

		swapper_bg.css({
			'transform': 'translate(0px, 40px) rotate(0deg)'
		})

		swapper_front.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)',
			'top': '50vh'
		})

		swapper_desc.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)',
			'top': 'calc(50vh - 55px - 3*80px)'
		})

		setTimeout(function(){
			front_number.text('01')
			swapper_desc_h2.text('Search')
			swapper_desc_p.text('Search for a Gin, Tonic or Garnish')

			swapper_front.css({
				'opacity': '1',
				'transform': 'translate(-250px, 0px)'
			})

			swapper_desc.css({
				'opacity': '1',
				'transform': 'translate(-250px, 0px)'
			})
		}, 1500)

		$('.state_1').css({
			'transform': 'translate(0px, 0px) rotate(0deg)'
		})

		$('.state_2').css({
			'transform': 'translate(0px, 0px) rotate(0deg)'
		})

		$('.state_3').css({
			'transform': 'translate(0px, 0px) rotate(0deg)'
		})

		$('.state_4').css({
			'transform': 'translate(0px, 0px) rotate(0deg)'
		})

		$('.state_5').css({
			'transform': 'translate(0px, 0px) rotate(0deg)'
		})

		$('.top_divider').css({
			'transform': 'translate(0px, 0px)'
		})

		$('.bot_divider').css({
			'transform': 'translate(0px, 0px)'
		})

		$('.ar_prev').css({
			'transform': 'translate(0px, 0px)'
		})

		$('.ar_next').css({
			'transform': 'translate(0px, 0px)'
		})
}

function state2(){
		swapper_bg.css({
			'transform': 'translate(0px, -40px) rotate(180deg)'
		})

		swapper_front.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)',
			'top': 'calc(50vh - 55px - 3*80px)' 
		})

		swapper_desc.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)',
			'top': '50vh'
		})

		setTimeout(function(){
			front_number.text('02')
			swapper_desc_h2.text('Find')
			swapper_desc_p.text('Find the perfect serve Gin & Tonic')

			swapper_front.css({
				'opacity': '1',
				'transform': 'translate(-250px, 0px)'
			})

			swapper_desc.css({
				'opacity': '1',
				'transform': 'translate(-250px, 0px)'
			})
		}, 1500)	
}

function state3(){
		swapper_bg.css({
			'transform': 'translate(0px, 40px) rotate(0deg)'
		})

		swapper_front.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)',
			'top': '50vh'
		})

		swapper_desc.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)',
			'top': 'calc(50vh - 55px - 3*80px)' 
		})

		setTimeout(function(){
			front_number.text('03')
			swapper_desc_h2.text('Explore')
			swapper_desc_p.text('Discover nearly 1500 Gins & 100 Tonis')

			swapper_front.css({
				'opacity': '1',
				'transform': 'translate(-250px, 0px)'
			})

			swapper_desc.css({
				'opacity': '1',
				'transform': 'translate(-250px, 0px)'
			})
		}, 1500)	
}

function state4(){
		swapper_bg.css({
			'transform': 'translate(0px, -40px) rotate(180deg)',
			'opacity': '1'
		})

		swapper_front.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)',
			'top': 'calc(50vh - 55px - 3*80px)' 
		})

		swapper_desc.css({
			'opacity': '0',
			'transform': 'translate(0px, 0px)',
			'top': '50vh'
		})

		setTimeout(function(){
			front_number.text('04')
			swapper_desc_h2.text('Suggest')
			swapper_desc_p.text('Your preferred Gin is not in the App? Just tell us')

			swapper_front.css({
				'opacity': '1',
				'transform': 'translate(-250px, 0px)'
			})

			swapper_desc.css({
				'opacity': '1',
				'transform': 'translate(-250px, 0px)'
			})
		}, 1500)	

		$('.phone_cnt').css({
			'top': '0',
			'transform': 'rotate(0deg)'
		})

		$('.nav').css({
			'transform': 'translate(0px, 0px)'
		})		

		$('.main_capton h1').css({
			'letter-spacing': '40px',
			'color': '#f6cc4c'
		})

		$('.final_bg').css({
			'opacity': '0',
			'transform': 'scale(0.8) translate(0px, 0px)'
		})

		$('.illustrations').css({
			'opacity': '1'
		})		

		$('.download_cnt').css({
			'opacity': '0'
		})
}

function state5(){
		$('.main_capton h1').css({
			'color': '#fafafa'
		})		

		$('.phone_cnt').css({
			'top': '-100vh',
			'transform': 'rotate(90deg)'
		})			

		swapper_front.css({
			'transform': 'translate(-100vw, 0)',
			'opacity': '0'
		})

		swapper_desc.css({
			'opacity': '0',
			'transform': 'translate(-100vw, 0px)'
		})

		swapper_bg.css({
			'transform': 'translate(0px, 50vh) rotate(180deg)',
			'opacity': '.9'
		})

		$('.nav').css({
			'transform': 'translate(325px, 0px)'
		})

		$('.main_capton h1').css({
			'letter-spacing': '30px'
		})

		$('.final_bg').css({
			'opacity': '1',
			'transform': 'scale(0.9) translate(0px, -100px)'
		})

		$('.illustrations').css({
			'opacity': '0'
		})

		$('.download_cnt').css({
			'opacity': '1'
		})
}