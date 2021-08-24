let headerList = document.querySelector('.header-list')
let overlay = document.querySelector('.overlay')
let btn = document.querySelector(".header-btn");
btn.addEventListener("click", () => {
	headerList.classList.add("active")
	overlay.classList.add("active")

})
overlay.addEventListener("click", function () {
	this.classList.remove('active')
	headerList.classList.remove('active')
})

let swiper = new Swiper(".mySwiper", {
	pagination: {
		el: ".swiper-pagination",
		clickable:true,

	},
	slidesPerGroup:2,
	spaceBetween:30,
	breakpoints:{
		992:{
			slidesPerView:3,

		},
		768:{
			slidesPerView:2,
		}
	}
});