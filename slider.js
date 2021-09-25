const btLeft = document.getElementById('btLeft')
const btRight = document.getElementById('btRight')
const idContentSlider = document.getElementById('content-slider')
const listElements = document.querySelectorAll('#content-slider img')

const moveElement = (listElements, pos) => {
	listElements.forEach((element) => {
		element.style.position = 'relative';
		element.style.right = pos + 'px';
	})
}

const haciaAdelante = (idContentSlider, listElements, callback) => {
	let i = 0;
	btLeft.disabled = true;
	btRight.disabled = true;
	id = setInterval(() => {
		i++;
		if (i === 800) {
			listElements.forEach((element) => {
				element.style.position = 'static';
			})
			idContentSlider.appendChild(idContentSlider.firstElementChild)
			clearInterval(id)
			btLeft.disabled = false;
			btRight.disabled = false;
		} else {
			callback(listElements, i)
		}
	}, 0, i)
}

const haciaAtras = (idContentSlider, callback) => {
	let i = 800;
	btLeft.disabled = true;
	btRight.disabled = true;
	idContentSlider.insertBefore(idContentSlider.lastElementChild, idContentSlider.firstElementChild)
	id = setInterval(() => {
		i--;
		if (i === 0) {
			callback(listElements, i)
			clearInterval(id)
			btLeft.disabled = false;
			btRight.disabled = false;
		} else {
			callback(listElements, i)
		}
	}, 0, i)
}

const run = () => {
	let id = setInterval(() => {
		haciaAdelante(idContentSlider, listElements, moveElement)
	}, 15000)
	return id;
}
window.onload = () => {
	let stop = run()
	btLeft.addEventListener('click', () => {
		clearInterval(stop)
		haciaAtras(idContentSlider, moveElement, run)
		stop = run()
	})

	btRight.addEventListener('click', () => {
		clearInterval(stop)
		haciaAdelante(idContentSlider, listElements, moveElement)
		stop = run()
	})
}

