var tl = gsap.timeline()

tl.from('ul li',{
	y: -20,
	opacity:0,
	duration:.8,
	stagger: .2
})
tl.from('.logo,#bottom h2,#bottom p',{
	y: -20,
	duration:.5,
	opacity:0
},'-=1.5')
tl.to('#bottom button',{
	opacity:1
},'-=1.5')
gsap.from('.main6leaf',{
	x:-120,
	y:100,
	scrollTrigger:{
		trigger:'.main6box',
		scroller:'body',
		scrub:2,
		start:'top 50%',
		end:'top 40%'
	}
})
gsap.from('.main6review',{
	x:-120,
	y:-100,
	scale:0,
	scrollTrigger:{
		trigger:'.main6box',
		scroller:'body',
		scrub:2,
		start:'top 50%',
		end:'top 40%'
	}
})
gsap.from('#main3 p',{
	x:150,
	stagger:.2,
	duration:1,
	opacity:0,
	scrollTrigger:{
		trigger:'#main3 div',
		scroller:'body',
		start:'top 50%',
		end:'top 30%'
	}
})
gsap.from('#main3 img',{
	x:-200,
	duration:1.5,
	opacity:0,
	scrollTrigger:{
		trigger:'#main3',
		scroller:'body',
		start:'top 40%',
		end:'top 30%'
	}
})
gsap.from('.main4p ',{
	y:100,
	stagger:.1,
	duration:1,
	scrollTrigger:{
		trigger:'#main4',
		scroller:'body',
		start:'top 30%',
		end:'top 10%'
	}
})
gsap.from('.block img',{
	y:100,
	opacity:0,
	stagger:.1,
	duration:1,
	scrollTrigger:{
		trigger:'#main4',
		scroller:'body',
		start:'top 10%',
		end:'top 10%'
	}
})
gsap.from('#main5right img',{
	x:80,
	duration:1.5,
	opacity:0,
	scrollTrigger:{
		trigger:'#main5',
		scroller:'body',
		start:'top 40%',
		end:'top 30%'
	}
})
gsap.from('.main7box',{
	x:-90,
	duration:1,
	stagger:.2,
	opacity:0,
	scrollTrigger:{
		trigger:'#main7',
		scroller:'body',
		scrub:2,
		start:'top 50%',
		end:'top 0%'
	}
})
gsap.from('#main8mid1',{
	y:150,
	duration:1,
	scrollTrigger:{
		trigger:'#main8bottom',
		scroller:'body',
		start:'top 60%',
		end:'top 30%'
	}
})
gsap.from('.main8leaf',{
	y:100,
	x:-60,
	opacity:0,
	scrollTrigger:{
		trigger:'#main8bottom',
		scroller:'body',
		start:'top 60%',
		end:'top 30%'
	}
})
gsap.from('#main8left',{
	x:200,
	opacity:0,
	duration:1,
	delay:1,
	scrollTrigger:{
		trigger:'#main8bottom',
		scroller:'body',
		start:'top 50%',
		end:'top 30%'
	}
})
gsap.from('#main8right',{
	x:-200,
	opacity:0,
	duration:1,
	delay:1,
	scrollTrigger:{
		trigger:'#main8bottom',
		scroller:'body',
		start:'top 50%',
		end:'top 30%'
	}
})
function bestSeller(){
	var swipeProduct = document.querySelector('.arrow-l')
	var rightProduct = document.querySelector('.arrow-r')

	let move = 0
	swipeProduct.addEventListener('click',()=>{
		if (move==0) {
			return move
		}else{
			move+=438		
		}
		gsap.to('#bestseller',{
			x:move,
			duration:1
		})
	})
	rightProduct.addEventListener('click',()=>{
		if (move<=-1310) {
			return move
		}else{
			move-=438	
		}
		gsap.to('#bestseller',{
			x: move,
			duration:1
		})
	})
}
bestSeller()