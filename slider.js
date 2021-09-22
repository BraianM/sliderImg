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

const haciaAdelante = (idContentSlider, listElements) => {
	listElements.forEach((element) => {
		element.style.position = 'static';
	})
	idContentSlider.appendChild(idContentSlider.firstElementChild)
}

const haciaAtras = (idContentSlider) => {
	idContentSlider.insertBefore(idContentSlider.lastElementChild, idContentSlider.firstElementChild)
}

window.onload = () => {
	btLeft.addEventListener('click', () => {
		haciaAtras(idContentSlider)
		btLeft.disabled = true;
		btRight.disabled = true;
		let a = 800;
		id = setInterval(() => {
			a--;
			if (a === 0) {
				clearInterval(id);
				btLeft.disabled = false;
				btRight.disabled = false;
			} else {
				moveElement(listElements, a);
			}
		}, 1, a)
	})
	
	btRight.addEventListener('click', () => {
		btRight.disabled = true;
		btLeft.disabled = true;
		let a = 0;
		id = setInterval(() => {
			a++;
			if (a == 800) {
				haciaAdelante(idContentSlider, listElements)
				clearInterval(id);
				btRight.disabled = false;
				btLeft.disabled = false;
			} else {
				moveElement(listElements, a);
			}
		}, 1, a)
	}, true)
}

