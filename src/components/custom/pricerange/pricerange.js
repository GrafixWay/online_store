import './pricerange.scss'

document.addEventListener('DOMContentLoaded', () => {
	const minInput = document.querySelector('.price-range__min')
	const maxInput = document.querySelector('.price-range__max')
	const progress = document.querySelector('.price-range__progress')
	const minValue = document.querySelector('.price-range__value-min')
	const maxValue = document.querySelector('.price-range__value-max')

	const update = () => {
		// Корректируем значения
		if (+minInput.value > +maxInput.value) minInput.value = maxInput.value
		if (+maxInput.value < +minInput.value) maxInput.value = minInput.value

		// Обновляем прогресс
		const range = maxInput.max - minInput.min
		progress.style.left = ((minInput.value - minInput.min) / range) * 100 + '%'
		progress.style.right =
			100 - ((maxInput.value - minInput.min) / range) * 100 + '%'

		// Обновляем текст
		const format = num => Number(num).toLocaleString('ru-RU') + ' ₽'
		minValue.textContent = format(minInput.value)
		maxValue.textContent = format(maxInput.value)
	}

	minInput.addEventListener('input', update)
	maxInput.addEventListener('input', update)

	update()
})
