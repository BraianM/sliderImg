const listIdImg = []

window.onload = () => {
	addElementArr();
	removeImg();
	updateSlider();
	//printConsole();
}

// metodo run
// identificar elementos
// Agregar los elementos a un arreglo
// asignar animacion a las imagenes
// generar boton left
// generar boton right
// mostrat indicor de cada imagen que va pasando en forma de puntos.


const addElementArr = () => {
	let v = 1;
	for(let i = 0; i < idContentSlider().childElementCount; i++) {
		listIdImg.push(idImg(v));
		v+=2;
		//console.log(listIdImg[i]);
	}
}

// obtenemos la referencia de los elemento Img por su id.
const idImg = (index) => (idContentSlider().childNodes[index]);

// obtenemos la referencia de content-slider por su id
const idContentSlider = () => (document.getElementById('content-slider')); 


// actualizamos el div content-slider para reflejar cambios en nuestro arreglo.
const updateSlider = () => {
	let lista = '';
	for (let i = 0; i < listIdImg.length ; i++) {
		lista += listIdImg[i].outerHTML;
	}
	console.log(lista);
	idContentSlider().innerHTML = lista;
}

const removeImg = () => (listIdImg.pop());
//--------------------------------------------------------------------------------------

const printConsole = () => {
}
