let pagItems = document.querySelectorAll('.pagination__link')

pagItems.forEach(item => {
	item.addEventListener('click', function () {
		let activePagItems = document.querySelectorAll('.pagination__link--active')
		activePagItems.forEach(item => {
			item.classList.remove('pagination__link--active')
		})

		this.classList.add('pagination__link--active')
	})
})
