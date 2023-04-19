const reviewBtns = document.querySelectorAll('.reviews__tabs-btn')
const reviewContents = document.querySelectorAll('.reviews__content-item')

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

const swiper = new Swiper('.mySwiper', {
	slidesPerView: 3,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
})
