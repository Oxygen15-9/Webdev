let login = document.querySelector('#box1 .link a')
let overlay = document.querySelector('.overlay')
let signup = document.querySelector('.signup .link a')

login.addEventListener('click',()=>{
	gsap.to(overlay,{
		x:'-90%',
		duration:1
	})
	gsap.to('.box2',{
		opacity:0,
		x:-200,
		duration:1
	})
	gsap.to('#box1 form,#box1 h2,#box1 .link',{
		opacity:0,
		x:200,
		duration:1
	})
	gsap.to('.signleft',{
		x:'90%',
		duration: 1,
		delay: 1,
		opacity:1
	})
	gsap.to('.signright',{
		x:'-80%',
		duration: 1,
		delay: 1,
		opacity:1
	})
})

signup.addEventListener('click',()=>{
	gsap.to(overlay,{
		x:'0%',
		duration: 1
	})
	gsap.to('.box2',{
		opacity:1,
		x:0,
		duration:1,
		delay: 1
	})
	gsap.to('#box1 form,#box1 h2,#box1 .link',{
		opacity:1,
		x:0,
		duration:1,
		delay: 1
	})
	gsap.to('.signleft',{
		x:0,
		opacity: 0,
		duration: 1,
	})
	gsap.to('.signright',{
		x:0,
		opacity:0,
		duration: 1,
	})
})