import './product.scss'

let products = document.querySelectorAll('.product__favorite')

products.forEach(product => {
	product.addEventListener('click', function () {
		this.classList.toggle('product__favorite--active')
	})
})
