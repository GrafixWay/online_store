let pagItems = document.querySelectorAll('.pagination__link')

pagItems.forEach(item => {
	item.addEventListener('click', function () {
		this.classList.add('pagination__link--active')
		console.log('asd')
	})
})
