const reviewBtns = document.querySelectorAll('.reviews__tabs-btn')
const reviewContents = document.querySelectorAll('.reviews__content-item')
const mapBtns = document.querySelectorAll('.statistics__review-item')
const commentBlocks = document.querySelectorAll('.statistics__review-comment')
const burger = document.querySelector('.header__burger')
const sideMenu = document.querySelector('.overlay')
const popup = document.querySelector('.popup')
const sideMenuLink = document.querySelectorAll('.popup__nav-title')
const sideMenuLinkDropdown = document.querySelectorAll('.popup__nav-list')
const closeBtn = document.querySelector('.popup__closebtn')
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
	sideMenu.style.display = 'block'
})
closeBtn.addEventListener('click', ()=> {
	sideMenu.style.display = 'none'
	burger.classList.remove('open')
})
document.querySelectorAll('.popup__nav-link').forEach((link)=>{
	link.addEventListener('click',()=>{
		sideMenu.style.display = 'none'
		burger.classList.remove('open')
		sideMenuLinkDropdown.forEach((item)=>{
			item.style.display = 'none'
		})
	})
})

document.addEventListener('click', (e)=> {
	if(!burger.contains(e.target) && !popup.contains(e.target)){
		sideMenu.style.display = 'none'
		burger.classList.remove('open')
	}
})

sideMenuLink.forEach((btn,idx)=> {
	btn.addEventListener('click', ()=>{
		sideMenuLink.forEach((el)=> {
			el.classList.remove('popup__nav-title-active')
			btn.classList.add('popup__nav-title-active')

			sideMenuLinkDropdown.forEach((item)=>{
				item.style.display = 'none'
			})
			sideMenuLinkDropdown[idx].style.display = 'flex'
		})
	})
})

reviewBtns.forEach((btn, idx) => {
	btn.addEventListener('click', () => {
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
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})
