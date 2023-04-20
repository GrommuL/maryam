const reviewBtns = document.querySelectorAll('.reviews__tabs-btn')
const reviewContents = document.querySelectorAll('.reviews__content-item')
const mapBtns = document.querySelectorAll('.statistics__review-item')
const commentBlocks = document.querySelectorAll('.statistics__review-comment')
const burger = document.querySelector('.header__burger')
const firstCard = document.querySelector('.partners__cards-item-first')
const secondCard = document.querySelector('.partners__cards-item-second')
const thirdCard = document.querySelector('.partners__cards-item-third')

firstCard.addEventListener('click', ()=>{
	firstCard.style.animation = 'slide .6s ease-in-out'
	firstCard.style.zIndex = '8'
	secondCard.style.zIndex = '10'
	thirdCard.style.zIndex = '9'
})
secondCard.addEventListener('click', ()=>{
	secondCard.style.animation = 'slide .6s ease-in-out'
	secondCard.style.zIndex = '8'
	thirdCard.style.zIndex = '10'
	firstCard.style.zIndex = '9'
})
thirdCard.addEventListener('click', ()=>{
	thirdCard.style.animation = 'slide .6s ease-in-out'
	thirdCard.style.zIndex = '8'
	firstCard.style.zIndex = '10'
	secondCard.style.zIndex = '9'
})
burger.addEventListener('click',()=>{
	burger.classList.toggle('open')
})

reviewBtns.forEach((btn, idx) => {
	btn.addEventListener('click', (e) => {
		reviewBtns.forEach((item) => {
			item.classList.remove('reviews__tabs-active')
			btn.classList.add('reviews__tabs-active')

			reviewContents.forEach((el) =>
				el.classList.remove('reviews__content-item-active')
			)
			reviewContents[idx].classList.add('reviews__content-item-active')
		})
	})
})
mapBtns.forEach((btn,idx)=>{
	btn.addEventListener('click',()=>{
		commentBlocks[idx].classList.toggle('statistics__review-comment-active')
	})
})
const swiper = new Swiper('.mySwiper', {
	slidesPerView: 3,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})
