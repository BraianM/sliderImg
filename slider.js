const listImg = []

window.onload = () => {
	animation(element);
}

// metodo run
// identificar elementos
// Agregar los elementos a un arreglo
// asignar animacion a las imagenes
// generar boton left
// generar boton right
// mostrat indicor de cada imagen que va pasando en forma de puntos.

const animation = (e) => {
	let pos = 0;
	let id = null;
	id = setInterval(() => {
		if (pos == 800) {
			// limpiar intervalo
			clearInterval(id);
			// mecanismo de rotación de elementos.
		} else {
			pos++
			e(1).style.right = pos + 'px';
			e(3).style.right = pos + 'px';
			e(5).style.right = pos + 'px';
		}
	}, 1);
}



// obtenemos la referencia de los elemento Img 
const element = (index) => idContentSlider().childNodes[index];

// obtenemos la referencia de content-slider por su id
const idContentSlider = () => document.getElementById('content-slider'); 


// actualizamos el div content-slider para reflejar cambios en nuestro arreglo.
const updateArrDom = () => {
	let lista = '';
	for (let i = 0; i < listImg.length ; i++) {
		lista += listImg[i].outerHTML;
	}
	idContentSlider().innerHTML = lista;
}


// tambien hay que empezar a ver como vamos a hacer la animacion.

//--------------------------------------------------------------------------------------
