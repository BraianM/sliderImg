
window.onload = () => {
	idBtRight.addEventListener('click', () => haciaDelante(listImg, updateArrDom), false);
	idBtLeft.addEventListener('click', () => haciaAtras(listImg, updateArrDom), false);
	run();
}


const listImg = []; // array.
const idContentSlider = document.getElementById('content-slider'); // div content-slider.
const idBtRight = document.getElementById('btRight');
const idBtLeft = document.getElementById('btLeft');

const run = () => {
	addElements(listImg)
	setInterval(() => animation(listImg), 8000);
}

const animation = (arr) => {
	let elemRotar = null;
	let pos = 0;
	let id = null;
	id = setInterval(() => {
		if (pos === 800) {
			clearInterval(id);
			elemRotar = arr.shift();
			arr.push(elemRotar);
			for (let a = 0; a < arr.length; a++) {
				document.getElementById(arr[a].id).style.position = 'static';
			}
			updateArrDom(listImg)// se actualiza el dom para reflejar los cambios de mi arreglo.
		} else {
			pos++;
			for (let j = 0; j < arr.length; j++) {
				document.getElementById(arr[j].id).style.right = pos + 'px';
			}
		}
	}, 1);
}

const haciaAtras = (arr, updateDom) => {
	let id2 = null;
	let pos = 800;
	let elemRotar = null;
	elemRotar = arr.pop();
	arr.unshift(elemRotar);
	for (let a = 0; a < arr.length; a++) {
		document.getElementById(arr[a].id).style.position = 'static';
	}
	updateDom(arr);
	id2 = setInterval(() => {
		if (pos == 0) {
			clearInterval(id2);
		} else {
			pos--;
			for (let j = 0; j < arr.length; j++) {
				document.getElementById(arr[j].id).style.right = pos + 'px';
			}
		}
	}, 1);
}

const haciaDelante = (arr, updateDom) => {
	let id2 = null;
	let pos = 0;
	let elemRotar = null;
	id2 = setInterval(() => {
		if (pos == 800) {
			clearInterval(id2);
				elemRotar = arr.shift();
				arr.push(elemRotar);
			for (let a = 0; a < arr.length; a++) {
				document.getElementById(arr[a].id).style.position = 'static';
				updateDom(arr);
			}
		} else {
			pos ++;
			for (let j = 0; j < arr.length; j++) {
				document.getElementById(arr[j].id).style.right = pos + 'px';
			}
		}
	}, 1)
}

const addElements = (arr) => {
	let sum = 1;
	for (let a = 0; a < idContentSlider.childElementCount; a++) {
		arr.push(idContentSlider.childNodes[sum])
		sum+=2;
	}
}

const updateArrDom = (arr) => {
	let lista = ''; 
	for (let i = 0; i < listImg.length; i++) {
		document.getElementById(arr[i].id).style.position = 'relative';
		document.getElementById(arr[i].id).style.right = '0px';
		lista += listImg[i].outerHTML;
	}
	idContentSlider.innerHTML = lista;
}

//--------------------------------------------------------------------------------------
