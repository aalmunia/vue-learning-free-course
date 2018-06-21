'use strict';

// No podemos usar vue para las etiquetas:
// <html>
// <body>
// [Vue warn]: Do not mount Vue to <html> or <body> - mount to normal elements instead.
var vm = new Vue({
	el: 'body',
	data: {
		mensaje: 'Esto es una cadena de texto',
		numero: 2,
		booleano: true,
		unArray: [1,2,3],
		unObjeto: { nombre: 'Alejandro', apellidos: 'Almunia Herranz' }
	}
});
