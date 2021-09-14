
const listImg = [];

window.onload = () => {
	run();
	//animation(listImg);
}

// metodo run
// identificar elementos
// Agregar los elementos a un arreglo
// asignar animacion a las imagenes
// generar boton left
// generar boton right
// mostrat indicor de cada imagen que va pasando en forma de puntos.

let run = () => {
	addElements(listImg)
	updateArrDom();
	setInterval(()=>animation(listImg),8000);
}

const animation = (arr) => {
	let elemRotar
	let pos = 0;
	let id = null;
	id = setInterval(() => {
		if (pos == 800) {
			// limpiar intervalo
			clearInterval(id);
			// mecanismo de rotación de elementos.
			elemRotar = arr.shift()
			//console.log(elemRotar)
			arr.push(elemRotar);
			document.getElementById('pick-1').style.position = 'static';
			document.getElementById('pick-2').style.position = 'static';
			document.getElementById('pick-3').style.position = 'static';
			updateArrDom()
		} else {
			pos++
			document.getElementById('pick-1').style.right = pos + 'px';
			document.getElementById('pick-2').style.right = pos + 'px';
			document.getElementById('pick-3').style.right = pos + 'px';
		}
	}, 1);
}

let addElements = (arr) => {
	let sum = 1;
	for (let a = 0; a < document.getElementById('content-slider').childElementCount; a++) {
		arr.push(document.getElementById('content-slider').childNodes[sum])
		sum+=2;
	}
}

// obtenemos la referencia de los elemento Img 
//const element = (index) => document.getElementById('content-slider').childNodes[index];

// actualizamos el div content-slider para reflejar cambios en nuestro arreglo.
const updateArrDom = () => {
	let lista = ''; 
	for (let i = 0; i < listImg.length; i++) {
		lista += listImg[i].outerHTML;
	}
	document.getElementById('content-slider').innerHTML = lista;
	document.getElementById('pick-1').style.right = '0px';
	document.getElementById('pick-2').style.right = '0px';
	document.getElementById('pick-3').style.right = '0px';
	document.getElementById('pick-1').style.position = 'relative';
	document.getElementById('pick-2').style.position = 'relative';
	document.getElementById('pick-3').style.position = 'relative';
}


// tambien hay que empezar a ver como vamos a hacer la animacion.

//--------------------------------------------------------------------------------------
